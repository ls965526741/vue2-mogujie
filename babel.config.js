// 清除console.log
// const prodPlugins = []
// if (process.env.NODE_ENV === 'production' && prodPlugins.length === 0) {
//   prodPlugins.push("transform-remove-console")
// }
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    // vant实现按需加载的配置项,开启需要下载对应的babel
    //   ['import', {
    //     libraryName: 'vant',
    //     libraryDirectory: 'es',
    //     style: true
    //   }, 'vant']
    //路由懒加载
    // "@babel/plugin-syntax-dynamic-import",
    // 清除console.log
    // ...prodPlugins
  ]
}
