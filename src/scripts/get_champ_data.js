const allChampData = require('../data/champions/allChampData.json')

const ChampData = {
    // getting key of champ object
    getAllChampKeys () {
        return Object.keys(allChampData.data)
    },

    // getAllChampNames () {
    //     const allNames = [];
    //     Object.keys(allChampData.data).forEach((champObj) => {
    //         allNames.push(allChampData.data.champObj.name);
    //     })
    //     return allNames;
    // },

    getAllChampNames () {
        const allNames = [];
        this.getAllNames().forEach((champObj) => {
            allNames.push(allChampData.data[`${champObj}`].name);
        })
        return allNames;
    },

    getChampName (champObj) {
        return allChampData.data[`${champObj}`].name;
    },

    getChampPortraitURL (champName) {
        return `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champName}_0.jpg`
    }
}

// console.log(ChampData.getAllNames());
// console.log(ChampData.getChampPortraitURL("Aatrox"));
// how to get champ NAME:
    // console.log(allChampData.data["Velkoz"].name);
// console.log(ChampData.getAllChampNames())
// console.log(ChampData.getChampName("Aatrox"))

export default ChampData;


