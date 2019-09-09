function invokeSpell (input) { //wwq
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
    var boxQ = 0;
    var boxW = 0;
    var boxE = 0;
    for(var i = 0; i < input.length; i++){
      if(input.length > 3 || input.length < 3 || input === ''){
        return 'Combination does not exist'
      }else if(input[i] === 'e'){
        boxE += 1;
      }else if(input[i] === 'q'){
        boxQ += 1;
      }else if(input[i] === 'w'){
        boxW += 1;
      }
    }
    console.log(boxE, boxQ, boxW)
  
    for(var i = 0; i < spells.length; i++){
      if(boxQ === spells[i].q && boxW === spells[i].w && boxE === spells[i].e){
        return spells[i].spellName
      }
    }
  
    return 'Combination does not exist'
  }
  
  console.log(invokeSpell('qwrer')); // Deafening Blast
  console.log(invokeSpell('ewq')); // Deafening Blast
  console.log(invokeSpell('qqq')); // Cold Snap
  console.log(invokeSpell('wwq')); // Tornado
  console.log(invokeSpell('wwe')); // Alacrity
  console.log(invokeSpell('eww')); // Alacrity
  console.log(invokeSpell('wqa')); // Combination does not exist
  