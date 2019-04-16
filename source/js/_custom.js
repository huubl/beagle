$(window).on('load', function () {

  // init bootstrap datetimepicker
  $(".datetimepicker").datetimepicker();

  // perfect scrollbar notifications
  if ($(".js-list-scrollbar")[0]) {
    new PerfectScrollbar(document.querySelector(".js-list-scrollbar"));
    $(".ps__rail-y").css('height', $(".ps__rail-y").parents(".content").css("height"));
    $(".ps__thumb-y").css('height', '165px')
  }

  // perfect scrollbar sidebar nav
  var listScroll = document.querySelectorAll(".sidebar-nav, .chat-content");
  for (var i = 0; i < listScroll.length; i++) {
    new PerfectScrollbar(listScroll[i], {
      wheelPropagation: false
    });
  }

  // Collapse other sections when one is expanded
  function toggleCollapse(element) {
    $(element).on('show.bs.collapse', function () {
      $('.nav').find(element).not($(this)).collapse('hide');
    });
  }

  toggleCollapse('.js-collapse01')
  toggleCollapse('.js-collapse02')
  toggleCollapse('.js-collapse03')

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

  // js file choose
  $('.js-file').change(function (e) {
    var t = $(this);
    if (this.files.length) {
      t.next().html(e.target.value.split("\\").pop());
    }
  });

  // toggle right sidebar
  if ($(".js-toggle-right-sidebar")[0]) {
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
  }

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
