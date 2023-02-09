randomNumber = Math.floor(Math.random() * 6) + 1;
let firstPlayerDice = './images/dice' + randomNumber.toString() + '.png'
document.querySelector(".img1").setAttribute('src', `${firstPlayerDice}`)
randomNumber2 = Math.floor(Math.random() * 6) + 1;
let secondPlayerDice = './images/dice' + randomNumber2.toString() + '.png'
document.querySelector(".img2").setAttribute('src', `${secondPlayerDice}`)
if (randomNumber > randomNumber2) {
  document.querySelector('h1').innerHTML = "🚩 Player One Wins"
}
else if (randomNumber2 > randomNumber) {
  document.querySelector('h1').innerHTML = "Player Two Wins 🚩 "
}
else {
  document.querySelector('h1').innerHTML = "Draw"
}