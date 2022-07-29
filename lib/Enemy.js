const Potion = require('./Potion')

//imports isAlive(), getHealth(), getAttackValue() and reduceHealth()
const Character = require('./Character')

//creates enemy object
class Enemy extends Character {
    constructor(name, weapon) {
        //call parent constructor before using this
        super(name)

    this.weapon = weapon
    this.potion = new Potion()
}

//inherit prototype methods from Character here:
// Enemy.prototype = Object.create(Character.prototype)

//checks for enemy's description containing weapon and name
getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`
}
}

module.exports = Enemy;