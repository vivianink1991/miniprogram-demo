const { movieTabs } = require ('../../services/mockData')
const App = getApp()
let observer = null
let oberserverItem = null

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
    this.obeserveItem()
  },
  observeSection() {
    observer = this.createIntersectionObserver({
      thresholds: [1],
      observeAll: true
    })
    .relativeToViewport()
    .observe('.section', (item) => {
      const { index } = item.dataset
      if (this.data.activeTab !== index && item.intersectionRatio === 1) { // 注意需要判断是否出现在可视区域
        this.setData({
          activeTab: index,
          tabAnchorId: `tab-${item.id}`
        })
      }
    })
  },
  obeserveItem() {
    oberserverItem = this.createIntersectionObserver({
      thresholds: [0.1, 0.8],
      observeAll: true
    })
    .relativeToViewport()
    .observe('.poster-img', item => {
      const { tabIndex, imgIndex } = item.dataset
      const loadKey = `tabs[${tabIndex}].recommends[${imgIndex}].loaded` // 注意修改数组的方法
      if (!this.data[loadKey] && item.intersectionRatio >= 0.1) {
        this.setData({
          [loadKey]: true
        })
      }
      const showKey = `tabs[${tabIndex}].recommends[${imgIndex}].show`
      if (!this.data[showKey] && item.intersectionRatio >= 0.8) {
        this.setData({
          [showKey]: true
        })
      }
    })
  },
  changeTab(e) {
    const { index } = e.currentTarget.dataset
    if (index !== this.data.activeTab) {
      const tabCode = this.data.tabs[index].code
      this.setData({
        activeTab: index,
        anchorId: tabCode,
        tabAnchorId: `tab-${tabCode}`
      })
    }
  },
  onUnload() {
    observer && observer.disconnect()
    oberserverItem && oberserverItem.disconnect()
  }
})