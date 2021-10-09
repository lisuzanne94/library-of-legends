import IndexPage from "./index_page";
import FilteredChampsPage from "./filtered_index_page";
import SingleChampPage from "./single_champ_page";



class View {

    constructor () {
        const indexDiv = document.querySelector(".index-page");
        this.index = new IndexPage(indexDiv);
        this.singleChampDiv = document.querySelector(".single-champ-page");
        // this.index = indexPage; // render index page
        // this.renderMainView();
        // this.showChampPage();
        this.showFilteredChamps();
        this.showChampPage();
    }

    renderMainView () {
        const indexDiv = document.querySelector(".index-page");
        const singleChampDiv = document.querySelector(".single-champ-page");
        // const index = new IndexPage (indexDiv) // render index page
        // const singleChampPage = new SingleChampPage(singleChampDiv, champKey); // render single Champ's Page
    }

    // handles click event to show individual page
    showChampPage () {
        // const indexDiv = document.querySelector(".index-page");
        const champPortraits = document.querySelectorAll(".all-champs-list li")
        champPortraits.forEach(portrait => {
            this.handleClickOnPortrait.bind(this);
            portrait.addEventListener("click", this.handleClickOnPortrait)
        }) 
    }

    showFilteredChamps () {
        const tags = document.querySelectorAll("[name='tag']")
        for (let i = 0; i < tags.length; i++) {
            const tag = tags[i];
            tag.addEventListener("click", this.handleClickOnFilter)
        }
    }

    handleClickOnPortrait (event) {
        const champKey = event.target.id;
        const indexPageDiv = document.querySelector(".index-page");
        const singleChampDiv = document.querySelector(".single-champ-page");
        const singleChampPage = new SingleChampPage(singleChampDiv, champKey)

        indexPageDiv.style.display = "none";
        singleChampDiv.removeAttribute("style");
    }

    handleClickOnFilter (event) {
        const tag = event.target.id;
        console.log(tag)
        const indexPageDiv = document.querySelector(".index-page");
        const filteredPageDiv = document.querySelector(".filtered-champs-page");
        const filteredChampPage = new FilteredChampsPage(filteredPageDiv, tag)

        indexPageDiv.style.display = "none";
        // singleChampDiv.removeAttribute("style");
    }

}

export default View;
