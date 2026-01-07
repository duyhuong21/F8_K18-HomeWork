// Lesson 1: Academic performance classification
function getStudentLevel(score) {
    if (typeof score !== "number" || score < 0 || score > 10) {
        return "Score is invalid";
    }

    if (score >= 9) return "Excellent";
    if (score >= 8) return "Very good";
    if (score >= 6.5) return "Good";
    if (score >= 5) return "Average";
    return "Weak";
}
console.log(getStudentLevel(9.9));
console.log(getStudentLevel(4.5));


// Lesson 2: Day is a Month Calculator
function getDaysInMonth(month, year) {
    if (month < 1 || month > 12) {
        return "Invalid month (1–12)";
    }
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return "Month has 31 days";
        case 4: case 6: case 9: case 11:
            return "Month has 30 days";
        case 2:
            const isLeap =
                (year % 4 === 0 && year % 100 !== 0) ||
                year % 400 === 0;
            return isLeap ? "February has 29 days" : "February has 28 days";
    }
}
console.log(getDaysInMonth(2, 2024));
console.log(getDaysInMonth(13, 2024));

// Lesson 3: Even/Odd check
function isEvenNumber(number) {
    return number % 2 === 0;
}

// Lesson 4: Movie ticket price calculation
function getTicketPriceByAge(age) {
    const ticketPrice = age < 13 ? 50000 : 100000;
    return ticketPrice;
}
console.log("Ticket price:", getTicketPriceByAge(12), "VND");
console.log("Ticket price:", getTicketPriceByAge(20), "VND");

// Lesson 5: Temperature Conversion
function toFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}
console.log("Fahrenheit:", toFahrenheit(10));

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