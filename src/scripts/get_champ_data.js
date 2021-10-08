const allChampData = require('../data/champions/allChampData.json')

const ChampData = {
    getAllNames () {
        return Object.keys(allChampData.data)
    },

    getChampPortraitURL (champName) {
        return `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champName}_0.jpg`
    }
}

// console.log(ChampData.getAllNames());
// console.log(ChampData.getChampPortraitURL("Aatrox"));

export default ChampData;

