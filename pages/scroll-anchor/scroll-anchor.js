const { movieTabs } = require ('../../services/mockData')
const App = getApp()
let observer = null

Page({
  data: {
    tabs: movieTabs,
    activeTab: 0,
    anchorId: '',
    tabAnchorId: '',
    navTotalHeight: 0,
    scrollContentHt: 0,
    screenWidth: 0
  },

  onLoad: function (options) {
    const { navTotalHeight, screen } = App.globalData
    const tabCode = movieTabs[this.data.activeTab].code
    this.setData({
      navTotalHeight: navTotalHeight,
      scrollContentHt: screen.screenHeight - navTotalHeight,
      screenWidth: screen.screenWidth,
      anchorId: tabCode,
      tabAnchorId: `tab-${tabCode}`
    })
    this.observeSection()
  },
  observeSection() {
    observer = this.createIntersectionObserver({
      thresholds: [1],
      observeAll: true
    })
    .relativeToViewport()
    .observe('.section', (item) => {
      console.log(item)
      const { index } = item.dataset
      if (this.data.activeTab !== index && item.intersectionRatio === 1) { // 注意需要判断是否出现在可视区域
        this.setData({
          activeTab: index,
          tabAnchorId: `tab-${item.id}`
        })
      }
    })
  },
  changeTab(e) {
    const { index } = e.currentTarget.dataset
    if (index !== this.data.activeTab) {
      const tabCode = movieTabs[index].code
      this.setData({
        activeTab: index,
        anchorId: tabCode,
        tabAnchorId: `tab-${tabCode}`
      })
    }
  },
  onUnload() {
    observer && observer.disconnect()
  }
})