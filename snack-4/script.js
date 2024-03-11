let sum = 0;

for(let i = 0; i < 10; i++){
    let myNumber = parseInt(prompt("Dammi un numero"));
    sum += myNumber;
}

let media = sum / 10;

console.log("somma: " + sum, "media: " + media);