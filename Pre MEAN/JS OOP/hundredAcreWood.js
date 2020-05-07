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

