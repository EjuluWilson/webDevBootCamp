function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆

  //Write your code here:
  let fibonacciArray = [0, 1];

  if (n === 1) {
    fibonacciArray.pop();
  } else if (n == 2) {
  } else if (n >= 3) {
    // initial indexes
    let prevPrevIndex = 0; //n-3
    let preIndex = prevPrevIndex + 1; //n-2

    while (preIndex <= n - 2) {
      let nextItem = fibonacciArray[prevPrevIndex] + fibonacciArray[preIndex];
      fibonacciArray.push(nextItem);
      prevPrevIndex +=1;
      preIndex +=1;
    }
  }

  return fibonacciArray;

  //Return an array of fibonacci numbers starting from 0.

  //Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(3));
