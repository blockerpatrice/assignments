const ask = require("readline-sync");
console.log("Welcome to Survival ");
let player = ask.question("Please enter name ");
let island = ask.questionInt("Please enter time. 1 for Ice Age, 2 for Alien Occupied Earth ",{limit:3});
let figlet = require('figlet');

let me; // variable for player

if(island === 1){
    me = new PlayerIceAge(player);

    function PlayerIceAge(name){
        this.name = name;
        this.health = 100;
        this.inventory = ["flip flops","clothing","rocks","sticks","rope","elephant skin","tiger skin","bow and arrow", "spear"];
        this.isAlive = true;
        this.hasWon = false;
        this.spear = function(){
            return Math.floor(Math.random() * 20);
        }
        this.bowAndArrow = function(){
            return Math.floor(Math.random() * 60);
        }

        this.makeFire = function(){
            let fireMade = require('figlet');
            fireMade.text('Fire made', {
                font: 'Isometric1',
                horizontalLayout: 'default',
                verticalLayout: 'default'
            }, function(err, data) {
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }
                console.log(data);
            });

        }

        this.makeTent = function(){
            let tent = require('figlet');
            tent.text('Tent made with elephant skin', {
                font: 'Isometric1',
                horizontalLayout: 'default',
                verticalLayout: 'default'
            }, function(err, data) {
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }
                console.log(data);
            });

        }
    } 
}else if (island === 2){

    me = new PlayerAlien(player);

    function PlayerAlien(name){
    this.name = name;
    this.health = 100;
    this.inventory = ["sneakers","clothing","cell phone","firearm","spaceship","nuke"];
    this.isAlive = true;
    this.hasWon = false;

    this.shootFireArm = function(){
       return Math.floor(Math.random() * 300) + 5;
    }
       
    
    this.useNuke = function(){
        return Math.floor(Math.random() * 300) + 5;
    }
 }
}

function wollyMammoth(){
    this.name = "Wolly Mammoth";
    this.health = 100;
    this.location = "North";
    this.time = "Ice Age";
    this.isAlive = true;
    this.hasWon = false;
    this.attack = function(){
        return Math.floor(Math.random() * 100) + 2;
    }
}

function saberToothedTiger(){
    this.name = "Saber Toothed Tiger";
    this.health = 150;
    this.location ="North";
    this.time = "Ice Age";
    this.isAlive = true;
    this.hasWon = false;
    this.attack = function(){
        return Math.floor(Math.random() * 100);
    }

}

function dodoBird(){
    this.name = "Dodo Bird";
    this.health = 10;
    this.location = "South";
    this.time = "Ice Age";
    this.isAlive = true;
    this.hasWon = false;
    this.attack = function(){
        return Math.floor(Math.random() * 5);
    }
}

function packRats(){
    this.name = "Pack Rats";
    this.health = 10;
    this.location = "South";
    this.time = "Ice Age"
    this.isAlive = true;
    this.hasWon = false;
    this.attack = function(){
        return Math.floor(Math.random() * 30);
    }
}

function alienAndromeda(){
    this.name = "Andromeda";
    this.health = 80;
    this.location = "North";
    this.time = "Alien";
    this.isAlive = true;
    this.hasWon = false;
    this.attack = function(){
        return Math.floor(Math.random() * 1000);
    }
}

function alienVirgoStellar(){
    this.name = "VirgoStellar";
    this.health = 1000;
    this.location = "North";
    this.time = "Alien";
    this.isAlive = true;
    this.hasWon = false;
    this.attack = function(){
        return Math.floor(Math.random() * 9000);
    }
}

function humans(){
    this.name = "Humans";
    this.health = 100;
    this.location = "South";
    this.time = "Alien";
    this.isAlive = true;
    this.hasWon = false;
    this.attack = function(){
        return Math.floor(Math.random() * 90);
    }
}

function robotSlaves(){
    this.name = "Robots Slaves";
    this.health = 1000;
    this.location = "South";
    this.time = "Alien";
    this.isAlive = true;
    this.hasWon = false;
    this.attack = function(){
        return Math.floor(Math.random() * 90);
    }
}

const mammoth = new wollyMammoth();
const tiger = new saberToothedTiger();
const dodo = new dodoBird();
const rats = new packRats();
const alienAndro = new alienAndromeda();
const alienVirgo = new alienVirgoStellar();
const human = new humans();
const robot = new robotSlaves();

