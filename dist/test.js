function loadHeader() {
    // loads header
    const content = document.getElementById('content');

    const header = document.createElement('div');
    const logo = document.createElement('div');
    const tab_container = document.createElement('div');
    const logo_h1 = document.createElement('h1');
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

    
    content.append(header, tab_container);
    header.appendChild(logo);
    logo.appendChild(logo_h1);
    header.appendChild(tab_container);
    tab_container.append(tab_home, tab_menu, tab_contact);

}

loadHeader();

{/* 
<div id="header">
    <div id="logo">
        <h1>Slop Stop</h1>
    </div>
    <div id="tab-container">
        <div class="tab select" id="tab-home">
            HOME
        </div>
        <div class="tab" id="tab-menu">
            MENU
        </div>
        <div class="tab" id="tab-contact">
            CONTACT
        </div>
    </div>
</div> 
*/}
