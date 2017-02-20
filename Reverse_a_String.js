// Global String Object
// String.prototype.split()
// Array.prototype.reverse()
// Array.prototype.join()




function reverseString(str) {
  
  var res = str.split("");
  var array = res;
  var newArray = [];
  newArray = array.reverse();
  var newString = newArray.join("");
  return newString;
}

reverseString("Harry Davis");
