const products = [
  {
    id: 1,
    name: "Chocolate Cake",
    description: "Delicious dark chocolate cake with frosting.",
    price: "₹250",
    image: "https://source.unsplash.com/250x160/?chocolate-cake"
  },
  {
    id: 2,
    name: "Strawberry Tart",
    description: "Fresh strawberries with cream in a crispy tart.",
    price: "₹180",
    image: "https://source.unsplash.com/250x160/?strawberry-dessert"
  },
  {
    id: 3,
    name: "Blueberry Muffin",
    description: "Soft muffin packed with juicy blueberries.",
    price: "₹90",
    image: "https://source.unsplash.com/250x160/?blueberry-muffin"
  }
];

const container = document.getElementById("product-container");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <div class="price">${product.price}</div>
    <button>Add to Cart</button>
  `;

  container.appendChild(card);
});
