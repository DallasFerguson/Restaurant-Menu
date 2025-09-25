// Around the World in 80 Ales - Core JavaScript Implementation

// 1. DATA STRUCTURE
// Menu data - organized by region with beers from around the world
const menuData = [
  // EUROPE
  {
    id: 'eu1',
    name: "Trappist Rochefort 10",
    country: "Belgium",
    description: "A world-class Belgian Quadrupel with rich dark fruit notes, caramel, and spice",
    price: 12.99,
    abv: "11.3%",
    region: "Europe",
    tags: ["quadrupel", "trappist"]
  },
  {
    id: 'eu2',
    name: "Pilsner Urquell",
    country: "Czech Republic",
    description: "The original pilsner with a crisp, clean taste and spicy Saaz hop character",
    price: 7.99,
    abv: "4.4%",
    region: "Europe",
    tags: ["pilsner", "lager"]
  },
  {
    id: 'eu3',
    name: "Guinness Draught",
    country: "Ireland",
    description: "Iconic Irish stout with smooth, creamy texture and roasted coffee notes",
    price: 8.50,
    abv: "4.2%",
    region: "Europe",
    tags: ["stout", "nitro"]
  },
  {
    id: 'eu4',
    name: "Weihenstephaner Hefeweissbier",
    country: "Germany",
    description: "World's oldest brewery's hefeweizen with banana, clove, and smooth wheat character",
    price: 8.99,
    abv: "5.4%",
    region: "Europe",
    tags: ["hefeweizen", "wheat"]
  },
  {
    id: 'eu5',
    name: "Samuel Smith's Oatmeal Stout",
    country: "United Kingdom",
    description: "Silky smooth stout with notes of chocolate, coffee, and a hint of nuttiness",
    price: 9.50,
    abv: "5.0%",
    region: "Europe",
    tags: ["stout", "oatmeal"]
  },

  // AMERICAS
  {
    id: 'am1',
    name: "Sierra Nevada Pale Ale",
    country: "United States",
    description: "Pioneering American pale ale with cascade hops delivering citrus and pine notes",
    price: 6.99,
    abv: "5.6%",
    region: "Americas",
    tags: ["pale ale", "hoppy"]
  },
  {
    id: 'am2',
    name: "La Fin Du Monde",
    country: "Canada",
    description: "Unibroue's Belgian-style tripel with complex spice, fruit, and warming alcohol",
    price: 10.99,
    abv: "9.0%",
    region: "Americas",
    tags: ["tripel", "belgian-style"]
  },
  {
    id: 'am3',
    name: "Modelo Negra",
    country: "Mexico",
    description: "Medium-bodied Munich-style dunkel lager with caramel sweetness and light hops",
    price: 7.50,
    abv: "5.4%",
    region: "Americas",
    tags: ["dunkel", "lager"]
  },
  {
    id: 'am4',
    name: "Xingu Black Beer",
    country: "Brazil",
    description: "Smooth, dark Brazilian beer with notes of chocolate and coffee",
    price: 9.99,
    abv: "4.7%",
    region: "Americas",
    tags: ["black beer", "smooth"]
  },

  // ASIA
  {
    id: 'as1',
    name: "Hitachino Nest White Ale",
    country: "Japan",
    description: "Japanese take on Belgian witbier with orange peel, coriander, and nutmeg",
    price: 11.99,
    abv: "5.5%",
    region: "Asia",
    tags: ["witbier", "spiced"]
  },
  {
    id: 'as2',
    name: "Tsingtao",
    country: "China",
    description: "China's most famous export beer with crisp, light body and mild sweetness",
    price: 6.50,
    abv: "4.8%",
    region: "Asia",
    tags: ["pale lager", "crisp"]
  },
  {
    id: 'as3',
    name: "Kingfisher Premium",
    country: "India",
    description: "India's best-selling lager with clean flavor that pairs perfectly with spicy food",
    price: 7.50,
    abv: "4.8%",
    region: "Asia",
    tags: ["lager", "refreshing"]
  },
  {
    id: 'as4',
    name: "Beerlao",
    country: "Laos",
    description: "Smooth, easy-drinking Laotian lager made with jasmine rice for a subtle sweetness",
    price: 8.99,
    abv: "5.0%",
    region: "Asia",
    tags: ["rice lager", "smooth"]
  },

  // AFRICA
  {
    id: 'af1',
    name: "Castle Milk Stout",
    country: "South Africa",
    description: "Rich, creamy stout with coffee and chocolate notes",
    price: 8.99,
    abv: "6.0%",
    region: "Africa",
    tags: ["milk stout", "creamy"]
  },
  {
    id: 'af2',
    name: "Tusker",
    country: "Kenya",
    description: "Kenyan lager with grainy sweetness and crisp finish",
    price: 7.50,
    abv: "4.2%",
    region: "Africa",
    tags: ["lager", "crisp"]
  },

  // OCEANIA
  {
    id: 'oc1',
    name: "Cooper's Sparkling Ale",
    country: "Australia",
    description: "Aussie classic with fruity esters, hazy appearance, and yeast sediment",
    price: 9.50,
    abv: "5.8%",
    region: "Oceania",
    tags: ["bottle-conditioned", "fruity"]
  },
  {
    id: 'oc2',
    name: "Tui East India Pale Ale",
    country: "New Zealand",
    description: "Despite the name, a drinkable amber ale with subtle hopping",
    price: 8.50,
    abv: "4.0%",
    region: "Oceania",
    tags: ["amber ale", "balanced"]
  }
];

