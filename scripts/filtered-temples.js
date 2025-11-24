const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
	imgAlt: "Photo of the Aba Nigeria Temple."
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
	imgAlt: "Photo of the Manti Utah Temple."
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
	imgAlt: "Photo of the Payson Utah Temple."
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
	imgAlt: "Photo of the Yigo Guam Temple."
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
	imgAlt: "Photo of the Washington D.C. Temple."
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
	imgAlt: "Photo of the Lima Perú Temple."
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
	imgAlt: "Photo of the Mexico City Mexico Temple."
  },
    {
    templeName: "Melbourne Australia",
    location: "Melbourne, Australia",
    dedicated: "2000, June, 16",
    area: 10700,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/melbourne-australia/400x250/melbourne-australia-temple-877902-wallpaper.jpg",
	imgAlt: "Photo of the Melbourne Australia Temple."
  },
    {
    templeName: "London England",
    location: "London, England",
    dedicated: "1958, September, 7",
    area: 42652,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/400x250/london-england-temple-lds-393730-wallpaper.jpg",
	imgAlt: "Photo of the London England Temple."
  },
    {
    templeName: "Hong Kong China",
    location: "Hong Kong, China",
    dedicated: "1996, May, 26",
    area: 51921,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/400x250/hong_kong_china_temple_baptistry.jpeg",
	imgAlt: "Photo of the bapistry in the Hong Kong China Temple."
	/* For consistency's sake, an interior picture was used. All exterior photos are portrait orientation. */
  },
]

const header = document.querySelector("#filter-header")
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const imagesContainer = document.querySelector(".images");
const homeFilter = document.querySelector("#home");
const oldFilter = document.querySelector("#old");
const newFilter = document.querySelector("#new");
const largeFilter = document.querySelector("#large");
const smallFilter = document.querySelector("#small");

header.textContent = "Home";
homeFilter.classList.add("active");
createCards(temples);

homeFilter.addEventListener("click", () => {
	header.textContent = "Home";
	deactivateNavElements();
	homeFilter.classList.add("active");
	toggleNavigation();
	return createCards(temples);
})

oldFilter.addEventListener("click", () => {
	header.textContent = "Old";
	deactivateNavElements();
	oldFilter.classList.add("active");
	toggleNavigation();
	createCards(temples.filter(temple => {
		let year = "";
		for (let i = 0; i < 4; i++) {
			year += temple.dedicated[i];
		}
		year = parseInt(year);
		return year < 1900;
	}));
});

newFilter.addEventListener("click", () => {
	header.textContent = "New";
	deactivateNavElements();
	newFilter.classList.add("active");
	toggleNavigation();
	createCards(temples.filter(temple => {
		let year = "";
		for (let i = 0; i < 4; i++) {
			year += temple.dedicated[i];
		}
		year = parseInt(year);
		return year > 2000;
	}));
});

largeFilter.addEventListener("click", () => {
	header.textContent = "Large";
	deactivateNavElements();
	largeFilter.classList.add("active");
	toggleNavigation();
	createCards(temples.filter(temple => temple.area > 90000));
});

smallFilter.addEventListener("click", () => {
	header.textContent = "Small";
	deactivateNavElements();
	smallFilter.classList.add("active");
	toggleNavigation();
	createCards(temples.filter(temple => temple.area < 10000));
});

function createCards(filteredTemples) {
	document.querySelector(".images").innerHTML = "";
	filteredTemples.forEach((temple) => imagesContainer.innerHTML += (
			`
				<figure>
					<h2>${temple.templeName}</h2>
					<div class="info">
						<p><span>Location:</span> ${temple.location}</p>
						<p><span>Dedicated:</span> ${temple.dedicated}</p>
						<p><span>Size:</span> ${temple.area} sq ft</p>
					</div>
					<img src="${temple.imageUrl}" alt="${temple.imgAlt}" loading="lazy">
				</figure>
			`
		)
	);
}

function toggleNavigation() {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
}

function deactivateNavElements() {
	homeFilter.classList.remove("active");
	oldFilter.classList.remove("active");
	newFilter.classList.remove("active");
	largeFilter.classList.remove("active");
	smallFilter.classList.remove("active");
}

hamButton.addEventListener("click", () => {
	toggleNavigation();
});