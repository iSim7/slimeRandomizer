var protectors = [];
var battleUnits = [];

$.get('../other/Protectors.txt', function(data) {
    protectors = data.split("\n");
}, 'text');

$.get('../other/BattleUnits.txt', function(data) {
    battleUnits = data.split("\n");
}, 'text');