// Order data - will store items that have been added to the order
let orderItems = [];

// 2. DOM ELEMENTS
// These will be initialized once the DOM is loaded
let menuItemsContainer;
let menuTabsContainer;
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
  
  // Create tabs container
  menuTabsContainer = document.createElement('div');
  menuTabsContainer.className = 'menu-tabs';
  
  // Insert tabs container before the menu items
  const menuContainer = document.querySelector('.menu-container');
  menuContainer.insertBefore(menuTabsContainer, menuItemsContainer);
  
  // Load any saved order from localStorage
  loadOrderFromStorage();
  
  // Render the menu and order
  createTabs();
  renderOrder();
  
  // Add event listener to checkout button
  checkoutBtn.addEventListener('click', handleCheckout);
}

// 4. GROUP MENU BY REGION
function groupMenuByRegion() {
  // Create an object to hold our grouped items
  const groupedMenu = {};
  
  // Group items by region
  menuData.forEach(beer => {
    if (!groupedMenu[beer.region]) {
      groupedMenu[beer.region] = [];
    }
    groupedMenu[beer.region].push(beer);
  });
  
  return groupedMenu;
}

// 5. CREATE TABS FOR REGIONS
function createTabs() {
  // Group beers by region
  const groupedMenu = groupMenuByRegion();
  
  // Clear tabs container
  menuTabsContainer.innerHTML = '';
  
  // Get regions
  const regions = Object.keys(groupedMenu);
  
  // Create tab for each region
  regions.forEach((region, index) => {
    const tab = document.createElement('button');
    tab.className = 'menu-tab';
    tab.textContent = region;
    tab.dataset.region = region;
    tab.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', `region-${region.toLowerCase()}`);
    
    // Make first tab active
    if (index === 0) {
      tab.classList.add('active');
    }
    
    // Add click event to tab
    tab.addEventListener('click', () => {
      // Deactivate all tabs
      document.querySelectorAll('.menu-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      
      // Activate this tab
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      
      // Show this region
      renderMenuForRegion(region);
    });
    
    // Add tab to container
    menuTabsContainer.appendChild(tab);
  });
  
  // Render first region by default
  if (regions.length > 0) {
    renderMenuForRegion(regions[0]);
  }
}

// 6. RENDER MENU FOR A SPECIFIC REGION
function renderMenuForRegion(region) {
  // Clear menu container
  menuItemsContainer.innerHTML = '';
  
  // Get beers for this region
  const groupedMenu = groupMenuByRegion();
  const beers = groupedMenu[region];
  
  // Set role and ID for accessibility
  menuItemsContainer.setAttribute('role', 'tabpanel');
  menuItemsContainer.setAttribute('id', `region-${region.toLowerCase()}`);
  menuItemsContainer.setAttribute('aria-labelledby', `tab-${region.toLowerCase()}`);
  
  // Display region name
  const regionHeader = document.createElement('h2');
  regionHeader.className = 'region-header';
  regionHeader.textContent = region;
  menuItemsContainer.appendChild(regionHeader);
  
  // Render beers
  beers.forEach(beer => {
    // Check if this item is in the order
    const inOrder = orderItems.find(orderItem => orderItem.id === beer.id);
    const quantity = inOrder ? inOrder.quantity : 0;
    
    // Create the menu item element
    const menuItemElement = document.createElement('div');
    menuItemElement.className = `menu-item ${quantity > 0 ? 'in-order' : ''}`;
    menuItemElement.dataset.id = beer.id;
    
    // Populate with HTML
    menuItemElement.innerHTML = `
      <div class="beer-info">
        <h3>
          ${beer.name}
          <span class="price">$${beer.price.toFixed(2)}</span>
        </h3>
        <div class="beer-origin">${beer.country} • ${beer.abv} ABV</div>
        <p class="description">${beer.description}</p>
        <div class="tags">
          ${beer.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
      <div class="beer-actions">
        <button class="add-btn" aria-label="Add ${beer.name} to order">
          <span>Add to Flight</span>
        </button>
      </div>
      <div class="quantity-badge" aria-label="${quantity} in order">${quantity}</div>
    `;
    
    // Add the element to the container
    menuItemsContainer.appendChild(menuItemElement);
    
    // Add event listener to the add button
    const addButton = menuItemElement.querySelector('.add-btn');
    addButton.addEventListener('click', () => addToOrder(beer));
  });
}

// 7. RENDER ORDER ITEMS
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
        <div class="order-item-name">${item.name}</div>
        <div class="order-item-origin">${item.country}</div>
        <div class="price">$${itemTotal.toFixed(2)}</div>
      </div>
      <div class="item-controls">
        <button class="quantity-btn decrease" data-id="${item.id}" aria-label="Decrease quantity">-</button>
        <span class="quantity">${item.quantity}</span>
        <button class="quantity-btn increase" data-id="${item.id}" aria-label="Increase quantity">+</button>
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

// 8. ORDER MANAGEMENT FUNCTIONS
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
  
  // Save to localStorage
  saveOrderToStorage();
  
  // Update displays
  renderOrder();
  
  // Get current active region
  const activeTab = document.querySelector('.menu-tab.active');
  if (activeTab) {
    renderMenuForRegion(activeTab.dataset.region);
  }
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
    
    // Save to localStorage
    saveOrderToStorage();
    
    // Update displays
    renderOrder();
    
    // Get current active region
    const activeTab = document.querySelector('.menu-tab.active');
    if (activeTab) {
      renderMenuForRegion(activeTab.dataset.region);
    }
  }
}

