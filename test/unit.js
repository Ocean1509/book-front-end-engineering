const request = require('supertest');
const app = require('../app')


describe('测试POST /book', function () {
  it('responds with json', function (done) {
    request(app)
      .post('/book')
      .send({
        name: "afdsf",
        author: "dsafds",
        isbn: "dasfsd",
        price: "3213213",
        memo: "12312",
        create_date: "1232",
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});


describe('测试Put /book', function () {
  it('responds with json', function (done) {
    request(app)
      .put('/book')
      .send({
        name: "的撒反对",
        author: "dsafds",
        isbn: "dasfsd",
        price: "3213213",
        memo: "12312",
        create_date: "1232",
        id: 16
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe('测试delete /book', function () {
  it('responds with json', function (done) {
    request(app)
      .delete('/book')
      .send({
        id: 16
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});