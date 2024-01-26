const nombreConDemora = () => {
   setTimeout(() => {
      console.log("Hola");
   }, 2000);
};

// -----------------------------------------------------------------------------
console.log("Primero");
nombreConDemora();
console.log("Tercero");
