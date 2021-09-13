let num = "3000000"

num = num.split('');
//invierto el orden del string
num = num.reverse();
//junto todos los caracteres de la cadena
num = num.join('');
//busco los dos primeros caracteres y le coloco una coma en la siguiente posición
num = num.replace(/(?=\d*\.?)(\d{2})/,'$1,');
//invierto del contenido de la cadena y reemplazo todo lo que no sea números o comas
num = num.split('').reverse().join('').replace(/^[\,]/,'');

 console.log(num);