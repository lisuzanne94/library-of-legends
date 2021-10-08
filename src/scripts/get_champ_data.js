const allChampData = require('../data/champions/allChampData.json')

const ChampData = {
    getAllNames () {
        return Object.keys(allChampData.data)
    }
}

console.log(ChampData.getAllNames());

export default ChampData;
