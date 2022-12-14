// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0
  },

  addCount(){
    this.setData({
      count: this.data.count+1
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
    console.log('触发了message页面的下拉刷新')
    // 下拉刷新，count重置为0
    this.setData({
      count: 0
    })
    // 当数据重置成功后，调用此函数，关闭下拉刷新效果
    wx.stopPullDownRefresh()
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