// Get max number
let max;
while (true) {
    let input = prompt("Enter a maximum number:");
    if (isNaN(input) || input <= 0) {
        alert("Invalid input! Please enter a positive number.");
    } else {
        max = Math.round(input);
        break;
}

}

// Generate random number using the max from the input
let randomNumber = Math.floor(Math.random() * max) + 1;

document.getElementById("instructions").textContent = `Guess a number between 1 and ${max}:`;

let guessList = [];

// Add event listener to guess button
document.getElementById("submit").addEventListener("click", function() {
let guess = Number(document.getElementById("guess").value);

// Checks
if (isNaN(guess)) {
    document.getElementById("result").textContent = "Numbers only!";
    return;
}

if (guess < 1 || guess > max) {
    document.getElementById("result").textContent = "That number is not in range, try again.";
    return;
}

if (guessList.includes(guess)) {
    document.getElementById("result").textContent = "You've already guessed that number!";
    return;
}

// Add guess to list and update attempt count
guessList.push(guess);
let attempts = guessList.length;

// Check if guess is correct
if (guess === randomNumber) {
    document.getElementById("result").textContent = `You got it! It took you ${attempts} attempts and your guesses were ${guessList.join(", ")}.`;
} else if (guess < randomNumber) {
    document.getElementById("result").textContent = "No, try a higher number.";
} else {
    document.getElementById("result").textContent = "No, try a lower number.";
}

// Update attempts count
if (attempts === 1) {
    document.getElementById("attempts").textContent = `You've made ${attempts} attempt.`;
} else {
    document.getElementById("attempts").textContent = `You've made ${attempts} attempts.`;
}
});