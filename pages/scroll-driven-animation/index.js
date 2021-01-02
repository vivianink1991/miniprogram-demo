const App = getApp()
const { scrollMaterials } = require('../../services/mockData')

Page({

  data: {
    contents: {},
    navTotalHeight: 0
  },

  onLoad: function (options) {
    const { navTotalHeight, screen } = App.globalData
    this.setData({
      navTotalHeight,
      contents: scrollMaterials
    })
  },

  onReady: function () {
    this.scrollAnimate()
  },

  scrollAnimate() {
    const { screen } = App.globalData
    this.createSelectorQuery().select('#scroller').fields({
      scrollOffset: true,
      size: true
    }, res => {
      console.log('res', res)
      // section_1 title
      this.animate('.section_1 .title', [
        { 
          opacity: 0.8,
          transform: 'translateY(-10px)',
          offset: 0
        },
        { 
          opacity: 0.2,
          transform: 'translateY(-20px)',
          offset: 0.5
        },
        { 
          opacity: 0,
          transform: 'translateY(-30px)',
          offset: 1
        },
      ], 1000, {
        scrollSource: '#scroller',
        timeRange: 1000,
        startScrollOffset: 10,
        endScrollOffset: 80
      })
  
      // section_1 img
      this.animate('.section_1 .img', [
        { 
          opacity: 0.8,
          transform: 'translateY(0%)',
          offset: 0
        },
        { 
          opacity: 0.2,
          transform: 'translateY(-30%)',
          offset: 0.5
        },
        { 
          opacity: 0,
          transform: 'translateY(-50%)',
          offset: 1
        },
      ], 2000, {
        scrollSource: '#scroller',
        timeRange: 2000,
        startScrollOffset: 10,
        endScrollOffset: screen.screenHeight * 0.8
      })

      // section_1 desc
      this.animate('.section_1 .desc', [
        { 
          opacity: 0.8,
          transform: 'translateY(0%)',
          offset: 0
        },
        { 
          opacity: 0.2,
          transform: 'translateY(-300%)',
          offset: 0.5
        },
        { 
          opacity: 0,
          transform: 'translateY(-600%)',
          offset: 1
        },
      ], 2000, {
        scrollSource: '#scroller',
        timeRange: 2000,
        startScrollOffset: 10,
        endScrollOffset: screen.screenHeight * 0.8
      })

    }).exec()
  },
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})