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


function loadHome () {
    const content = document.getElementById('content');

    const home_container = document.createElement('div');
    const hero_container = document.createElement('div');
    const hero_content = document.createElement('div');
    const hero_title = document.createElement('h1');
    const hero_subtitle = document.createElement('h2');
    const hero_button = document.createElement('button');
    const home_mid = document.createElement('div');
    const mid_strip = document.createElement('div');
    
    home_container.id = 'home-container';
    hero_container.id = 'hero-container';
    hero_content.id = 'hero-content';
    hero_title.id = 'hero-title';
    hero_subtitle.id = 'hero-subtitle';
    hero_button.id = 'hero-button';
    home_mid.id = 'home-mid';

    home_container.classList.add('main');
    mid_strip.classList.add('strip');
    hero_button.setAttribute("type", "button");

    hero_title.innerText = 'Welcome to Slop Shop';
    hero_subtitle.innerText = 'your one stop shop for yummu slop!';
    hero_button.innerText = 'peruse Menu >>';
    mid_strip.innerText = 
'Here at Slop Stop we love slop. Slop is so delicious and wonderful I do' +
' not know why anybody would eat anything else. We serve a large variety of' + 
' slop from all around the world. Eat up!';

    content.append(home_container);
    home_container.append(hero_container, home_mid);
    hero_container.append(hero_content);
    hero_content.append(hero_title, hero_subtitle, hero_button);
    home_mid.append(mid_strip);
}
loadHeader();
loadHome();

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