import IndexPage from "./index_page";
import SingleChampPage from "./single_champ_page";

class View {

    constructor() {
        this.index = new IndexPage();
        this.singleChampPage = new SingleChampPage();
        this.filterButtons = document.querySelector("#filter-buttons");
        this.filteredChampsList = document.querySelector(".filtered-champs-list");

        this.renderIndexPage();
        this.showFilteredChamps();
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
        const champPortraits = document.querySelectorAll(".all-champs-list img")
        champPortraits.forEach(portrait => {
            portrait.addEventListener("click", this.handleClickOnPortrait.bind(this))
        });
    }

    handleClickOnPortrait(event) {
        const champKey = event.target.id;

        const singleChampDiv = document.querySelector(".single-champ-page");
        singleChampDiv.style.display = "";
        this.singleChampPage.renderPage(champKey);

        
        // this.index.indexPageDiv.style.display = "none";
        // this.index.indexPageDiv.style.opacity = "0.25";
    }

}

export default View;
