function calculate(){

    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const op = document.getElementById('operator').value.trim();
    let hasil;

    // validasi
    if (isNaN(number1) || isNaN(number2)){
        document.getElementById('hasil').textContent = "mohon masukkan 2 angka yang valid"
    }

    // if operasi
    if (op === "+") {
        hasil = number1 + number2;
    } else if (op === "-") {
        hasil = number1 - number2;
    } else if (op === "*") {
        hasil = number1 * number2;
    } else if (op === "/") {
        if (number2 === 0){
            result = "hasil tak hingga, karena pembagi nol";
        } else {
            hasil = number1 / number2;
        }
    }else {
        hasil = 'operator tidak dikenal';
    }
    document.getElementById('hasil').textContent = `hasil : ${hasil}`;
}