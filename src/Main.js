const affine = require('./AffineCipher');
const caesar = require('./CaesarCipher');
const vigenere = require('./VigenereCipher');
const transposition = require('./TranspositionCipher');
const utils = require('./utils');

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];



function main(){
    

    //let cipher = "EEOELAEAOALROREPMRLAOPMGEPLENGEPOROAEPLRERMGMRLAEPOAEPEGLRLAMAMRLALPERLEORMELEORLROPMRLELAMPLEERLROPEPEAMRLAOAMRLALPLRMELEOREP";
    //let cipher = "ESMNAGNLNVISVPUBJIWZFECGLKCMCYIEPYGM";
    let cipher = "EFNTEASPHOIFGOEHTIDRRDIENEFTSEYANHNEEATITTLRHNNTTNFEYGTHEEVLTNES";
    
    utils.FrequencyAnalysis(cipher);
    
}

main();