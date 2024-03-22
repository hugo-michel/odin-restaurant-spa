export default function showMenu() {
	const contentDiv = document.querySelector("#content");

	let p = document.createElement("p");
	p.textContent = "Burger maison : 5euros";

	contentDiv.appendChild(p);

	return contentDiv;
}
