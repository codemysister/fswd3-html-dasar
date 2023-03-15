// Conditional

// if
let response = prompt("1 + 1 = ");
if(response == 2){
    alert('Correct! ');
}

// if else
let response2 = prompt("1 + 1 = ");
if(response2 == 2){
    alert('Correct! ');
}else{
    alert('Wrong!');
}

// if else
let response3 = prompt("1 + 1 = ");
if(response3 == 2){
    alert('Correct! ');
}else if(response < 2){
    alert('Too Low!');
}else{
    alert('Too High!');
}

// Switch

let color = 'red';
switch(color){
    case 'red':
        alert('i love red');
        break;
    case 'blue':
        alert('i love blue');
        break;
    default:
        alert('i dont know what color it is');
        break;
}

