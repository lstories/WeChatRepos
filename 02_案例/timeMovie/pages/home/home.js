// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getinfo(){
    wx.request({
      url: 'https://www.escook.cn/api/get',
      method: 'GET',
      data: {
        name: 'zs',
        age: 20
      },
      success: (res) => {
        console.log(res.data)
      }
    })
  },
  postinfo(){
    wx.request({
      url: 'https://www.escook.cn/api/POST',
      method: 'POST',
      data: {
        name: 'ls',
        age: 33
      },
      success: (res) => {
        console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.getinfo();
    this.getinfo();

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})