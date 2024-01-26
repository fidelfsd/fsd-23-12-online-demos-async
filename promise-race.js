const p1 = new Promise((resolve, reject) => {
   setTimeout(resolve, 500, "uno");
});
const p2 = new Promise((resolve, reject) => {
   setTimeout(resolve, 100, "dos");
});
Promise.race([p1, p2]).then((value) => {
   console.log(value); // "dos"
   // Ambas se resuelven, pero la p2 antes.
});
