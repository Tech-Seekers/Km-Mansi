
let score = 0;


let clickCount = 0;


let selectionCardsId = [];
let selectionCardsFullId = [];
let selectionCardsType = [];


function scoreCount() {
    score += 2;
    scoreOutput.innerHTML = score;
    if(score == limit) win.innerHTML = "win!";
}


function click() {
    clickCount++;
    clicks.innerHTML = clickCount;
}


function select(type, id) {

    click();
    
    let cardId = idCard(type, id); 

    lockCard(cardId, id);
    selectionCardsId.push(id);
    selectionCardsFullId.push(cardId);
    selectionCardsType.push(type);

    
    if(selectionCardsId.length == 2 && selectionCardsId[0] == selectionCardsId[1]) {
        for(var i in selectionCardsFullId) {
            foundCards(selectionCardsFullId[i]);
        }
        scoreCount();
        clearSelectingCards();

    
    } else if(selectionCardsId.length == 2) {
        for(var i = 0; i < 2; i++) {
            releaseCard(selectionCardsFullId[i], selectionCardsId[i], selectionCardsType[i]);
        }
        clearSelectingCards();
    }
}


function idCard(type, id) {
    var mul = 0;

    if(id > 0 && id <= 9) {
        mul = type * 100;
    } else if(id > 9) {
        mul = type * 1000;
    } else {
        mul = type * 10;
    }

    return cardId = mul + (id * 10);
}


function lockCard(cardId, id) {
    id++;
    document.getElementById(cardId).src = "" + id + ".png";
    document.getElementById(cardId).onclick = "";
}


function releaseCard(cardId, id, type) {
    setTimeout(function() {
        document.getElementById(cardId).src = "0.png";
        document.getElementById(cardId).onclick = function() {
            select(type, id);
        };
    }, 1000);
}


function clearSelectingCards() {
    selectionCardsId = [];
    selectionCardsFullId = [];
    selectionCardsType = [];
}


function foundCards(cardId) {
    document.getElementById(cardId).onclick = "";
    document.getElementById(cardId).style.background = "rgb(14, 133, 133)";
}