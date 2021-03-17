  

var evenNumbers = "";
function myForLoop1 () {
  
    for (var result1 = 0; result1 <= 8; result1 += 2){
        evenNumbers += result1; 
        if (result1 < 8 ){
          evenNumbers += ", ";
        }
    }
    return evenNumbers;
}


function myForLoop2 () {
  var evenInverseNumbers = "";
    for (var result2 = 8; result2 >= 0; result2 -= 2){
        evenInverseNumbers += result2;
        if (result2 > 0 ){
          evenInverseNumbers += ", ";
        }
        
    }
    return evenInverseNumbers;
    
}

console.log(myForLoop1());
console.log(myForLoop2());

module.exports = {
    myForLoop1,
    myForLoop2
};
