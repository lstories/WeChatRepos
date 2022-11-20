// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    info: "helloworld",
    imgSrc: '/img/1.jpg',
    randomNum: Math.random() * 10,
    randomNum1: Math.random().toFixed(2), // 生成一个带两位小数的随机数, 例如0.34
    count: 0,
    msg: "你好",
    type: 1,
    flag: true,
    arr1: [
      '苹果', '华为', '小米'
    ],
    userList: [
      {id: 1, name: '小红'},
      {id: 2, name: '小绿'},
      {id: 3, name: '小蓝'},
    ]
  },
  // 定义按钮的事件处理函数
  btnTapHandler(e){
    console.log(e)
  },
  // 修改count的值
  changeCount(){
    this.setData({
      count:this.data.count + 1
    })
  },
  // 事件传参函数
  btnHandler(e){
    console.log(e)
    this.setData({
      count: this.data.count + e.target.dataset.info
    })
  },
  // input事件
  inputHandler(e){
    // e.detail.value 是变化过后, 文本框最新的值
    console.log(e.detail.value)
  },
  ipHandler(e){
    this.setData({
      msg: e.detail.value
    })
  },
  changeType(){
    this.setData({
      type: this.data.type + 1
    })
    console.log(this.data.type)
  },




})
