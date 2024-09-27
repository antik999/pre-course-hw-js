let number1 = Math.floor(Math.random() * 100);
let numberChetStatus;
function numberChet () {    
    if (number1 % 2 == 0) {numberChetStatus = ":Это четное число"}
    else numberChetStatus = ":Это нечетное число";
    return numberChetStatus;
}
numberChet ();
console.log(number1 + numberChetStatus)
