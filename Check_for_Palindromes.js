// String.prototype.replace()
// String.prototype.toLowerCase()
// regular expression

function palindrome(str){
	var testString = str.toLowerCase();
	var expression = /[a-z0-9\^s]/gi;
	if (testString.match(expression).reverse().join("") == testString.match(expression).join("")){
		return true; 
		} else {
			return false;
				}
		}

palindrome("Sex");

