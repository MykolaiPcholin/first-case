const area = document.getElementById('area');
let move = 0;
let result = '';
const contentWrapper = document.getElementById('content');
const modalResult = document.getElementById('modal-result-wrapper');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');

area.addEventListener('click', event => {
    if (event.target.className = 'box') {
        move % 2 === 0 ? event.target.innerHTML = 'X' : event.target.innerHTML = 'O';
        move++
        check();
    }
});

const check = () => {
    const boxes = document.getElementsByClassName('box');
    const arrCheck = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for (i = 0; i < arrCheck.length; i++) {
        if (boxes[arrCheck[i][0]].innerHTML == 'X' && boxes[arrCheck[i][1]].innerHTML == 'X' && boxes[arrCheck[i][2]].innerHTML == 'X') {
            result = 'Crosses wins!';
            prepareResult(result);
        } else if (boxes[arrCheck[i][0]].innerHTML == 'O' && boxes[arrCheck[i][1]].innerHTML == 'O' && boxes[arrCheck[i][2]].innerHTML == 'O') {
            result = 'Noughts wins!';
            prepareResult(result);
        } else if (move == 9){
            result = 'It`s a draw!';
            prepareResult(result);
        }
    }
}

const prepareResult = winner => {
    contentWrapper.innerHTML = `${winner}`;
    modalResult.style.display = 'block';
}

const closeModal = () => {
    modalResult.style.display = 'none';
    location.reload();
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);