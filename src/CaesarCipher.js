let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


function DecryptCaesar(cipher, shift){
    let cipherArray = cipher.split("");
    let resultArray = [];

    for(let i = 0; i < cipherArray.length; i++){
        let currentLetterIndex = letters.indexOf(cipherArray[i]);
        let newLetterIndex = (currentLetterIndex + letters.length + shift) % letters.length;
        resultArray.push(letters[newLetterIndex]);
    }

    return resultArray.join("");
}

function DecryptCaesarAllShifts(cipher){
    let cipherArray = cipher.split("");
    let resultArray = [];

    let currentShift = 1;
    while(currentShift <= 25){
        let currentResult = [];
        for(let i = 0; i < cipherArray.length; i++){
            let currentLetterIndex = letters.indexOf(cipherArray[i]);
            let newLetterIndex = (currentLetterIndex + letters.length + currentShift) % letters.length;
            currentResult.push(letters[newLetterIndex]);
        }
        resultArray.push(currentResult.join(""));
        resultArray.push("\n\n");
        currentShift++;
    }
    return resultArray.join("");
}

function EncryptCaesar(text, shift){
    text = text.replace(/\s+/g, '');
    let textArray = text.split("");
    let resultArray = [];

    for(let i = 0; i < textArray.length; i++){
        let currentLetterIndex = letters.indexOf(textArray[i]);
        let newLetterIndex = (currentLetterIndex + letters.length + shift) % letters.length;
        resultArray.push(letters[newLetterIndex]);
    }
    return resultArray.join("");
}

module.exports = {EncryptCaesar: EncryptCaesar, DecryptCaesar: DecryptCaesar, DecryptCaesarAllShifts: DecryptCaesarAllShifts};
