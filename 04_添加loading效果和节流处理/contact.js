// pages/contact/contact.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        colorList: [],
        isloading: false,
    },

    getColors() {
        // 修改isloading的值
        this.setData({
            isloading: true,
        })
        // 1. 展示loading效果
        wx.showLoading({
            title: '数据加载中....',
        })
        // 发起请求, 过去随机颜色值的数组
        wx.request({
            url: 'https://www.escook.cn/api/color',
            method: 'GET',
            success: ({
                data: res
            }) => {
                console.log(res)
                this.setData({
                    colorList: [...this.data.colorList, ...res.data]
                })
            },
            complete: () => {
                wx.hideLoading() // 2. 隐藏loading数据
                // 修改isloading的值
                this.setData({
                    isloading: false,
                })
            }
        })

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getColors()
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

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        if(this.data.isloading) return
        this.getColors()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})