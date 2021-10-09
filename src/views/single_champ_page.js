import ChampData from '../scripts/get_champ_data.js'

class SingleChampPage {
    // ***** still need to make sure champ name can dynamically update when clicked ******* 
    constructor(pageDiv, champKey) {
        this.pageDiv = pageDiv;
        this.showPortrait(champKey);
        // this.showPage.bind(this);
        // this.hidePage.bind(this);
    }
    // showing single portrait
    showPortrait (champKey) {
        const champNameHeader = document.querySelector("h1")
        const champPortrait = document.querySelector(".single-champ-page img");

        champNameHeader.innerText = ChampData.getChampName(champKey);
        champPortrait.setAttribute("src", ChampData.getChampPortraitURL(champKey));
    }

    // maybe useful later? but calling in view.js event handler for now
        // // show page div
        // showPage () {
        //     this.pageDiv.style.display = "";
        // }

        // // hide page div
        // hidePage () {
        //     this.pageDiv.style.display = "none";
        // }
}

export default SingleChampPage
// console.log("inside single_champ_page.js")
