$(document).ready(function(){
    //alert("Document load");
    $(".tutorialHead").hover(function(){
        //alert("Click event");
        $(".tutorialBody").slideToggle();
    });
});