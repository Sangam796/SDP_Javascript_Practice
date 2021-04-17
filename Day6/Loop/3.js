/**Create a function which concantenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7. */
 function jazzify(arr) {
     for(let i = 0; i<arr.length;i++)
     {
         if(!(arr[i].includes('7')))
         arr[i] = arr[i] + '7';

     }
     return arr;
	
}
console.log(jazzify(["Dm", "G", "E", "A"]));
console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]));

