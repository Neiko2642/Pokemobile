//Creates the object for the pokemon
let starterKantoPokemon = [{
    "name": "Charmander",
    "type": "fire",
    "hp": 70,
    "speed": "40",
    "weaknesses": ["ground", "rock", "water"],
    "attack" : {
        "name" : "Fire Fang",
        "hp" : "20"
    }
},
{
    "name": "Bulbasaur",
    "type": ["Grass", "Poison"],
    "hp": "70",
    "speed": "30",
    "weaknesses": ["Fire", "Flying", "Ice", "Psychic"],
    "attack" : {
        "name" : "Vine Whip",
        "hp" : "50"

    }
},
{
    "name": "Squirtle",
    "type": "Water",
    "hp": "60",
    "speed": "20",
    "weaknesses": ["Electric", "Grass"],
    "attack" : {
        "name" : "Rain Splash",
        "hp" : "60"

    }
}];

let wildPokemon = [{
        "name": "Diglett",
        "type": "Ground",
        "hp": "50",
        "speed": "50",
        "weaknesses": ["Grass", "Ice", "Water"],
        "attack" : {
            "name" : "Hook",
            "hp" : "30"
    
        }
    },

];

//Creates the object for the pokestore
let pokeStore = [{
    "item" : "Poke Ball",
    "hp": "0",
    "price" : "200"
},
{
    "item" : "Potion",
    "hp": 100,
    "price" : "300"
},
{
    "item" : "Antidote",
    "hp": "0",
    "price" : "100"
},
{
    "item" : "Parlyz Heal",
    "hp": "0",
    "price" : "200"
}];


let playerName = prompt("What is your name");


// Creates the players pokemon container, wallet and item space.
let pokeBox = []; 
let pokeMoney = 0;
let pokeItems  = [];

//Oak asks you to pick your first pokemon
let hasPokemonBeenChosen = false;
while(!hasPokemonBeenChosen)
{
    let startingChoice = prompt("What is your starting Pokemon\n 1. " + starterKantoPokemon[0].name + ", 2." + starterKantoPokemon[1].name + ", 3." + starterKantoPokemon[2].name);
   if(startingChoice >= 1 && startingChoice <=3) {
     pokeBox.push(starterKantoPokemon[startingChoice - 1]);
     hasPokemonBeenChosen = true;
   } 
}
console.log('Professor Oak: Hmm...' + pokeBox[0].name + '. Good choice' + " " + playerName + "!");
console.log('You will need some money here is a band. Try buying something.');
pokeMoney += 1000;

//Has you buy something
let hasBoughtItem = false;
while(!hasBoughtItem){
    let startingItem = prompt("What item do you wannt 1. " + pokeStore[0].item + ", 2." + pokeStore[1].item + ", 3." + pokeStore[2].item + "Type NO if dont want nuthin");
    if(startingItem == 3 || startingItem == 2 || startingItem == 1){
    let amount = prompt("How many would you like to buy?");
    if(startingItem >= 1 && startingItem <=3) {

        if(pokeStore[startingItem - 1].price * amount < pokeMoney){

        for(i = 0; i < amount; i++){
            pokeItems.push(pokeStore[startingItem - 1] );
        }
            pokeMoney -= (pokeStore[startingItem - 1].price * amount);
            hasBoughtItem = true;
            
        } else{
            console.log("fuck you");
        } 
      }
    }else{
        console.log("okay loser");
        hasBoughtItem = true;
    }
}

console.log("You are going to use your first pokemon " + pokeBox[0].name + " to fight a " + wildPokemon[0].name)




//Puts you against your first battle.
let firstFight = false;
let enemyPokemon = wildPokemon[0].hp;
while(!firstFight){
let fightOptions = prompt("1. Fight, 2.Items, 3.Potions " + wildPokemon[0].name + ":" + wildPokemon[0].hp + " " + pokeBox[0].name + ":" + pokeBox[0].hp);
if(fightOptions == 1){

if(!firstFight){
    wildPokemon[0].hp -= pokeBox[0].attack.hp;

    if (wildPokemon[0].hp <= 0) {
      console.log("You have won!");
      firstFight = true;
    } else {
      console.log(wildPokemon[0].hp);
    }

    pokeBox[0].hp -= wildPokemon[0].attack.hp;
    if (!firstFight && pokeBox[0].hp <= 0) {
      console.log(wildPokemon[0].name + " has killed you");
      firstFight = true;
    } else {
      console.log(pokeBox[0].hp);
    }

}

}else if(fightOptions == 2){
    let enemyPercent = wildPokemon[0].hp / enemyPokemon * 100;
if(pokeItems[0].item.includes("Poke Ball") == true){
    if(enemyPercent < 40){
        pokeBox.push(wildPokemon[0]);
        console.log("Pusheddd");
        pokeItems.shift();
        firstFight = true;
    }else{
        console.log("Try attacking");
    }
}else{
    console.log("You need to buy pokeball");
}
}else if(fightOptions == 3){

    if(pokeItems[0].item.includes("Potion") == true){
        pokeBox[0].hp += pokeItems[0].hp;
        pokeItems.shift();
        console.log("You have healed urrr pokemon");
    }else{
        console.log("You need to buy some Potions");
    }

}else{
        
}

}
