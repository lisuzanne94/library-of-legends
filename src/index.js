// const ChampData = require('./scripts/get_champ_data.js')
import ChampData from './scripts/get_champ_data.js'
import IndexPage from './views/index_page'
import SingleChampPage from './views/single_champ_page.js';

document.addEventListener("DOMContentLoaded", () => {
    const htmlEl = document.querySelector("body");
    // const index = new IndexPage (htmlEl) // render index page
    const singleChampPage = new SingleChampPage (htmlEl)
})
