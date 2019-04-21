// pages/share/share.js
const app =getApp();
var shareResult = require("../../data/resultshare.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
     currentShare:{},
     currentIndex:'',
     currentData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let result = app.globalData.rightCount;
    this.setData({
       currentShare: shareResult.resultData[result]
    });
    if (options.selectIndex){
       this.setData({
         currentIndex: JSON.parse(options.selectIndex),
         currentData: app.globalData.questions[JSON.parse(options.selectIndex)]
       })
    }
    console.log(this.data.currentData);
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
  onmore(event){
    
    wx.reLaunch({
       url:'../answer/answer'
    });
  },
  onshare(event){
    console.log(event);
    wx.showShareMenu({
      withShareTicket: true,
      success:function(res){
        console.log(res);
      }
    })
  }
})