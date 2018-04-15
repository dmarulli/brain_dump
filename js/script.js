function drawBrain() {
  var imageElement = document.querySelector('#brain'),
      chromata;

  chromata = new Chromata(imageElement, {
    pathFinderCount: 600,
    speed: 20,
    turningAngle: Math.PI*(3/2),
    colorMode: 'grayscale',
    lineWidth: 1,
    lineMode: '[point]',
    compositeOperation: 'lighten',
    origin: ['bottom','50% 50%','top'],
    outputSize: 'container', // original, container
    key: 'low',
    backgroundColor: 'hsla(34, 70%, 70%, 0)'
});
chromata.start();
}


function main() {
  drawBrain()
}
