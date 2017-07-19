// 根据身份证验证年龄是否符合要求
export const checkAgeValid = (idenCard, min, max) => {
  const year = new Date().getFullYear()
  const age = year - idenCard.substr(6, 4)
  return age < max && age > min
}
