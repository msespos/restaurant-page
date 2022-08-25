import Veggies from "./images/HF-roasted-veggies.jpg";

const contactPage = () => {
  const div = document.createElement('div');
  const header = document.createElement('h1');
  header.textContent = "HF Kitchens'n'such";
  header.style.color = "purple";
  div.appendChild(header);
  const subheader = document.createElement('h2');
  subheader.textContent = "Contact Us"
  subheader.style.fontStyle = "italic";
  subheader.style.color = "red";
  div.appendChild(subheader);
  const image = document.createElement('img');
  image.src = Veggies;
  image.alt = "Roasted Veggies";
  image.width = "300";
  div.appendChild(image);
  const description = document.createElement('p');
  description.textContent = "Phone, Email, hours, blah blah blaaha";
  div.appendChild(description);
  return div;
}
export { contactPage };
