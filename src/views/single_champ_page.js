import ChampData from '../scripts/get_champ_data.js'

class SingleChampPage {
    constructor() {
        const singleChampDiv = document.querySelector(".single-champ-page");
        this.singleChampDiv = singleChampDiv;
    }

    renderPage(champKey) {
        this.renderHeader(champKey);
        this.renderPortrait(champKey);
        this.renderSpells(champKey);
    }

    // rendering header
    renderHeader(champKey) {
        const champNameHeader = document.querySelector(".single-champ-page h3")
        champNameHeader.innerText = `${ChampData.getChampName(champKey)}: ${ChampData.getChampTitle(champKey)}`;
    }

    // rendering portrait
    renderPortrait(champKey) {
        const champPortrait = document.querySelector(".single-champ-page img");
        champPortrait.setAttribute("src", ChampData.getChampPortraitURL(champKey));
    }

    // rendering spells
    renderSpells(champKey) {
        const champSpellList = document.querySelector("#champ-spell-list");
        const letters = ["Q", "W", "E", "R"]
        const spellNames = ChampData.getChampSpellNames(`${champKey}`);
        const spellDescs = ChampData.getChampSpellDescs(`${champKey}`);

        for (let i = 0; i < 4; i++) {
            const li = document.createElement("li");
            const p = document.createElement("p");
            const br = document.createElement("br");
            li.innerText = `${letters[i]}: ${spellNames[i]}`;
            p.innerHTML = `${spellDescs[i]}`;
            li.append(p);
            champSpellList.append(li);
            champSpellList.append(br);
        }
    }
}

export default SingleChampPage
// console.log("inside single_champ_page.js")
