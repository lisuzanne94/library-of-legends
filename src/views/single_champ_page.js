import ChampData from '../scripts/get_champ_data.js'

class SingleChampPage {
    constructor(champKey) {
        const singleChampDiv = document.querySelector(".single-champ-page");
        this.singleChampDiv = singleChampDiv;
    }

    renderPage(champKey) {
        this.renderHeader(champKey);
        this.renderPortrait(champKey);
    }

    // rendering header
    renderHeader(champKey) {
        const champNameHeader = document.querySelector("h1")
        champNameHeader.innerText = ChampData.getChampName(champKey);
    }

    // rendering portrait
    renderPortrait(champKey) {
        const champPortrait = document.querySelector(".single-champ-page img");
        champPortrait.setAttribute("src", ChampData.getChampPortraitURL(champKey));
    }

}

export default SingleChampPage
// console.log("inside single_champ_page.js")
