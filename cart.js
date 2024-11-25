let cart = [];
const cartStr = localStorage.getItem('items');

if (cartStr !== null) cart = JSON.parse(cartStr);

const list = document.getElementsByClassName("product-list-cart")[0];

if (cart.length < 1) {
    list.innerHTML = `<div class="cart-item">
                    A kosarad üres
                </div>`;
} else {
    for (const item of cart) {
        const s = item.split('---');
        list.innerHTML += `<div class="cart-item">
                    ${s[1]} <br>
                    <img src="${s[0]}" alt="Product image">
                </div>`;
    }
}