// String.prototype.split()
// String.length

function findLongestWord(str){
				var array = str.split(' ');
				var maxLength = array[0].length;
				for(var i=0; i< array.length; i++){
					if(array[i].length > maxLength)
						maxLength = array[i].length;
				} return maxLength;
			}
findLongestWord("The quick brown fox jumped over the lazy dog");