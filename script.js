//1
const countries = [
    "Pakistan",
    "India",
    "Tajikistan",
    "Russia",
    "Kazakhstan",
    "Greece",
    "Turkmenistan",
    "Turkey",
    "Kyrgyzstan",
    "Ukraine",
    "Uzbekistan"
];

const stanCountries = countries.filter((a,i,arr) => {
    return a.endsWith("stan");
});
console.log(stanCountries);
//2
const sentance = "In the end, we only regret the chances we didn't take.";

const splitSentence = sentance.split(" ");

const splitUpper = splitSentence.map((s) => {
    return s[0].toUpperCase() + s.slice(1);
});

const newSentance = splitUpper.join(" ");

console.log(newSentance);

//3
let reversedSentenceArray = [];

let start = 0;
let end = splitSentence.length - 1;
while (start < splitSentence.length) {
    reversedSentenceArray[start] = splitSentence[end];
    start++;
    end--;
}

const revesedSentance = reversedSentenceArray.join(" ");
console.log(revesedSentance);

//4
let longestWord = splitSentence[0];
splitSentence.forEach((w,i,arr) => {
    if(longestWord.length < w.length){
        longestWord = w
    }
});

console.log(longestWord);
