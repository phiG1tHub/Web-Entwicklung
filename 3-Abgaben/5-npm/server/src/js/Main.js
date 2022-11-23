const {loremIpsum} = require("lorem-ipsum");

const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});


let par = document.createElement("p");
par.id = "par"
document.body.appendChild(par);



setInterval(extracted(),4);

function extracted() {
    document.getElementById("par").innerText += lorem.generateSentences(2);
    console.log(document.getElementById('par').innerText);
}

extracted();
