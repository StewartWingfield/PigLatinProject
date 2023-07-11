


const pigLatin = (word) => {


    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newword = '';

    word = word.trim().toLowerCase();

    if(vowels.indexOf(word[0]) > -1) {
        newword = word + 'yay';
        return newword;
    } else {
        let firstMatch = word.match(/[aeiou]/g) || 0;
        let vowel = word.indexOf(firstMatch[0]);
        newword = word.substring(vowel) + word.substring(0, vowel) + 'ay';
        return newword;
    }
}
const translateBtn = document.querySelector('button')
const displayResult = document.querySelector('#piglatin')
const word = document.querySelector('#user-input')

translateBtn.addEventListener('click', function() {
    displayResult.innerHTML = pigLatin(word.value)
})