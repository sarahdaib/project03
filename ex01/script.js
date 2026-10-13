function calculateGrade(score) {
    // Input Validation: Check if input is not a number or out of valid range (0 to 100)
    if (typeof score !== 'number' || isNaN(score) || score < 0 || score > 100) {
        return "Invalid score";
    }

    // Decision-making logic for letter grades
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

// ==========================================
// Function 2: checkAccess
// ==========================================
function checkAccess(age, hasTicket) {
    // Input Validation: Check if age is a valid non-negative number and hasTicket is a boolean
    if (typeof age !== 'number' || isNaN(age) || age < 0 || typeof hasTicket !== 'boolean') {
        return false;
    }

    // Access Condition: Must be 18 or older AND have a ticket
    if (age >= 18 && hasTicket === true) {
        return true;
    } else {
        return false;
    }
}

// ==========================================
// Console Tests (Boundary Cases & Validation)
// ==========================================

console.log("--- Testing calculateGrade ---");
console.log("Score 100:", calculateGrade(100)); // Expected: 'A'
console.log("Score 90: ", calculateGrade(90));  // Expected: 'A'
console.log("Score 89: ", calculateGrade(89));  // Expected: 'B'
console.log("Score 75: ", calculateGrade(75));  // Expected: 'C'
console.log("Score 60: ", calculateGrade(60));  // Expected: 'D'
console.log("Score 0:  ", calculateGrade(0));   // Expected: 'F'
console.log("Score -5: ", calculateGrade(-5));  // Expected: 'Invalid score'
console.log("Score 105:", calculateGrade(105)); // Expected: 'Invalid score'
console.log("Score 'A':", calculateGrade("90"));// Expected: 'Invalid score'

console.log("\n--- Testing checkAccess ---");
console.log("Age 20, Ticket true: ", checkAccess(20, true));   // Expected: true
console.log("Age 18, Ticket true: ", checkAccess(18, true));   // Expected: true
console.log("Age 17, Ticket true: ", checkAccess(17, true));   // Expected: false
console.log("Age 25, Ticket false:", checkAccess(25, false));  // Expected: false
console.log("Invalid Age (-1):    ", checkAccess(-1, true));   // Expected: false
console.log("Invalid Ticket type: ", checkAccess(20, "true")); // Expected: false