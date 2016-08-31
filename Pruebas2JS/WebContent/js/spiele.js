//Funcion que me retorna un numero aletorio entre minimo y maximo
function aleatorio(minimo, maximo)

{

	var numero = Math.floor((Math.random() * (maximo - minimo + 1)) + minimo);
	return numero;

}


var piedra = 0;

var papel = 1;

var tijeras = 2;


var opciones = ["Piedra", "Papel", "Tijeras"];

var resultados1 = ["<h1>¡Empate!</h1>", "<h1>¡Has perdido!</h1>", "<h1>¡Has ganado!</h1>"];

var resultados2 = ["<h1>¡Has ganado!</h1>", "<h1>¡Empate!</h1>", "<h1>¡Has perdido!</h1>"];

var resultados3 = ["<h1>¡Has perdido!</h1>", "<h1>¡Has ganado!</h1>", "<h1>¡Empate!</h1>"];


var opcionUsuario;

var opcionMaquina = aleatorio(0,2);


//Si quisiera podria no usar la funcion, pues ya se que maximo y minimo me representan
// las 3 opciones que tiene el juego, las cuales nunca cambiarian. La forma resumida
//y optima es escribir la siguiente sentencia
//opcionMaquina = Math.floor(Math.random() * 3);

opcionUsuario = prompt("¿Qué eliges?\nPiedra:0\nPapel:1\nTijeras:2", "0");

document.write("¡Elegiste " + opciones[opcionUsuario] + "!<br />");

document.write("¡Tu oponente eligió " + opciones[opcionMaquina] + "!<br />");


if(opcionUsuario == piedra)

	document.write(resultados1[opcionMaquina]);

else if(opcionUsuario == papel)

	document.write(resultados2[opcionMaquina]);

else if(opcionUsuario == tijeras)

	document.write(resultados3[opcionMaquina]);
else
{
    document.write("NO ESCRIBISTE UN NUMERO ENTRE 0 y 2 - NO JUGASTE");
}