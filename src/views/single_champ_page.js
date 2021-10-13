import ChampData from '../scripts/get_champ_data.js'

class SingleChampPage {
    constructor() {
        const singleChampDiv = document.querySelector(".single-champ-page");
        this.singleChampDiv = singleChampDiv;
    }

    renderPage(champKey) {
        this.renderHeader(champKey);
        this.renderSplashArt(champKey);
        this.renderSpells(champKey);
        this.renderLore(champKey);
    }

    // rendering header
    renderHeader(champKey) {
        const champNameHeader = document.querySelector(".single-champ-page h3")
        champNameHeader.innerHTML = "";
        champNameHeader.innerText = `${ChampData.getChampName(champKey)}: ${ChampData.getChampTitle(champKey)}`;
    }

    // rendering splash art
    renderSplashArt(champKey) {
        const single = document.querySelector(".champ-details")
        const bg = document.createElement("img");
        bg.setAttribute("id", `bg-img`)
        bg.setAttribute("src", `${ChampData.getChampSplashArtURL(champKey)}`)
        single.append(bg);
    }


    //rendering lore
    renderLore(champKey) {
        const lore = document.querySelector("#champ-lore");
        lore.innerHTML = ChampData.getChampLore(champKey);
    }

    // rendering spells
    renderSpells(champKey) {
        const champSpellList = document.querySelector("#champ-spell-list");
        champSpellList.innerHTML = "";
        const letters = ["Q", "W", "E", "R"]
        const spellNames = ChampData.getChampSpellNames(champKey);
        const spellDescs = ChampData.getChampSpellDescs(champKey);
        const spellSuffixes = ChampData.getSpellSuffixes(champKey)

        for (let i = 0; i < 4; i++) {
            const li = document.createElement("li");
            const img = document.createElement("img");
            const h4 = document.createElement("h4");
            const p = document.createElement("p");
            const br = document.createElement("br");

            img.setAttribute("src", ChampData.getSpellImgURL(spellSuffixes[i]));
            li.append(img)
            li.append(br)
            h4.innerHTML = `${letters[i]}: ${spellNames[i]}`;
            if (i === 3) { h4.setAttribute("id", "ult") };
            li.append(h4);
            p.innerHTML += `<center>${spellDescs[i]}</center>`;
            li.append(p);
            champSpellList.append(li);
            champSpellList.append(br);
        }
    }
}

export default SingleChampPage

