let sum = [];

for(let i = 0; i < 6; i++){
    let myNumber = parseInt(prompt("Dammi un numero"));
    if(myNumber % 2 != 0){
        sum.push(myNumber);
    }
}

console.log(sum);