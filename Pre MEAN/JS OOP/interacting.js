var tigger = {
    character: "Tigger",
    greet: function(){
            console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!\n");
            }
};
var pooh = {
    character: "Winnie the Pooh",
    south:tigger,
    greet: function(){
            console.log("Oh bother\n");
            }
};
tigger.north = pooh; 

var piglet = { 
    character: "Piglet",
    east:pooh,
    greet: function(){
            console.log("Oh d-d-d-d-dear! I wasn't expecting company\n");
            }
}; 

var owl = { 
    character: "Owl",
    south:piglet,
    greet: function(){
            console.log("Well, I say now. This is a surprise.\n");
            }
}; 
piglet.east = tigger.north;        
tigger.north.west = piglet;
pooh.west = piglet 
piglet.north = owl

var christopher_robin = { 
    character: "Christopher Robin",
    west:owl,
    south:pooh,
    greet: function(){
            console.log("One thing you should know, no matter where I go, we'll always be together\n");
            }
};
owl.east = christopher_robin
pooh.north = christopher_robin 

var rabbit = { 
    character: "Rabbit",
    west:christopher_robin,
    greet: function(){
            console.log("Oh, dear. Oh, gracious. Who's this now?\n");
            }
};  
var bees = { 
    character: "Bees",
    north:rabbit,
    west:pooh,
    greet: function(){
            console.log("bzz bzz\n");
            }
};

christopher_robin.east = rabbit
rabbit.south = bees

var gopher = { 
    character: "Gopher",
    west: rabbit,
    greet: function(){
            console.log("Did shhhhh-ombody call for an ex-shhhhh-pedition expert? I'm not in the book, but I'm at your sh-ervi-sh.\n");
            }
};
rabbit.east = gopher

var kanga = { 
    character: "Kanga",
    south: christopher_robin,
    greet: function(){
            console.log("Now run along, dear.\n");
            }
};  

var eeyore = { 
    character: "Eeyore",
    south:kanga,
    greet: function(){
            console.log("If it is a good morning, which I doubt.\n");
            }
};  

var heffalumps = { 
    character: "Heffalumps",
    west: eeyore,
    greet: function(){
            console.log("Heffalump. Heffalump. That's what I am all right. A heffalump.\n");
            }
};  
christopher_robin.north = kanga
kanga.north = eeyore
eeyore.east = heffalumps

var player = { location: tigger, honey: false}


function move(direction){
    if(direction == "north"){
        if(player.location.north == null){
            console.log("You may not go that way.")
        }
        else{
            player.location = player.location.north;
            console.log("You are now at " + player.location.character + "'s house.");
            player.location.greet();
        }
    }

    else if(direction == "south"){
        if(player.location.south == null){
            console.log("You may not go that way.")
        }
        else
            player.location = player.location.south
            console.log("You are now at " + player.location.character + "'s house.")
            player.location.greet();         
            
    }
    else if(direction == "east"){
        if(player.location.east == null){
            console.log("You may not go that way.")
        }
        else{
            player.location = player.location.east
            console.log("You are now at " + player.location.character + "'s house.")
            player.location.greet();
        }

    }
    else if(direction == "west"){
        if(player.location.west == null){
            console.log("You may not go that way.")
        }
        else{            
            player.location = player.location.west
            console.log("You are now at " + player.location.character + "'s house.")
            player.location.greet();
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






