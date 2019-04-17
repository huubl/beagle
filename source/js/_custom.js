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

  // back to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.js-to-top').fadeIn('fast');
    }
    else {
      $('.js-to-top').fadeOut('fast');
    }
  });

  $('.js-to-top').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 700)
  });

  // spark line
  var listLine = {
    user: {
      id: "#chart1",
      data: [0, 5, 3, 7, 5, 10, 3, 6, 5, 10],
      options: {
        width: "85",
        height: "35",
        lineColor: '#4285f4',
        highlightSpotColor: '#4285f4',
        highlightLineColor: '#4285f4',
        fillColor: false,
        spotColor: false,
        minSpotColor: false,
        maxSpotColor: false,
        lineWidth: 1.15
      }
    },
    monthly: {
      id: "#chart2",
      data: [5, 8, 7, 10, 9, 10, 8, 6, 4, 6, 8, 7, 6, 8],
      options: {
        type: "bar",
        width: "85",
        height: "35",
        barWidth: 3,
        barSpacing: 3,
        chartRangeMin: 0,
        barColor: '#fbbc05',
        highlightColor: '#fbbc05',
      }
    },
    impression: {
      id: "#chart3",
      data: [2, 3, 4, 5, 4, 3, 2, 3, 4, 5, 6, 5, 4, 3, 4, 5, 6, 5, 4, 4, 5],
      options: {
        type: "discrete",
        width: "85",
        height: "35",
        lineHeight: 20,
        lineColor: '#007f00',
        highlightColor: '#007f00',
        xwidth: 18
      }
    },
    download: {
      id: "#chart4",
      data: [2, 5, 3, 7, 5, 10, 3, 6, 5, 7],
      options: {
        width: "85",
        height: "35",
        lineColor: "#e12717",
        highlightSpotColor: "#e12717",
        highlightLineColor: "#e12717",
        fillColor: false,
        spotColor: false,
        minSpotColor: false,
        maxSpotColor: false,
        lineWidth: 1.15
      }
    },
    draw: function () {
      for (var key in this) {
        if (this.hasOwnProperty(key)) {
          $(this[key].id).sparkline(this[key].data, this[key].options);
        }
      }
    }
  }

  listLine.draw()

  // countUp
  $('[data-toggle="counter"]').each(function () {
    var $this = $(this),
      _suffix = "",
      _end = 0;
    $this.data("suffix") && (_suffix = $this.data("suffix"));
    $this.data("end") && (_end = $this.data("end"));
    new CountUp($this.get(0), 0, _end, 0, 2.5, {
      suffix: _suffix,
    }).start()
  })

});
