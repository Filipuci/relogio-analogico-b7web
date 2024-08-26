let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s')
let mElement = document.querySelector('.p_m')
let hElement = document.querySelector('.p_h')

function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  digitalElement.innerHTML = `${padding(hours)}:${padding(minutes)}:${padding(seconds)}`

  sElement.style.transform = `rotate(${(seconds * 6) - 90}deg)`
  mElement.style.transform = `rotate(${(minutes * 6) - 90}deg)`
  hElement.style.transform = `rotate(${(hours * 30) - 90}deg)`
}

function padding(number) {
  return number.toString().padStart(2, '0')
}

setInterval(updateClock, 1000);
updateClock();


