let a = ['ant', 'bat', "cat", 42];
a.forEach(element => {
    console.log(element);
})

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach((character)=>{
    console.log(character);
});

a = [8, 17, 42, 99];
a.sort((a, b)=> { return a - b});
console.log(a)
