var mMarks = parseInt(prompt("Marks in Maths")!);
var cMarks = parseInt(prompt("Marks in chemistry")!);
var pMarks = parseInt(prompt("Marks in physics")!);

function findAvg(x: number, y: number, z: number) {
  var avg = (x + y + z) / 3;
  findGrade(avg);
  function findGrade(mark: number) {
    if (mark >= 90) {
      alert("A grade");
    } else if (mark >= 60) {
      alert("B grade");
    } else if (mark < 60) {
      alert("c grade");
    }
  }
}

findAvg(mMarks, cMarks, pMarks);
