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
//vars
let pokeBox = [];
let pokeMoney = 0;
let pokeItems  = [];
let hasPokemonBeenChosen = false;
let startingChoice, playerName, hasBoughtItem, startingItem, amount, firstFight, enemyPokemon, fightOptions, enemyPercent, Fight;

function onloadw(){
  setTimeout(function(){
    onload()
  },500)
}
function StartSequence(){
  PName()
}
function PName(){
  playerName = prompt("What is your name");


  // Creates the players pokemon container, wallet and item space.
  let pokeBox = [];
  let pokeMoney = 0;
  let pokeItems  = [];
  setTimeout(function(){
  OakGiveUMon();
  },200)
}
function OakGiveUMon(){
  //Oak asks you to pick your first pokemon
  hasPokemonBeenChosen = false;
  while(!hasPokemonBeenChosen)
  {
    startingChoice = prompt("What is your starting Pokemon\n 1. " + starterKantoPokemon[0].name + ", 2." + starterKantoPokemon[1].name + ", 3." + starterKantoPokemon[2].name);
   if(startingChoice >= 1 && startingChoice <=3) {
     pokeBox.push(starterKantoPokemon[startingChoice - 1]);
     hasPokemonBeenChosen = true;
   }
}
ATDL('Professor Oak: Hmm...' + pokeBox[0].name + '. Good choice' + " " + playerName + "!");
ATDL('You will need some money, here is some. Try buying something.');
pokeMoney += 1000;
  setTimeout(function(){
  FirstShop();
  },3000)
}
function FirstShop(){
  //Has you buy something
  hasBoughtItem = false;
  while(!hasBoughtItem){
    startingItem = prompt("What item do you wannt 1. " + pokeStore[0].item + ", 2." + pokeStore[1].item + ", 3." + pokeStore[2].item + "Type NO if dont want nuthin");
    if(startingItem == 3 || startingItem == 2 || startingItem == 1){
    amount = prompt("How many would you like to buy?");
    if(startingItem >= 1 && startingItem <=3) {

        if(pokeStore[startingItem - 1].price * amount < pokeMoney){

        for(i = 0; i < amount; i++){
            pokeItems.push(pokeStore[startingItem - 1] );
        }
            pokeMoney -= (pokeStore[startingItem - 1].price * amount);
            hasBoughtItem = true;
            
        } else{
            ATDL("fuck you");
        }
      }
    }else{
        ATDL("okay loser");
        hasBoughtItem = true;
    }
}

ATDL("You are going to use your first pokemon " + pokeBox[0].name + " to fight a " + wildPokemon[0].name)
setTimeout(function(){
  StartFight(0);
},3000)
}
function StartFight(num){
    //Puts you against your first battle.
  if (num == 0){
Fight = true;
enemyPokemon = wildPokemon[num].hp;
    FirstFight()
  }
}
function FirstFight(){
let fightOptions = prompt("1. Fight, 2.Items, 3.Potions " + wildPokemon[0].name + ":" + wildPokemon[0].hp + " " + pokeBox[0].name + ":" + pokeBox[0].hp);
if(fightOptions == 1){

if(!firstFight){
    wildPokemon[0].hp -= pokeBox[0].attack.hp;

    if (wildPokemon[0].hp <= 0) {
      ATDL("You have won!");
      Fight = false;
    } else {
      ATDL(wildPokemon[0].hp);
    }

    pokeBox[0].hp -= wildPokemon[0].attack.hp;
    if (!firstFight && pokeBox[0].hp <= 0) {
      ATDL(wildPokemon[0].name + " has killed you");
      Fight = false;
    } else {
      ATDL(pokeBox[0].hp);
    }

}

}else if(fightOptions == 2){
    enemyPercent = wildPokemon[0].hp / enemyPokemon * 100;
if(pokeItems[0].item.includes("Poke Ball") == true){
    if(enemyPercent < 40){
        pokeBox.push(wildPokemon[0]);
        ATDL("Pusheddd");
        pokeItems.shift();
        Fight = false;
    }else{
        ATDL("Try attacking");
    }
}else{
    ATDL("You need to buy pokeball");
}
}else if(fightOptions == 3){

    if(pokeItems[0].item.includes("Potion") == true){
        pokeBox[0].hp += pokeItems[0].hp;
        pokeItems.shift();
        ATDL("You have healed urrr pokemon");
    }else{
        ATDL("You need to buy some Potions");
    }

}else{
        
}

//Stop From Ending...
  if (Fight == true){
    setTimeout(function(){
      FirstFight();
    },500);
    return;
  }else{
    ATDL("Thats It For Now...")
  }
}

function onload(){
StartSequence();


}

function ATDL(message){
    //alert(message);
    console.log(message);
    var log = document.createElement("P"); /*innerHTML = DevLog*/
    log.innerHTML = message;
    document.getElementById('Text').appendChild(log);
    var elem = document.getElementById('Text');
    elem.scrollTop = elem.scrollHeight;
}
