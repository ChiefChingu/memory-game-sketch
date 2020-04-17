var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
function shuffleArray () {
    
    var i = arr.length, j, temp;
    while(--i > 0) {
        j = Math.floor(Math.random() * (i+1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    document.getElementById('shuffle').innerHTML = (arr);
    console.log(arr);
}

document.getElementById("card").addEventListener("click", shuffleArray);

// const cards = Array.from(document.getElementsByClassName('card'));
console.log(cards);

