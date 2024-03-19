import "./style.css";
import createHome from "./createHome";
import createMenu from "./createMenu";
import createAbout from "./createAbout";

const homeBtn = document.querySelector('.homeBtn');
const menuBtn = document.querySelector('.menuBtn');
const aboutBtn = document.querySelector('.aboutBtn');

homeBtn.addEventListener('click', () => createHome());
menuBtn.addEventListener('click', () => createMenu());
aboutBtn.addEventListener('click', () => createAbout());

createHome();