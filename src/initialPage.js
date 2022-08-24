import Veggies from "./images/HF-roasted-veggies.jpg";

const initialPage = () => {
  const div = document.createElement('div');
  const header = document.createElement('h1');
  header.textContent = "HF Kitchens'n'such";
  header.style.color = "purple";
  div.appendChild(header);
  const subheader = document.createElement('h2');
  subheader.textContent = "Your one-stop source for mealkit delights!"
  subheader.style.fontStyle = "italic";
  subheader.style.color = "red";
  div.appendChild(subheader);
  const image = document.createElement('img');
  image.src = Veggies;
  image.alt = "Roasted Veggies";
  image.width = "500";
  div.appendChild(image);
  const description = document.createElement('p');
  description.textContent = "Love the idea of a meal from a kit, but don't feel like\
    cooking a mealkit meal? We've got you covered! At HFK'n's, we make mealkit meals\
    come to life in a cozy restaurant setting. Just order your meal using our app and\
    we'll deliver it to your table, freshly cooked, right from the kit! No messy\
    unboxing, chopping, opening packages or cooking at all. It's what a mealkit meal\
    should be. No effort, just pretty good food at restaurant prices. Just sit back\
    and relax!";
  div.appendChild(description);
  return div;
}
export { initialPage };
