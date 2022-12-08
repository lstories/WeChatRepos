// app.js
App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   * 监听页面加载
   */
  onLaunch: function () {
    console.log('onLaunch')
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * 监听页面显示
   */
  onShow: function (options) {
    console.log('onShow')

  },

  /**
   * 监听页面初次渲染完成，一个页面只调用1次
   */
  onReady: function () {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   * 监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')

  },

  /**
   * 监听页面卸载, 一个页面只调用一次
   */
  onUnload: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})

