

function getContent(id){
    let content = document.getElementById(id).value;
    alert(typeof(content));
}

function dragstart_handler(ev){
    console.log("dragstart");
    ev.dataTransfer.setData("text/plain", ev.target.id);
}