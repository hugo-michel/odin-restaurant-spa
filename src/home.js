export default function showHome() {
	const contentDiv = document.querySelector("#content");

	let customDiv = document.createElement("div");
	customDiv.setAttribute("id", "custom");

	let h1 = document.createElement("h1");

	h1.textContent = "Welcome to Big Burger Restaurant";

	customDiv.appendChild(h1);

	contentDiv.appendChild(customDiv);

	return contentDiv;
}
