// import page modules

import loadHome from './home_tab.js'
import {loadHeader, loadClicks, tabSelect} from './action_handler.js'

const content = document.getElementById('content')

initializePage();

function initializePage() {
    loadHeader();
    loadHome();
    loadClicks();
    tabSelect(tab_home);
    return;
}

