export default {
  // addShopDate(state, payload) {
  //   let oldShopData = null
  //   for (let item of state.shopData) {
  //     if (payload.iid === item.iid) {
  //       oldShopData = item
  //     }
  //   }
  //   // let oldShopData = state.shopData.find(item => item.iid === payload.iid)  //???
  //   if (oldShopData) {
  //     oldShopData.count += 1
  //   } else {
  //     payload.count = 1
  //     payload.checked = true
  //     state.shopData.push(payload)
  //   }
  // },
  addCount(state, payload) {
    payload.count += 1
    const shopDates = JSON.parse(JSON.stringify(state.shopData))
    state.shopData = shopDates
  },
  addItem(state, payload) {
    payload.count = 1
    payload.checked = true
    state.shopData.push(payload)
    const shopDates = JSON.parse(JSON.stringify(state.shopData))
    state.shopData = shopDates
  },
  cChecked(state, payload) {
    state.shopData[payload].checked = !state.shopData[payload].checked
    const shopDates = JSON.parse(JSON.stringify(state.shopData))
    state.shopData = shopDates
  },
  allCheckedC(state) {
    state.shopData.forEach((item) => {
      item.checked = false
    })
    const shopDates = JSON.parse(JSON.stringify(state.shopData))
    state.shopData = shopDates
  },
  allCheckedC1(state) {
    state.shopData.forEach((item) => {
      item.checked = true
    })
    const shopDates = JSON.parse(JSON.stringify(state.shopData))
    state.shopData = shopDates
  }
}
