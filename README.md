# JOHN-S-ALGORITHM-PROJECT

**How it Works**
The algorithm uses three variables as counters to keep track of the length of the sentence,
the number of words, and the number of vowels.
It loops through each character in the sentence, 
increments the counters accordingly, and then displays the results.

**Assumptions**
Each character is treated separately.
Words are assumed to be separated by a single space.
The last character is a period.
Feel free to customize and integrate this algorithm into your projects or use it as a standalone tool for sentence analysis!

# Sentence checker

This simple JavaScript algorithm reads a sentence character by character and provides information about the sentence:

- **Length of the Sentence:** The total number of characters in the sentence.
- **Number of Words:** The count of words in the sentence, assuming words are separated by a single space.
- **Number of Vowels:** The count of vowels in the sentence.

## Usage

To use the algorithm, you can follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/sentence-analyzer.git
    cd sentence-analyzer
    ```

2. Open the `index.html` file in a web browser.

3. The algorithm will prompt you to enter a sentence. Once entered, it will display the analysis results in the console.

## Example

```javascript
const sentence = 'This is a sample sentence.';
analyzeSentence(sentence);
