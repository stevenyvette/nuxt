const stepOneInputs = [
  {name: 'mobile', maxlength: 11, pattern: '[0-9]*'},
  {name: 'verify_code', pattern: '[0-9]*'}
]

const footImgs = [
  {name: 'phone', type: 'big'},
  {name: 'arrow', type: 'small'},
  {name: 'credit', type: 'big'},
  {name: 'arrow', type: 'small'},
  {name: 'loan', type: 'big'}
]

const placeholder = {
  mobile: '请输入手机号',
  verify_code: '请输入验证码',
  name: '请输入您真实姓名',
  iden_card: '请输入您身份证号',
  amount: '贷款金额(元)',
  period: '贷款时间(月)'
}

const imgSrc = {
  mobileOnFocus: '//file.baixing.net/201604/1dda0bdc38c67ee4e23cb384debe783d.png',
  mobileNotFocus: '//file.baixing.net/201604/f012b9b5a8ee9845c9db0c048665a7ad.png',
  verify_codeOnFocus: '//file.baixing.net/201607/8ad4862154421a14e0abd16223a4fed5.png',
  verify_codeNotFocus: '//file.baixing.net/201607/63d6704454488341004347351b698373.png',
  error: '//file.baixing.net/201604/5121ba08162d193cbe275d8e7fa9e926.png',
  phonebig: '//file.baixing.net/201604/31335de76d3d99bd53f41210b1b7c0b1.png',
  arrowsmall: '//file.baixing.net/201604/420d514417fd6c56747b8a4076819ebc.png',
  creditbig: '//file.baixing.net/201604/77bd5326ec1c809c3f4f4d993b60a8f1.png',
  loanbig: '//file.baixing.net/201604/91ec81f7325c9e2027acca726ae3f0e5.png',

  nameOnFocus: '//file.baixing.net/201604/7cf2ab8221cc7e16c029a9cdac3ac476.png',
  nameNotFocus: '//file.baixing.net/201604/12b63a6c3cd031795aa79fcd35788dcf.png',
  iden_cardOnFocus: '//file.baixing.net/201604/461cfa742f7913d2183a7564386e3823.png',
  iden_cardNotFocus: '//file.baixing.net/201604/6208371de7fd1ecc27247f07790d4d99.png',
  amountOnFocus: '//file.baixing.net/201604/e28e4768be09696abc7120e72ab27478.png',
  amountNotFocus: '//file.baixing.net/201604/138d0cd5c30cb6ec8e32fdaf219af744.png',
  periodOnFocus: '//file.baixing.net/201604/61bd4036a829c0062162082e0d769b09.png',
  periodNotFocus: '//file.baixing.net/201604/bfb8ce23ed1b97e5af7d3d8036f4222f.png'
}

const alertMsg = {
  successMsg: '提交成功正在审核，注册信用卡会提高贷款通过率！',
  ageWrongMsg: '抱歉，您目前不在快速贷款的放贷年龄范围之内，去试试其他贷款吧',
  amountWrongMsg: '抱歉，快速贷款目前提供5万元以下的贷款，您的贷款金额过高，建议您试试大额贷款',
  phoneWrongMsg: '您已在别的平台注册过该机构的贷款，去试试其他贷款吧',
  secretKey: '#R$Ger12e$5FVS'
}

const avatar = {
  man: '//file.baixing.net/201701/2190516cea46bc61e04e9106bbbf95ef.png',
  woman: '//file.baixing.net/201701/d88c76850b8007a5ecc0b2e0a6f93873.png'
}

const headerTitle = {
  menu: '个人中心',
  info: '个人信息',
  about: '详情通知',
  apply: '我的申请'
}

export {
  stepOneInputs,
  footImgs,
  placeholder,
  imgSrc,
  alertMsg,
  avatar,
  headerTitle
}
