const sentence = '|/-\\|/-';
let delay = 100;

for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char+'\r');
    }, delay);
    delay += 200
  }

  setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\n'); 
}, delay+200);