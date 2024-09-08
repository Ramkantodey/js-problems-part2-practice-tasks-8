// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.


function totalMoney(laptopQuantity, tabletQuantity, mobileQuantity){
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    const laptopTotal = laptopQuantity * laptop;
    const tabletTotal = tabletQuantity * tablet;
    const mobileTotal = mobileQuantity * mobile;

    const total = laptopTotal + tabletTotal + mobileTotal;
    return total;
}
const result = totalMoney(0, 0, 5);
console.log(result);