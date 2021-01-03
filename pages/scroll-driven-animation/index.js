const App = getApp()
const { scrollMaterials } = require('../../services/mockData')

Page({

  data: {
    contents: {},
    navTotalHeight: 0,
    contentHeight: 0
  },

  onLoad: function (options) {
    const { navTotalHeight, screen } = App.globalData
    this.setData({
      navTotalHeight,
      contentHeight: screen.screenHeight - navTotalHeight,
      contents: scrollMaterials
    })
  },

  onReady: function () {
    this.scrollAnimate()
  },

  scrollHandler(e) {
    console.log('e', e.detail.scrollTop)
  },
  scrollAnimate() {
    this.createSelectorQuery().select('#scroller').fields({
      scrollOffset: true,
      size: true
    }, res => {
      this.animateSectionOne(res)
      this.animateSectionTwo(res)
    }).exec()
  },

  animateSectionOne(scrollInfo) {
    const { contentHeight } = this.data
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
      endScrollOffset: contentHeight * 0.8
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
        transform: 'translateY(-200%)',
        offset: 0.5
      },
      { 
        opacity: 0,
        transform: 'translateY(-400%)',
        offset: 1
      },
    ], 2000, {
      scrollSource: '#scroller',
      timeRange: 2000,
      startScrollOffset: 10,
      endScrollOffset: contentHeight * 0.5
    })
  },

  animateSectionTwo(scrollInfo) {
    console.log('scrollInfo', scrollInfo)
    const { contentHeight } = this.data
    // section_2 title
    this.animate('.section_2 .title', [
      { 
        opacity: 0,
        transform: 'translateY(-10px) scale(0.8)',
        offset: 0
      },
      { 
        opacity: 0.5,
        transform: 'translateY(-30px) scale(1.1)',
        offset: 0.5
      },
      { 
        opacity: 1,
        transform: 'translateY(-50px) scale(1.2)',
        offset: 1
      }
    ], 2000, {
      scrollSource: '#scroller',
      timeRange: 2000,
      startScrollOffset: contentHeight * 0.5,
      endScrollOffset: contentHeight * 0.9
    })

    // section_2 img
    this.animate('.section_2 .img', [
      { 
        opacity: 0,
        transform: 'translateY(-10px) scale(0.7)',
        offset: 0
      },
      { 
        opacity: 0.5,
        transform: 'translateY(-30px) scale(0.8)',
        offset: 0.5
      },
      { 
        opacity: 1,
        transform: 'translateY(-50px) scale(1)',
        offset: 1
      }
    ], 2000, {
      scrollSource: '#scroller',
      timeRange: 2000,
      startScrollOffset: contentHeight * 0.6,
      endScrollOffset: contentHeight * 0.9
    })

    // section_2 desc
    this.animate('.section_2 .desc', [
      { 
        opacity: 0,
        transform: 'translateY(0px)',
        offset: 0
      },
      { 
        opacity: 0.5,
        transform: 'translateY(-20px)',
        offset: 0.5
      },
      { 
        opacity: 1,
        transform: 'translateY(-40px)',
        offset: 1
      }
    ], 2000, {
      scrollSource: '#scroller',
      timeRange: 2000,
      startScrollOffset: contentHeight * 0.8,
      endScrollOffset: contentHeight * 1
    })

    // section_2
    this.animate('.section_2', [
      { 
        opacity: 1,
        // transform: 'translateY(-50px)',
        offset: 0
      },
      { 
        opacity: 0.5,
        // transform: 'translateY(-80px) scale(1.2)',
        offset: 0.5
      },
      { 
        opacity: 0,
        // transform: 'translateY(-100px) scale(1.2)',
        offset: 1
      }
    ], 2000, {
      scrollSource: '#scroller',
      timeRange: 2000,
      startScrollOffset: contentHeight * 1,
      endScrollOffset: contentHeight * 1.5
    })
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