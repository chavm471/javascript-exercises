const PUNCTUATION = ["!",",", "."]

const palindromes = function (phrase) {
    let cleanPhrase = phrase.toLowerCase();
    
    //remove spaces
    cleanPhrase = cleanPhrase.replaceAll(" ","");
    
    //check if theres punctuation.
    for(let punctuation of PUNCTUATION){
        cleanPhrase = cleanPhrase.replaceAll(punctuation,"");
        }
    //reverse phrase after you cleaned it
    let reversePhrase = cleanPhrase.split("").reverse().join("");
    //check if its a palindrome
    if (cleanPhrase === reversePhrase){
        return true;
    }
    
    return false;
};

console.log(palindromes("A car, a man, a maraca."));
// Do not edit below this line
module.exports = palindromes;
