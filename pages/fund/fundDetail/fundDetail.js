// pages/fund/fundDetail/fundDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fundName : "",
    fundNumber : "",
    fundBriefIntroduction : ["中高风险","混合型","1元起购"],
    swiperImages : ["images/1.jpg","images/2.jpg","images/3.jpg"],
    startDate : "2020-01-01",
    endDate:"2022-01-01",
    setUpDate : "2020-01-01",
    startPrice : "1.00",
    addPrice : "1.00",
    maxPrice : "10000.00"
    },


  getFundDetail : function(fundNumber,fundName){
    var that = this
    that.setData({
      fundName : fundName,
      fundNumber : fundNumber
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var fundNumber = options.fundNumber
    var fundName = options.fundName
    // var fundName = "易方达蓝筹精选混合"
    // var fundNumber = "005827"
    this.getFundDetail(fundNumber,fundName)
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

  }
})