$(document).ready(function(){
    $("#submit").click(function(){ alert('has submit');});
    $("input[id=reserve_sumit]").click(function(){
        event.preventDefault();
        $.ajax({data:{
            message:$("input[name=message]").val()
        },url:"reserve",success:function(data){
            $("#content").text(data);
        }});
        $("#content").html("Loading...");
    });
}
);