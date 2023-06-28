// import page modules


const tab_home = document.getElementById('tab-home');
const tab_menu = document.getElementById('tab-menu');
const tab_contact = document.getElementById('tab-contact');

tab_home.addEventListener('click', () => {
    clearPage();
    loadHeader();
    loadHome();
    return;
});

tab_menu.addEventListener('click', () => {
    clearPage();
    loadHeader();
    loadMenu();
    return;
});

tab_contact.addEventListener('click', () => {
    clearPage();
    loadHeader();
    loadContact();
    return;
});

function loadHeader() {
    // loads header
}

function clearPage() {
    // clears page
}

loadHome();