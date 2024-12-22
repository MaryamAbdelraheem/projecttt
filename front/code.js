
let cardContainer = document.getElementById("card-container");

// جلب البيانات من API
fetch('https://fakestoreapi.com/products/')
    .then((response) => response.json())
    .then((data) => showData(data))
    .catch((error) => console.error('Error:', error));

// عرض البيانات في Cards
function showData(products) {
    products.forEach((product) => {
        cardContainer.innerHTML += `
        <div class="card">
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.category}</p>
            <p class="description">${product.description.substring(0, 50)}...</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button onclick="deleteCard(this)">Delete</button>
        </div>`;
    });
}

// حذف البطاقة عند الضغط على الزر
function deleteCard(button) {
    let card = button.parentElement;
    card.remove();
}