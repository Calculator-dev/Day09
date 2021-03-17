var evenNumbers = "";

function myForLoop1 () {
    for (var result1 = 0; result1 <= 8; result1 += 2){
        evenNumbers += result1 + ", "; 
    }
    console.log(evenNumbers);
}

var evenInverseNumbers = "";
function myForLoop2 () {
    for (var result2 = 8; result2 >= 0; result2 -= 2){
        evenInverseNumbers += result2 + ", ";
        
    }
    console.log(evenInverseNumbers);
}

myForLoop1();
myForLoop2();

module.exports = {
    myForLoop1,
    myForLoop2
};
