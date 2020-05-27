const axios = require('axios')
const {
  host,
  api
} = require('../config');
const { Readable } = require('stream')


class Books {
  constructor() {
    this.url = host + api;
  }
  // 首页
  async getLists(ctx, next) {
    let res = await axios.get(this.url)
    let ids = Object.keys(res.data[0])
    let datas = {
      lists: res.data,
      titles: ids
    }
    const html = await ctx.render('index', datas);
    function createReadStream() {
      return new Promise((resolve, reject) => {
        const htmlStr = new Readable()
        htmlStr.push(html)
        htmlStr.push(null)
        ctx.status = 200;
        ctx.type = "html"

        htmlStr.on('error', (err) => reject(err)).pipe(ctx.res)
      })
    }
    await createReadStream()
  }

  // 新建/编辑页
  async create(ctx, next) {
    if(ctx.request.header['x-pjax']) {
      return  ctx.body = {
        data: '12321'
      }
    }
    let id = ctx.params && ctx.params.id;
    let res = {}
    if (id) {
      let {
        data
      } = await axios.get(`${this.url}/${id}`)
      res.data = data;
      res.method = "put"
    }
    ctx.body = await ctx.render('create', res);
  }

  // 详情页
  async booksDetail(ctx, next) {
    let id = ctx.params.id;
    let {
      data
    } = await axios.get(`${this.url}/${id}`)
    let keys = Object.keys(data)
    ctx.body = await ctx.render('detail', {
      keys,
      data
    })
  }


  // async search(ctx, next) {
  //   console.log('----')
  //   let data = await axios({
  //     baseURL: 'http://music.migu.cn/v3/search?page=1&type=song&keyword=d&f=html&s=1587895015&v=3.4.4&c=001002A&i=e1166a107daaefe519fae6b8021741013e43d6bd',
  //     methods: 'get',
  //     headers: {
  //       Host: "music.migu.cn",
  //       Connection: "keep-live",
  //       Pragma: "no-cache",
  //       "Cache-Control": "no-cache",
  //       "Upgrade-Insecure-Requests": 1,
  //       "User-Agent": "Mozilla/5.0(Windows NT 10.0; Win64; x64) AppleWebKit/537.36(KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36",
  //       "Accept": "text/html, application/xhtml+xml, application/xml;q = 0.9, image/webp, image/ apng, */*;q=0.8,application/signed-exchange;v=b3",
  //       Referer: "http://music.migu.cn/v3/search?page=1&type=song&keyword=d&f=html&s=1587895012&v=3.4.4&c=001002A&i=a28f5ccb6788d41887f5484aea238992f34b3b51",
  //       "Accept-Encoding": "gzip, deflate",
  //       "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
  //     }
  //   })
  // console.log(data)
  // ctx.response.body = data.data
  // }
}

module.exports = Books;