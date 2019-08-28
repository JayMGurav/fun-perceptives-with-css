const boxes = document.querySelector('.box-container');
const board = document.querySelector('.board');
const btn = document.querySelector('.btn');
const fill = document.querySelector('#fill');
const nxtBtn = document.querySelector('.next');
const preBtn = document.querySelector('.pre');
let index = 0;
nxtBtn.addEventListener('click',() => {
        board.classList.add('first');
        index++;
});
preBtn.addEventListener('click',() => {    
        board.classList.remove('first');  
    
});
