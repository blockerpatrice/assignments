const ask = require("readline-sync");
console.log("Welcome to Survival ");
let player = ask.question("Please enter name ");
let island = ask.questionInt("Please enter time. 1 for Ice Age, 2 for Desert Age, 3 for Alien Occupied Earth ",{limit:4});

let me; // variable for player

if(island === 1){
    me = new PlayerIceAge(player);

    function PlayerIceAge(name){
        this.name = name;
        this.health = 100;
        this.inventory = ["flip flops","clothing","rocks","sticks","rope","elephant skin","tiger skin","bow and arrow", "spear"];

        
        this.throwFlipFlop = function(){
            return Math.floor(Math.random() * 5) + 5;
        }
        this.throwRocks = function(){
            return Math.floor(Math.random() * 10) + 5;
        }
        this.spear = function(){
            return Math.floor(Math.random() * 20);
        }
        this.bowAndArrow = function(){
            let damage = Math.floor(Math.random() * 60);
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
    } 
}else if (island === 2){
    me = new PlayerDesert(player);

    function PlayerDesert(name){
        this.name = name;
        this.health = 100;
        this.inventory = ["flip flops","clothing","rocks","sticks","rope","elephant skin","tiger skin","bow and arrow", "spear"];
        this.throwFlipFlop = function(){
        return Math.floor(Math.random() * 5) + 5;
    }
    this.throwRocks = function(){
        return Math.floor(Math.random() * 10) + 5;
    }

    }
}else if(island === 3){
    me = new PlayerAlien(player);

    function PlayerAlien(name){
    this.name = name;
    this.health = 100;
    this.inventory = ["sneakers","clothing","cell phone","firearm","spaceship","nuke"];
    this.shootFireArm = function(){
        return Math.floor(Math.random() * 5) + 5;
    }
    this.useNuke = function(){
        return Math.floor(Math.random() * 10) + 5;
    }
    }
}

function wollyMammoth(){
    this.health = 200;
    this.location = "North";
    this.attackStomp = function(){
        return Math.floor(Math.random() * 100) + 2;
    }
    this.attackTusk = function(){
        return Math.floor(Math.random() * 200);
    }
}

console.log(me.bowAndArrow().damage);
