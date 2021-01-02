这个minicode实现了微信小程序的一些常用效果。
## 自定义顶部导航

## 滚动锚点 scroll-anchor
### 实现的功能
- 顶部切tab，会自动滚动到下方对应内容区域
- 滚动下方内容区域，顶部tab会随着切换
- 顶部tab也加了滚动锚点，这样当tab太多被遮挡时，滚动下方内容区域也能让tab动态漏出
- 图片懒加载
- 图片出现在可视区域内上浮动画效果
### 实现方案
- 锚点的实现需要使用`scroll-view`组件，设置`scroll-into-view`属性值为对应节点元素的id。
- 如果有tab需要在滚动时也进行相应的切换，需要判断节点是否出现在可视区域，此处使用了[createIntersectionObserver](https://developers.weixin.qq.com/miniprogram/dev/framework/view/selector.html)进行判断(基础库 1.9.3 开始支持)。
- 图片懒加载的实现使用了`IntersectionObserver`。

### 采坑纪要
- 竖向滚动需要设置其高度，还要避免同时出现页面和区域的滚动条。通常需要设置page的高度为100%或者`100vh`.然后通过API获取屏幕高度，减掉顶部导航等的高度作为scroll-view的高度，通过动态设置style属性。这块不知道是否有更简便的方法，写demo过程中出现了各种奇怪的问题。
- scroll-view上设置`enable-flex`似乎没啥作用，还是又包了层view，在这个view上设置flex布局。
- 小程序动态修改数组元素可采用如下方式：
```js
const showKey = `tabs[${tabIndex}].recommends[${imgIndex}].show` // 先拼接好字符串赋值给一个变量
this.setData({
    [showKey]: true // 对象key值为变量的时候用[]包裹
})
```