// Get the cart items and total
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Add event listeners to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.product button');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Function to add item to cart
function addToCart(event) {
  const product = event.target.parentNode;
  const productName = product.querySelector('h3').innerText;
  const productPrice = parseFloat(product.querySelector('p').innerText.slice(7));
  
  // Create a new cart item
  const cartItem = document.createElement('li');
  cartItem.innerText = `${productName} - $${productPrice.toFixed(2)}`;

  // Add the cart item to the cart
  cartItems.appendChild(cartItem);

  // Update the cart total
  let currentTotal = parseFloat(cartTotal.innerText.slice(7));
  currentTotal += productPrice;
  cartTotal.innerText = `Total: $${currentTotal.toFixed(2)}`;
}
