// import abTest from '@common/ab-test'
import { essentialkeys } from '~static/const/userConfig'

export default {
  INIT_LOAN_INFO (state, info) {
    state.loanInfo = info
  },
  INIT_APPLY_INFO (state, applyInfo) {
    Object.keys(applyInfo).forEach(key => {
      if (key !== 'qianbao') {
        state.hasApplied.push({
          name: key,
          createdTime: applyInfo[key]['createdTime']
        })
      }
    })
  },

  UPDATE_FORM_DATA (state, items) {
    for (let key of essentialkeys) {
      if (items[key]) state.formData[key] = items[key]
    }
  },

  SET_LOADING_STATUS (state, status) {
    state.ui.isLoading = status
  },

  SET_TOAST_STATUS (state, show) {
    state.ui.showToast = show
  },

  SET_TOAST_TEXT (state, text) {
    state.ui.toastText = text
  },

  CHANGE_TEXT (state, text) {
    state.ui.verify_txt = text
  },

  TOGGLE_BUTTON (state, status) {
    state.ui.verify_diable = status
  },

  UPDATE_INPUT_DATA (state, item) {
    state.formData[item.name] = item.value
  },

  TOGGLE_AGREE (state, value) {
    state.ui.is_agree = value
  },

  SUBMITTED_FORM (state, value) {
    state.ui.submitted = value
  },

  SET_USER_MOBILE (state, mobile) {
    state.formData['mobile'] = mobile
    state.formData['verify_code'] = '123456'
    state.formData['from'] = 'web'
  },

  CHANGE_LOGIN_STATUS (state, status) {
    state.hasLogin = status
  },

  SET_APP_USER_MOBILE (state, mobile) {
    state.formData['mobile'] = mobile
    state.formData['verify_code'] = '123456'
    state.formData['from'] = 'app'
  },

  UPDATE_USER_INFO (state, userInfo) {
    Object.assign(state.formData, userInfo)
  },

  SAVE_APPLY_INFO (state, postData) {
    Object.assign(state.applyStorage, postData)
  },

  SET_BASE_MODE (state, mode) {
    state.mode = mode
  },

  SET_LIST_TAB: (state, tab) => {
    state.listTab = tab
  },

  INIT_EMPTY_VALUE: (state, {key, value}) => {
    state.formData[key] = value
  },

  SKIP_BIND: (state, status) => {
    state.skipBind = status
  }
}
