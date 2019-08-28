const nxtBtn = document.querySelector('.next');
const preBtn = document.querySelector('.pre');
const boxes = document.querySelector('.boxes');
const board = document.querySelector('.board');
const chip = document.querySelector('.chip');
const shadow = document.querySelector('.shadow');
let index = 0;                

const reset = () => {
    board.classList.remove('first');
    board.classList.remove('second');
    boxes.classList.remove('reset');
}

const transform = () => {
    reset();
    if(index == 1){
        board.classList.add('first');
    }else if(index == 2){
        board.classList.add('second');
    }else if(index == 3){
        boxes.classList.add('reset');
    }
}

nxtBtn.addEventListener('click',() => {
        index++;
        transform();    
});

preBtn.addEventListener('click',() => {   
        index--;
        transform();   
});