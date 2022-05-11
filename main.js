let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 
'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 
'Learn', 'JavaScript'];

console.log(secretMessage);

// Step 1 - Remove the last string of the array
secretMessage.pop();

// Step 2 - Check your work in the console
console.log(secretMessage);

// Step 3 - Add the words 'to' and 'Program' to the end of the array
secretMessage.push('to', 'Program');

console.log(secretMessage);

// Step 4 - Change the word 'easily' to 'right'
secretMessage.splice(7, 1, 'right');

console.log(secretMessage);

// Step 5 - Remove the first string of the array
secretMessage.shift();

console.log(secretMessage);

// Step 6 - Add 'Programming' to the beginning of the array
secretMessage.unshift('Programming');

console.log(secretMessage);

// Step 7 - Remove 'get', 'right', 'the', 'first', 'time,', and replace with 'know,'
secretMessage.splice(6, 5, 'know,');

console.log(secretMessage);

// Step 8 - Print the array as a sentence
console.log(secretMessage.join(' '));

// Result from the console:
// Programming is not about what you know, it is about what you can figure out. -2015, Chris Pine, Learn to Program
