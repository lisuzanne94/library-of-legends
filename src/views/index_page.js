const ChampData = require('../scripts/get_champ_data.js')

class IndexPage {
    constructor(htmlEl) {
        this.htmlEl = htmlEl;
        this.showPortrait("Ahri");
    }

    showPortrait (champName) {
        const champNameHeader = document.getElementById("champ-name");
        const champPortrait = document.getElementById("champ-portrait");

        champNameHeader.innerText = champName;
        champPortrait.setAttribute("src", ChampData.default.getChampPortraitURL(champName));
    }
}


module.exports = IndexPage;
// console.log("inside index_page.js")
