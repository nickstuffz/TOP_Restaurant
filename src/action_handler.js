import loadHome from './home_tab.js'
import loadMenu from './menu_tab.js'
import loadContact from './contact_tab.js'

function initializePage() {
    loadHeader();
    loadHome();
    loadClicks();
    tabSelect('tab-home');
    return;
}

function loadHeader() {
    const content = document.getElementById('content')
    const header = document.createElement('div');
    const logo = document.createElement('div');
    const logo_h1 = document.createElement('h1');
    const tab_container = document.createElement('div');
    const tab_home = document.createElement('div');
    const tab_menu = document.createElement('div');
    const tab_contact = document.createElement('div');
    
    header.id = 'header';
    logo.id = 'logo';
    tab_container.id = 'tab-container';
    tab_home.id = 'tab-home';
    tab_menu.id = 'tab-menu';
    tab_contact.id = 'tab-contact';

    tab_home.classList.add('tab');
    tab_menu.classList.add('tab');
    tab_contact.classList.add('tab');

    logo_h1.innerText = 'Slop Stop';
    tab_home.innerText = 'HOME';
    tab_menu.innerText = 'MENU';
    tab_contact.innerText = 'CONTACT';

    content.append(header);
    header.append(logo, tab_container);
    logo.append(logo_h1);
    tab_container.append(tab_home, tab_menu, tab_contact);

    return;
}

function loadClicks() {
    const tab_home = document.getElementById('tab-home');
    const tab_menu = document.getElementById('tab-menu');
    const tab_contact = document.getElementById('tab-contact');
    
    tab_home.addEventListener('click', Clicks.homeClick);
    tab_menu.addEventListener('click', Clicks.menuClick);
    tab_contact.addEventListener('click', Clicks.contactClick);
}

const Clicks = {
    homeClick() {
        tabSelect('tab-home');
        clearMain();
        loadHome();
        return;
    },
    menuClick() {
        tabSelect('tab-menu');
        clearMain();
        loadMenu();
        return;
    },
    contactClick() {
        tabSelect('tab-contact');
        clearMain();
        loadContact();
        return;
    }
}

function clearMain() {
    document.querySelectorAll('.main').forEach(el => el.remove());

    return;
}

function tabSelect(tab) {
    document.querySelectorAll('.tab').forEach((el) => {
        el.classList.remove('select');
    });
    const select = document.getElementById(tab);
    select.classList.add('select');

    return;
}

export {initializePage, Clicks}