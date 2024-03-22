const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');
const gameOver = document.querySelector('.game-over');
const restartButton = document.querySelector('.restart');

const jump = ()=>{
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500)
}

function teclaPulo(){
    console.log("olá, estou funcionando")
}
teclaPulo()

const teclaPulo = ()=>{}


document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);
restartButton.addEventListener('click', restart);