const ChampData = require('../scripts/get_champ_data.js')

class IndexPage {
    constructor(htmlEl) {
        this.htmlEl = htmlEl;
        this.renderAllPortraits();
    }

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

