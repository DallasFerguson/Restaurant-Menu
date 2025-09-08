// Restaurant Ordering System - Core JavaScript Implementation

// 1. DATA STRUCTURE
// Menu data - our three items
const menuData = [
  {
    id: 1,
    name: "Truffle Mushroom Risotto",
    description: "Creamy Arborio rice with wild mushrooms, finished with truffle oil and Parmesan",
    price: 18.99,
    image: "risotto.jpg" // Optional: if you want to add images later
  },
  {
    id: 2,
    name: "Crispy Duck Confit",
    description: "Slow-cooked duck leg with orange glaze, served with roasted root vegetables",
    price: 24.99,
    image: "duck.jpg"
  },
  {
    id: 3,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla bean ice cream",
    price: 9.99,
    image: "cake.jpg"
  }
];

// Order data - will store items that have been added to the order
let orderItems = [];

// 2. DOM ELEMENTS
// These will be initialized once the DOM is loaded
let menuItemsContainer;
let orderItemsContainer;
let emptyOrderElement;
let orderTotalElement;
let totalAmountElement;
let checkoutBtn;
let successMessage;

// 3. INITIALIZE FUNCTION
function initializeApp() {
  // Get DOM elements
  menuItemsContainer = document.getElementById('menuItems');
  orderItemsContainer = document.getElementById('orderItems');
  emptyOrderElement = document.getElementById('emptyOrder');
  orderTotalElement = document.getElementById('orderTotal');
  totalAmountElement = document.getElementById('totalAmount');
  checkoutBtn = document.getElementById('checkoutBtn');
  successMessage = document.getElementById('successMessage');
  
  // Render the menu and empty order
  renderMenu();
  renderOrder();
  
  // Add event listener to checkout button
  checkoutBtn.addEventListener('click', handleCheckout);
}

// 4. RENDER FUNCTIONS
// Render the menu items
function renderMenu() {
  menuItemsContainer.innerHTML = '';
  
  menuData.forEach(item => {
    // Check if this item is in the order
    const inOrder = orderItems.find(orderItem => orderItem.id === item.id);
    const quantity = inOrder ? inOrder.quantity : 0;
    
    // Create the menu item element
    const menuItemElement = document.createElement('div');
    menuItemElement.className = `menu-item ${quantity > 0 ? 'in-order' : ''}`;
    menuItemElement.dataset.id = item.id;
    
    // Populate with HTML
    menuItemElement.innerHTML = `
      <h3>
        ${item.name}
        <span class="price">$${item.price.toFixed(2)}</span>
      </h3>
      <p class="description">${item.description}</p>
      <button class="add-btn">
        <span>Add to Order</span>
      </button>
      <div class="quantity-badge">${quantity}</div>
    `;
    
    // Add the element to the container
    menuItemsContainer.appendChild(menuItemElement);
    
    // Add event listener to the add button
    const addButton = menuItemElement.querySelector('.add-btn');
    addButton.addEventListener('click', () => addToOrder(item));
  });
}

// Render the order items
function renderOrder() {
  // Check if order is empty
  if (orderItems.length === 0) {
    emptyOrderElement.style.display = 'block';
    orderTotalElement.style.display = 'none';
    checkoutBtn.disabled = true;
    return;
  }
  
  // Otherwise, hide empty message and show total
  emptyOrderElement.style.display = 'none';
  orderTotalElement.style.display = 'flex';
  checkoutBtn.disabled = false;
  
  // Remove existing order items
  const orderItemElements = orderItemsContainer.querySelectorAll('.order-item');
  orderItemElements.forEach(el => el.remove());
  
  // Calculate total price
  let total = 0;
  
  // Create and add new order items
  orderItems.forEach(item => {
    const orderItemElement = document.createElement('div');
    orderItemElement.className = 'order-item';
    
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    
    orderItemElement.innerHTML = `
      <div>
        <div>${item.name}</div>
        <div class="price">$${itemTotal.toFixed(2)}</div>
      </div>
      <div class="item-controls">
        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
        <span class="quantity">${item.quantity}</span>
        <button class="quantity-btn increase" data-id="${item.id}">+</button>
      </div>
    `;
    
    orderItemsContainer.appendChild(orderItemElement);
    
    // Add event listeners to quantity buttons
    const decreaseBtn = orderItemElement.querySelector('.decrease');
    const increaseBtn = orderItemElement.querySelector('.increase');
    
    decreaseBtn.addEventListener('click', () => decreaseQuantity(item.id));
    increaseBtn.addEventListener('click', () => increaseQuantity(item.id));
  });
  
  // Update total display
  totalAmountElement.textContent = `$${total.toFixed(2)}`;
}

// 5. ORDER MANAGEMENT FUNCTIONS
// Add an item to the order
function addToOrder(item) {
  // Check if item already exists in order
  const existingItem = orderItems.find(orderItem => orderItem.id === item.id);
  
  if (existingItem) {
    // If it exists, increase quantity
    existingItem.quantity += 1;
  } else {
    // Otherwise add it to the order
    orderItems.push({
      ...item,
      quantity: 1
    });
  }
  
  // Update displays
  renderOrder();
  renderMenu(); // Re-render menu to update the badges
}

// Decrease the quantity of an item
function decreaseQuantity(itemId) {
  const index = orderItems.findIndex(item => item.id === itemId);
  
  if (index !== -1) {
    // Decrease quantity
    orderItems[index].quantity -= 1;
    
    // Remove item if quantity is zero
    if (orderItems[index].quantity === 0) {
      orderItems.splice(index, 1);
    }
    
    // Update displays
    renderOrder();
    renderMenu(); // Re-render menu to update the badges
  }
}

// Increase the quantity of an item
function increaseQuantity(itemId) {
  const item = orderItems.find(item => item.id === itemId);
  
  if (item) {
    // Increase quantity
    item.quantity += 1;
    
    // Update displays
    renderOrder();
    renderMenu(); // Re-render menu to update the badges
  }
}

// Handle checkout process
function handleCheckout() {
  // Show success message
  successMessage.classList.add('show-message');
  
  // Hide message after 3 seconds
  setTimeout(() => {
    successMessage.classList.remove('show-message');
    
    // Clear order
    orderItems = [];
    renderOrder();
    renderMenu();
  }, 3000);
  
  // In a real application, you would send the order to a server here
  console.log('Order submitted:', orderItems);
}

// 6. INITIALIZE THE APP WHEN DOM IS LOADED
document.addEventListener('DOMContentLoaded', initializeApp);