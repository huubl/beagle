$(function () {
  $(".datetimepicker").datetimepicker();

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
