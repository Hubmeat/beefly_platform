import request from 'superagent'
import {host} from '../config/index.js'
export const delAccountByAdmin = function (query, cb) {
  request
    .post(host + 'franchisee/account/delAccountByAdmin')
    .send(query)
    .end(function (error, res) {
      cb(error, res)
    })
}