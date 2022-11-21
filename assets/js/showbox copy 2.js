
  $("#toggle3").click(function(){
    var elem = $("#toggle3").text();
    if (elem == "Show More") {
      //Stuff to do when btn is in the see more state
      $("#toggle3").text("Show Less");
      $("#text3").slideDown();
    } else {
      //Stuff to do when btn is in the see less state
      $("#toggle3").text("Show More");
      $("#text3").slideUp();
    }
  })
