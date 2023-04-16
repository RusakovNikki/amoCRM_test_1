const inputEl = document.querySelector('input');
const timerEl = document.querySelector('span');
const circle = document.querySelector('.circle')
const timerBlock = document.querySelector('.timer')
const form = document.querySelector('form')
let idInterval = 0
const radius = circle.r.baseVal.value
const circumference = 2 * Math.PI * radius
circle.style.strokeDasharray = `${circumference} ${circumference}`
circle.style.strokeDashoffset = circumference


function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference

  circle.style.strokeDashoffset = offset
}


const formatter = (seconds) => {
  const d = new Date(2011, 0, 1, 0, 0, 0, seconds * 1000)

  const date = [d.getHours(), d.getMinutes(), d.getSeconds()].map((x) => {
    return x < 10 ? "0" + x : x
  }).join(":")

  return date
}

const isOver = () => {
  circle.setAttribute('stroke', 'red')
  setProgress(100)
  clearInterval(idInterval)
  return 'WAKE UP!!'
}

const animateTimer = (seconds) => {
  if (seconds > 86399) seconds = 86399

  const start = seconds
  idInterval = setInterval(() => {
    setProgress(Math.floor(seconds * 100 / start))
    timerEl.innerHTML = seconds > 0 ? formatter(seconds--) : isOver()
  }, 1000)
}

inputEl.addEventListener('input', (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  e.target.value = e.target.value.replace(/[^\d]/g, ''); // запрет ввода
});

const initValues = () => {
  circle.setAttribute('stroke', 'yellow')
  clearInterval(idInterval)
  timerBlock.removeAttribute('hidden')
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  initValues()

  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});
