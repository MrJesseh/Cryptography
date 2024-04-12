function splitArrayIntoChunks(array, chunkSize) {
    let result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      let chunk = array.slice(i, i + chunkSize);
      result.push(chunk);
    }
    return result;
  }

  /**
   * 
   * @param {string} cipher 
   * @param {number} column_length 
   * @returns 
   */
function DecryptTransposition(cipher, column_length){
    // First make sure that the text is lowercase, and that text exists.
    if(cipher.length < 1){return console.error("You did not provide any cipher text.")}
    cipher = cipher.toLowerCase();

    let cipherArray = cipher.split("");
    let chunks = splitArrayIntoChunks(cipherArray, column_length);
    let maxLength = Math.max(...chunks.map(chunk => chunk.length));
  
    for (let i = 0; i < maxLength; i++) {
        let row = '';
        for (let chunk of chunks) {
          row += `${chunk[i] || ' '}\t`;
        }
        console.log(row);
    }
}

function EncryptTransposition(text, key){
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

module.exports = {EncryptTransposition: EncryptTransposition, DecryptTransposition: DecryptTransposition};