//ALGORITMA / PSEUDOCODE
//start
//
  function invokeSpell (input) {
  const spells = [
    { q: 3, w: 0, e: 0, spellName: 'Cold Snap' },
    { q: 0, w: 2, e: 1, spellName: 'Alacrity' },
    { q: 1, w: 0, e: 2, spellName: 'Forge Spirit' },
    { q: 0, w: 0, e: 3, spellName: 'Sunstrike' },
    { q: 1, w: 2, e: 0, spellName: 'Tornado' },
    { q: 0, w: 3, e: 0, spellName: 'EMP' },
    { q: 0, w: 1, e: 2, spellName: 'Chaos Meteor' },
    { q: 1, w: 1, e: 1, spellName: 'Deafening Blast' },
    { q: 2, w: 0, e: 1, spellName: 'Ice Wall' },
    { q: 2, w: 1, e: 0, spellName: 'Ghost Walk' },
];

// your code here
var arrInput = input.split('');
var countQ = 0, countW = 0, countE = 0;

for (let x in arrInput) {
  if (arrInput[x] !== 'q') {
    if (arrInput[x] !== 'w') {
      if (arrInput[x] !== 'e') {
        return 'Combination does not exist';
      }
    }
  }
}

for (let i in arrInput) {
  if (arrInput[i] === 'q') {
    countQ++;
  } else if (arrInput[i] === 'w') {
    countW++;
  } else {
    countE++;
  }
}

for (let j in spells) {
  if (countQ === spells[j].q && countW === spells[j].w && countE === spells[j].e) {
    return spells[j].spellName;
  }
}
}

console.log(invokeSpell('qwe')); // Deafening Blast
console.log(invokeSpell('ewq')); // Deafening Blast
console.log(invokeSpell('qqq')); // Cold Snap
console.log(invokeSpell('wwq')); // Tornado
console.log(invokeSpell('wwe')); // Alacrity
console.log(invokeSpell('wew')); // Alacrity
console.log(invokeSpell('wqa')); // Combination does not exist
