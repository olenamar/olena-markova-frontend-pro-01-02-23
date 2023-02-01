function sumNumber(){
    let sum = 0;
    return function(number){
        sum += number;
        return sum;
    }
}
const sum = sumNumber();

console.log(sum(5)); 
console.log(sum(7)); 
console.log(sum(20)); 