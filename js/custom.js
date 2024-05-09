$(document).ready(function () {
    $(".menu-toggle").click(function () {
      $("body").addClass("toggle");
    });
  });

  $(document).ready(function () {
    $(".closed-menu").click(function () {
      $("body").removeClass("toggle");
    });
  });
  $(document).ready(function () {
    $(window).scroll(function () {
      var header = $("header");
      header.toggleClass("sticky", $(window).scrollTop() > 0);
    });
  });

  var cursor = document.querySelector("#cursor")
  var bodyEl = document.querySelector("body")
  bodyEl.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.clientX + "px";
    cursor.style.top = dets.clientY + "px";
  });