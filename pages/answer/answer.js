// pages/answer/answer.js
const app = getApp();
const bgMusic = wx.getBackgroundAudioManager();//创建背景音乐
var localData =require("../../data/question.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
      currentIndex:0,
      currentData:{},
      isSelected:false,
      url:'',
      keyIndex:'',
      isRight:false,
       isplaying:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        this.setData({
          showJsonList :localData.testJsonList
        });
    // var that = this;
    if (options.currentpos){
      let currentIndex1 = JSON.parse(options.currentpos);
      this.setData({
        currentIndex: currentIndex1
      })
    }
    
    this.listenerButtonPlay(this.data.showJsonList[this.data.currentIndex].music);
   
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
  chooseItem(event){
   var that =this;
    that.setData({
      url: "../../images/02/selected.png",
      keyIndex: event.currentTarget.dataset.id
    });
    if (event.currentTarget.dataset.id == event.currentTarget.dataset.source){
      this.data.isRight = true;
      app.globalData.rightCount++;
     
    }else{
      this.data.isRight = false;
    }
    // app.globalData.currentPage++;
    var _item = JSON.stringify(event.currentTarget.dataset.item);
    var isright = JSON.stringify(this.data.isRight);
    var currentIndex = JSON.stringify(this.data.currentIndex);
    wx.navigateTo({
      url: '../wrong/wrong?jsonStr=' + isright + "&item=" + _item + "&currentIndex=" + currentIndex
    })

  },
  listenerButtonPlay:function(src){
     
      bgMusic.src =src;
      console.log(src);
      bgMusic.title="当前播放";
      bgMusic.play();
      bgMusic.onPlay(() => {
        this.setData({
          isplaying :true
        })
      console.log("音乐播放开始");
    });
    bgMusic.onEnded(()=>{
      this.setData({
        isplaying: false
      });
      console.log("音乐结束");
    })
  }
})