import './styles.css';
import homePage from './components/home-page';
import menuPage from './components/menu';
import deliveryPage from './components/delivery';
import aboutPage from './components/about';

// navbar
const navBar = document.querySelector('nav ul');
const navContainer = document.querySelector('nav');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    const containerHeight = navContainer.getBoundingClientRect().height;
    const tabsHeight = navBar.getBoundingClientRect().height;

    if (containerHeight === 0) {
        navContainer.style.height = `${tabsHeight}px`;
    } else {
        navContainer.style.height = 0;
    }
})

// page tabs

homePage()

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    if (button.classList.contains('home-btn')) {
        button.addEventListener('click', () => {
            homePage();
        });
    } else if (button.classList.contains('menu-btn')) {
        button.addEventListener('click', () => {
            menuPage();
        })
    } else if (button.classList.contains('delivery-btn')) {
        button.addEventListener('click', () => {
            deliveryPage();
        })
    } else if (button.classList.contains('about-btn')) {
        button.addEventListener('click', () => {
            aboutPage();
        })
    }
})

// set date

const date = document.querySelector('#date');

date.textContent = new Date().getFullYear();