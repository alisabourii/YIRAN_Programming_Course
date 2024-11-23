function darkMode(){
        document.getElementsByTagName('body')[0].style.backgroundColor = "black";
        document.getElementsByTagName('body')[0].style.color = "white";
}

function lightMode(){
        document.getElementsByTagName('body')[0].style.backgroundColor = "white";
        document.getElementsByTagName('body')[0].style.color = "black";
}

var counter = 16;

function zoomP(){
        counter += 2
        document.getElementById("prg").style.fontSize = counter+"px";
}
function zoomM(){
        counter -= 2
        document.getElementById("prg").style.fontSize = counter+"px";
}