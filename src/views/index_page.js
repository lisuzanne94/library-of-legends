import ChampData from '../scripts/get_champ_data.js'

class IndexPage {
    constructor(tag) {
        const indexPageDiv = document.querySelector(".index-page");
        this.indexPageDiv = indexPageDiv;
        this.renderAllPortraits(tag);
    }

    // all portraits
    renderAllPortraits(tag) {
        const ul = document.querySelector(".all-champs-list")
        // console.log(tag)
        ul.innerHTML = "";
        // console.log(ul)
        let allChampKeys = ChampData.getAllChampKeys();

        if (tag) {
            allChampKeys = ChampData.getFilteredChampKeys(tag);
        }

        allChampKeys.forEach((champKey) => {
            const fig = document.createElement("figure");
            const li = document.createElement("li");
            const h2 = document.createElement("h2");
            const img = document.createElement("img");

            h2.innerText = ChampData.getChampName(champKey);
            img.setAttribute("id", champKey);
            img.setAttribute("src", ChampData.getChampPortraitURL(champKey));
            li.append(h2, img);
            fig.append(li);
            ul.append(fig);
        })
    }
}

export default IndexPage

