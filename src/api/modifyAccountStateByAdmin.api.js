import request from 'superagent'
import { host } from '../config/index.js'
export const modifyAccountStateByAdmin = function(query, cb) {
    request
        .post(host + 'franchisee/account/modifyAccountStateByAdmin')
        .withCredentials()
        .send(query)
        .end(function(error, res) {
            cb(error, res)
        })
}