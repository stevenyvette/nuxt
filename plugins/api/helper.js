export const passNotH5 = res => {
  if (res.status === '1010') {
    return Promise.reject('Redirect to Vendor')
  } else {
    return Promise.resolve(res)
  }
}

export const responseHandler = response => {
  switch (response.data.status) {
    case '1000': // 成功
    case '1010': // h5成功
    case '1020': // 沉睡用户发标成功
    case '1021': // 沉睡用户发表失败
      break
    case '1011': // h5预检不过
      alert(response.data.alertMsg)
      break
    case '1001': // 重复
    case '1003': // 范围不正确
    case '1004': // 范围不正确
    case '1005': // 进入表单2
    case '2000': // 失败
      break
    case '1002': // 字段不全或有误
    case '2003':
      break
    case '2004': // API错误
      break
    default:
      alert('网络发生错误，请稍后再试！')
      return Promise.reject('Unexpected Error')
  }

  if (response.data.redirectUrl) {
    window.location.href = response.data.redirectUrl
  }

  return Promise.resolve(response.data)
}
