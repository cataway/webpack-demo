import _ from 'lodash';
import './style.css';
import Bg from '../assets/images/bg.jpg';
// import Library from './libary.js';
console.log('in')

// if (module.hot) {
// 	module.hot.accept('./library', function() {
// 		console.log('Accepting the updated library module!');
// 		Library.log();
// 	})
// }

function component() {
	var element = document.createElement('div');

	element.innerHTML = _.join(['What are you', '弄啥咧?'], ' ');
	element.classList.add('hello');

	// 添加图片
	var bgImg = new Image();
	bgImg.src = Bg;

	element.appendChild(bgImg);

	return element;
}

document.body.appendChild(component());