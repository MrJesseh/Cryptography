let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function modInverse(a, m) {
    for (let x = 1; x < m; x++) {
        if (((a % m) * (x % m)) % m === 1) {
            return x;
        }
    }
    return null;
}

function DecryptAffine(cipher, key) {
    // First make sure that the text is lowercase, and that text exists.
    if(cipher.length < 1){return console.error("You did not provide any cipher text.")}
    cipher = cipher.toLowerCase();

    // Ensure that the inverse exists.
    let inverse = modInverse(key[0], letters.length);
    if (inverse === null) {
        return console.error("Not possible.");
    }

    let cipherArray = cipher.split("");
    let resultArray = [];

    for (let i = 0; i < cipherArray.length; i++) {
        let currentLetterIndex = letters.indexOf(cipherArray[i]);
        let newLetterIndex = (inverse * (currentLetterIndex - key[1] + letters.length)) % letters.length;
        resultArray.push(letters[newLetterIndex]);
    }
    return resultArray.join("");
}

function EncryptAffine(text, key){
    // First make sure that the text is lowercase, and that text exists.
    if(text.length < 1){return console.error("You did not provide any cipher text.")}
    text = text.toLowerCase();

    // Remove all spaces.
    text = text.replace(/\s+/g, '');
    
    let textArray = text.split("");
    let resultArray = [];

    for(let i = 0; i < textArray.length; i++){
        let currentLetterIndex = letters.indexOf(textArray[i]);
        let newLetterIndex = (key[0] * currentLetterIndex + key[1]) % letters.length;
        resultArray.push(letters[newLetterIndex]);
    }

    return resultArray.join("");
}

module.exports = {EncryptAffine: EncryptAffine, DecryptAffine: DecryptAffine};