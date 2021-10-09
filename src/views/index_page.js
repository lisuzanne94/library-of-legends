import ChampData from '../scripts/get_champ_data.js'

class IndexPage {
    constructor(pageDiv) {
        this.pageDiv = pageDiv;
        this.renderAllPortraits();
        // this.hidePage.bind(this);
        // this.showPage.bind(this);
    }

    // all portraits
    renderAllPortraits () {
        const ul = document.querySelector(".all-champs-list")
        const allChampKeys = ChampData.getAllChampKeys();

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

    // maybe useful later? but calling in view.js event handler for now
        // // show page div
        // showPage() {
        //     this.pageDiv.style.display = "";
        // }

        // // hide page div
        // hidePage() {
        //     this.pageDiv.style.display = "none";
        // }
}

export default IndexPage

