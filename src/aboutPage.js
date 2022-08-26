import Bowl from "./images/HF-chicken-carrots-rice-bowl.jpg";

const aboutPage = () => {
  const div = document.createElement('div');
  const image = document.createElement('img');
  image.classList.add("image");
  image.src = Bowl;
  image.alt = "Chicken/Carrots/Rice Bowl";
  div.appendChild(image);
  const description = document.createElement('p');
  description.textContent = "Love the idea of a meal from a kit, but don't feel like\
    cooking a mealkit meal? We've got you covered! At Kits Cookin', we make mealkit meals\
    come to life in a cozy restaurant setting. Just order your meal using our app and\
    we'll deliver it to your table, freshly cooked, right from the kit! No messy\
    unboxing, chopping, opening packages or cooking at all. It's what a mealkit meal\
    should be. No effort, just pretty good food at restaurant prices. Just sit back\
    and relax!";
  div.appendChild(description);
  return div;
}
export { aboutPage };
