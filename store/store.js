const state = {
  mode: 'loan',
  loanInfo: {},
  hasApplied: [],
  hasLogin: false,
  listTab: -1,
  skipBind: true,
  formData: {
    mobile: '',
    name: '',
    iden_card: '',
    creditCard: [],
    liveCity: [],
    workCity: [],
    salaryBankPublic: '',
    workTime: [],
    salaryBankPrivate: [],
    isFund: [],
    isSecurity: [],
    profession: [],

    house_type: [],
    marriage: [],
    car_type: [],
    use_individual: [],

    daikuanyt: '个人贷款',
    verify_code: ''
  },

  ui: {
    is_agree: true,
    verify_txt: '获取验证码',
    verify_diable: false,
    submit_txt: '立即申请',
    submitted: false,

    isLoading: false,
    showToast: false,
    toastText: ''
  },

  applyStorage: {
    type: '',
    amount: 0,
    period: 0,
    finished: 0
  }
}

export default state
