interface Book {
  title: string;
  isbn: string;
  description: string;
  price: number;
}
var lib: Book = {
  title: "The Best",
  isbn: "A2121",
  description: "The best book available",
  price: 456,
};

console.log(lib);
