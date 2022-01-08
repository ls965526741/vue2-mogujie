// import { random } from 'core-js/core/number'
import Mock from 'mockjs' // 引入mockjs，npm已安装
const Random = Mock.Random
Mock.setup({
  timeout: '200-600' // 设置请求延时时间
})
// Random.extend({
//   constellation: function (data) {
//     var constellations = [12, 23, 34, 45]
//     return this.pick(constellations)
//   }
// })
const getdata = function (option) { // 定义请求数据方法
  const datalist = []
  for (let i = 0; i < 5; i += 1) {
    const o = { // mockjs模拟随机生成数据，生成20条
      recipeId: Random.guid(),
      cfirst: Random.url(),
      // constellation: Random.constellation(),
      increment: Random.increment(), // 数字递加
      email: Random.email(),
      billId: Random.string(10),
      orgId: Random.string('number', 8, 10),
      Date: Random.date('yyyy-MM-dd'),
      time: Random.time('A HH:mm:ss'),
      adress: Random.county(), // 市
      viewName: Random.cword(4, 16), // 随机生成任意名称
      personName: Random.cname(),
      reason: Random.csentence(10, 32),
      isactive: Random.boolean(),
      title: Random.ctitle(),
      image2: Random.dataImage('200x100', Random.string(10)),
      image: Random.image('200x100', '#00405d', '#FFF', 'Mock.js'),
      image1: '/img/g' + 1 + '.webp',
      iid: 'goods' + i

    }
    datalist.push(o)
  }
  return {
    datalist: datalist
  }
}
const getdata2 = function (option) { // 定义请求数据方法
  const data = [
    {
      page: 0,
      list: [
        {
          image: '/img/g' + Random.string('number', 1) + '.webp',
          message: Random.cword(40),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4)
        },
        {
          image: '/img/g' + Random.string('number', 1) + '.webp',
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4)
        },

        {
          image: '/img/g' + Random.string('number', 1) + '.webp',
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4)
        },

        {
          image: '/img/g' + Random.string('number', 1) + '.webp',
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4)
        },

        {
          image: '/img/g' + Random.string('number', 1) + '.webp',
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4)
        },

        {
          image: '/img/g' + Random.string('number', 1) + '.webp',
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4)
        },

        {
          image: '/img/g' + Random.string('number', 1) + '.webp',
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4)
        },

        {
          image: '/img/g' + Random.string('number', 1) + '.webp',
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4)
        },

        {
          image: '/img/g' + Random.string('number', 1) + '.webp',
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4)
        },

        {
          image: '/img/g' + Random.string('number', 1) + '.webp',
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4)
        },

        {
          image: '/img/g' + Random.string('number', 1) + '.webp',
          message: Random.cword(8, 23),
          reicew: Random.string('number', 1, 4),
          allprice: Random.string('number', 1, 4)
        }

      ]
    }

  ]
  return data
}
const getdata1 = function (option) { // 定义请求数据方法
  const o = {
    columns: ['销量' + Random.string('number', 1, 3), '收藏' + Random.string('number', 1, 3) + '人', '默认快递'],
    detailInfo: {
      desc: '产品介绍' + Random.cword(20, 32),
      detailImage: [
        {
          anchor: 'module_img',
          desc: '',
          key: '穿着效果',
          list: [
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10))
          ]
        },
        {
          anchor: Random.word(8),
          desc: '描述' + Random.cword(30),
          key: '包装展示',
          list: [
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10))
          ]
        },
        {
          anchor: Random.word(8),
          desc: '描述' + Random.cword(30),
          key: '服务说明',
          list: [
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10)),
            Random.dataImage('200x100', Random.string(10))
          ]
        }]
    },
    itemInfo: {},
    itemParams: {
      info: { anchor: Random.word(8), key: '产品参数', set: {} },
      rule: { anchor: Random.word(8), disclamer: '以上尺寸为实物人工测量，因测量当时不同会有1-2cm的误差，相关数据只做参考' },
      tables: [['尺寸', 'M适合95-110斤|'], ['臀围', 'M适合95-110斤|'], ['腰围', 'M适合95-110斤|']]
    },
    rate: {
      cRate: Random.string('number', 1, 5),
      list: [{ content: '评论' + Random.cword(8, 100), created: Random.string('number', 10) }]
    },
    shopInfo: {
      allGoodsUrl: Random.url(),
      cFans: Random.string('number', 5),
      cGoods: Random.string('number', 3, 5),
      cSells: Random.string('number', 6),
      categorigs: [{}, {}, {}, {}, {}, {}],
      isMarked: Random.boolean(),
      level: Random.string('number', 1),
      name: Random.cword(2, 5),
      score: [
        { isBetter: Random.boolean(), name: '描述相符', score: 4.64 },
        { isBetter: Random.boolean(), name: '价格合理', score: 5 },
        { isBetter: Random.boolean(), name: '质量满意', score: 4.43 }],
      servivices: [{}, {}, {}, {}, {}],
      shopId: Random.string(6),
      shopLogo: Random.image('100x100', 'Logo'),
      shopUrl: Random.url(),
      type: Random.increment(),
      userId: Random.string(6)

    },
    skuInfo: {},
    topBar: {}

  }
  const datalist = o
  return {
    datalist: datalist
  }
}
Mock.mock('/home/multidata', /post|get/i, getdata) // 调用模拟数据方法
for (let i = 0; i < 44; i++) {
  Mock.mock('/home/goods' + i, /post|get/i, getdata1)
}
Mock.mock('/home/detail/recommend', /post|get/i, getdata2)
