var tigger = { character: "Tigger" };
var pooh = { character: "Winnie the Pooh" };
tigger.north = pooh; 
pooh.south = tigger;

var piglet = { character: "Piglet"}; 
var owl = { character: "Owl"}; 
piglet.east = tigger.north;        
tigger.north.west = piglet;
piglet.east = pooh
pooh.west = piglet 
owl.south = piglet
piglet.north = owl

var christopher_robin = { character: "Christopher Robin"};
owl.east = christopher_robin
christopher_robin.west = owl 
christopher_robin.south = pooh
pooh.north = christopher_robin 

var rabbit = { character: "Rabbit"};  
var bees = { character: "Bees"};
rabbit.west = christopher_robin
christopher_robin.east = rabbit
rabbit.south = bees
bees.north = rabbit 
bees.west = pooh

var gopher = { character: "Gopher"};
gopher.west = rabbit
rabbit.east = gopher

var kanga = { character: "Kanga"};  
var eeyore = { character: "Eeyore"};  
var heffalumps = { character: "Heffalumps"};  
kanga.south = christopher_robin
christopher_robin.north = kanga
eeyore.south = kanga
kanga.north = eeyore
eeyore.east = heffalumps
heffalumps.west = eeyore

var player = { location: tigger }

function move(direction){
    if(direction == "north"){
        if(player.location.north == null){
            console.log("You may not go that way.")
        }
        else{
            player.location = player.location.north
            console.log("You are now at " + player.location.character + "'s house.")
        }

    }
    else if(direction == "south"){
        if(player.location.south == null){
            console.log("You may not go that way.")
        }
        else
            player.location = player.location.south
            console.log("You are now at " + player.location.character + "'s house.")

    }
    else if(direction == "east"){
        if(player.location.east == null){
            console.log("You may not go that way.")
        }
        else{
            player.location = player.location.east
            console.log("You are now at " + player.location.character + "'s house.")
        }

    }
    else if(direction == "west"){
        if(player.location.west == null){
            console.log("You may not go that way.")
        }
        else{            
            player.location = player.location.west
            console.log("You are now at " + player.location.character + "'s house.")
        }
    }
}


move("west")
move("north")
move("west")
move("north")
move("east")
move("east")
move("north")
move("east")
move("south")
move("north")
move("west")
move("south")
move("west")
move("north")
move("north")
move("north")
move("north")
move("north")
move("north")
move("east")






