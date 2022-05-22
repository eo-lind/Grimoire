const spellbook = [
    {
        name: "Turn enemy into a newt",
        isEvil: true,
        energyRequired: 5.1,
    },
    {
        name: "Conjure some gold for a local charity",
        isEvil: false,
        energyRequired: 2.99,
    },
    {
        name: "Give a deaf person the ability to heal",
        isEvil: false,
        energyRequired: 12.2,
    },
    {
        name: "Make yourself emperor of the universe",
        isEvil: true,
        energyRequired: 100.0,
    },
    {
        name: "Convince your relatives your political views are correct",
        isEvil: false,
        energyRequired: 2921.5,
    },
]

const openSpellBook = () => {
    const showAllGoodSpells = () => {
    for (const spell of spellbook) {
        if (spell.isEvil === false)
        console.log(`  ${spell.name}`);
    }
}

const showAllBadSpells = () => {
    for (const spell of spellbook) {
        if (spell.isEvil === true) console.log(`  ${spell.name}`)
    }
}

console.log("Do you believe in magic?")
console.log("------------------------")
console.log("Good Book");
showAllGoodSpells()
console.log("");
console.log("Evil Book");
showAllBadSpells()
}

openSpellBook()