var swiperBg = new Swiper('.bg-swiper', { effect: 'fade', fadeEffect: { crossFade: !1 } }), swiperShow = new Swiper('.show-swiper', {
  slidesPerView: 'auto',
watchSlidesProgress: !0,
slidesOffsetBefore: 37,
spaceBetween: 17,
resistanceRatio: 1,
controller: { control: swiperBg },
on: {
    progress: function (b) {
      for (i = 0; i < this.slides.length; i++){slide = this.slides.eq(i), slideProgress = this.slides[i].progress, prevIndent = 4 == i ? .3228 : .0898, scale = 1 > Math.abs(slideProgress + prevIndent) ? .1 * (1 - Math.abs(slideProgress + prevIndent)) + 1 : 1, slide.find(".goods").transform("scale3d(" +
        scale + "," + scale + ",1)")}
    },
setTransition: function (b) { for (var a = 0; a < this.slides.length; a++) this.slides.eq(a).find('.goods').transition(b) },
touchMove: function () { this.controller.control = 0this.progress < .01 ? '' : swiperBg },
touchEnd: function () { this.translate < -1515 && alert('\u8df3\u8f6c') }
  }
})
