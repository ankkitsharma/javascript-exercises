const sumAll = function (num1, num2) {
    let sum = 0;
    console.log(num1, num2, isNaN(num1), isNaN(num2));
    if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    } else {
        if (num1 < num2) {
            for (num1; num1 <= num2; num1++) {
                sum += num1;
            }
        } else {
            for (num2; num2 <= num1; num2++) {
                sum += num2;
            }
        }
        return sum;
    }


};

// Do not edit below this line
module.exports = sumAll;
