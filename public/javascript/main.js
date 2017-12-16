$(document).ready(function(){
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));    

    var tool = new Tool();

    var c = Shape.Circle(200,200,80);
    c.fillColor = 'black';
    var text = new PointText(200,200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 50;
    text.content = 'canvas';

    tool.onMouseDown = function(event){
        var c = Shape.Circle(event.point.x,event.point.y,20);
        c.fillColor = 'green';
    };

    paper.view.draw();

    //
    $(".aboutTitle").hover(function(){
        $(".aboutIndex").slideToggle();
    });

    $(".projectTitle").hover(function(){
        $(".projectIndex").slideToggle();
    });

    $(".contactTitle").hover(function(){
        $(".contactIndex").slideToggle();
    });

    //Moon Festival special element
    window.open("./hw2-1.html");
    //window.location.href = '../MoonFestival/MoonFestival.html';
});

function changeHtml(content,id){
    let event = document.getElementById(id);
    event.innerHTML = content;
};