export default {
  forData(context, payload) {
    let oldShopData = null
    for (const item of context.state.shopData) {
      if (payload.iid === item.iid) {
        oldShopData = item
      }
    }
    if (oldShopData) {
      context.commit('addCount', oldShopData)
    } else {
      context.commit('addItem', payload)
    }
  }
}
