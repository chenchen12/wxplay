// pages/wrong/wrong.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
     detail:{},
     isRight:'',
     currentIndex:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this;
    let item = JSON.parse(options.item);
    let jsonStr = JSON.parse(options.jsonStr);
    let currentIndex = JSON.parse(options.currentIndex);
    that.setData({
      detail :item,
      isRight: jsonStr,
      currentIndex: currentIndex
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
   /**点击跳转 */
  handlertap(event){

    let index = JSON.stringify(this.data.currentIndex+1);
   
    if(index >=6){
      console.log(app.globalData.rightCount);
       wx.navigateTo({
         url: '../checkImg/checkImg',
       })
    }else{
      wx.reLaunch({
        url: '../answer/answer?currentpos=' + index,
      });
    }
    
  }
})