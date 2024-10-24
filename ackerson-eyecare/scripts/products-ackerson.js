// Products array 

const pcards = document.querySelector('#products-cards');

async function getProductsData() {
    const response = await fetch('data/products.json');
    const data = await response.json();
    displayProducts(data.products);    
}

getProductsData();

const displayProducts = (products) => {
    products.forEach((product) => {
        let pcard = document.createElement('section');

        let name = document.createElement('h3');
        let type = document.createElement('h4');
        let description = document.createElement('p');
        let representation = document.createElement('img')

        //build the content for the name or title
        name.textContent =`${product.name}`;
        type.textContent = `${product.type}`;
        description.textContent = `${product.description}`;
        // display the image for the type of lenses
        representation.setAttribute('src', product.img);
        representation.setAttribute('alt', `${product.name} picture`);
        representation.setAttribute('loading', 'lazy');
        representation.setAttribute('width', '50');
        representation.setAttribute('height', '50');

        //Append the section card with the created elements
        pcard.appendChild(representation);
        pcard.appendChild(name);
        pcard.appendChild(type);
        pcard.appendChild(description);

        pcards.appendChild(pcard);
    });
}

const gridButton = document.querySelector("#grid-v");
const listButton = document.querySelector("#list-v");
const display = document.querySelector("#products-cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridButton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listButton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}