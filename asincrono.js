let foo = 1;
console.log(foo);
const callback = () => {
   foo++;
   console.log(foo);
};
setTimeout(callback, 0);
console.log(foo);
