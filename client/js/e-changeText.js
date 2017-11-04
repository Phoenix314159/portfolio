$(document).ready(function () {
  $('.dude').on('click', function () {
    var el = $(this)
    if (el.text() == el.data('text-swap')) {
      el.css({'font-family': 'Rozha One, serif'})
      el.text(el.data('text-original'))
    } else {
      el.css({'font-family': 'Rozha One, serif'})
      el.data('text-original', el.text())
      el.text(el.data('text-swap'))
    }
  })
  $('.dude2').on('click', function () {
    var el = $(this)
    if (el.text() == el.data('text-swap')) {
      el.css({'font-family': 'Rozha One, serif'})
      el.text(el.data('text-original'))
    } else {
      el.css({'font-family': 'Rozha One, serif'})
      el.data('text-original', el.text())
      el.text(el.data('text-swap'))
    }
  })
  $('.card').on({
    mouseenter: function () {
      var ov = $(this).find('.overlay')
      ov.css({opacity: 1.0})
    },
    mouseleave: function () {
      var ov = $(this).find('.overlay')
      ov.css({opacity: 0})
    }
  })
})

