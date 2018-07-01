Page({
  data: {
    swiperCon: {
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      circular: true,
      previousMargin: '50rpx',
      nextMargin: '50rpx'
    }
  },
  onLoad: () => {
    wx.request({
      url: 'http://cangdu.org:8001/v1/cities',
      data: {
        type: 'guess'
      },
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        console.log(res.data)
      }
    })
  }
})