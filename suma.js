var contador = 0;    

for (var i=2 ; i < process.argv.length; i++){
(Number(process.argv[i]));
contador = Number(process.argv[i]) + contador;
}
 console.log (contador);
