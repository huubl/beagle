$(function () {

  // init bootstrap datetimepicker
  $(".datetimepicker").datetimepicker();

  // perfect scrollbar notifications
  if ($(".js-list-scrollbar")[0]) {
    new PerfectScrollbar(document.querySelector(".js-list-scrollbar"), {
      wheelPropagation: false
    });
    $(".ps__rail-y").css('height', $(".ps__rail-y").parents(".content").css("height"));
    $(".ps__thumb-y").css('height', '165px')
  }

  // input multifile file choose
  $(".js-multi-file").each(function () {
    var t = $(this).next("label"),
      o = t.html();
    $(this).on("change", function (e) {
      var i = "";
      if (this.files && this.files.length) {
        i = e.target.value.split("\\").pop();
        if (i) {
          t.find("span").html(i)
        }
        else {
          t.html(o)
        }
      }
    })
  });

  // toggle right sidebar
  $(document).on('mouseup', function (e) {
    e.preventDefault();
    var container = $('.right-sidebar');
    if (document.getElementsByClassName('js-toggle-right-sidebar')[0].contains(e.target)) {
      $('body').toggleClass('open-right-sidebar');
    }
    else {
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('body').removeClass('open-right-sidebar');
      }
    }
  });

  // toggle chat windows
  $('.js-contact-link').each(function (index, element) {
    $(this).click(function (e) {
      e.preventDefault();
      $('.tab-chat-inner').animate({
        'left': '-290px'
      }, 0);
      $('.chat-windows').animate({
        'left': '0'
      }, 0)
    });
  });

  $('.js-chat').click(function (e) {
    e.preventDefault();
    $('.tab-chat-inner, .chat-windows').removeAttr('style')
  });
});
