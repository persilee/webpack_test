import $ from 'jquery';
import styles from './main.css';
import test from './test.html';

$('body').append($('<div><h1>我是title</h1></div>'));
$('body').append($('<div><h2>我会变绿</h2></div>'));
$('div h1').addClass('title');
$('div h2').addClass(styles.testGreen);
$('body').append(test).find('h3').addClass(styles.testBlue);
console.log(test);
console.log(styles.testGreen);
console.log('test end');
