import _ from 'lodash';
import './style.css';
import Bg from '../assets/images/bg.jpg';

function component() {
	var element = document.createElement('div');

	element.innerHTML = _.join(['What are you', '弄啥咧？'], ' ');
	element.classList.add('hello');

	// 添加图片
	var bgImg = new Image();
	bgImg.src = Bg;

	element.appendChild(bgImg);

	return element;
}

document.body.appendChild(component());