import IndexPage from "./index_page";
import SingleChampPage from "./single_champ_page";


class View {

    constructor () {
        const indexDiv = document.querySelector(".index-page");
        this.index = new IndexPage(indexDiv);
        this.singleChampDiv = document.querySelector(".single-champ-page");
        // this.index = indexPage; // render index page
        // this.renderMainView();
        // this.showChampPage();
        this.showChampPage();
    }

    renderMainView () {
        const indexDiv = document.querySelector(".index-page");
        const singleChampDiv = document.querySelector(".single-champ-page");
        // const index = new IndexPage (indexDiv) // render index page
        // const singleChampPage = new SingleChampPage(singleChampDiv, champKey); // render single Champ's Page
    }

    // handles click event to show inidividual page
    showChampPage () {
        // const indexDiv = document.querySelector(".index-page");
        const champPortraits = document.querySelectorAll(".all-champs-list li")
        champPortraits.forEach(portrait => {
            this.handleClick.bind(this);
            portrait.addEventListener("click", this.handleClick)
        }) 
    }

    handleClick (event) {
        const champKey = event.target.id;
        const indexPageDiv = document.querySelector(".index-page");
        const singleChampDiv = document.querySelector(".single-champ-page");
        const singleChampPage = new SingleChampPage(singleChampDiv, champKey)
        // console.log(this)
        indexPageDiv.style.display = "none";
        singleChampDiv.style.display = "";
        
    }

}

export default View;
