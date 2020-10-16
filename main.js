const btnAdd = document.querySelector('.btn-add');

btnAdd.addEventListener('click', ()=> {


const product = {
    name: 't-shirt',
    about: 'color black',
    price: '50.00'
};


const cartItem = document.createElement('div');
    cartItem.classList.add('cart-menu');

cartItem.innerHTML = 
`
<div class="cart-menu-header">
    <h3>Cart</h3> 
</div>
    <ul class="added-to-cart">
        <div class="cart-image">
            <p>image goes here</p>
        </div>
        
        <div class="cart-text">
            <h4>${product.name}</h4>
            <h1>${product.about}</h1>
            <div class="price-remove">
                <p>${product.price}</p>
                <button class="remove-cart-item">Remove</button>
            </div>
        </div>
    </ul>
    <div class="bottom-cart">
        <button class="cart-btn">CHECKOUT : <span>$${product.price}</span></button>
    </div>
</div>
`;

const cartMenu = document.querySelector('.cart-menu');
const bottomCart = document.querySelector('.bottom-cart');

cartMenu.insertBefore(cartItem, bottomCart);

});
