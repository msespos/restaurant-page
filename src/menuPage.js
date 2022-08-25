import Veggies from "./images/HF-roasted-veggies.jpg";

const menuPage = () => {
  const div = document.createElement('div');
  const header = document.createElement('h1');
  header.textContent = "HF Kitchens'n'such";
  header.style.color = "purple";
  div.appendChild(header);
  const subheader = document.createElement('h2');
  subheader.textContent = "Menu"
  subheader.style.fontStyle = "italic";
  subheader.style.color = "red";
  div.appendChild(subheader);
  const image = document.createElement('img');
  image.src = Veggies;
  image.alt = "Roasted Veggies";
  image.width = "300";
  div.appendChild(image);
  const description = document.createElement('p');
  description.textContent = "Our first recipe has us thinking outside the box.\
    We took two different mealkits and grabbed only the roasted veggie parts, and mixed\
    and matched the spices provided to create something we like to call an original\
    recipe! Enjoy this feast of veggie roast!";
  div.appendChild(description);
  return div;
}
export { menuPage };
