import { aboutPage } from './aboutPage';
import { menuPage } from './menuPage';
import { contactPage } from './contactPage';

const tab = document.createElement('div')
const tabs = document.createElement('div');
tabs.classList.add("tabs");
const homeTab = document.createElement('h2');
homeTab.textContent = "Home"
homeTab.addEventListener('click', () => {
  tab.replaceChildren();
  tab.appendChild(aboutPage());
});
tabs.appendChild(homeTab);
const menuTab = document.createElement('h2');
menuTab.textContent = "Menu"
menuTab.addEventListener('click', () => {
  tab.replaceChildren();
  tab.appendChild(menuPage());
});
tabs.appendChild(menuTab);
const contactTab = document.createElement('h2');
contactTab.textContent = "Contact Us"
contactTab.addEventListener('click', () => {
  tab.replaceChildren();
  tab.appendChild(contactPage());
});
tabs.appendChild(contactTab);
const header = document.createElement('h1');
header.textContent = "Kits Cookin'";
header.style.color = "purple";
header.classList.add('header');
const div = document.getElementById("content");
div.appendChild(tabs);
div.appendChild(header);
div.appendChild(tab);
