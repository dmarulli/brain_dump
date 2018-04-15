function drawBrain() {
  var imageElement = document.querySelector('#brain');
  var chromata = new Chromata(imageElement);

  chromata.start();
}


function main() {
  drawBrain()
}
