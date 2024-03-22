export default function showHome() {
	const contentDiv = document.querySelector("#content");

	let homeDiv = document.createElement("div");
	let h1 = document.createElement("h1");

	h1.textContent = "Welcome to Big Burger Restaurant !";

	homeDiv.appendChild(h1);

	contentDiv.appendChild(homeDiv);

	return contentDiv;
}
