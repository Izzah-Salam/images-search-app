const AccessKey = "-vtvWkjYwf6u4v_luB2Rm5UgMRQ4lovO5CTdzdMQPWY";

const formEl = document.querySelector("form");
const InputEl = document.getElementById("search-id");
const SearchBtn = document.getElementById("search-btn");
const searchResultEl = document.querySelector(".Search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let inputData = "";
let page = 1;

async function searchImages() {
	inputData = InputEl.value;
	const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id${AccessKey}`;
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
	if (page === 1) {
		searchResultEl.innerHTML = "";
	}

	const result = data.results;
	console.log(result);

	const ImageWrapper = document.createElement("div");

	if (page > 1) {
		showMoreBtn.style.display = block;
	}
}

formEl.addEventListener("submit", (event) => {
	event.preventDefault();
	page = 1;
	searchImages();
});
