$(document).ready(function(){
    console.log('Document ready');
    $('.carousel').carousel({
        interval: 500
      });
    
    /*
      $(function () {
        $("#content-buttom").draggable({
                containment: ".page",
                start: function () {
                        //$("#drag p").html("<p>用滑鼠拖曳</p>拖曳已開始!");
                        console.log("Drag start");
                },
                drag: function () {
                        //count++;
                        //$("#info").html("拖曳事件已觸發了 " + count + " 次");
                },
                stop: function () {
                        //$("#drag p").html("<p>用滑鼠拖曳</p>拖曳已停止!");
                }
        });
        });
    */
    var carousel_view = true;
    $(".content-buttom").click(function(){
        if(carousel_view == true){
            $(".container-carousel").animate({
                width:"20%"
            },500);
            $("#carouselExampleIndicators").before("<img id=\"1\" src=\"https://source.unsplash.com/random/1600x900\">");
            $("#carouselExampleIndicators").after("<img id=\"2\" src=\"https://source.unsplash.com/random/1600x900\">");
            carousel_view = false;
            
        }
        else{
            $(".container-carousel").animate({
                width:"100%"
            },500);
            $("img#1").remove();
            $("img#2").remove();
            carousel_view = true;
        };
    });

});