// Reverses a string.
function reverse(string) {
    return Array.from(string).reverse().join("");
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}

// Return array of email components.
function emailParts(email) {
    email_string = email.toLowerCase();
    return email_string.split('@');
}
