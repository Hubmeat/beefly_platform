import request from 'superagent'
import {host} from '../config/index.js'
export const updateAdmin = function (query, cb) {
  request
    .post(host + 'franchisee/account/updateAdmin')
    .send(query)
    .end(function (error, res) {
      cb(error, res)
    })
}