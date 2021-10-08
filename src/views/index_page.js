import ChampData from '../scripts/get_champ_data.js'

class IndexPage {
    constructor(htmlEl) {
        this.htmlEl = htmlEl;
        this.renderAllPortraits();
    }

    // all portraits
        renderAllPortraits () {
            const ul = document.querySelector(".champs-list")
            const allChampKeys = ChampData.getAllChampKeys();

            allChampKeys.forEach((champKey) => {
                const li = document.createElement("li");
                const h2 = document.createElement("h2");
                const img = document.createElement("img");

                h2.innerText = ChampData.getChampName(champKey);
                img.setAttribute("src", ChampData.getChampPortraitURL(champKey));
                li.append(h2, img);
                ul.append(li);
            })
        }
}

export default IndexPage

