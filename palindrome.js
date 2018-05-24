// Reverses a string.
function reverse(string) {
    return Array.from(string).reverse().join("");
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent() === reverse(this.processedContent());
}

// Return array of email components.
function emailParts(email) {
    email_string = email.toLowerCase();
    return email_string.split('@');
}

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

// Determine if a String is empty or is whitespace.
String.prototype.blank = function(){
    return !!this.match(/^\s*$/);
};

// Return the last element in an array
Array.prototype.last = function() {
    return this.splice(-1);
};

// Defines a Phrase object.
function Phrase(content) {
    this.content = content;

    this.processor = function(string) {
        return string.toLowerCase();
    }

    // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.processor(this.content);
    }

    // Returns true if the phrase is a palindrome, false otherwise.
    this.palindrome = function palindrome(string) {
        return this.processedContent() === this.processedContent().reverse();
    }

    // Returns uppercased phrase content.
    this.louder = ()=> this.content.toUpperCase();
}

function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;
    this.processedContent = function processedContent() {
        return this.processor(this.translation);
    }
}
TranslatedPhrase.prototype = new Phrase();
