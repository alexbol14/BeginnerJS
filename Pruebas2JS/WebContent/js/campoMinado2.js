//JUEGO CAMPO MINADO MINIMIZADO, NO REQUIERE SENTENCIAS IF EXTRA; NO UTILIZA FUNCIONES
//1 = Bomba. 0 = No hay bomba
var campo = [ [ 1 , 0 , 0 ] ,
              [ 0 , 1 , 0 ] ,
              [ 1 , 0 , 1 ] ];

var textos = ["Te salvaste", "Explotaste"];

alert("Estás en un campo minado\n" +
      "Elije una posición entre el 0 y el 2 para X y para Y");

var x = prompt("Posición en X? (entre 0 y 2)",0);
var y = prompt("Posición en Y? (entre 0 y 2)");
if(x<=2 && y<=2)
{
    var posicion= campo[x][y];
    document.write (textos[posicion]);
}
else
document.write("¡Te saliste del campo! - Explotaste!");