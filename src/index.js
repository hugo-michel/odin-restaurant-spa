import "./style.css";
import showHome from "./home.js";
import showAbout from "./about.js";
import showMenu from "./menu.js";

const btnHome = document.querySelector("#btn-home");
const btnMenu = document.querySelector("#btn-menu");
const btnAbout = document.querySelector("#btn-about");
const contentDiv = document.querySelector("#content");

btnHome.addEventListener("click", () => {
	while (contentDiv.firstChild) {
		contentDiv.removeChild(contentDiv.firstChild);
	}

	showHome();
});

btnAbout.addEventListener("click", () => {
	while (contentDiv.firstChild) {
		contentDiv.removeChild(contentDiv.firstChild);
	}

	showAbout();
});

btnMenu.addEventListener("click", () => {
	while (contentDiv.firstChild) {
		contentDiv.removeChild(contentDiv.firstChild);
	}

	showMenu();
});

showHome();
