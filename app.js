App({
  onLaunch: function () {
    try {
      const res = wx.getSystemInfoSync()
      const { statusBarHeight, screenWidth, screenHeight } = res
      const menuButtonObject = wx.getMenuButtonBoundingClientRect()
      const { height, top, right } = menuButtonObject
      
      const navTotalHeight = statusBarHeight + height + (top - statusBarHeight) * 2
      const navSideGap = screenWidth - right

      this.globalData = {
        navTotalHeight,
        menuBtnTopOffset: top,
        navSideGap,
        screen: {
          screenWidth,
          screenHeight
        }
      }
    } catch(e) {
      console.log(e)
    }
  }
})
