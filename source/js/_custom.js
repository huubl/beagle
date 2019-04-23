// init bootstrap datetimepicker
$(".datetimepicker").datetimepicker();

// perfect scrollbar notifications
if ($(".js-list-scrollbar")[0]) {
  new PerfectScrollbar(document.querySelector(".js-list-scrollbar"));
  $(".ps__rail-y").css('height', $(".ps__rail-y").parents(".content").css("height"));
  $(".ps__thumb-y").css('height', '165px')
}

// perfect scrollbar sidebar nav
var listScroll = document.querySelectorAll(".sidebar-nav, .chat-content, .tab-settings-inner");
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

[".js-collapse01", ".js-collapse02", ".js-collapse03"].forEach(function (entry) {
  toggleCollapse(entry)
});

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

$('.js-chat').on('click', function (e) {
  e.preventDefault();
  $('.tab-chat-inner').animate({
    'left': '0'
  }, 0);
  $('.chat-windows').animate({
    'left': '290px'
  }, 0)
});

// back to top
$(window).on('scroll', function () {
  if ($(this).scrollTop() > 200) {
    $('.js-to-top').fadeIn('fast');
  }
  else {
    $('.js-to-top').fadeOut('fast');
  }
});

$('.js-to-top').on('click', function (e) {
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

// tooltip flot chart
function showTooltip(element) {
  $(element).bind("plothover", function (event, pos, item) {
    var _width = $(".tooltip-chart").width();
    if (item) {
      $(".tooltip-chart").css({
        top: item.pageY - 60,
        left: item.pageX - _width / 2
      }).fadeIn(200)
    } else {
      $(".tooltip-chart").hide()
    }
  })
};

// main chart
function drawChart(element) {
  if ($(element).length) {
    $.plot($(element), [{
      data: [
        [1, 35],
        [2, 60],
        [3, 40],
        [4, 65],
        [5, 45],
        [6, 75],
        [7, 35],
        [8, 40],
        [9, 60]
      ],
      showLabels: true,
      label: "Purchases",
      labelPlacement: "below",
      canvasRender: true,
      cColor: "#fff"
    }, {
      data: [
        [1, 20],
        [2, 40],
        [3, 25],
        [4, 45],
        [5, 25],
        [6, 50],
        [7, 35],
        [8, 60],
        [9, 30]
      ],
      showLabels: true,
      label: "Plans",
      labelPlacement: "below",
      canvasRender: true,
      cColor: "#fff"
    }, {
      data: [
        [1, 35],
        [2, 15],
        [3, 20],
        [4, 30],
        [5, 15],
        [6, 18],
        [7, 28],
        [8, 10],
        [9, 30]
      ],
      showLabels: true,
      label: "Services",
      labelPlacement: "below",
      canvasRender: true,
      cColor: "#fff"
    }], {
        series: {
          lines: {
            show: true,
            lineWidth: 0,
            fill: true,
            fillColor: {
              colors: [{
                opacity: 1
              }, {
                opacity: 1
              }]
            }
          },
          fillColor: "rgba(0, 0, 0, 1)",
          shadowSize: 0,
          curvedLines: {
            apply: true,
            active: true,
            monotonicFit: true
          }
        },
        legend: {
          show: false
        },
        grid: {
          show: true,
          margin: {
            top: 20,
            bottom: 0,
            left: 0,
            right: 0
          },
          labelMargin: 0,
          minBorderMargin: 0,
          axisMargin: 0,
          tickColor: "rgba(0,0,0,0.05)",
          borderWidth: 0,
          hoverable: true,
          clickable: true
        },
        tooltip: {
          show: true,
          cssClass: "tooltip-chart",
          content: "<div class='content-chart'> <span> %s </span> <div class='label'> <div class='label-x'> %x.0 </div> - <div class='label-y'> %y.0 </div> </div></div>",
          defaultTheme: false
        },
        colors: ["#4386f4", "#81adf8", "#a2c3fa"],
        xaxis: {
          tickFormatter: function () {
            return ""
          },
          autoscaleMargin: 0,
          ticks: 11,
          tickDecimals: 0,
          tickLength: 0
        },
        yaxis: {
          tickFormatter: function () {
            return ""
          },
          ticks: 4,
          tickDecimals: 0
        }
      })
    showTooltip(element);
  }
}

// chart page profile
function drawChartUser(element) {
  if ($(element).length) {
    $.plot(element, [{
      label: "Page Views",
      data: [
        [0, 7],
        [1, 13],
        [2, 17],
        [3, 20],
        [4, 26],
        [5, 37],
        [6, 35],
        [7, 28],
        [8, 38],
        [9, 38],
        [10, 32],
        [11, 25]
      ]
    }, {
      label: "Unique Visitor",
      data: [
        [0, 15],
        [1, 10],
        [2, 15],
        [3, 25],
        [4, 30],
        [5, 29],
        [6, 25],
        [7, 33],
        [8, 45],
        [9, 43],
        [10, 38],
        [11, 36]
      ]
    }], {
        series: {
          bars: {
            order: 2,
            align: "center",
            show: !0,
            barWidth: .3,
            lineWidth: .7,
            fill: !0,
            fillColor: {
              colors: [{
                opacity: 1
              }, {
                opacity: 1
              }]
            }
          },
          shadowSize: 2
        },
        legend: {
          show: !1
        },
        grid: {
          margin: 0,
          show: !1,
          labelMargin: 10,
          axisMargin: 500,
          hoverable: !0,
          clickable: !0,
          tickColor: "rgba(0,0,0,0.15)",
          borderWidth: 0
        },
        tooltip: {
          show: !0,
          cssClass: "tooltip-chart",
          content: "<div class='content-chart'> <span> %s </span> <div class='label'> <div class='label-x'> %x.0 </div> - <div class='label-y'> %y.0 </div> </div></div>",
          defaultTheme: !1
        },
        colors: ["#4386f4", "#acc9fa"],
        xaxis: {
          ticks: 11,
          tickDecimals: 0
        },
        yaxis: {
          ticks: 4,
          tickDecimals: 0
        }
      })
    showTooltip(element);
  }
}

// jquery flot chart sale
function drawTopsale(element) {
  if ($(element).length) {
    return $.plot(element, [{
      label: "Services",
      data: 33
    }, {
      label: "Standard Plans",
      data: 33
    }, {
      label: "Services",
      data: 33
    }], {
        series: {
          pie: {
            radius: .75,
            innerRadius: .58,
            show: true,
            highlight: {
              opacity: .1
            },
            label: {
              show: false
            }
          }
        },
        grid: {
          hoverable: true
        },
        legend: {
          show: false
        },
        colors: ["#4285f4", "#fbbc05", "#34a853"]
      })
  }
}

// jquery ui datepicker
if ($("#calendar").length) {
  $("#calendar").datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    beforeShowDay: function (e) {
      var t = e.getMonth(),
        o = e.getDate(),
        i = e.getFullYear(),
        p = new Date, h = p.getFullYear(), f = p.getMonth(), g = [h + "-" + (f + 1) + "-16", h + "-" + (f + 1) + "-20"];
      return -1 != $.inArray(i + "-" + (t + 1) + "-" + o, g) ? [true, "has-events", "This day has events!"] : [true, "", ""]
    }
  })
}