const northEnemiesIce = [mammoth,tiger];
const southEnemiesIce = [dodo,rats];
const northEnemiesAlien = [alienAndro, alienVirgo];
const southEnemiesAlien =[human,robot];


while(island === 1 && !me.hasWon && me.isAlive){
    let action = ask.keyIn("To walk north, press n to walk south press s. To view inventory press i. To quit, press q ", {limit:"nsiq"});

    if(action === "n"){
      walkNorthIceAge();
    }else if (action === "s"){
        walkSouthIceAge();
    }else if (action === "i"){
        printInventoryIceAge();
    }else if (action === "q"){
        process.exit();
    }
}

while(island === 2 && !me.hasWon && me.isAlive ){
    let action = ask.keyIn("To walk north, press n to walk south press s. To view inventory press i. To quit, press q ", {limit:"nsiq"});

    if(action === "n"){
      walkNorthAliens();
    }else if (action === "s"){
        walkSouthAliens();
    }else if (action === "i"){
        printInventoryIceAge();
    }else if (action === "q"){
        process.exit();
    }
}


function walkNorthIceAge(){
    let random = Math.floor(Math.random()*4)+1;
    if (random < 4){
        console.log("You walked North in the Ice Age");
    }else{
        northIceAgeEnemyEncounter();
    }
}


function walkSouthIceAge(){
    let random = Math.floor(Math.random()*4)+1;
    if (random < 4){
        console.log("You walked South in the Ice Age");
    } else {
        southIceAgeEnemyEncounter();
    }
}

function walkNorthAliens(){
    let random = Math.floor(Math.random()*4)+1;
    if (random < 4){
        console.log("You walked North in Alien territory");
    }else{
        northAlienEnemyEncounter();
    }
}


function walkSouthAliens(){
    let random = Math.floor(Math.random()*4)+1;
    if (random < 4){
        console.log("You walked South in Alien territory");
    } else {
        southAlienEnemyEncounter();
    }
}


function northIceAgeEnemyEncounter(){
    let enemy = northEnemiesIce[Math.floor(Math.random() * northEnemiesIce.length)];
    let action = ask.keyIn(`You encountered ${enemy.name}, would you like to run (r) or fight (f)?`);
    if(action === "r"){
        runIce(enemy);
    }else if(action === "f"){
        while(enemy.health > 0 || me.health > 0){
            fightIce(enemy);
        }
    }
}

function southIceAgeEnemyEncounter(){
    let enemy = southEnemiesIce[Math.floor(Math.random() * northEnemiesIce.length)];
    let action = ask.keyIn(`You encountered ${enemy.name}, would you like to run (r) or fight (f)?`);
    if(action === "r"){
        runIce();
    }else {
        while(enemy.health > 0 && me.health > 0){
            fightIce(enemy);
        }
    }
}

function northAlienEnemyEncounter(){
    let enemy = northEnemiesAlien[Math.floor(Math.random() * northEnemiesIce.length)];
    let action = ask.keyIn(`You encountered ${enemy.name} aliens, would you like to run (r) or fight (f)?`);
    if(action === "r"){
        runAlien(enemy);
    }else if(action === "f"){
        while(enemy.health > 0 || me.health > 0){
            fightAlien(enemy);
        }
    }
}

function southAlienEnemyEncounter(){
    let enemy = southEnemiesAlien[Math.floor(Math.random() * northEnemiesIce.length)];
    let action = ask.keyIn(`You encountered ${enemy.name} aliens, would you like to run (r) or fight (f)?`);
    if(action === "r"){
        runAlien(enemy);
    }else if(action === "f"){
        while(enemy.health > 0 || me.health > 0){
            fightAlien(enemy);
        }
    }
}


function printInventoryIceAge(){
    console.log(`Your inventory is ${me.inventory}`);
}

function runIce(enemy){
    let random = Math.floor(Math.random()*2)+1;

    if (random === 1){
        console.log(`You got away from the ${enemy.name}`);
        
    } else if (random === 2){
       console.log(`You did not get away, you now have to fight the ${enemy.name}`);
       fightIce(enemy);
    }
}

function runAlien(enemy){
    let random = Math.floor(Math.random()*2)+1;

    if (random === 1){
        console.log(`You got away from the ${enemy.name}`);
        
    } else if (random === 2){
       console.log(`You did not get away, you now have to fight the ${enemy.name}`);
       fightAlien(enemy);
    }
}

