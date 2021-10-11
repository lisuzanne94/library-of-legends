const allChampData = require('../data/champions/allChampData.json')

const ChampData = {
    // getting key of champ object
    getAllChampKeys() {
        return Object.keys(allChampData.data)
    },

    // getting champ names from champ keys
    getAllChampNames() {
        const allNames = [];
        this.getAllNames().forEach((champObj) => {
            allNames.push(allChampData.data[`${champObj}`].name);
        })
        return allNames;
    },

    // get single champ's name
    getChampName(champKey) {
        return allChampData.data[`${champKey}`].name;
    },

    // get champ's loading screen portrait URL
    getChampPortraitURL(champKey) {
        return `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champKey}_0.jpg`
    },

    // get a champ's tags
    getChampTags(champKey) {
        return allChampData.data[`${champKey}`].tags;
    },

    // get all champKeys of a certain tag
    getFilteredChampKeys(tag) {
        const keys = [];
        this.getAllChampKeys().forEach((champKey) => {
            let tags = this.getChampTags(champKey);
            if (tags.includes(tag)) {
                keys.push(champKey);
            }
        })
        return keys;
    },

    // get a champ's title
    getChampTitle (champKey) {
        const title = allChampData.data[`${champKey}`].title;
        return title[0].toUpperCase() + title.slice(1);
    },

    // get a champ's lore
    getChampLore (champKey) {
        return allChampData.data[`${champKey}`].lore;
    },
    
    // get a champ's spells ([Qname, Wname, Ename, Rname])
    getChampSpellNames (champKey) {
        const spells = [];
        for (let i = 0; i < allChampData.data[`${champKey}`].spells.length; i++) {
            const spellName = allChampData.data[`${champKey}`].spells[i].name;
            const spellDesc = allChampData.data[`${champKey}`].spells[i].description;
            spells.push(spellName);
        }
        // console.log(allChampData.data["Aatrox"].spells)
        // const q = allChampData.data["Aatrox"].spells[0].name;
        // const w = allChampData.data["Aatrox"].spells[1].name;
        // const e = allChampData.data["Aatrox"].spells[2].name;
        // const r = allChampData.data["Aatrox"].spells[3].name;
        return spells;
    },

        // get a champ's descs ([Qdesc, Wdesc, Edesc, Rdesc])
    getChampSpellDescs(champKey) {
        const descs = [];
        for (let i = 0; i < allChampData.data[`${champKey}`].spells.length; i++) {
            const spellDesc = allChampData.data[`${champKey}`].spells[i].description;
            descs.push(spellDesc);
        }
        return descs;
    }
}

// console.log(ChampData.getAllNames());
// console.log(ChampData.getChampPortraitURL("Aatrox"));
// how to get champ NAME:
// console.log(allChampData.data["Velkoz"].name);
// console.log(ChampData.getAllChampNames())
// console.log(ChampData.getChampName("Aatrox"))
// console.log(ChampData.getChampTags("Ahri"))
// console.log(ChampData.getFilteredChampKeys("Support"))
// console.log(ChampData.getChampTitle("Teemo"))
// console.log(ChampData.getChampLore("Aatrox"))
// console.log(allChampData.data["Aatrox"].spells)
// console.log(ChampData.getChampSpellNames("Aatrox"))
// console.log(ChampData.getChampSpellDescs("Aatrox"))

export default ChampData;


