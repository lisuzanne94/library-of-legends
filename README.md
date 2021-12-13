# Library of Legends

[Library of Legends Live](https://lisuzanne94.github.io/library-of-legends/)

<img src="title.png"></img>

League of Legends is an online multiplayer battle arena game in which players can choose from 157 different champions to play as. Each champion has individualized background lore and attributes. Library of Legends is a library of all 157 champions, where the user can select a specific champion to display and view their individual profiles. 

# Technologies
* VanillaJS
* CSS3
* HTML5
* Webpack to bundle JS code

Data files:
* Champion data from Riot Games/Data Dragon: https://riot-api-libraries.readthedocs.io/en/latest/ddragon.html

# Features
## Individual Champion Profiles
Users can click on an individual champion's profile to view their details. This click triggers an event utilizing DOM manipulation in VanillaJS. This event removes any currently rendered champion view if one exists and adds a new view for the new champion to be rendered.

``` javascript
// src/views/view.js
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
```

# Bonus Features
* Addition of all available champion skins



