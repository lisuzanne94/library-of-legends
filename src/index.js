const ChampData = require('./scripts/get_champ_data.js')
import IndexPage from './views/index_page'

document.addEventListener("DOMContentLoaded", () => {
    const htmlEl = document.querySelector("body");
    const index = new IndexPage (htmlEl)
})
