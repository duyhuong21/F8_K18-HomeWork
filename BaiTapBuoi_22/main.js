// Lesson 1: Academic performance classification
(function classifyScore() {
    const score = 9.9;
    if (score < 0 || score > 10 || isNaN(score)) {
        console.log("Score is invalid");
    }
    else if (score >= 9) {
        console.log("Excellent");
    }
    else if (score >= 8) {
        console.log("Very good");
    }
    else if (score >= 6.5) {
        console.log("Good");
    }
    else if (score >= 5) {
        console.log("Average");
    }
    else {
        console.log("Weak");
    }
})();

// Lesson 2: Day is a Month Calculator
(function showDaysInMonth() {
    const month = 13;
    const year = 2024;
    switch (month) {
        case 1: console.log("January has 31 days"); break;
        case 2:
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                console.log("February has 29 days");
            } else {
                console.log("February has 28 days");
            }
            break;
        case 3: console.log("March has 31 days"); break;
        case 4: console.log("April has 30 days"); break;
        case 5: console.log("May has 31 days"); break;
        case 6: console.log("June has 30 days"); break;
        case 7: console.log("July has 31 days"); break;
        case 8: console.log("August has 31 days"); break;
        case 9: console.log("September has 30 days"); break;
        case 10: console.log("October has 31 days"); break;
        case 11: console.log("November has 30 days"); break;
        case 12: console.log("December has 31 days"); break;
        default:
            console.log("Invalid month (1–12)");
    }
})();

// Lesson 3: Even/Odd check
const number = 55
console.log( number % 2 === 0 ? "Even number" : "Odd number");

// Lesson 4: Movie ticket price calculation
const ageCustomer = 12;
console.log(
    ageCustomer < 13
        ? "Your ticket price is 50k"
        : "Your ticket price is 100k"
);

// Lesson 5: Temperature Conversion
(function convertCelsiusToFahrenheit() {
    const celsius = 10;
    const fahrenheit = celsius * 1.8 + 32;
    console.log("Fahrenheit: ",fahrenheit);
})();

// Lesson 6: Household electricity bill calculation

function calculateElectricityBill(kWh) {
    let total = 0;

    if (kWh <= 50) {
        total = kWh * 1678;
    }
    else if (kWh <= 100) {
        total = 50 * 1678
            + (kWh - 50) * 1734;
    }
    else if (kWh <= 200) {
        total = 50 * 1678
            + 50 * 1734
            + (kWh - 100) * 2014;
    }
    else {
        total = 50 * 1678
            + 50 * 1734
            + 100 * 2014
            + (kWh - 200) * 2536;
    }

    return total;
}
const consumption = 250;
console.log("Amount to pay:", calculateElectricityBill(consumption), "VND");

