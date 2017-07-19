import axios from 'axios'
import qs from 'qs'
import { responseHandler } from './helper'

export const http = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : '/',
  transformRequest: [data => qs.stringify(data)],
  timeout: 8000
})

export const logApi = {
  l2detail (type) {
    return http.get('/ajax/m/l2detail', {params: {type}})
  }
}

export const applyApi = {
  apply (applyInfo, listTab) {
    return http
      .post('apply/', {...applyInfo, listTab})
      .then(response => responseHandler(response))
  },
  applyWithoutLogin (applyInfo, listTab) {
    return http
      .post('apply/notLogin/', {name: applyInfo.type, listTab})
      .then(response => {
        if (response.data.error) {
          alert(response.data.alertMsg)
        }
        if (response.data.redirectUrl) {
          window.location.href = response.data.redirectUrl
        }

        return Promise.resolve(response.data)
      })
  },
  autoFlow (config, amount, period) {
    return http
      .post('apply/autoFlow', {config, amount, period})
      .then(response => responseHandler(response))
  },
  isH5 (name) {
    return http.post('apply/isH5', {name})
  }
}

export const userApi = {
  initUser () {
    return http.get('auth/getCurrent/').then(response => {
      if (!response.data.error) {
        const userInfo = response.data.info
        const applyInfo = response.data.loan

        if (userInfo && applyInfo) {
          return Promise.resolve({userInfo, applyInfo})
        }
      } else {
        return Promise.reject('Not login')
      }
    })
  },
  updateUser (modifyInfo) {
    return http.post('auth/updateInfo/', modifyInfo).then(response => {
      if (response.data.error) {
        return Promise.reject(response.data.msg)
      } else {
        return Promise.resolve(true)
      }
    })
  }
}

export const loanApi = {
  fetch () {
    return http.get('loan/getLoanInfo/')
  },
  getRecProductList () {
    return http.get('loan/getResultPageLoanInfo')
  },
  getProductLimit (type) {
    return http.get('loan/getProductLimit', {params: {type}})
  },
  getProductInfo (type) {
    return http.get('loan/getProductInfo', {params: {type}})
  },
  getRecommendProduct (amount) {
    return http.post('loan/getRecommendProduct', {amount})
  }
}

export const authApi = {
  getVerifyCode (info) {
    return http.post('auth/getVerifyCode', info)
  },
  loginFromWeb (formData) {
    return http.post('auth/login', formData)
  },
  login (mobile, code, formData) {
    return http
      .post('auth/verifyCode/', {mobile, code})
      .then(response => {
        if (response.data.error) {
          return Promise.reject(response.data.error)
        } else {
          return http.post('auth/login', formData)
        }
      })
  },
  register (formData) {
    return http.post('auth/register', formData).then(res => {
      if (res.data.error) {
        return Promise.reject(res.data.key)
      } else {
        return Promise.resolve(res.data.user.info)
      }
    })
  },
  isIdenCardCorrect (formData) {
    return http.post('auth/isIdenCardCorrect', formData).then(res => {
      if (res.data.error === 1) {
        return Promise.reject(res.data.error) // 身份证错误
      } else {
        return Promise.resolve(res.data.error) // 身份证合法
      }
    })
  },
  checkAuth () {
    return http
      .get('auth/isLogin')
      .then(res => Promise.resolve({isLogin: !!res.data.status}))
  },
  getZhimaUrl () {
    return http
      .get('bind/getUrl')
      .then(res => Promise.resolve({url: res.data.url}))
  }
}
