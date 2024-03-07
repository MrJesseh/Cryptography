let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


function DecryptVigenere(cipher, key){
    // First make sure that the text is lowercase, and that text exists.
    if(cipher.length < 1){return console.error("You did not provide any cipher text.")}
    cipher = cipher.toLowerCase();

    let cipherArray = cipher.split("");
    let keyArray = key.split("");
    let resultArray = [];

    let currentKeyIndex = 0;
    for(let i = 0; i < cipherArray.length; i++){
        if(currentKeyIndex == keyArray.length){
            currentKeyIndex = 0;
        }
        let currentLetterIndex = letters.indexOf(cipherArray[i]);
        let keyIndex = letters.indexOf(keyArray[currentKeyIndex]);
        let newLetterIndex = (currentLetterIndex + letters.length - keyIndex) % letters.length;
        resultArray.push(letters[newLetterIndex]);
        currentKeyIndex++;
    }

    return resultArray.join("");
}

function EncryptVigenere(text, key){
    // First make sure that the text is lowercase, and that text exists.
    if(text.length < 1){return console.error("You did not provide any cipher text.")}
    text = text.toLowerCase();
    
    // Remove all spaces.
    text = text.replace(/\s+/g, '');

    let textArray = text.split("");
    let keyArray = key.split("");
    let resultArray = [];

    let currentKeyIndex = 0;
    for(let i = 0; i < textArray.length; i++){
        if(currentKeyIndex == keyArray.length){
            currentKeyIndex = 0;
        }
        let currentLetterIndex = letters.indexOf(textArray[i]);
        let keyIndex = letters.indexOf(keyArray[currentKeyIndex]);
        let newLetterIndex = (currentLetterIndex + letters.length + keyIndex) % letters.length;
        resultArray.push(letters[newLetterIndex]);
        currentKeyIndex++;
    }

    return resultArray.join("");
}

module.exports = {EncryptVigenere: EncryptVigenere, DecryptVigenere: DecryptVigenere};