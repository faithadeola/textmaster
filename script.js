
const input = document.getElementById('textbox');
const charCount = document.getElementById('charCount');
const upperCase = document.getElementById('upperCase');
const lowerCase = document.getElementById('lowerCase');
const titleCase = document.getElementById('titleCase');
const camelCase = document.getElementById('camelCase');
const snakeCase = document.getElementById('snakeCase');
const characterCount = document.getElementById('characterCount');
const wordCount = document.getElementById('wordCount');
const sentence = document.getElementById('sentence');
const readingTime = document.getElementById('readingTime');
const removeSpaces = document.getElementById('removeSpaces');
const reverseText = document.getElementById('reverseText');
const extractNumber = document.getElementById('extractNumber');
const removePunctuations = document.getElementById('removePunctuations')
const findBox = document.getElementById('findBox');
const replaceBox =document.getElementById('replaceBox');
const findAndReplace = document.getElementById('findAndReplace');
const find = document.getElementById('find');
const replace =document.getElementById('replace');
const clear = document.getElementById('clear');
const encode = document.getElementById('encode');
const decode = document.getElementById('decode');
const decoder = document.getElementById('decoder')
const compare = document.getElementById('compare');
const compareBox = document.getElementById('compareBox');
const display = document.getElementById('display')




input.addEventListener('input',function(){
    charCount.textContent = `${input.value.length} characters`
});

input.addEventListener('input',function(){
    upperCase.value = input.value.toUpperCase();
});

input.addEventListener('input',function(){
    lowerCase.value = input.value.toLowerCase();
});

input.addEventListener('input',function(){
   let text = input.value;
   let splittedText = text.split(" ");
   let loopedWord = splittedText.map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
   })
   let titleCased = loopedWord.join(" ")
   titleCase.value = titleCased;
});

input.addEventListener('input',function(){
    let text = input.value;
    let splittedText = text.split(" ");
    let loopedWord = splittedText.map(function(word,index){
        if(index === 0){
            return word.toLowerCase()
        }else{
        return word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase();
 } })
    let camelCased = loopedWord.join("");
    camelCase.value = camelCased;
});

input.addEventListener('input',function(){
    let text = input.value;
    let splittedText = text.split(" ")
    let loopedWord = splittedText.map(function(word){
        return word.toLowerCase();
    })
    let snakeCased = loopedWord.join("_")
    snakeCase.value =snakeCased;
}); 

input.addEventListener('input',function(){
    characterCount.value = input.value.length;
});

input.addEventListener('input',function(){
    let text = input.value;
    let splittedText = text.split(" ").length
    wordCount.value = splittedText;
})

input.addEventListener('input',function(){
    let text = input.value;
    let sentenceCount = text.split(/[.!?]/).filter(sentence => sentence.trim() !== "").length;
    sentence.value = sentenceCount;
});

input.addEventListener('input',function(){
    let text = input.value;
    let wpm = 225;
    let splittedText = text.split(/\s+/).length
    let time = splittedText / wpm;
    if(time < 1){
        readingTime.value = 'less than 1 minute required'
    }else{
         let time = Math.ceil(splittedText / wpm);
        readingTime.value = `${time} minutes required`
    }
});

input.addEventListener('input',function(){
    let text = input.value;
    let splittedText = text.trim().replace(/\s+/g," ");
    removeSpaces.value =splittedText;
});

input.addEventListener('input',function(){
    let text = input.value;
    let splittedText = text.split('').reverse().join('')
    reverseText.value = splittedText
})

input.addEventListener('input',function(){
    let text = input.value;
    let loopedWord = text.match(/\d+(\.\d+)?/g)
    let number = loopedWord.map(function(num){
        return parseFloat(num);
    })
    extractNumber.value = number
});
 
input.addEventListener('input',function(){
    let text = input.value;
    let splittedText =text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g," ")
    removePunctuations.value = splittedText;
});


findBox.style.display = 'none';
replaceBox.style.display = 'none';
replace.style.display = 'none';

input.addEventListener('input', function() {
  findAndReplace.innerHTML = input.value;
});

find.addEventListener('click', function(){
  findBox.style.display = 'block';
});

findBox.addEventListener('input', () => {
  const text = input.value;
  const search = findBox.value.trim();
  const regex = new RegExp(search, 'gi');
  const highlighted = text.replace(regex, match => `<mark>${match}</mark>`);
  findAndReplace.innerHTML = highlighted;

  if (search && text.toLowerCase().includes(search.toLowerCase())) {
    replace.style.display = 'inline-block';
  } else {
    replace.style.display = 'none';
    replaceBox.style.display = 'none';
  }
});

replace.addEventListener('click', () => {
  replaceBox.style.display = 'block';

  const originalText = input.value;
  const searchTerm = findBox.value.trim();
  const replacement = replaceBox.value.trim();

  if (!searchTerm || !replacement) return;

  const regex = new RegExp(searchTerm, 'gi');
  const replaced = originalText.replace(regex, replacement);

  input.value = replaced;
  findAndReplace.innerHTML = replaced;
});

clear.addEventListener('click',function(){
    input.value = '';
    upperCase.value ='';
    lowerCase.value = '';
    titleCase.value ='';
    camelCase.value ='';
    snakeCase.value ='';
    characterCount.value='';
    wordCount.value='';
    sentence.value ='';
    readingTime.value='';
    removeSpaces.value='';
    reverseText.value='';
    extractNumber.value='';
    removePunctuations.value='';
    findBox.value='';
    replaceBox.value='';
    findAndReplace.value='';
    compare.value ='';
    compareBox.value='';
    decode.value ='';
    decoder.value ='';
    encode.value = '';

});

input.addEventListener('input',function(){
   let text = input.value ;
  let encoded = window.btoa(text);
  encode.value = encoded;
});


decode.addEventListener('input',function(){
    let text = decode.value;
    let decoded = window.atob(text);
    decoder.value = decoded
});

input.addEventListener('input',function(){
    compare.value = input.value;
});



compareBox.addEventListener('input',function(){
    const compare = input.value
    .toLowerCase()
    .replace(/[^\w\s]/g, '') 
    .split(/\s+/); 

  const compareWords = compareBox.value
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/);

  if ( compareWords.length === 0) {
    display.textContent = "Type something in the box.";
    return;
  }

    let hasWords = compareWords.filter(word => compare.includes(word));
    let wordCount = hasWords.length;
    if(wordCount > 0 ){
        display.textContent = `${wordCount} similar words found: ${hasWords.join(",")}`
    }else{
        display.textContent = "No matches found"
    }
});