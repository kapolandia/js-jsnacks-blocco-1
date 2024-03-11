const myNumbers = [];

for(let i = 0; i < 5; i++){
    let myNumber = parseInt(prompt("Dammi un numero"));
    if(!myNumbers.includes(myNumber)){
        myNumbers.push(myNumber);
    }
}

console.log(myNumbers);