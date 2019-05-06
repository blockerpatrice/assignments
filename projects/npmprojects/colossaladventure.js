const ask = require("readline-sync");
console.log("Welcome to Survival ");
let player = ask.question("Please enter name ");
let island = ask.questionInt("Please enter time. 1 for Ice Age, 2 for Alien Occupied Earth ",{limit:3});

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
            let spear = require('figlet');
            spear.text('Spear used', {
                font: 'Ghoulish',
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

            let damage = Math.floor(Math.random() * 20);
            return (`Damage delt from spear: ${damage}`);
        }
        this.bowAndArrow = function(){
            let bow = require('figlet');
            bow.text('Bow and arrow shot', {
                font: 'Double',
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
            let damage = Math.floor(Math.random() * 60);
            return (`Damage delt from bow and arrow: ${damage}`);
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
        let fireArm = require('figlet');
        fireArm.text('FireArm Shot', {
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
        let damage= Math.floor(Math.random() * 300) + 5;
        return(`Damage delt from firearm ${damage}`);
    }
       
    
    this.useNuke = function(){
        let nuke = require('figlet');
        nuke.text('Nuke used', {
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
        let damage= Math.floor(Math.random() * 300) + 5;
        return(`Damage delt from firearm ${damage}`);
    }
 }
}

function wollyMammoth(){
    this.name = "Wolly Mammoth";
    this.health = 200;
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
        return Math.floor(Math.random() * 200);
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
    this.attackBite = function(){
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


while(!me.hasWon && me.isAlive && island === 1){
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

function walkNorthIceAge(){
    let random = Math.floor(Math.random()*4)+1;
    
    if (random < 4){
        let walkNorth = require('figlet');
        walkNorth.text('You walked north', {
            font: 'Ghoulish',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, function(data) {
            console.log(data);
        });

    } else {
        northIceAgeEnemyEncounter();
    }
}

function walkSouthIceAge(){
    let random = Math.floor(Math.random()*4)+1;
    if (random < 4){
        let walkSouth = require('figlet');
        walkSouth.text('You walked south', {
            font: 'Ghoulish',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, function(data) {
            console.log(data);
        });

    } else {
        southIceAgeEnemyEncounter();
    }
}

function northIceAgeEnemyEncounter(){
    let enemy = northEnemiesIce[Math.floor(Math.random() * northEnemiesIce.length)];
    let action = ask.keyIn(`You encountered ${enemy.name}, would you like to run (r) or fight (f)?`);
    if(action === "r"){
        run(enemy);
    }else {
        while(enemy.health > 0 && me.health > 0){
            fight(enemy);
        }
    }

}

function southIceAgeEnemyEncounter(){
    let enemy = southEnemiesIce[Math.floor(Math.random() * northEnemiesIce.length)];
    let action = ask.keyIn(`You encountered ${enemy.name}, would you like to run (r) or fight (f)?`);
    if(action === "r"){
        run();
    }else {
        while(enemy.health > 0 && me.health > 0){
            fight(enemy);
        }
    }
}

function printInventoryIceAge(){
    console.log(`Your inventory is ${me.inventory}`);
}

function run(enemy){
    let random = Math.floor(Math.random()*2)+1;

    if (random === 1){
        let ranAway = require('figlet');
        ranAway.text('You Ran Away', {
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
    } else if (random === 2){
        let fighting = require('figlet');
        fighting.text('You did not get away, you have to fight', {
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
        fight(enemy);
    }

}
function fight(enemy){
    let random = Math.floor(Math.random()*5);

    if(island === 1 ){
        let weapon = ask.keyIn("Which weapon would you like to use? Use S for spear, B for bow and arrow ", {limit:"sb"});
        if(random === 1){
            console.log("You missed");
        }else{
            if(weapon === "b"){

                console.log(me.health);

                enemy.health -= me.bowAndArrow();
                me.health -= enemy.attack();

                console.log(`${enemy.name} hit ${me.name}. \n ${me.name}'s health is now ${me.health} \n ${enemy.name}'s health is now ${enemy.health}`);
                if(me.health < 0){
                    let death = require('figlet');
                    death.text('You Died', {
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
                    me.isAlive === false;
                } else {
                    console.log(`${enemy.name} hit ${me.name}. \n ${me.name}'s health is now ${me.health} \n ${enemy.name}'s health is now ${enemy.health}`);
                }
            } else if(weapon == "s"){
                me.health -= me.spear();
                enemy.health -= enemy.attack();
            }
           
            
        }
    }

}