// Increase the quantity of an item
function increaseQuantity(itemId) {
  const item = orderItems.find(item => item.id === itemId);
  
  if (item) {
    // Increase quantity
    item.quantity += 1;
    
    // Save to localStorage
    saveOrderToStorage();
    
    // Update displays
    renderOrder();
    
    // Get current active region
    const activeTab = document.querySelector('.menu-tab.active');
    if (activeTab) {
      renderMenuForRegion(activeTab.dataset.region);
    }
  }
}

// 9. LOCAL STORAGE FUNCTIONS
// Save order to localStorage
function saveOrderToStorage() {
  localStorage.setItem('worldAlesOrder', JSON.stringify(orderItems));
}

// Load order from localStorage
function loadOrderFromStorage() {
  const savedOrder = localStorage.getItem('worldAlesOrder');
  if (savedOrder) {
    orderItems = JSON.parse(savedOrder);
  }
}

// 10. CHECKOUT FUNCTION
// Handle checkout process
function handleCheckout() {
  // Show success message
  successMessage.textContent = 'Your beer journey around the world begins soon! Order confirmed.';
  successMessage.classList.add('show-message');
  
  // Hide message after 3 seconds
  setTimeout(() => {
    successMessage.classList.remove('show-message');
    
    // Clear order
    orderItems = [];
    localStorage.removeItem('worldAlesOrder');
    renderOrder();
    
    // Refresh the menu display
    const activeTab = document.querySelector('.menu-tab.active');
    if (activeTab) {
      renderMenuForRegion(activeTab.dataset.region);
    }
  }, 3000);
  
  // In a real application, you would send the order to a server here
  console.log('Order submitted:', orderItems);
}

// 11. INITIALIZE THE APP WHEN DOM IS LOADED
document.addEventListener('DOMContentLoaded', initializeApp);