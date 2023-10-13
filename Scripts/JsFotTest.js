function getFactorial(n) {
    if (typeof n === 'number') {
        if (n === 0) {
            return 1;
        } else if (n < 0) {
            return 'not a valid input';
        } else {
            return n * getFactorial(n - 1);
        }
    } else if (typeof n === 'string' && !isNaN(n)) {
        const number = parseInt(n, 10);
        return getFactorial(number);
    } else {
        return 'not a number';
    }
}

function multiply(...values) {
    function multiplyValues(...newValues) {
        return multiply(...values.concat(newValues));
    }

    multiplyValues.toString = function () {
        return values.reduce((accumulator, currentValue) => accumulator * currentValue, 1).toString();
    };

    return multiplyValues;
}


module.exports = {
    getFactorial,
    multiply,
};