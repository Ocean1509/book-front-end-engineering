const axios = require('axios')
const api = module.exports;
const url = "http://localhost:80/01/web/index.php/books";

/**
 * @fileoverview 图书接口
 * @author wyp
 */
// class BookAPI {
//   /**
//    * BookAPI类，用于获取图书相关接口
//    * @class
//    */
//   constructor() {
//     this.url = url
//   }
//   /**
//    * 
//    * @param {*} ctx 
//    * @param {*} next 
//    */
//   // async createPost(ctx, next) =>{

//   // }
// } 
// 新建
api.createPost = async (ctx, next) => {
  let body = ctx.request.body
  let {
    data
  } = await axios.post(url, body)
  ctx.response.body = {
    success: true,
    data
  }
}

// 更新
api.updateBook = async (ctx, next) => {
  let body = ctx.request.body
  let id = body.id
  let {
    data
  } = await axios.put(`${url}/${id}`, body)
  // console.log(data)
  ctx.response.body = {
    success: true,
    data
  }
}


// 删除
api.deleteBook = async (ctx, next) => {
  let {
    id
  } = ctx.request.body
  await axios.delete(`${url}/${id}`)
  ctx.response.body = {
    success: true,
  }

}