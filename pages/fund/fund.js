// pages/fund/fund.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fundDetail:[]
  },



  getFundDetail:function () {
    var that = this
    var fundName = ["景顺长城混合LOF","前海开源国家比较优势","易方达蓝筹精选混合","交行消费新驱动","长信内需成长混合"]
    var fundNumber = ["162602","001102","005827","519714","519979"]
    var fundProfitRate =["141.64%","139.07%","138.75%","137.13%","136.55%"]
    var fundDetail = []
    for(let i = 0 ; i < 5 ; i++){
      let fund = {"name":fundName[i],"number":fundNumber[i],"profitRate":"+" + fundProfitRate[i]}
      fundDetail.push(fund)
    }
    that.setData({
      fundDetail:fundDetail
    })
  },

  navigateDetail : function (param) {
    var that = this
    var index = param.currentTarget.dataset.index
    var fundNumber = that.data.fundDetail[index].number
    var fundName = that.data.fundDetail[index].name
    wx.navigateTo({
      url: 'fundDetail/fundDetail?fundNumber=' + fundNumber + '&fundName=' + fundName,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.getFundDetail()
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