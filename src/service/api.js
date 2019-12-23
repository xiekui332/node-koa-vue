import service from './request'
import QS from 'qs' // 引入qs模块，用来序列化post类型的数据



//login
export const login = (params) => {
    return new Promise((resolve, reject) => {
        service.post('/user/login', QS.stringify(params))
        .then((res) => {
            resolve(res)
        })
        .catch((err) => {
            reject(err)
        })
    })
}