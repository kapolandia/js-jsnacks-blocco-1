let x = [1,2,3,22,5,6,7,8,9,10];
let maxNum = 0
for(let i = 0; i < x.length; i++){
    if(maxNum < x[i]){
        maxNum = x[i];
    }
}
console.log(maxNum);
