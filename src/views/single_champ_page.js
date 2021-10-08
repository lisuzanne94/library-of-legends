import ChampData from '../scripts/get_champ_data.js'

class SingleChampPage {
    constructor(htmlEl) {
        this.htmlEl = htmlEl;
        this.showPortrait("Aatrox");
    }
    // showing single portrait
    showPortrait (champKey) {
        const champNameHeader = document.querySelector("h1")
        const champPortrait = document.querySelector("img");

        champNameHeader.innerText = champKey;
        champPortrait.setAttribute("src", ChampData.getChampPortraitURL(champKey));
    }
}

export default SingleChampPage
// console.log("inside single_champ_page.js")
