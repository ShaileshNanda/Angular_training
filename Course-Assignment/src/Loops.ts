var i = 0;
var num: string | null = prompt("Enter the number")!;

if (typeof num === "string") {
  var y = parseInt(num);
  while (y > i) {
    if (i % 5 !== 0) {
      console.log(i);
    }
    i++
  }
}
