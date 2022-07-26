const Player = require('../lib/Player');
const Potion = require('../lib/Potion')

//tells jest to use the mock data in that file pathway
jest.mock('../lib/Potion')
console.log(new Potion())

test('creates a player object', () => {
    const player = new Player('Dave');
  
    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    //potion inventory check
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]))
  });