const wordSearch = (letters, word) => { 
    // edge case of there not being and letters in words or letters
    if (letters.length <= 0 || word.length <= 0) return false;
     // maps the array of arrays into an array of strings
     let verticalJoin = []
     for (let i = 0; i < letters[0].length; i++) {
       verticalJoin.push([]);
       for (let j = 0; j < letters.length; j++) {
         verticalJoin[i].push(letters[j][i]);
        }
       }
    verticalJoin = verticalJoin.map(ls => ls.join(''))
     const horizontalJoin = letters.map(ls => ls.join(''))
   
    // maps a new array of the charcters that share an index from each of the provided arrays
    
    // for string in array horizontalJoin
    for (l of horizontalJoin) {
      // if string x in horizontalJoin contains string argument "word"
        if (l.includes(word)) return true; 
        
        for ( let j of verticalJoin) {
            if(j.includes(word)) return true;
        }
            
         }
         return false;
    }
    


module.exports = wordSearch