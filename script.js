function creatPalet() {
  const paletteColor = document.getElementById('color-palette');
  const colors = ['black', 'red', 'blue', 'yellow'];
  for (let i = 0; i < 4; i += 1) {
    const pixelsPalette = document.createElement('div');
    pixelsPalette.classList = 'color';
    if (i === 0) {
      pixelsPalette.classList.add('selected');
    }
    pixelsPalette.style.backgroundColor = colors[i];
    paletteColor.appendChild(pixelsPalette);
  }
}
creatPalet();

function tablePixels() {
  const pixels = document.getElementById('pixel-board');
  for (let index = 0; index < 25; index += 1) {
    if (index % 5 === 0) {
      const newLine = document.createElement('div');
      pixels.appendChild(newLine);
    }
    const creatTablePixel = document.createElement('div');
    creatTablePixel.classList = 'pixel';
    creatTablePixel.style.backgroundColor = 'white';
    pixels.appendChild(creatTablePixel);
  }
}
tablePixels();
