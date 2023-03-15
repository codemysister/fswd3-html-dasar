
// pilihan player
let player = prompt('pilih: gajah, semut, orang');

// pilihan computer
let computer = Math.random();
if(computer < 0.34){
    computer = 'gajah';
}else if(computer >= 0.34 && computer < 0.67){
    computer = 'orang';
}else{
    computer = 'semut';
}

let hasil = '';

if(player == computer){
    hasil = "seri";
}else if(player == "gajah"){
    if(computer == 'orang'){
        hasil = "menang";
    }else{
    hasil = "kalah"
    }
}else if(player == "orang"){
    if(computer == "gajah"){
        hasil = 'kalah';
    }else{
        hasil = 'menang';
    }
}else if (player == 'semut'){
    if(computer == "orang"){
        hasil = 'kalah';
    }else{
        hasil = 'menang';
    }
}else{
    hasil = 'Anda memasukkan pilihan yang salah';
}

// alert hasil
alert('kamu memilih : ' + player + ' dan komputer memilih : '+ computer +'\nmaka hasilnya : kamu '+hasil);