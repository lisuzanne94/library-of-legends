const ChampData = require('../scripts/get_champ_data.js')

class IndexPage {
    constructor(htmlEl) {
        this.htmlEl = htmlEl;
        this.renderAllPortraits();
        console.log("inside constructor")
        // this.showPortrait("Aatrox");
    }
    // showing single portrait
        // showPortrait (champName) {
        //     const champNameHeader = document.getElementById("champ-name");
        //     const champPortrait = document.getElementById("champ-portrait");

        //     champNameHeader.innerText = champName;
        //     champPortrait.setAttribute("src", ChampData.default.getChampPortraitURL(champName));
        // }
    
    // all portraits
        renderAllPortraits () {
            const ul = document.querySelector(".champs-list")
            const allChampNames = ChampData.default.getAllNames();

            allChampNames.forEach((champName) => {
                const li = document.createElement("li");
                const h2 = document.createElement("h2");
                const img = document.createElement("img");

                h2.innerText = champName;
                img.setAttribute("src", ChampData.default.getChampPortraitURL(champName));
                li.append(h2, img);
                ul.append(li);
            })
        }
}

export default IndexPage
// console.log("inside index_page.js")
