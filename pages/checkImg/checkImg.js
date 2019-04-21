// pages/checkImg/checkImg.js
const app =getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     currentData:{},
     selectedIndex:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.setData({
       currentData: app.globalData.questions
     });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  chooseImage(event){
    
    this.setData({
      selectedIndex: JSON.parse(event.currentTarget.dataset.id)
    })
  },
  btnJump(event){
    wx.reLaunch({
      url: '../share/share?selectIndex=' + JSON.stringify(this.data.selectedIndex)
    })
  }
})