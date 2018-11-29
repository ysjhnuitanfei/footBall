window.onload = function () {
  var k = 0 // 可以点击
  var c = 0 // 娃娃的
  scrollLeft() // 娃娃滚动
  var talon = $('.pawerPic').offset().left + 55 // 首先获取爪子的位置(这里是固定的)
  console.log(talon)
  /* 声明变量 */
  var areaHeight = $('body').height() - 150 // 活动区域的高
  var long = areaHeight - 115 // 爪子伸长的距离(目前娃娃的高度暂定为115px;)
  /* 赋值给活动区域高度 */
  $('.area').css({
    height: areaHeight
  })
  /* 娃娃滚动 */
  function scrollLeft () {
    var speed = 20
    var yu = $('#sel1').html()
    $('#sel2').html(yu)

    function Marquee () {
      c++
      if ($('#sel2').width() - $('#pack').scrollLeft() <= 0) {
        c = 0
        $('#pack').scrollLeft(c)
      } else {
        $('#pack').scrollLeft(c)
      }
    } // Marquee结束
    var timer = setInterval(Marquee, speed)
    /* 点击按钮 */
    $('.btn_star').bind('touchstart', function () {
      $(this).css({
        display: 'none'
      }) // 单纯的按钮样式
      $('.pawer').animate({
        height: long
      }, 2000) // 伸下去(绳子)
      $('.pawerPic').animate({
        top: long + 20
      }, 2000) // 伸下去(爪子)
      /* 抓到娃娃 */
      function fn (t_img) {
        $('.pawerPic').addClass('on')
        $('.win img').attr('src', t_img)
      };
      /* 娃娃消失 */
      function end () {
        $('.pawerPic').removeClass('on')
      }
      /* 按钮点击 */
      function btn () {
        $('.btn_star').css({
          display: 'block'
        })
      } // 控制按钮是否可以点击
      /* 判断抓没抓到娃娃 */
      if_ok = setTimeout(ok_no, 2000)

      function ok_no () {
        /* 打印出此时此刻每个娃娃的位置 */
        for (var i = 0; i < $('#pack img').length; i++) {
          var l = $('#pack img').eq(i).offset().left + 41.61 // 此时此刻每个娃娃的位置
          if (l - 20 <= talon && talon <= l + 20) {
            alert('你抓到了狗屎')
            var t_img = $('#pack img').eq(i).attr('src')
            time_zz = setTimeout(fn(t_img), 0)
            return
          }
          /* 然后和爪子的位置进行比较 */
          console.log('狗屎都没抓到')
        }
      }
      /* 事件调用 */
      // time_zz=setTimeout(fn,2000);//抓到娃娃
      time_xs = setTimeout(end, 4000) // 娃娃消失
      time_ww = setTimeout(btn, 4000) // 按钮点击
      $('.pawer').animate({
        height: 20
      }, 2000) // 缩回来(绳子)
      $('.pawerPic').animate({
        top: 40
      }, 2000) // 缩回来(爪子)
    })
  } // scrollLeft结束
} // window.onload结束
