import image from './asserts/images/favicon.png'
import './asserts/css/index.scss'


function component() {
  const element = document.createElement('div');
  element.innerText = 'Hello webpack';
  document.body.appendChild(element);
  return element;
}
function images() {
  const element = document.createElement('img');
  element.src = image;
  document.body.appendChild(element);
}
component();
images()

