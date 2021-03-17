function myEqualFunction(num) {
    if (num === 23) {
        return "Equal";
    }
    return "Not Equal";
}

myEqualFunction(5);
myEqualFunction(23);
myEqualFunction("23");
myEqualFunction('23');
myEqualFunction("text");

module.exports = myEqualFunction;
