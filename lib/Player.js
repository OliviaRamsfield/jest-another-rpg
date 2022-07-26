const Potion = require('../lib/Potion')
//imports isAlive(), getHealth(), getAttackValue() and reduceHealth()
const Character = require('./Character')

class Player extends Character {
    constructor(name = " ") {
        //call parent constructor before using this
        super(name)

        this.inventory = [new Potion('health'), new Potion()]
    }


    //inherit prototype methods from Character here:
    // Object.create(Character.prototype)

    //returns an object with various player properties
    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        }
    }

    //returns the inventory array or false if empty
    getInventory() {
        if (this.inventory.length) {
            return this.inventory
        }
        return false
    }

    //add potion to player inventory array
    addPotion(potion) {
        this.inventory.push(potion)
    }

    //player is able to use correct potion from inventory array - does not go below 0
    usePotion(index) {
        const potion = this.getInventory().splice(index, 1)[0]

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value
                break;
            case 'health':
                this.health += potion.value
                break;
            case 'strength':
                this.strength += potion.value
                break;
        }
    }
}


module.exports = Player