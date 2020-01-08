//vars
let pokeBox = [];
let pokeMoney = 0;
let pokeItems  = [];
let hasPokemonBeenChosen = false;
let startingChoice, playerName, hasBoughtItem, startingItem, amount, firstFight, enemyPokemon, fightOptions, enemyPercent, Fight;
amount = 0;

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
  ATDL(pokeMoney)
  setTimeout(function(){
  ATDL("============SHOP=============")
  ATDL("What item do you want")
  hasBoughtItem = false;
  startingItem = false
  FirstShop();
  },3000)
}
function FirstShop(){
  //Has you buy something
    //ATDL("Test2")
    /*if (!startingItem){
      setTimeout(FirstShop,200)
      return
    }*/
    //startingItem = prompt("What item do you wannt 1. " + pokeStore[0].item + ", 2." + pokeStore[1].item + ", 3." + pokeStore[2].item + "Type NO if dont want nuthin");
  BttnArry('startingItem = 1;setTimeout(function(){ShopAmt()},200)',pokeStore[0].item,'startingItem = 2;setTimeout(function(){ShopAmt()},200)',pokeStore[1].item,'startingItem = 3;setTimeout(function(){ShopAmt()},200)',pokeStore[2].item,'startingItem = "";CIP()','None')
}
function FShopEnd(){
ATDL("You are going to use your first pokemon " + pokeBox[0].name + " to fight a " + wildPokemon[0].name)
setTimeout(function(){
  StartFight(0);
},3000)
}
function ShopAmt(){
  //ATDL("")
  if (startingItem == 1){
    ATDL("You Have "+pokeStore[0].amount+" "+pokeStore[0].item+"(s)");
  }else if (startingItem == 2){
    ATDL("You Have "+pokeStore[1].amount+" "+pokeStore[1].item+"(s)");
  }else if (startingItem == 3){
    ATDL("You Have "+pokeStore[2].amount+" "+pokeStore[2].item+"(s)");
  }
  NumberChange('amount--','amount++','amount','CIP()')
}
function CIP(){
    if(startingItem == 3 || startingItem == 2 || startingItem == 1){
    //amount = prompt("How many would you like to buy?");
    if(startingItem >= 1 && startingItem <=3) {

        if(pokeStore[startingItem - 1].price * amount < pokeMoney){

        for(i = 0; i < amount; i++){
            pokeItems.push(pokeStore[startingItem - 1] );
        }
            pokeMoney -= (pokeStore[startingItem - 1].price * amount);
          	pokeStore[startingItem-1].amount++
            hasBoughtItem = true;
            
        } else{
            ATDL("fuck you");
            ShopAmt();
        }
      }
    }else{
        ATDL("okay loser");
        hasBoughtItem = true;
    }
  if (hasBoughtItem){
  FShopEnd();
  }
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
  ATDL(": You need to buy pokeball");
}
}else if(fightOptions == 3){
    if(pokeStore[1].amount > 0){
        pokeBox[0].hp += pokeStore[1].hp;
        pokeStore[1].amount -= 1
        if (pokeStore[1].amount <0){
          pokeStore[1].amount = 0;
        }
        ATDL(": You have healed urrr pokemon");
        ATDL("You Have "+pokeStore[1].amount+" "+pokeStore[1].item+"(s) Left")
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
    //BttnArry('playerName = "Joe";alert(playerName)',"Joe",'playerName = "Jon";alert(playerName)',"Jon")
  }
}

function onload(){
  StartSequence();


}

function ATDL(message){
    //alert(message);
    console.re.log(message);
    var log = document.createElement("P"); /*innerHTML = DevLog*/
    log.innerHTML = message;
    document.getElementById('Text').appendChild(log);
    var elem = document.getElementById('Text');
    elem.scrollTop = elem.scrollHeight;
}

