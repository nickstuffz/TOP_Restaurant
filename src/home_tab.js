import {Clicks} from './action_handler'

function loadHome() {
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
    hero_subtitle.innerText = 'your one stop shop for yummy slop!';
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

    hero_button.addEventListener('click', Clicks.menuClick);
    
    return;
}

export default loadHome