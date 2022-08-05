
function ex() {
    var x = document.getElementById("menu");
    console.log(document.body.clientWidth);
    if(document.body.clientWidth >= 920){
     x.className = "menu";
}
}

window.addEventListener("resize",ex )

const OpentNavMobile = () =>{
    var x = document.getElementById("menu");
        if (x.className === "menu") {
            x.classList.add("navmobile");
        }
        else {
            x.className = "menu";
        }
}