//Creates A Array of buttons
let Whatonclick
let BttnTemp1,BttnTemp2,BttnTemp3,BttnTemp4,BttnTemp5,BttnTemp6,BttnTemp7
function BttnArry(opt0,lbl0,opt1,lbl1,opt2,lbl2,opt3,lbl3,opt4,lbl4,opt5,lbl5,opt6,lbl6){
  ClearTempBttn();
  var log = [];
  log[0]=opt0
  log[1]=lbl0
  log[2]=opt1
  log[3]=lbl1
  log[4]=opt2
  log[5]=lbl2
  log[6]=opt3
  log[7]=lbl3
  log[8]=opt4
  log[9]=lbl4
  log[10]=opt5
  log[11]=lbl5
  log[12]=opt6
  log[13]=lbl6
  for (var i=13;i>=0;i--){
    if (log[i]==null || log[i]==""){
      log.pop();
    }
  }
  //ATDL(log)
  for (var i=0;i<log.length/2;i++){
    var bttnTBP = document.createElement("Input");
    bttnTBP.type = "button";
    bttnTBP.value = i+".) "+log[i*2+1];
    Whatonclick = log[i*2]
    Whatonclick.split(";")
    //alert(Whatonclick)
    if (i==0){
      BttnTemp1 = Whatonclick
      bttnTBP.addEventListener("click",function(){
        eval(BttnTemp1)
        bttnTBP.disabled = true;
      });
    }else if (i==1){
      BttnTemp2 = Whatonclick
      bttnTBP.addEventListener("click",function(){
        eval(BttnTemp2)
        bttnTBP.disabled = true;
      });
    }else if (i==2){
      BttnTemp3 = Whatonclick
      bttnTBP.addEventListener("click",function(){
        eval(BttnTemp3)
        bttnTBP.disabled = true;
      });
    }else if (i==3){
      BttnTemp4 = Whatonclick
      bttnTBP.addEventListener("click",function(){
        eval(BttnTemp4)
        bttnTBP.disabled = true;
      });
    }else if (i==4){
      BttnTemp5 = Whatonclick
      bttnTBP.addEventListener("click",function(){
        eval(BttnTemp5)
        bttnTBP.disabled = true;
      });
    }else if (i==5){
      BttnTemp6 = Whatonclick
      bttnTBP.addEventListener("click",function(){
        eval(BttnTemp6)
        bttnTBP.disabled = true;
      });
    }else if (i==6){
      BttnTemp7 = Whatonclick
      bttnTBP.addEventListener("click",function(){
        eval(BttnTemp7)
        bttnTBP.disabled = true;
      });
    }
    //ATDL(Whatonclick)
    document.getElementById('Text').appendChild(bttnTBP);
    var elem = document.getElementById('Text');
    elem.scrollTop = elem.scrollHeight;
  }
}
function ClearTempBttn(){
  BttnTemp1 = "";
  BttnTemp2 = "";
  BttnTemp3 = "";
  BttnTemp4 = "";
  BttnTemp5 = "";
  BttnTemp6 = "";
  BttnTemp7 = "";
}
function NumberChange(opt0,opt1,vaar,GO){
  ClearTempBttn()
  var log = [];
  log[0]=opt0
  log[1]=opt1
  for (var i=1;i>=0;i--){
    if (log[i]==null || log[i]==""){
      return
    }
  }
  BttnTemp1 = log[0];
  BttnTemp1.split(";")
  BttnTemp2 = log[1];
  BttnTemp2.split(";")
  BttnTemp3 = vaar;
  BttnTemp5 = GO
  //ATDL(BttnTemp1+', '+BttnTemp2+', '+BttnTemp3+', '+BttnTemp4+', '+BttnTemp5)
    var bttnL = document.createElement("Input");
  	bttnL.type = "button"
    bttnL.value = "<-"
    //bttnL.src = "Images/Arrow_Left";
    bttnL.addEventListener("click",function(){
        eval(BttnTemp1)
        BttnTemp4.innerHTML = eval(BttnTemp3);
      	//ATDL(BttnTemp3)
    });
  	document.getElementById('Text').appendChild(bttnL)
    var TextB = document.createElement("A");
    TextB.style = "width: 40px;font-size: 30px;padding-top: 20px;"
    TextB.innerHTML = eval(BttnTemp3)
    BttnTemp4 = TextB
  	document.getElementById('Text').appendChild(TextB)
    var bttnR = document.createElement("Input");
    bttnR.type = "button"
    bttnR.value = "->"
    //bttnR.src = "Images/Arrow_Right";
    bttnR.addEventListener("click",function(){
        eval(BttnTemp2)
        BttnTemp4.innerHTML = eval(BttnTemp3);
    });
  	document.getElementById('Text').appendChild(bttnR);
    var bttnG = document.createElement("Input");
    bttnG.type = "button"
    bttnG.value = " GO ";
    bttnG.addEventListener("click",function(){
        eval(BttnTemp5)
        //ClearTempBttn();
    });
    document.getElementById('Text').appendChild(bttnG);
    var elem = document.getElementById('Text');
    elem.scrollTop = elem.scrollHeight;
}


