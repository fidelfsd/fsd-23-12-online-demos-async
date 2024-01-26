const saludo = () => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve("Hola mundo");
      }, 2000);
   });
};

saludo().then((data) => {
   console.log(data);
});
