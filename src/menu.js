import Burger1 from "./images/burger1.jpeg";
import Burger2 from "./images/burger2.jpg";

function createNewItem(imageLink, text) {
	let menuItemDiv = document.createElement("div");
	menuItemDiv.setAttribute("class", "menu-item");

	let menuItemText = document.createElement("p");
	menuItemText.textContent = text;

	const image = new Image();
	image.src = imageLink;

	menuItemDiv.appendChild(image);
	menuItemDiv.appendChild(menuItemText);

	return menuItemDiv;
}

export default function showMenu() {
	const contentDiv = document.querySelector("#content");

	let customDiv = document.createElement("div");
	customDiv.setAttribute("id", "menu");

	let item1 = createNewItem(Burger1, "Le classic: 5€");
	let item2 = createNewItem(Burger2, "Le spécial: 8€");

	customDiv.appendChild(item1);
	customDiv.appendChild(item2);

	contentDiv.appendChild(customDiv);

	return contentDiv;
}
