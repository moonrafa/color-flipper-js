const colors = [
  'green',
  'red',
  'purple',
  'pink',
  'white',
  'black',
  'blue',
  'yellow',
  'orange',
  'brown'
]

const button = document.getElementById('button')
const color = document.querySelector('.color')
button.addEventListener('click', function () {
  /* numero aleatório entre 0 e o tamanho da lista de cores */
  const randomNumber = getRandomNumber()
  console.log(randomNumber)
  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
}
