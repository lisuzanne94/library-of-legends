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

export default ChampData;


