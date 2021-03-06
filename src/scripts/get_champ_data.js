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
        return allChampData.data[champKey].name;
    },

    // get champ's loading screen portrait URL
    getChampPortraitURL(champKey) {
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champKey}_0.jpg`
    },

    getChampSplashArtURL(champKey) {
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champKey}_0.jpg`
    },

    // get a champ's tags
    getChampTags(champKey) {
        return allChampData.data[champKey].tags;
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
        const title = allChampData.data[champKey].title;
        return title[0].toUpperCase() + title.slice(1);
    },

    // get a champ's lore
    getChampLore (champKey) {
        return allChampData.data[champKey].lore;
    },
    
    // get a champ's spells ([Qname, Wname, Ename, Rname])
    getChampSpellNames (champKey) {
        const spells = [];
        for (let i = 0; i < allChampData.data[champKey].spells.length; i++) {
            const spellName = allChampData.data[champKey].spells[i].name;
            const spellDesc = allChampData.data[champKey].spells[i].description;
            spells.push(spellName);
        }
        return spells;
    },

        // get a champ's descs ([Qdesc, Wdesc, Edesc, Rdesc])
    getChampSpellDescs(champKey) {
        const descs = [];
        for (let i = 0; i < allChampData.data[champKey].spells.length; i++) {
            const spellDesc = allChampData.data[champKey].spells[i].description;
            descs.push(spellDesc);
        }
        return descs;
    },

    // get a champ's skin IDs
    getChampSkinNums(champKey) {
        const nums = [];
        const skins = allChampData.data[champKey].skins;
        for (let i = 0; i < skins.length; i++) {
            nums.push(skins[i].num);
        }
        return nums;
    },

    getChampSkinURLs(champKey) {
        const skinNums = this.getChampSkinNums(champKey);
        const skinURLs = [];
        skinNums.forEach(num => {
            skinURLs.push(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champKey}_${num}.jpg`)
        })
        return skinURLs;
    },

    getSpellSuffixes(champKey) {
        const names = [];
        for (let i = 0; i < 4; i++) {
            names.push(allChampData.data[champKey].spells[i].image.full)
        }
        return names;
    },

    getSpellImgURL(spellName) {
        return `https://ddragon.leagueoflegends.com/cdn/11.20.1/img/spell/${spellName}`
    }
}

export default ChampData;


