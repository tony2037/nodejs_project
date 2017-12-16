$(document).ready(function(){
    'use strict'
    //alert("document ready");
    $(".tutorial-botton").click(function(){
        //alert("check");
        //$("header").css("display","inline-block");
        $("header").slideToggle("slow");
    });
});

function changeHtml(content,id){
    let event = document.getElementById(id);
    event.innerHTML = content;
};