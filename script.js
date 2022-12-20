const coresPalet = document.getElementsByClassName('color');
const colors = ['black', 'red', 'blue', 'yellow'];

function paletColor() {
  for (let i = 0; i < coresPalet.length; i += 1) {
    coresPalet[i].style.backgroundColor = colors[i];
    coresPalet[i].style.border = '1px solid black';
  }
}
paletColor();
