$( window ).resize(function() {
    if($( window ).height() < 750){
        $(".footer").addClass("footer-padding");
        $(".footer p").addClass("footer-p")
    }else{
        $(".footer").removeClass("footer-padding");
        $(".footer p").removeClass("footer-p")
    }
  });
$(window).trigger("resize");

inputFirstNumber = $("#inputFirstNumber");
inputSecondNumber = $("#inputSecondNumber");
inputIndexOfOperation = $("#inputIndexOfOperation");
resultInput = $("#resultInput");

function updateInputsOfCalc(){
    resultInput.val(result);
};
