const squares = [...(document.getElementsByClassName('square'))],
      board = document.querySelector('.board'),
      appTitle = document.querySelector('.app__title'),
      resetGameBtn = document.querySelector('.reset-game-btn')

const xMark = 'X',
      oMark = 'O'

let xIsNext = true
let gameState = Array(9).fill(null)


appTitle.innerHTML = (xIsNext ? xMark : oMark) + ' goes'

squares.forEach( (square, i) => {

  square.addEventListener('click', () => {
    
    if (square.innerHTML == '') {
      xIsNext ? square.innerHTML = xMark : square.innerHTML = oMark
      xIsNext = !xIsNext
      appTitle.innerHTML = (xIsNext ? xMark : oMark) + ' goes'
      gameState[i] = square.innerHTML
      console.log(gameState)
    }

   
  })
})

resetGameBtn.addEventListener('click', () => {
  squares.forEach( square => {
    square.innerHTML = ''
    xIsNext = true
    gameState = Array(9).fill(null)
  })
})

console.log(gameState)

let checkWinner = function() {
  const winPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  
}