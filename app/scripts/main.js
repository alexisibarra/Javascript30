'use strict';

function playSound(e) {
  var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
  var key = document.querySelector('div[data-key="' + e.keyCode + '"]');

  if (!audio) return;

  key.classList.add('playing');

  audio.currentTime = 0;
  audio.play();
};

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

window.addEventListener('keydown', playSound);
var keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(function (key) {
  return key.addEventListener('transitionend', removeTransition);
});

const secondHand = document.querySelector('.sec-hand')
const minutesHand = document.querySelector('.min-hand')
const hoursHand = document.querySelector('.hour-hand')

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const hoursDegrees = (hours / 12) * 360 + 90;

  secondHand.style.transform = 'rotate(' + secondsDegrees + 'deg)';
  minutesHand.style.transform = 'rotate(' + minutesDegrees + 'deg)';
  hoursHand.style.transform = 'rotate(' + hoursDegrees + 'deg)';

  console.log(hours, ":", minutes, ":", seconds);
}

setInterval(setDate, 1000);
//# sourceMappingURL=main.js.map
