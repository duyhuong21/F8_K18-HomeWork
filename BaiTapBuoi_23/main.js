// lesson 1:
function classifyTriangle(a, b, c) {

    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Not a triangle";
    }
    else{
        if (a === b && b === c) {
            return "Equilateral triangle";
        }
        else if (
            a * a === b * b + c * c ||
            b * b === a * a + c * c ||
            c * c === a * a + b * b
        ) {
            if (a === b || a === c || b === c) {
                return "Isosceles right triangle";
            }
            return "Right triangle";
        }
        else if (a === b || a === c || b === c) {
            return "Isosceles triangle";
        }
        else{
            return "Normal triangle";
        }
    }
}

console.log(classifyTriangle(3, 4, 5)); // Right triangle
console.log(classifyTriangle(2, 2, 2)); // Equilateral triangle
console.log(classifyTriangle(2, 2, 3)); // Isosceles triangle
console.log(classifyTriangle(1, 2, 3)); // Not a triangle

// lesson 2:
function isPerfectSquare(a) {
    if (a < 0) return false;

    const sqrt = Math.sqrt(a);
    return Number.isInteger(sqrt);
}
console.log(isPerfectSquare(6));   // true
console.log(isPerfectSquare(9));   // true

