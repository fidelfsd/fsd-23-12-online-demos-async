const sumaConDemora = (numero1, numero2, callback) => {
   const suma = numero1 + numero2;

   setTimeout(() => {
      callback(suma);
   }, 5000);
};

const funcionCallback = (resulado) => console.log(resulado);

console.log("primero");
console.log("segundo");
sumaConDemora(2, 4, funcionCallback);
console.log("otros 1");
console.log("otros 2");
