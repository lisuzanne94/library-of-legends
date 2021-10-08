const ChampData = require('./scripts/get_champ_data.js')
const IndexPage = require('./views/index_page')

document.addEventListener("DOMContentLoaded", () => {
    const htmlEl = document.querySelector("body");
    const indexPage = new IndexPage (htmlEl)
})

// console.log(champData);
// console.log(champData.data.Ahri.spells)
