import './assets/scss/all.scss';
import $ from "jquery";
$('.js-hambuger').click(function(e) {
  e.preventDefault();
  $('.menu').toggleClass('test')
})