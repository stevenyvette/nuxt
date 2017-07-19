import { applyApi, userApi, loanApi, authApi } from '~plugins/api'
import { passNotH5 } from '~plugins/api/helper'
// import Tracker from '@common/tracker'
// import validRegisterInfo from '../validator'

export const applyDefaultValue = ({dispatch, commit, state}, name) => {
  if (name === 'xinyonghua' && !state.skipBind) {
    return Promise.resolve({status: 9999, error: 0})
  }

  const level = state.loanInfo.applied &&
  Object.keys(state.loanInfo.applied).includes(name)
    ? 'applied'
    : 'new'
  const postData = {
    type: name,
    amount: state.loanInfo[level][name]['defaultAmount'],
    period: state.loanInfo[level][name]['defaultPeriod'],
    finished: 1
  }

  return dispatch('applyLoan', postData)
}

export const applyLoan = ({dispatch, commit, state}, applyInfo) => {
  Tracker.track({action: 'apply', ...applyInfo})

  if (state.hasLogin || state.skipBind) {
    return applyApi.apply(applyInfo, state.listTab).then(res => {
      dispatch('setLoadingStatus', false)
      return passNotH5(res)
    })
  }
}

export const applyWithoutLogin = ({dispatch, commit, state}, applyInfo) => {
  Tracker.track({action: 'apply', ...applyInfo})

  return applyApi.applyWithoutLogin(applyInfo, state.listTab).then(res => {
    dispatch('setLoadingStatus', false)
    return passNotH5(res)
  })
}

export const autoFlow = ({dispatch, commit, state}, {config, amount, period}) => {
  return applyApi.autoFlow(config, amount, period).then(res => {
    dispatch('setLoadingStatus', false)
    return passNotH5(res)
  })
}

export const initUserInfo = ({commit, state}) => {
  return userApi
    .initUser()
    .then(({userInfo, applyInfo}) => {
      commit('UPDATE_FORM_DATA', userInfo)
      commit('INIT_APPLY_INFO', applyInfo)
      commit('CHANGE_LOGIN_STATUS', true)
    })
    .catch(e => {
      console.warn(e)
    })
}

export const initLoanInfo = ({commit, state}) => {
  return loanApi.fetch().then(response => {
    if (response.data.error === undefined) {
      commit('INIT_LOAN_INFO', response.data)
    }
    return Promise.resolve()
  })
}

export const modifyUserInfo = ({commit, state}, userInfo) => {
  let modifyInfo = {}

  Object.keys(userInfo).forEach(key => {
    if (userInfo[key] !== undefined && userInfo[key].length) {
      modifyInfo[key] = userInfo[key]
    }
  })

  commit('UPDATE_USER_INFO', modifyInfo)
  Tracker.track({action: 'modify_user_info'})

  return userApi.updateUser(modifyInfo)
}

export const getCode = ({commit, state}, mobile) => {
  let timer
  let second = 60
  const token = window.__data.token
  Tracker.track({action: 'send_sms'})

  timer = setInterval(() => {
    if (second === 0) {
      clearInterval(timer)
      commit('CHANGE_TEXT', '重新获取')
      commit('TOGGLE_BUTTON', false)
    } else {
      commit('CHANGE_TEXT', '(' + second-- + 's)请稍后')
      commit('TOGGLE_BUTTON', true)
    }
  }, 1000)

  return authApi.getVerifyCode({mobile, token})
}

export const loginFromWeb = ({commit, state}, item) => {
  commit('SET_USER_MOBILE', item)
  return authApi.loginFromWeb(state.formData)
}

export const updateMessage = ({commit, state}, item) =>
  commit('UPDATE_INPUT_DATA', item)

export const toggleAgreement = ({commit, state}) => {
  commit('TOGGLE_AGREE', !state.ui.is_agree)
}

export const LoginFromWap = ({commit, state}) => {
  Tracker.track({action: 'auth_sms'})

  if (!state.ui.is_agree) {
    return Promise.reject('抱歉，您还未接受百姓金融条款！')
  }

  if (!state.formData.mobile) {
    return Promise.reject('请填写您的手机号码!')
  } else {
    const formData = state.formData
    const code = formData.verify_code
    const mobile = formData.mobile

    return authApi.login(mobile, code, formData)
  }
}

const getInsuranceAmount = getters => {
  // 你我贷没有金额字段，统一默认为1万发送给保险
  if (getters.storageProductName === 'niwodai') return 10000
  return getters.getStorageInfo.amount || 5000
}

export const registerUser = ({commit, state, getters}, insurance = false) => {
  const formData = state.formData

  Tracker.track({action: 'register_user', ...formData})
  commit('SUBMITTED_FORM', true)

  const res = validRegisterInfo(formData, state.ui.is_agree)

  const applyInsurance = insurance
    ? {insurance, amount: getInsuranceAmount(getters)}
    : {}

  if (res.success) {
    return authApi.register({...formData, ...applyInsurance})
  } else {
    commit('SUBMITTED_FORM', false)
    return Promise.reject(res)
  }
}

export const changeLoginStatus = ({commit, state}, status) =>
  commit('CHANGE_LOGIN_STATUS', status)

export const appUserLogin = ({commit, state}) =>
  commit('SET_APP_USER_MOBILE', window.__data.mobile)

export const saveApplyInfo = ({commit, state}, {type, amount, period}) => {
  const level = state.loanInfo.applied &&
  Object.keys(state.loanInfo.applied).includes(type)
    ? 'applied'
    : 'new'
  const postData = {
    type: type,
    amount: amount || state.loanInfo[level][type]['defaultAmount'],
    period: period || state.loanInfo[level][type]['defaultPeriod'],
    finished: 1
  }

  localStorage.setItem('applyStorage', JSON.stringify(postData))
  commit('SAVE_APPLY_INFO', postData)
}

export const initEmptyValue = ({commit, state}, {key, value}) => {
  commit('INIT_EMPTY_VALUE', {key, value})
}

export const setBaseMode = ({commit, state}, mode) =>
  commit('SET_BASE_MODE', mode)

export const changeTab = ({commit, state}, tab) => {
  if (state.listTab === tab) {
    commit('SET_LIST_TAB', -1)
  } else {
    Tracker.track({
      action: 'list_tab',
      clickTab: `tab${tab + 1}`
    })
    commit('SET_LIST_TAB', tab)
  }
}

export const skipBind = ({commit, state}, status) => {
  commit('SKIP_BIND', status)
}

export const setLoadingStatus = ({commit, state}, status) => {
  commit('SET_LOADING_STATUS', status)
}

export const showToast = ({commit, state}, text) => {
  commit('SET_TOAST_STATUS', true)
  commit('SET_TOAST_TEXT', text)
}
