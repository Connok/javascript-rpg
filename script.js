let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [
    {
        name: "stick",
        power: 5,
    },
    {
        name: "dagger",
        power: 30,
    },
    {
        name: "claw hammer",
        power: 50,
    },
    {
        name: "sword",
        power: 100,
    },
];

const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town queare. You see a sign that says \"store\"."
    },
    {
        name: "store",
        "button text": ["Buy 10 Health (10 Gold)", "Buy Weapon (30 Gold)", "Go To Town Square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
    },
    {
        name: "cave",
        "button text": ["Fight Slime", "Fight Beast", "Go To Town Square"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "You enter a cave. You see some monsters"

    }

];

// initialize buttons

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;


function update(location){
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    text.innerText = location.text;
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
}

function goTown() {
    update(locations[0]);
}
function goStore(){
    update(locations[1]);

}

function goCave() {
    update(locations[2])
}
function fightDragon() {
    console.log("Fighting Dragon.")
}
function buyHealth() {

    if(gold >= 10){
        gold -= 10;
        health += 10;
        healthText.innerText = health;
        goldText.innerText = gold;
        
    }else{
        text.innerText = "Not Enough Gold To Buy Health"
    }
    
}
function buyWeapon() {
    if(gold >=30){
        gold -= 30;
        currentWeapon++;
        text.innerText = "You now have a new weapon."
    }else {
        text.innerText = "Not Enough Gold To Buy Weapon"
    }
}
function fightSlime() {
    console.log("Bought Weapon")
}
function fightBeast() {
    console.log("Bought Weapon")
}


