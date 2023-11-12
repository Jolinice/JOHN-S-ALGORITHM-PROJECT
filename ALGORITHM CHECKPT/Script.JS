// Aim: We want to write an algorithm 
// that read a sentence, which ends with a point, character by character, 
//  and to determine:

function sentenceChecker(sentence) {
    // let us Initialize the counters
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // We Loop or iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
      // Increment the sentence length counter
    sentenceLength++;

      // Check if the current character is a space (Let us assumed the words are separated by a single space)
    if (sentence[i] === ' ') {
        // Increment the word count counter
        wordCount++;
    }

      // Check if the current character is a vowel (Not minding the case sensitivity)
    if (isVowel(sentence[i])) {
        // Increment the vowel count counter
        vowelCount++;
    }
    }

    // Increment the word count for the last word (after the last space)
    wordCount++;

    // Display the results
    console.log('Sentence Length:', sentenceLength);
    console.log('Word Count:', wordCount);
    console.log('Vowel Count:', vowelCount);
}

  // Function to check if a character is a vowel (case-insensitive)
function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

  // Let us use this as our example
const inputSentence = 'This is a sample sentence.';
sentenceChecker(inputSentence);


// The output of this code will be:
// Length of sentence: 16
// Number of words: 3
// Number of vowels: 4