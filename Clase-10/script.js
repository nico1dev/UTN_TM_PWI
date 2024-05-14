/* 
JS es un lenguaje interpretado por V8engine
JS es un lenguaje case sensitive
*/
/* 
alert("hola mundo")
 */

//tipos de datos:

/* 
PRIMITIVOS:
string => para representar textos: 'hola', 'pepe', "hola mundo", '3', ´1´
boolean => para representar estados booleanos, true, false
number => para representar datos numericos: 1 -1 1.1 NaN Infinity
null => para representar nulidad: null
undefined => para reprensentar el estado indefinido: undefined
*/

/* 
Constructores
Number => rabsformar un dato a numero
String => transforma un dato a string
Boolean => transforma un dato a boolean
*/




//Operadores Atitmeticos

/* 
Devuelven strings
+ => concatenacion


Devuelven numeros
+ => suma
- => resta
* => multiplicacion
/ => divicion
% => resto de la divicion 
/*

/* 
1 + true
subprocesi: 1 + Number
subproceso: 1 + 1 = 2

true + true
Number(true) + Number(true) 
1 + 1 = 2
*/

/* 
1 + '1'
String(1) + '1'
'1' + '1' = '11'

null + 'juan' 'nulljuan'

5 + true = 6

null + undefined = 
Number(null) + Number(undefined)
0 + NaN = NaN
*/



//Comparadores SIEMPRE DEVUELVEN BOOLEAN


/* 
== igualdad
=== igualdad de valor y tipo de dato (estricta igualdad)
!= diferencia
!== estricta diferencia
> mayor
< menor
>= mayor igual
<= menor igual


Excepciones:
null solo es igual a null o undefine.
NaN no es igual a NINGUN OTRO DATO, en caso de querer comparar con NaN debemos usar la funcion isNaN().
*/


/* 
Valores thurty y falsy:
para saber si un valor es thurty o falsy debemos pasalor a boolean
bolean(valor_a_verificar) // true o falce

Falsy:
''
0
-0
NaN
false
undefined
null

*/