export default {
  // common
  formData: state => state.formData,
  mode: state => state.mode,

  // listing
  amount: state => state.formData.amount,
  mobile: state => state.formData.mobile,
  hasLogin: state => state.hasLogin,
  hasApplied: state => state.hasApplied,
  companyInfo: state => {
    let loanInfo = state.loanInfo.new
    console.log(loanInfo)
    if (state.listTab < 0) return loanInfo

    return Object.keys(loanInfo).reduce((res, loankey) => {
      const loan = loanInfo[loankey]
      if (!loan.filter) return {...res}
      if (!loan.filter[state.listTab]) return {...res}

      return {...res, [loankey]: loan}
    }, {})
  },
  appliedCompanyInfo: state => state.loanInfo.applied,
  getStorageInfo: state => state.applyStorage,
  storageProductName: state => state.applyStorage.type,

  // login
  isLoading: state => state.ui.isLoading,
  showToast: state => state.ui.showToast,
  toastText: state => state.ui.toastText,
  submit_txt: state => state.ui.submit_txt,
  verify_txt: state => state.ui.verify_txt,
  verify_diable: state => state.ui.verify_diable,
  is_agree: state => state.ui.is_agree,
  submitted: state => state.formData.submitted,
  listTab: state => state.listTab,
  vendorName: state => vendor =>
    state.loanInfo.new[vendor] ? state.loanInfo.new[vendor].name : '百姓金融'
}