function fightIce(enemy){
    let random = Math.floor(Math.random()*5);
    let weapon = ask.keyIn("Which weapon would you like to use? Use S for spear, B for bow and arrow ", {limit:"sb"});

    if(random === 1){
        console.log("You missed");
    }else{
        if(weapon === "b"){

            enemy.health -= me.bowAndArrow();
            me.health -= enemy.attack();

            if(me.health < 0 || isNaN(me.health)){
                console.log(`${me.name} died`);
                process.exit();
            } else if (isNaN(enemy.health) && me.health > 0 || enemy.health < 0){
                let itemreward = me.inventory[Math.floor(Math.random() * me.inventory.length)];
                me.health += 10;
                me.inventory.push(itemreward);
                console.log(`${me.name} hit ${enemy.name}. \n${me.name}'s health is now ${me.health} \nThe ${enemy.name} died. You have earned 10 health and were rewarded ${itemreward}. Your health is now ${me.health} your inventory is ${me.inventory}`);

            } else{
                console.log(`${me.name} hit ${enemy.name}. \n${me.name}'s health is now ${me.health} \nThe ${enemy.name} health is ${enemy.health}`);
            }
        } else if(weapon === "s"){
            enemy.health -= me.spear();
            me.health -= enemy.attack();

            if(me.health < 0 || isNaN(me.health)){
                console.log(`${me.name} died`);
                process.exit();
            } else if (isNaN(enemy.health) && me.health > 0 || enemy.health < 0){
                let itemreward = me.inventory[Math.floor(Math.random() * me.inventory.length)];
                console.log(`${me.name} hit ${enemy.name}. \n${me.name}'s health is now ${me.health} \nThe ${enemy.name} died. You have earned 10 health and were rewarded ${itemreward}. Your health is now ${me.health} your inventory is ${me.inventory}`);
                me.health += 10;
                me.inventory.push(itemreward);
            }
            else{
                console.log(`${me.name} hit ${enemy.name}. \n${me.name}'s health is now ${me.health} \nThe ${enemy.name} health is ${enemy.health}`);
            }
        }
          
    }
}      
            
function fightAlien(enemy){
    let random = Math.floor(Math.random()*5);
    let weapon = ask.keyIn("Which weapon would you like to use? Use N for nuke, F for firearm ", {limit:"nf"});
    if(random === 1){
        console.log("You missed");
    }else{
        if(weapon === "n"){

            enemy.health -= me.useNuke();
            me.health -= enemy.attack();

            if(me.health < 0 || isNaN(me.health)){
                console.log(`${me.name} died`);
                process.exit();
            } else if (isNaN(enemy.health) && me.health > 0 || enemy.health < 0){
                let itemreward = me.inventory[Math.floor(Math.random() * me.inventory.length)];
                me.health += 10;
                me.inventory.push(itemreward);
                console.log(`${me.name} hit ${enemy.name}. \n${me.name}'s health is now ${me.health} \nThe ${enemy.name} died. You have earned 10 health and were rewarded ${itemreward}. Your health is now ${me.health} your inventory is ${me.inventory}`);
            } else{
                console.log(`${me.name} hit ${enemy.name}. \n${me.name}'s health is now ${me.health} \nThe ${enemy.name} health is ${enemy.health}`);
            }
        } else if(weapon == "f"){
            enemy.health -= me.shootFireArm();
            me.health -= enemy.attack();

            if(me.health < 0 || isNaN(me.health)){
                console.log(`${me.name} died`);
                process.exit();
            } else if (isNaN(enemy.health) && me.health > 0 || enemy.health < 0){
                let itemreward = me.inventory[Math.floor(Math.random() * me.inventory.length)];
                me.health += 10;
                me.inventory.push(itemreward);
                console.log(`${me.name} hit ${enemy.name}. \n${me.name}'s health is now ${me.health} \nThe ${enemy.name} died. You have earned 10 health and were rewarded ${itemreward}. Your health is now ${me.health} your inventory is ${me.iventory}`);
            }else{
                console.log(`${me.name} hit ${enemy.name}. \n${me.name}'s health is now ${me.health} \nThe ${enemy.name} health is ${enemy.health}`);
            }
        }
          
    }
}


