const Chart = require("quickchart-js");
const path = require('path');

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function FrequencyAnalysis(cipher){
    let letterCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    cipher = cipher.toLowerCase();
    cipher = cipher.split("");

    for(let i = 0; i < cipher.length; i++){
        for(let j = 0; j < letters.length; j++){
            if(cipher[i] == letters[j]){
                letterCount[j]++;
            }
        }
    }

    const frequencyChart = new Chart();
    frequencyChart.setConfig({
        type: 'bar',
        data: { labels: letters, datasets: [{ label: 'Frequency', data: letterCount }] },
    });
    frequencyChart.setWidth(800);
    frequencyChart.setHeight(600);

    // Save to PNG
    frequencyChart.toFile(path.join(__dirname, "../temp/frequencyChart.png"));

    return console.log(letterCount);
}


module.exports = {FrequencyAnalysis: FrequencyAnalysis};