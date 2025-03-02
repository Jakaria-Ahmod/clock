let deg = 6;
let hr = document.querySelector('#hr');
let min = document.querySelector('#min');
let se = document.querySelector('#se');

setInterval(() => {
  let day = new Date();

  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  se.style.transform = `rotateZ(${ss}deg)`;
});
