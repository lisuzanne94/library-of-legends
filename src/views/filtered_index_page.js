import ChampData from '../scripts/get_champ_data.js'

class FilteredChampsPage {

    constructor (pageDiv, tag) {
        this.pageDiv = pageDiv;
        this.renderFilteredChamps(tag);
    }

    // remember to code in where the tag comes from
    renderFilteredChamps(tag) {
        const ul = document.querySelector(".filtered-champs-list");
        // const ul = document.getElementsByClassName("filtered-champs-list")
        const allChampKeys = ChampData.getAllChampKeys();

        allChampKeys.forEach((champKey) => {
            if (ChampData.getChampTags(champKey).includes(tag)) {
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
            }
        })
    }
}

//remember to undo the display in the html file
// const div = document.querySelector(".filtered-champs-page")
// let f = new FilteredChampsPage(div);

export default FilteredChampsPage;