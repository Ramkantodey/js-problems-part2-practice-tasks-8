// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];


function lowestNumber(numbers){
    let min = numbers[0];
    for(const number of numbers){
        if(min > number){
            min = number;
        }
    }
    return min;
}

const result = lowestNumber([10, 20, 5, 40, 80]);
console.log(result);