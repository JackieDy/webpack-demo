import image from './asserts/images/favicon.png'
import './asserts/css/index.scss'

console.log('ddsadaad');
function component() {
  const element = document.createElement('div');
  element.innerText = 'Hello webpack';

  return element;
}
function images() {
  const element = document.createElement('img');
  element.src = image;
  console.log('element',element);
  return element;
}

document.body.appendChild(component());
document.body.appendChild(images());
