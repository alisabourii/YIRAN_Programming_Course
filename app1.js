function DarkMode(){
        document.body.style.background = "black";
        document.body.style.color = "white";
}
function LightMode(){
        document.getElementsByTagName("body")[0].style.background = "white";
        document.getElementsByTagName("body")[0].style.color = "black";
}

var sizeCount = 16;
function fonter(){
        sizeCount += 2;
        document.getElementsByClassName("demo")[0].style.fontSize = sizeCount+"px";
        document.getElementsByClassName("demo")[1].style.fontSize = sizeCount+"px";
}

function Jamea(){
        alert("5");
}