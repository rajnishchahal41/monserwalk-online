let cart = 0;

const cartCount = document.getElementById("cartCount");
const buttons = document.querySelectorAll(".product button");
const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".product");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        cart++;
        cartCount.innerText = cart;
    });
});

searchInput.addEventListener("keyup", () => {
    let value = searchInput.value.toLowerCase();

    products.forEach(product => {
        let name = product.querySelector("h3").innerText.toLowerCase();
        product.style.display = name.includes(value) ? "block" : "none";
    });
});