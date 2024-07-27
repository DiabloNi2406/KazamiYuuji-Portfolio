let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const guess = Number(guessInput.value);
    
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    if (guess < numberToGuess) {
        feedback.textContent = 'Too low! Try again.';
    } else if (guess > numberToGuess) {
        feedback.textContent = 'Too high! Try again.';
    } else {
        feedback.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    }
}