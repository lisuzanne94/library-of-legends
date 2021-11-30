import ChampData from '../scripts/get_champ_data.js'

class IndexPage {
    constructor(tag) {
        const indexPageDiv = document.querySelector(".index-page");
        this.indexPageDiv = indexPageDiv;
        this.renderAllPortraits(tag);

        const singleChampDiv = document.querySelector(".single-champ-page");
        singleChampDiv.style.display = "none";

    }

    // all portraits
    renderAllPortraits(tag) {
        const ul = document.querySelector(".all-champs-list")
        ul.innerHTML = "";
        let allChampKeys = ChampData.getAllChampKeys();

        if (tag) {
            if (tag === "All") {
                allChampKeys = ChampData.getAllChampKeys();
            } else {
                allChampKeys = ChampData.getFilteredChampKeys(tag);
            }
        }

        allChampKeys.forEach((champKey) => {
            const fig = document.createElement("figure");
            const li = document.createElement("li");
            const h3 = document.createElement("h3");
            const img = document.createElement("img");

            h3.innerText = ChampData.getChampName(champKey);
            img.setAttribute("id", champKey);
            img.setAttribute("src", ChampData.getChampPortraitURL(champKey));
            li.append(h3, img);
            fig.append(li);
            ul.append(fig);
        })
    }
}

export default IndexPage;

