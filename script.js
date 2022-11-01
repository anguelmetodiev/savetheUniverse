/*
Mini Project - Save The Universe
*/

// create a class called Ship

class Ship {
    constructor(hull, firepower, accuracy){
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy 
    }

        alineShip(){
            this.hull = Math.floor(Math.random()*4+3)
            this.firepower = Math.floor(Math.random()*3+2)
            this.accuracy = (Math.random()*0.2+0.6).toFixed(1)
        }
    }

let USSship, aliens;

startGame()
function startGame(){
    // USSShip is created 
    USSship = new Ship(20, 5, .7) 
    aliens = [] // Alien Ships Array
    //Need 6 alien ships to enter the battlefield
    for(let alienNum = 6; alienNum > 0; alienNum--){
        let alien = new Ship(3, 2, .6)
        alien.alineShip()
        aliens.push(alien)
    }

console.log("The USSship is entering the battle.")
console.log(USSship)

console.log("The aliens are invading planet Earth")
console.log(aliens) 

}

//while there are alien ships remaining    
while ((aliens.length>0 && USSship.hull >=0)) {

//USSship Attacks 
function USSshipAttack() {
    if (USSship.hull <= 0) {
        console.log("USSship is Dead")
    }
    else if (Math.random() < USSship.accuracy) {
        console.log(("USSship attacks"))
        aliens[0].hull = (aliens[0].hull - USSship.firepower)
        console.log(`Alien Ship's hull is ${aliens[0].hull}`)
    }  
    else {
        console.log("USSship missed")
    }
}

//Alien Ship Attacks
function aliensAttack() {
    if (aliens[0].hull <= 0) {
        aliens.shift()
    }
    else if (Math.random() < aliens[0].accuracy) {
        console.log("Alien Ship attacks")
        USSship.hull = USSship.hull - aliens[0].firepower
        console.log(`USSship has ${USSship.hull}`)
    } else {
        console.log("Alien Ship did not hit USSship")
    }
}

//Retreat
function retreat() {
    console.log("USSship is retreating")
    USSship.hull = 0;
    console.log("Game over!")
}


USSshipAttack()
aliensAttack()

if (aliens.length === 0) {
    console.log("All the aliens are dead. You saved the universe!") }

else if (USSship.hull <= 0) {
    console.log("USS Ship is dead") }    

}