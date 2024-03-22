export default function showAbout() {
	const contentDiv = document.querySelector("#content");

	let p = document.createElement("p");
	p.textContent = "Envie de nous contacter ?";

	contentDiv.appendChild(p);

	return contentDiv;
}
