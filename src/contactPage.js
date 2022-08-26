import Taquitos from "./images/HF-taquitos.jpg";

const contactPage = () => {
  const div = document.createElement('div');
  const image = document.createElement('img');
  image.classList.add("image");
  image.src = Taquitos;
  image.alt = "Taquitos";
  div.appendChild(image);
  const description = document.createElement('p');
  description.textContent = "Phone, Email, hours, blah blah blah";
  div.appendChild(description);
  return div;
}
export { contactPage };
