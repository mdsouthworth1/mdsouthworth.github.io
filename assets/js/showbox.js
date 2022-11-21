
   $(document).ready(function() {
    $("#toggle").click(function(){
      var elem = $("#toggle").text();
      if (elem == "Show More") {
        //Stuff to do when btn is in the see more state
        $("#toggle").text("Show Less");
        $("#text").slideDown();
      } else {
        //Stuff to do when btn is in the see less state
        $("#toggle").text("Show More");
        $("#text").slideUp();
      }
    })
    })
