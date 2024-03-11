let sum = 0;

for(let i = 0; i < 5; i++){
    let myNumber = parseInt(prompt("Dammi un numero"));
    if(myNumber !== ""){
        sum += myNumber;
    }
}

console.log(sum);