const { movieTabs } = require ('../../services/mockData')
const App = getApp()

Page({
  data: {
    tabs: movieTabs,
    activeTab: 0,
    anchorId: '',
    navTotalHeight: 0,
    scrollContentHt: 0,
    screenWidth: 0
  },

  onLoad: function (options) {
    const { navTotalHeight, screen } = App.globalData
    this.setData({
      navTotalHeight: navTotalHeight,
      scrollContentHt: screen.screenHeight - navTotalHeight,
      screenWidth: screen.screenWidth,
      anchorId: movieTabs[this.data.activeTab].code
    })
    this.observeSection()
  },
  observeSection() {
    this.createIntersectionObserver({
      thresholds: [1],
      observeAll: true
    })
    .relativeToViewport()
    .observe('.section', (item) => {
      console.log(item)
      const { index } = item.dataset
      if (this.data.activeTab !== index && item.intersectionRatio === 1) { // 注意需要判断是否出现在可视区域
        this.setData({
          activeTab: index
        })
      }
    })
  },
  changeTab(e) {
    const { index } = e.currentTarget.dataset
    if (index !== this.data.activeTab) {
      this.setData({
        activeTab: index,
        anchorId: this.data.tabs[index].code
      })
    }
  }
})