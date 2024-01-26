const parImpar = (numero) => {
   return new Promise((resolve, reject) => {
      // detectar si es par
      if (numero % 2 === 0) {
         setTimeout(() => {
            resolve("Es par"); // se lee con .then()
         }, 2000);
      } else {
         reject(new Error("El numero es impar")); // se lee con .catch()
      }
   });
};

parImpar(6)
   .then((data) => {
      console.log(data);
   })
   .catch((error) => {
      console.log(error.message);
   });
