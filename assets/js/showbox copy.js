$(document).ready(function() {
  $("#toggle2").click(function(){
    var elem = $("#toggle2").text();
    if (elem == "Show More") {
      //Stuff to do when btn is in the see more state
      $("#toggle2").text("Show Less");
      $("#text2").slideDown();
    } else {
      //Stuff to do when btn is in the see less state
      $("#toggle2").text("Show More");
      $("#text2").slideUp();
    }
  })
})