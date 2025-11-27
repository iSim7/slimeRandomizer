$("#randomizeButton").click(function(){

    randomProt = "";
    randomProtSub = "";

    while (randomProt == randomProtSub) {
        randomProt = protectors[Math.floor(Math.random() * protectors.length)];
        randomProtSub = protectors[Math.floor(Math.random() * protectors.length)];
    }

    imgPath = `/img/Characters/Protectors/${randomProt}.png`;
    imgPathSubslot = `/img/Characters/ProtectorsSub/${randomProtSub}.png`;

    $('#protectorSlot').html(`<img src="${imgPath}" class="image-a"><img src="${imgPathSubslot}" class="image-b">`);

    usedBU = [];
    index = 1;

    while(index < 6) {
        randomBU = battleUnits[Math.floor(Math.random() * battleUnits.length)];
        randomBUSubslot = battleUnits[Math.floor(Math.random() * battleUnits.length)];

        if(randomBU != randomBUSubslot) {
            if(!usedBU.includes(randomBU) && !usedBU.includes(randomBUSubslot)) {
                usedBU.push(randomBU);
                usedBU.push(randomBUSubslot);
                imgPath = `/img/Characters/BattleUnits/${randomBU}.png`;
                imgPathSubslot = `/img/Characters/BattleUnitsSub/${randomBUSubslot}.png`;
                $('#battleUnit' + index).html(`<img src="${imgPath}" class="image-a"><img src="${imgPathSubslot}" class="image-b">`);
                index++;
            }
        }
    }
});