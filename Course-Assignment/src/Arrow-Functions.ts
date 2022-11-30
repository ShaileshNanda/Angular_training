var value = parseInt(prompt("Enter the number")!);
var myArrFun = (num: number): number => {
  var i;
  for (i = 10; i > 0; i--) {
    if (num / i === 0) {
      console.log("Its a prime number");
      break;
    } else {
      console.log("Its not a prime number");
    }
  }
  return i;
};

myArrFun(value);
