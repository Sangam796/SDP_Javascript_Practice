//set and count
//?/
function makeCounter() {
    let count = 0;

    function counter() {
      return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;
  
    return counter;
  }
counter = makeCounter();
console.log(counter.set(12));
console.log(counter.decrease());
console.log(counter());
