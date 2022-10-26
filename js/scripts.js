function firstVowel(phrase) {
    let vowels = ["a", "e", "i", "o", "u"];
    if (vowels.includes(phrase.split("")[0])) {
        return true;
    }
    return false;
}

function toPigLatin(phrase) {
    let strPhase = `${phrase}`.toLowerCase();
    if (firstVowel(strPhase)) {
        if (strPhase.length === 1) {
            return `${strPhase}yay`;
        }
    }
    if (strPhase.length === 1) {
        return strPhase;
    }
    if (parseInt(strPhase.split("")[0])) {
        return strPhase;
    }
    if (!firstVowel(strPhase.slice(1, strPhase.length - 1))) {
        return `${strPhase.slice(2, strPhase.length - 1)}${strPhase.split("")[0]}${strPhase.split("")[1]}ay`;
    }
}

console.log(`test 1: ${toPigLatin("a")}`);
console.log(`test 2: ${toPigLatin("b")}`);
console.log(`test 3: ${toPigLatin("3")}`);
console.log(`test 4: ${toPigLatin(3)}`);
console.log(`test 5: ${toPigLatin("3adsfk")}`);
console.log(`test 6: ${toPigLatin("where")}`);