$(document).ready(function() {
  $("button#original").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });

  $("button#light-grey").click(function() {
    $("body").removeClass();
    $("body").addClass("light-grey-background");
  });

  $("button#dark-grey").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-grey-background");
  });

  $(".highlight").click(function() {
    //$("body").removeClass();
    $("#border-red").toggleClass("first-paragraph");
    //$("first-paragraph").toggle();
  });
  $(".highlight").click(function() {
    //$("body").removeClass();
    $("#border-red").toggleClass("second-paragraph");
  });


});
