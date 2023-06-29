function loadHeader() {
    const content = document.getElementById('content');

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
}





// <div class="main" id="home-container">

//     <div id="hero-container">
//         <div id="hero-content">
//             <h1 id="hero-title">
//                 Welcome to Slop Shop
//             </h1>
//             <h2 id="hero-subtitle">
//                 your one stop shop for yummy slop!
//             </h2>
//             <button id="hero-button" type="button">
//                 peruse Menu >>
//             </button>
//         </div>
//     </div>
    
//     <div id="home-mid">
//         <div class="strip">
//             Here at Slop Stop we love slop. Slop is so delicious and 
//             wonderful I do not know why anybody would eat anything else. We 
//             serve a large variety of slop from all around the world. Eat up!
//         </div>
//     </div>
        
// </div>