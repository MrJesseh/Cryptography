const affine = require('./AffineCipher');
const caesar = require('./CaesarCipher');
const vigenere = require('./VigenereCipher');


function main(){
    console.log(affine.EncryptAffine('THEBEACH', [9, 23]));
    console.log(affine.DecryptAffine('MKGOB', [11, 14]));
    console.log(affine.DecryptAffine('LFICJBOPS', [7, 5]));
}

main();