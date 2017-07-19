const tabbarItem = {
  'loan': {
    label: '贷款',
    path: ['loan', 'login', 'register', 'simpleRegister', 'momoRegister'],
    icon_active: '//file.baixing.net/201608/49fe32e1fdeaa13a7ba1c04d5829161d.png',
    icon_nonactive: '//file.baixing.net/201608/983c596d03d66790ce6ddb5479870863.png'
  },
  'credit': {
    label: '信用卡',
    path: ['credit'],
    icon_active: '//file.baixing.net/201608/280ee73a8c8ba5de0c9d2b1df83acc9e.png',
    icon_nonactive: '//file.baixing.net/201607/4e49a078d8f0ae73c403ff9516cd8c1a.png'
  },
  'mine': {
    label: '我的',
    path: ['mine', 'info', 'about'],
    icon_active: '//file.baixing.net/201608/da1dc7c8b1bb113a5f8349d597064cd1.png',
    icon_nonactive: '//file.baixing.net/201607/ef0ffe0696e66348f476f3e05c061602.png'
  }
}

const essentialkeys = [
  'iden_card',
  'amount',
  'loanTime',
  'creditCard',
  'liveCity',
  'workCity',
  'salaryBankPublic',
  'workTime',
  'salaryBankPrivate',
  'isFund',
  'isSecurity',
  'profession',
  'marriage',
  'car_type',
  'house_type',
  'use_individual',
  'name',
  'mobile'
]

const loading = {
  qianbao: {
    name: '信用钱包',
    logo: '//file.baixing.net/201608/5e9a87550b109daab54cf8fa27083300.png'
  },
  yudian: {
    name: '小雨点网贷',
    logo: '//file.baixing.net/201608/922eeea017764b1c018d46e90ab9c332.png'
  },
  kkdai: {
    name: '卡卡贷',
    logo: '//file.baixing.net/201608/f9eb0ec1e8ebb7a134865ef0372a69f8.png'
  },
  wolaidai: {
    name: '我来贷',
    logo: '//file.baixing.net/201609/738a1548660bae0853adc2e85619066f.png'
  },
  fangjinsuo: {
    name: '房金所',
    logo: '//file.baixing.net/201610/95e0f41b215732e009a9ede51262854c.png'
  },
  niwodai: {
    name: '你我贷',
    logo: '//file.baixing.net/201610/a323a7748e81d913158349cfa571c3a2.png'
  }
}

export {
  tabbarItem,
  essentialkeys,
  loading
}
