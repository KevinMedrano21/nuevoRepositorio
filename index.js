let a = 2, b = 5, r, s = "resultado = ";

r = a+b

const persona = { 
    nombre: "Kevin",
    apellidoPaterno: "Medrano",
    apellidollidoMaterno: "Arellano",
    semestre: 7
}

const frutas = ["naranja", "manzana", "platano", "tomate", 2, true]


function promedio (u1, u2, u3, u4){
    let prom = (u1 + u2 + u3 + u4)/4 
    return prom
}



const pokemon = {
    Nombre: "Squirtle",
    Tipo: "agua",
    Rareza: "inusual",
    Estatura: 0.5,
    ataque: 120,
    defensa: 80,

    realizarAtaque: function(){
        console.log(pokemon.Nombre, "ataca con un daño de", pokemon.ataque)
    
    },

    realizarDefensa: function(){
        console.log(pokemon.Nombre, "se defiende y reduce", pokemon.defensa, "puntos del ataque")
    },

    calculoDaño: function(dañoEnemigo){
        const calculoDaño = dañoEnemigo - this.defensa 
        
        if (calculoDaño <= 0) {
            console.log(pokemon.Nombre, "recibio", "0" , "de daño")
        
        }else{
            console.log(pokemon.Nombre, "recibio", calculoDaño, "de daño")
        }
    },
}

pokemon.realizarAtaque();
pokemon.realizarDefensa();
pokemon.calculoDaño(100);


console.log(promedio(8, 9, 7, 9));
