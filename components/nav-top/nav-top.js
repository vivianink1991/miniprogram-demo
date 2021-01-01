const App = getApp()

Component({
    properties: {
        opacity: {
            type: Number,
            value: 0
        },
        backgroundColor: {
            type: String,
            value: "#000"
        },
        title: {
            type: String,
            value: ''
        },
        showNavTool: {
            type: Boolean,
            value: true
        }
    },
    data: {
        navTotalHeight: 0,
        menuBtnTopOffset: 0,
        navSideGap: 0,
        showHome: true
    },
    lifetimes: {
        attached() {
            const { navTotalHeight, menuBtnTopOffset, navSideGap } = App.globalData
            const pages = getCurrentPages()
            this.setData({
                navTotalHeight,
                menuBtnTopOffset,
                navSideGap,
                showHome: pages.length <= 1
            })
        }
    }
})