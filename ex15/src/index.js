
function myDoWhile () {
    
    var myNumbers = "";
    
    var i = 0;
    do {
        myNumbers += i + ", ";
        i++;
    }while (i < 10)
    console.log(myNumbers);
}
myDoWhile();

module.exports = myDoWhile;