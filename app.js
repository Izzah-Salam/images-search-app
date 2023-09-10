const accessKey = "-vtvWkjYwf6u4v_luB2Rm5UgMRQ4lovO5CTdzdMQPWY";

const formEl = document.querySelector("form");
const InputEl = document.getElementById("search-id");
const SearchBtn = document.getElementById("search-btn");
const searchResultEl = document.querySelector(".Search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let inputData = "";
let page = 1;

async function searchImages() {
	inputData = InputEl.value;
	const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
	if (page === 1) {
		searchResultEl.innerHTML = "";
	}

	const results = data.results;
	console.log(results);

	results.map((result) => {
		const ImageWrapper = document.createElement("div");
		ImageWrapper.classList.add("img");
		const image = document.createElement("img");
		image.src = result.urls.small;
		image.alt = result.alt_description;
		const imageLink = document.createElement("a");
		imageLink.href = result.links.html;
		imageLink.target = "_blank";
		imageLink.textContent = result.alt_description;

		ImageWrapper.appendChild(image);
		ImageWrapper.appendChild(imageLink);
		searchResultEl.appendChild(ImageWrapper);
	});

	if (page > 1) {
		showMoreBtn.style.display = block;
	}
}

formEl.addEventListener("submit", (event) => {
	event.preventDefault();
	page = 1;
	searchImages();
});
