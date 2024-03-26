export default function showAbout() {
	const contentDiv = document.querySelector("#content");

	let customDiv = document.createElement("div");
	customDiv.setAttribute("id", "custom");

	let p = document.createElement("p");
	p.setAttribute("id", "aboutInfo");

	p.textContent = "Contact Info : 123 rue Darchicourt	75420 BlablaVille 05.45.42.15.48";

	customDiv.appendChild(p);

	contentDiv.appendChild(customDiv);

	return contentDiv;
}
