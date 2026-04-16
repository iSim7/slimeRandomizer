var protectors = [];
var battleUnits = [];

function shuffle(array) {
  // We loop backwards from the last element to the first
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements array[i] and array[j]
    // We use "destructuring assignment" for a clean swap
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

$.get('../other/Protectors.txt', function(data) {
    protectors = data.split("\n");
    protectors = shuffle(protectors);
}, 'text');

$.get('../other/BattleUnits.txt', function(data) {
    battleUnits = data.split("\n");
    battleUnits = shuffle(battleUnits);
}, 'text');