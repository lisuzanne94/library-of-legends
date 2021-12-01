import IndexPage from "./index_page";
import SingleChampPage from "./single_champ_page";
import ChampData from "../scripts/get_champ_data";
import Audio from "./audio_player";

class View {

    constructor() {
        this.index = new IndexPage();
        this.singleChampPage = new SingleChampPage();
        this.audio = new Audio();
        this.filterButtons = document.querySelector("#filter-buttons");
        this.filteredChampsList = document.querySelector(".filtered-champs-list");
        this.currentChamp = null;
        this.i = 0;

        this.renderIndexPage();
        this.showFilteredChamps();
        this.switchNextSkin();
        this.switchPrevSkin();
        this.closeWelcomeModal();
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

    closeWelcomeModal() {
        const close = document.getElementById("enter-close");
        const welcome = document.querySelector(".welcome");
        const audio = document.getElementById("bg-audio");
        close.addEventListener("click", () => {
            welcome.classList.add("animate-fade-out")
            // welcome.style.display = "none";
            audio.play();
        })
    }

    handleClickOnFilter(event) {
        const tag = event.target.id;
        this.renderIndexPage(tag);
    }

    showChampPage() {
        const champPortraits = document.querySelectorAll(".all-champs-list img");
        champPortraits.forEach(portrait => {
            portrait.addEventListener("click", this.handleClickOnPortrait.bind(this))
        });
    }

    handleClickOnPortrait(event) {
        const champKey = event.target.id;

        const bg = document.querySelector("#bg-img");
        if (bg) { bg.remove() }
        
        const singleChampDiv = document.querySelector(".single-champ-page");
        if (!singleChampDiv) {
            singleChampDiv = document.createElement("div");
            singleChampDiv.classList = ".single-champ-page";
        } else {
            singleChampDiv.remove();
        }

        document.querySelector("body").append(singleChampDiv)
        const instructions = document.querySelector("#instructions");
        singleChampDiv.style.display = "";
        instructions.innerText = "";
        this.singleChampPage.renderPage(champKey);
        this.currentChamp = champKey;
    }

    switchNextSkin() {
        const rightArrow = document.querySelector("#right-arrow");
        rightArrow.addEventListener("click", this.handleClickOnRightArrow.bind(this));
    }

    switchPrevSkin() {
        const leftArrow = document.querySelector("#left-arrow");
        leftArrow.addEventListener("click", this.handleClickOnLeftArrow.bind(this));
    }

    handleClickOnRightArrow() {
        this.incrementCounter();
        const skinNums = ChampData.getChampSkinNums(this.currentChamp);
        // const singleChampDiv = this.singleChampPage.singleChampDiv
        const champDetails = document.querySelector(".champ-details")
        let bg = document.querySelector("#bg-img");
        bg.remove();
        bg = document.createElement("img")
        bg.setAttribute("id", "bg-img")
        bg.setAttribute("src", `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.currentChamp}_${skinNums[Math.abs(this.i % skinNums.length)]}.jpg`)
        champDetails.append(bg);
    }

    handleClickOnLeftArrow() {
        const skinNums = ChampData.getChampSkinNums(this.currentChamp);

        if (this.i <= 0) {
            this.i = skinNums.length;
        }
        this.decrementCounter();

        const champDetails = document.querySelector(".champ-details")
        let bg = document.querySelector("#bg-img");
        bg.remove();
        bg = document.createElement("img")
        bg.setAttribute("id", "bg-img")
        bg.setAttribute("src", `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.currentChamp}_${skinNums[Math.abs(this.i % skinNums.length)]}.jpg`)
        // console.log(this.i)
        champDetails.append(bg);
    }

    decrementCounter() {
        this.i--;
    }

    incrementCounter() {
        this.i += 1;
    }

}

export default View;