// jquery vmap
if ($("#map").length) {
  $("#map").vectorMap({
    map: "world_en",
    backgroundColor: null,
    color: "#4285f4",
    hoverOpacity: .7,
    selectedColor: "#4285f4",
    enableZoom: true,
    showTooltip: true,
    values: {
      ru: "14",
      us: "14",
      ca: "10",
      br: "10",
      au: "11",
      uk: "3",
      cn: "12"
    },
    scaleColors: ["#4285f4", "#71a3f6"],
    normalizeFunction: "polynomial"
  })
}

// loading spinner
$(".toggle-loading").on("click", function () {
  var $this = $(this);
  $this.parents('.loading').addClass('active');
  setTimeout(function () {
    $this.parents('.loading').removeClass('active');
  }, 2000)
});

// bind event to draw chart and responsive
$(window).on('load resize', function (e) {
  drawChart("#main-chart");
  drawTopsale("#top-sale");
  drawChartUser("#bar-chart1");
  var _pageTitle = $(".page-title").text();
  var _href = location.href.split("/").pop();
  if ($(this).outerWidth() < 768) {
    if (!$(".page-title-mobile")[0]) {
      $(".page-content").prepend(`<div class="page-title-mobile"><a href='${_href}'>${_pageTitle}</a></div>`);
    }
  }
  else {
    $(".page-title-mobile").remove();
    $(".left-sidebar, .overlay").removeClass('show');
    $('body').removeClass('open-right-sidebar');
  }
});

// toggle left right sidebar
if ($(".js-toggle-right-sidebar")[0]) {
  $(document).on('mouseup', function (e) {
    e.preventDefault();
    var container = $('.right-sidebar'),
      _container = $('.left-sidebar'),
        _rightbtn = {
      isBtn: document.getElementsByClassName('js-toggle-right-sidebar')[0].contains(e.target),
      isTarget: container.is(e.target),
      hasTarget: container.has(e.target).length === 0
    }, _leftbtn = {
      isBtn: document.getElementsByClassName('js-toggle-sidebar')[0].contains(e.target),
      isTarget: _container.is(e.target),
      hasTarget: _container.has(e.target).length === 0
    };

    if (!_rightbtn.isBtn && !_rightbtn.isTarget && _rightbtn.hasTarget) {
      if (_leftbtn.isBtn) {
        $(".left-sidebar").toggleClass("show");
        $('body').removeClass('open-right-sidebar');
        $(".overlay").toggleClass('show');
      }
      else {
        if (!_leftbtn.isTarget && _leftbtn.hasTarget) {
          $(".overlay, .left-sidebar").removeClass('show');
        }
      }
    }

    if (!_leftbtn.isBtn && !_leftbtn.isTarget && _leftbtn.hasTarget) {
      if (_rightbtn.isBtn) {
        $('body').toggleClass('open-right-sidebar');
        $(".left-sidebar").removeClass('show');
        $(".overlay").toggleClass('show');
      } else {
        if (!_rightbtn.isContainer && _rightbtn.hasTarget) {
          $('body').removeClass('open-right-sidebar');
        }
      }
    }
  });
}
