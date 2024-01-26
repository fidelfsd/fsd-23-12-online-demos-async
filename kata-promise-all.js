const numeroAleatorio = () => {
   const numero = Math.ceil(Math.random() * 10);
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(numero);
      }, numero * 400 + 500);
   });
};

const sumaPromise = Promise.all([numeroAleatorio(), numeroAleatorio()]);

sumaPromise.then((data) => {
   console.log(data);
   console.log(data[0] + data[1]);
});
