//TAPSIRIG 1

const age = prompt("Yawinizi yazin!:");
if (age !== null) {
    const ageNumber = Number(age);
    if (ageNumber > 18) {
        console.log("Siz 18 yaw-dan boyuksuz!");
    } else if (ageNumber < 18) {
        console.log("Siz 18 yaw-dan kiciksiz!");
    } else {
        console.log("Sizin yawiniz 18-e beraberdir!");
    }
}



//TAPSIRIG1.1

for (let a = 1; a <= 10; a++) {
    console.log(a);
}

//TAPSIRIQ 1.2
let x = 2;
while (x <= 100) {

    console / log(x);
    x += 2;
}

//TAPSIRIG 4

let world = "Salam dunya";
console.log(world.length);



//TAPSIRIG 6 
function findLongestWord(sentence) {
    let words = sentence.split(/\s+/);
    let longestWord = " ";

    for (let a = 0; a < words.length; a++) {
        if (words[a].length > longestWord.length) {
            longetWord = words[a];

        }
    }
    return longestWord;

}
const sentence = prompt("Cumle Yazin:");
console.log("Cumledeki en uzun soz", findLongestWord(sentence));


//tapsirig 
function reverseSentence(sentence) {
    return sentence.split(" "), reverse(), join(" ");
}

let fruits = "meyve yemek cox xeyirlidir";
console.log(severseSentence(fruits));

//Son Tapsirig 
let Wheather = "The wheather is very cold today!"
setTimeout(() => {
    console.log(wheather);
}, 3000);