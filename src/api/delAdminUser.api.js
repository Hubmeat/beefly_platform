import request from 'superagent'
import {host} from '../config/index.js'
export const delAdminUser = function (query, cb) {
  request
    .post(host + 'franchisee/account/delAdminUser')
    .send(query)
    .end(function (error, res) {
      cb(error, res)
    })
}