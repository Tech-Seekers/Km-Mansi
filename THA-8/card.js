
let cards = [];
let randomalCards;


let idCount = 0;


let path = ""
let format = ".png";


class Card {

    
    constructor() {
        if(idCount == limit / 2) idCount = 0;
        this.id = idCount;
        var i = idCount + 1;
        this.img = path + i + format;
        idCount++;
        add(this);
    }
}


function generate() {
    var n = limit;
    while(n != 0) {
        let card = new Card();
        n--;
    }
    randomalCards = cards.sort(randomal);
}


function randomal() {
    return 0.5 - Math.random();
}


function add(card) {
    cards.push(card);
}


function clear() {
    cards = [];
    randomalCards = [];
    idCount = 0;
}