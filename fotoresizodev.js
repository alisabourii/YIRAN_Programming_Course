var counter = 200;

function zoomP() {
  counter += 100;
  document.getElementById("qimg").style.height = counter + "px";
  document.getElementById("qimg").style.width = counter + "px";
}
function zoomM() {
  counter -= 100;
  document.getElementById("qimg").style.height = counter + "px";
  document.getElementById("qimg").style.width = counter + "px";
}
