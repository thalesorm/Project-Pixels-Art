function creatPalet() {
  const paletColor = document.getElementById('color-palette');
  const colors = ['black', 'red', 'blue', 'yellow'];
  for (let i = 0; i < 4; i += 1) {
    const quadrado = document.createElement('div');
    quadrado.classList = 'color';
    quadrado.style.backgroundColor = colors[i];
    paletColor.appendChild(quadrado);
  }
}
creatPalet();
