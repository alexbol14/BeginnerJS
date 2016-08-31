function Pokemon(n,v,a,g)

{
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.grito = g;
    this.gritar = function (){
        alert(this.grito);
    }
}

var poke = prompt(

        "Escoje un Pokemon de los siquientes;\n" +

        "1 -> Pikachu: Vida= 100 Ataque= 50\n" +

        "2 -> Charmander: Vida=  80 Ataque= 40\n" +

        "3 -> Squirtle: Vida= 75 Ataque= 39\n" 
);

if( poke == 1 ){
    var nom = "Pikachu";
    var vid = 100;
    var ataq = 50;
    var gri = "Pika!!";
}
else{
    if (poke == 2) {
        var nom = "Charmander";
        var vid = 80;
        var ataq = 40;    
        var gri = "Gruaa!!";   
    }
    else{
        if (poke == 3) {
            var nom = "Squirtle";
            var vid = 75;
            var ataq = 39;   
            var gri = "Buff!!";  
        }
    }
}

function inicio ()
{
    var poquemon = new Pokemon(nom, vid, ataq, gri);
    poquemon.vida = poquemon.vida - 13;
    nombrePokemon.textContent = poquemon.nombre;
    datosPokemon.textContent = "ATAQUE: " + poquemon.ataque + " ; VIDA " + poquemon.vida ;
    document.write( ' <img src="' + nom  + '.png" width="10%" height="20%"> ');
    poquemon.gritar();
}