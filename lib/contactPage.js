"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contactPage = void 0;
var _HFTaquitos = _interopRequireDefault(require("./images/HF-taquitos.jpg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const contactPage = () => {
  const div = document.createElement('div');
  const image = document.createElement('img');
  image.classList.add("image");
  image.src = _HFTaquitos.default;
  image.alt = "Taquitos";
  div.appendChild(image);
  const description = document.createElement('p');
  description.textContent = "Phone, Email, hours, blah blah blah";
  div.appendChild(description);
  return div;
};
exports.contactPage = contactPage;