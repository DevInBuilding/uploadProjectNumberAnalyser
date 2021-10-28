let num = document.querySelector('input#num');
let analyse = document.querySelector('select#selAna');
let res = document.getElementById('result');
let vec = [];
let convNum = Number(num.value);

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else {
        return false;
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    } else {
        return false;
    }
}

function numAnalyser(n) {
    if(isNumber(num.value) && !inList(num.value, vec)){
        alert('Number added to the array');
        let item = document.createElement('option');//Creating a variable to list all entries.
        item.text = `The number ${num.value} was added`;//Print on the screen the value added.
        analyse.appendChild(item);//List on the screen elements already added.
        vec.push(Number(num.value));//Put the element inside of array 'vec'.
    } else if(num.value.length == 0){
        alert('Please, enter a number');
    } else {
        alert('[ERRO] Invalid entry or already added');
    }
    num.value = '';
    num.focus();
}

function finCountdown(){
    if(vec.length == 0){
        alert('Please, add some numbers before finishing.');
    } else {
        let tot = vec.length;
        let high = vec[0];
        let low = vec[0];
        let sum = 0;
        let ave = 0;

        for(let pos in vec){
            sum += vec[pos];
            if(vec[pos] > high){
                high = vec[pos];
            }
            if(vec[pos] < low){
                low = vec[pos];
            }
        }
        ave = sum / tot;
        res.innerHTML = '';
        res.innerHTML += `<p>There are ${tot} elements added to the list.</p>`;
        res.innerHTML += `<p>The highest value in the array is ${high}</p>`;
        res.innerHTML += `<p>The lowest value in the array is ${low}</p>`;
        res.innerHTML += `<p>The sum of all numbers in the array is ${sum}</p>`;
        res.innerHTML += `<p>The average of numbers is ${ave}</p>`;
    }
    
}