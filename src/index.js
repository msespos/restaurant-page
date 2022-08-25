import { aboutPage } from './aboutPage';
import { menuPage } from './menuPage';
import { contactPage } from './contactPage';

const tab = document.createElement('div')
const tabs = document.createElement('div');
const homeTab = document.createElement('h2');
homeTab.textContent = "Home"
homeTab.style.fontStyle = "italic";
homeTab.style.color = "purple";
homeTab.addEventListener('click', () => {
  tab.replaceChildren();
  tab.appendChild(aboutPage());
});
tabs.appendChild(homeTab);
const menuTab = document.createElement('h2');
menuTab.textContent = "Menu"
menuTab.style.fontStyle = "italic";
menuTab.style.color = "purple";
menuTab.addEventListener('click', () => {
  tab.replaceChildren();
  tab.appendChild(menuPage());
});
tabs.appendChild(menuTab);
const contactTab = document.createElement('h2');
contactTab.textContent = "Contact Us"
contactTab.style.fontStyle = "italic";
contactTab.style.color = "purple";
contactTab.addEventListener('click', () => {
  tab.replaceChildren();
  tab.appendChild(contactPage());
});
tabs.appendChild(contactTab);
//render a background image too, later
const div = document.getElementById("content");
div.appendChild(tabs);
div.appendChild(tab);