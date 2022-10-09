/* slider */

$(document).ready(function(){
	$('.main-3 .slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		speed: 600,
		easing: 'ease',
		touchThreshold: 30,
		waitForAnimate: false
	});
});



/* timer */

function getTimeRemaining(endtime){
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.trunc(t/1000) % 60;
  let minutes = Math.trunc(t/1000/60,10) % 60;
	if(t.total <= 0){
		clearInterval(timeinterval);
	}
  return {
   'total': t,
   'minutes': minutes,
   'seconds': seconds
  };
}

function initializeClock(selector_minutes, selector_seconds, endtime){
	let timer__minutes = $(selector_minutes)[0];
	let timer__seconds = $(selector_seconds)[0];
  let timeinterval = setInterval(function(){
		let t = getTimeRemaining(endtime);
		timer__minutes.innerHTML = ('0' + t.minutes).slice(-2);
		timer__seconds.innerHTML = ('0' + t.seconds).slice(-2);
		if(t.total<=0){
			clearInterval(timeinterval);
		}
  },1000);
}

let deadline = new Date(Date.parse(new Date()) + 30 * 60 * 1000);
initializeClock('.timer__minutes','.timer__seconds',deadline);



/* popup hints */

const name__field = $('.main-5 .field-inp.inp-name')[0];
const tel__field = $('.main-5 .field-inp.inp-tel')[0];
const name__prompt = $('.main-5 .prompt-name')[0];
const tel__prompt = $('.main-5 .prompt-tel')[0];

console.log(name__field);
console.log(tel__field);
console.log(name__prompt);
console.log(tel__prompt);

name__field.addEventListener('focus',(event) => {
	name__prompt.style.display = 'block';
});
name__field.addEventListener('blur',(event) => {
	name__prompt.style.display = 'none';
});
tel__field.addEventListener('focus',(event) => {
	tel__prompt.style.display = 'block';
});
tel__field.addEventListener('blur',(event) => {
	tel__prompt.style.display = 'none';
});