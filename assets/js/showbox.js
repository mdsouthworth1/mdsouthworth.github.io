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
      })