const planetaryTraveler = {
    name: "Pete",
    age: 328,
    timePeriod: 1600,
    equipment = ["oxygen", "space ship", "candy"],
    planets:[
        {
            name: "Earth",
            distanceFromSun: 93369362,
            inhabitable: true,
            starSystem: "Sol",
            radius: 3958,
            atmosphere:["nitrogen","oxygen"],
            moons:["Luna"],
            entryPointsData:[
                {
                    entryName: "North Pole",
                    dangers: ["ice", "wind", "rain"],
                },
                {
                    entryName: "Florida",
                    dangers: ["hurricanes", "heat"]
                }
            ]
            
        },

        {
            name: "Mercury",
            distanceFromSun: 42183538,
            inhabitable: false,
            starSystem: "Sol",
            radius: 1516,
            atmosphere:["hydrogen","helium","oxygen"],
            moons:[],
            entryPointsData:[
                {
                    entryName: "North Polar Cap",
                    dangers: ["ice", "wind", "rain"]
                },
                {
                    entryName: "Caloris Planitia",
                    dangers: ["heat"]
                }
            ]
            
        },
        {
            name: "Mars",
            distanceFromSun: 147772729,
            inhabitable: true,
            starSystem: "Sol",
            radius: 2106,
            atmosphere:["carbon dioxide"],
            moons:["Phobos","Deimos"],
            entryPointsData:[
                {
                    entryName: "Valles Marineris",
                    dangers: ["ice", "wind"]
                }
      
            ]
     
        },

        {
            name: "Venus",
            distanceFromSun: 67689818,
            inhabitable: false,
            starSystem: "Sol",
            radius: 3760,
            atmosphere:["carbon dioxide","nitrogen","sulfur dioxide","argon"],
            moons:[],
            entryPointsData:[]

        },

        {
            name: "Jupiter",
            distanceFromSun: 494189509,
            inhabitable: false,
            starSystem: "Sol",
            radius:43441,
            atmosphere:["hydrogen","helium","methane","ammonia","hydrogen sufide","water"],
            moons:["Io","Europa","Ganymede","Callisto"],
            entryPointsData:[]
            
        },
        {
            name:"Saturn",
            distanceFromSun:934648978,
            inhabitable:false,
            starSystem: "Sol",
            radius:36184,
            atmosphere:["hydrogen","helium","methane"],
            moons:["Mimas","Enceladus","Tethys","Dione","Rhea","Titan","Iapetus"],
            entryPointsData:[]
        },
        {
            name:"Uranus",
            distanceFromSun:1938365216,
            inhabitable:false,
            starSystem: "Sol",
            radius:15759,
            atmosphere:["hydrogen","helium"],
            moons:["Miranda","Ariel","Umbriel","Titania","Oberon"],
            entryPointsData:[]
        },
        {
            name:"Neptune",
            distanceFromSun:2782808747,
            inhabitable:false,
            starSystem: "Sol",
            radius:15299,
            atmosphere:["hydrogen","helium","methane"],
            moons:["Triton","Halimede","Psamathe","Neso"],
            entryPointsData:[]

        },
        {
            name:"Pluto",
            distanceFromSun:3140327747,
            inhabitable:false,
            starSystem: "Sol",
            radius: 738,
            atmosphere:["nitrogen","methane","carbon monoxide"],
            moons:["Styx","Nix","Kerberos","Hydra"],
            entryPointsData:[]
        }


    ],

    logTimePeriod:function(){
        console.log(planetaryTraveler.timePeriod);
    },

    isPlanetHabitable:function(str){
        for(let i = 0; i < planetaryTraveler.planets.length; i++){
            if(planetaryTraveler.planets[i].name == str){
                console.log(planetaryTraveler.planets[i].inhabitable);
            }
        }

    },
    doesPlanetHaveMoons:function(str){
        for(let i = 0; i < planetaryTraveler.planets.length; i++){
            if(planetaryTraveler.planets[i].name == str){
                if(planetaryTraveler.planets[i].moons.length == 0 || planetaryTraveler.planets[i].moons.length === undefined)
                {
                    console.log(planetaryTraveler.planets[i].name + " does not have moons");
                }
                else{
                    console.log(planetaryTraveler.planets[i].name + " does have moons");
                }
                
            }
        }
    }
    
}


planetaryTraveler.isPlanetHabitable("Earth");
planetaryTraveler.doesPlanetHaveMoons("Earth");
planetaryTraveler.doesPlanetHaveMoons("Mercury");



