$("#randomizeButton").click(function(){
    randomProt = protectors[Math.floor(Math.random() * protectors.length)];


    imgPath = `/img/Characters/Protectors/${randomProt}.png`;

    $('#protectorSlot').html(`<img src="${imgPath}" width=100%>`);

    usedBU = [];
    index = 1;

    while(index < 6) {
        randomBU = battleUnits[Math.floor(Math.random() * battleUnits.length)];

        if(!usedBU.includes(randomBU)) {
            usedBU.push(randomBU);
            imgPath = `/img/Characters/PC/${randomBU}.png`;
            $('#battleUnit' + index).html(`<img src="${imgPath}" width=100%>`);
            index++;
        }
    }
});