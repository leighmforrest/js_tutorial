let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Returns a URL-frinedly version of a string.
// Example: "North Dakota -> "north-dakota"
let urlify = string => string.toLowerCase().split(/\s+/).join('-')

// map: Imperative version
let imperativeMap = states => {
    let urlStates = [];
    states.forEach(state => {
        urlStates.push(urlify(state));
    });
    return urlStates;
}

// map: Functional version
let functionalMap = states => states.map(state => urlify(state))

let urlStates = states => states.map(state => `http://example.com/${urlify(state)}`)

// filter: Imperative version
function imperativeFilter(states) {
    let singleWordStates = [];
    states.forEach(state => {
        if (state.split(/\s+/).length === 1) {
            singleWordStates.push(state)
        }
    });
    return singleWordStates;
}

// filter: Functional version
function functionalFilter(states) {
    return states.filter(state => state.split(/\s+/).length === 1);
}

// filter: Get the Dakotas
function includesDakotas(states) {
    return states.filter(state => state.includes('Dakota'))
}

// filter: Make sure the Dakotas are two words.
function twoWordDakotas(states) {
    return states.filter(state => state.split(/\s/).length == 2);
}

// reduce: iterative solution
function iterativeSum(array) {
    cum = 0;
    array.forEach(n => cum += n);
    return cum;
}
// reduce: Functional solution
function functionalSum(array) {
    return array.reduce((total, n) => { return total += n});
}

// reduce: Imperative solution
function imperativeLengths(states) {
    let lengths = {};
    states.forEach(function(state) {
        lengths[state] = state.length;
    });
    return lengths;
}

// add state length to lengths object literal argument
let addLength = (lengths, state) => { lengths[state] = state.length; return lengths;}

// reduce: Functional solution
function functionalLengths(states) {
    return states.reduce(addLength, {});
}

// reduce: Functional solution
function functionalProduct(array) {
    return array.reduce((total, n) => { return total *= n});
}

// Run the program
console.log(imperativeMap(states));
console.log(functionalMap(states));
console.log(urlStates(states));
console.log(twoWordDakotas(includesDakotas(states)));
console.log(iterativeSum(a));
console.log(imperativeLengths(states));
console.log(functionalLengths(states));
console.log(functionalProduct(a));
