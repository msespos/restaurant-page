"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuPage = void 0;
var _HFRoastedVeggies = _interopRequireDefault(require("./images/HF-roasted-veggies.jpg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const menuPage = () => {
  const div = document.createElement('div');
  const image = document.createElement('img');
  image.classList.add("image");
  image.src = _HFRoastedVeggies.default;
  image.alt = "Roasted Veggies";
  div.appendChild(image);
  const description = document.createElement('p');
  description.textContent = "Our first recipe has us thinking outside the box.\
    We took multiple mealkits and grabbed only the roasted veggie parts, and mixed\
    and matched with the spices provided to create something we like to call an original\
    recipe! Enjoy this feast of veggie roast! (Now with bacon!)";
  div.appendChild(description);
  return div;
};
exports.menuPage = menuPage;