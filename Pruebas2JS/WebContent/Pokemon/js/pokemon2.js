function Pokemon(n,v,a)
{
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.grito = "Pika!";
    this.gritar = function ()
    {
        alert(this.grito);
    }
}

function inicio()
{
    var rattata = new Pokemon("Rattata", 40, 2);
    rattata.vida = rattata.vida - 13;
    //nombrePokemon.textContent = rattata.nombre;
    nombrePokemon.innerText = rattata.nombre;
    rattata.grito="RARARA";
    rattata.gritar();
    console.log(rattata);
}