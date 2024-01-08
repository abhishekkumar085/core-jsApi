const apiUrl = "https://dummyjson.com/products";
const loadingMessage = document.getElementById("loading-message");
const dataContainer = document.getElementById("data-container");

fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
        console.log("Data Received:", data);
        loadingMessage.style.display = "none";
        displayData(data.products); 
    })
    .catch((err) => {
        console.log("Error:", err);
    });

function displayData(products) {
    const div = document.getElementById("data-container");

    products.forEach((product) => {
        const productDiv = document.createElement("div");

        const h4 = document.createElement("h4");
        h4.textContent = `Title - ${product.title}`;
        productDiv.appendChild(h4);

        const para = document.createElement("p");
        para.textContent = `Brand - ${product.brand}`;
        productDiv.appendChild(para);

        const para2 = document.createElement("p");
        para2.textContent = `Category - ${product.category}`;
        productDiv.appendChild(para2);

        const para3 = document.createElement("p");
        para3.textContent = `Description - ${product.description}`;
        productDiv.appendChild(para3);

        const para4 = document.createElement("p");
        para4.textContent = `Discount Percentage - ${product.discountPercentage} %`;
        productDiv.appendChild(para4);

        const para5 = document.createElement("p");
        para5.textContent = `Price - ${product.price}`;
        productDiv.appendChild(para5);

        const para6 = document.createElement("p");
        para6.textContent = `Rating - ${product.rating}`;
        productDiv.appendChild(para6);

        product.images.forEach((imageUrl, index) => {
            const img = document.createElement("img");
            img.src = imageUrl;
            img.alt = `Image ${index + 1}`;
            productDiv.appendChild(img);
        });

        const hr = document.createElement("hr");
        productDiv.appendChild(hr);

        div.appendChild(productDiv);
    });
}
