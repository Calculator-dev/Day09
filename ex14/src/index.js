var evenNumbers = "";

function myForLoop1 () {
    for (var result1 = 0; result1 <= 8; result1 += 2){
        evenNumbers += result1; 
        if (result1 < 8){
          evenNumbers += ", ";
        }
    }
    
}

var evenInverseNumbers = "";
function myForLoop2 () {
    for (var result2 = 8; result2 >= 0; result2 -= 2){
        evenInverseNumbers += result2;
        if (result2 > 0 ){
          evenInverseNumbers += ", ";
        }
    }
    console.log(evenNumbers + ", " + evenInverseNumbers);
}

myForLoop1();
myForLoop2();

module.exports = {
    myForLoop1,
    myForLoop2
};
