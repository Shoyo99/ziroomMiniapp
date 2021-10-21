const WxParse = require('../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    body:`<p style="margin-top: 22px; margin-bottom: 0px; padding: 0px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial; white-space: normal; background-color: rgb(255, 255, 255);">
    <span class="bjh-p">对国人而言，即便工作或者是收入再怎么稳定，如果在自己打拼的城市没有属于自己的一套房子，都会缺少一些归属感，总有一种没有“扎根”的感觉。况且，在我们的国家来看，房子更是对于结婚生子是一个非常重要的前提原因。因此对于百姓而言，生活中都喜欢聊房子谈房价。最近影响房价的关键因素——房贷利率再次上调，就释放出一些关键信号。</span>
</p>
<p>
    <img class="large" src="https://fang.1314000.cn/zfw/widget-banner2.png"/>
</p>
<p style="margin-top: 26px; margin-bottom: 0px; padding: 0px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial; white-space: normal; background-color: rgb(255, 255, 255);">
    <span class="bjh-hr"></span><span class="bjh-h3" style="font-size: 18px; font-weight: 700; color: rgb(0, 0, 0); position: relative; padding-left: 9px;">房贷利率调整关系到千家万户</span>
</p>
<p style="margin-top: 22px; margin-bottom: 0px; padding: 0px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify; font-family: arial; white-space: normal; background-color: rgb(255, 255, 255);">
    <span class="bjh-p">住房按揭贷款业务已经是国内千家万户生活之中所包括的主要部分，所以任何房贷利率的调整和变化，都影响着无数的个人和家庭，甚至还间接影响着楼市和房价走向。近日多家银行暂停了房贷的业务，在全国范围之内，多家银行房贷利率开始上浮。部分银行由于资金配额有限，甚至一度暂停住房按揭贷款业务。这一系列的动作将有效遏制资金流入房地产行业，对未来房价上涨起到了一定的抑制作用，这也正好印证了国家已经对楼市拉响的警报——房住不炒，不靠炒房拉动经济，不走过去的老路，房价不能涨到天上去。这些官方渠道喷涌而出的观点，已经彰显了国家要对楼市进行彻底改革的巨大决心。</span>
</p>
<p>
    <br/>
</p>`
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    WxParse.wxParse('body', 'html', this.data.body, this, 5);
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