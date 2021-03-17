function myDoWhile () {
    
    var myNumbers = "";
    
    var i = 0;
    do {
      
        myNumbers += i;
        if (i < 9){
        myNumbers += ", ";
      }
        i++;
    }while (i < 10)
    
    console.log(myNumbers);
}
myDoWhile();

module.exports = myDoWhile;
