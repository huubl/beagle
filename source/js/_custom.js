$(function () {
  $(".datetimepicker").datetimepicker();
  new PerfectScrollbar(document.querySelector(".js-list-scrollbar"), {
    wheelPropagation: false
  });

  $(".ps__rail-y").css('height', $(".ps__rail-y").parents(".content").css("height"));
  $(".ps__thumb-y").css('height', '165px')

  $(".multi-file").each(function () {
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

});
