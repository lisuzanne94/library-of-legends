import IndexPage from "./index_page";
import SingleChampPage from "./single_champ_page";
import ChampData from "../scripts/get_champ_data";

class View {

    constructor() {
        this.index = new IndexPage();
        this.singleChampPage = new SingleChampPage();
        this.filterButtons = document.querySelector("#filter-buttons");
        this.filteredChampsList = document.querySelector(".filtered-champs-list");
        this.i = 0;

        this.renderIndexPage();
        this.showFilteredChamps();
        this.switchSkin()

    }

    renderIndexPage(tag) {
        this.index.renderAllPortraits(tag)
        this.showChampPage();
    }

    showFilteredChamps() {
        const tags = document.querySelectorAll("[name='tag']")
        for (let i = 0; i < tags.length; i++) {
            const tag = tags[i];
            tag.addEventListener("click", this.handleClickOnFilter.bind(this))
        };
    }

    handleClickOnFilter(event) {
        const tag = event.target.id;
        this.renderIndexPage(tag);
    }

    // handles click event to show individual page
    showChampPage() {
        const champPortraits = document.querySelectorAll(".all-champs-list img");
        champPortraits.forEach(portrait => {
            portrait.addEventListener("click", this.handleClickOnPortrait.bind(this))
        });
    }

    // handleClickOnPortrait(event) {
    //     const champKey = event.target.id;
    //     if (singleChampDiv) {singleChampDiv.remove()};
    //     if (!singleChampDiv) {
    //         const singleChampDiv = document.createElement("div");
    //         singleChampDiv.classList = ".single-champ-page";
    //     }
    //     document.querySelector("body").append(singleChampDiv)
    //     const singleChampDiv = document.querySelector(".single-champ-page");
    //     const welcome = document.querySelector("#welcome");
    //     singleChampDiv.style.display = "";
    //     welcome.innerText = "";
    //     this.singleChampPage.renderPage(champKey);
    //     // singleChampDiv.style.animation = "slide-left 2s";
        
    //     // this.index.indexPageDiv.style.display = "none";
    //     // this.index.indexPageDiv.style.opacity = "0.25";
    // }

    handleClickOnPortrait(event) {
        const champKey = event.target.id;
        const singleChampDiv = document.querySelector(".single-champ-page");
        singleChampDiv.remove();
        if (!singleChampDiv) {
            singleChampDiv = document.createElement("div");
            singleChampDiv.classList = ".single-champ-page";
        }
        document.querySelector("body").append(singleChampDiv)
        const welcome = document.querySelector("#welcome");
        singleChampDiv.style.display = "";
        welcome.innerText = "";
        this.singleChampPage.renderPage(champKey);
        // singleChampDiv.style.animation = "slide-left 2s";

        // this.index.indexPageDiv.style.display = "none";
        // this.index.indexPageDiv.style.opacity = "0.25";
    }

    switchSkin() {
        const arrow = document.querySelector("#right-arrow");
        arrow.addEventListener("click", this.handleClickOnArrow.bind(this));
    }

    handleClickOnArrow() {
        const champKey = this.singleChampPage.singleChampDiv.style.backgroundImage.slice(64).split("_")[0];
        const skinNums = ChampData.getChampSkinNums(champKey);
        const singleChampDiv = this.singleChampPage.singleChampDiv
        // singleChampDiv.removeAttribute("style");
        singleChampDiv.style.backgroundImage = `url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champKey}_${skinNums[this.i % skinNums.length]}.jpg")`;
        this.incrementCounter();
        // singleChampDiv.style.animation = "fade-in-bg 3s";
    }

    incrementCounter() {
        this.i += 1;
    }

}

export default View;
