import './style.css';

// PUBLIC_INTERFACE
function createNavbar() {
  return `
    <nav class="ss-navbar" role="navigation">
      <span class="ss-logo">ShopSpark</span>
      <div class="ss-nav-links">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Deals</a>
        <a href="#">Categories</a>
        <a href="#">Cart</a>
        <a href="#">Account</a>
        <span class="ss-search">
          <span class="ss-search-icon" aria-label="search">&#128269;</span>
          <input type="text" placeholder="Search products…" aria-label="Search products">
        </span>
      </div>
    </nav>
  `;
}

// PUBLIC_INTERFACE
function createHeroBanner() {
  return `
    <section class="ss-hero" aria-label="ShopSpark Main Offer">
      <div class="ss-hero-title">Spark Your Shopping Experience!</div>
      <div class="ss-hero-desc">Discover the latest trends, best deals, and exclusive offers. Everything you need is just a click away.</div>
      <button class="ss-hero-btn" id="ss-shop-now-btn">Start Shopping</button>
    </section>
  `;
}

// PUBLIC_INTERFACE
function createPromotionalBanners() {
  // Example promo banners (could be dynamically loaded)
  const promos = [
    {
      emoji: '🔥',
      title: 'Hot Sale!',
      description: 'Save up to 50% on summer essentials.',
    },
    {
      emoji: '🚚',
      title: 'Free Shipping',
      description: 'Get free shipping on orders over $50.',
    },
    {
      emoji: '🎁',
      title: 'Bonus Gifts',
      description: 'Receive a surprise gift with your first order!',
    },
  ];
  return `
    <section class="ss-promos" aria-label="Promotional Offers">
      ${promos
        .map(
          (p) => `
        <div class="ss-promo-card">
          <span class="ss-promo-emoji" aria-hidden="true">${p.emoji}</span>
          <div class="ss-promo-content">
            <div class="ss-promo-title">${p.title}</div>
            <div>${p.description}</div>
          </div>
        </div>
      `
        )
        .join('')}
    </section>
  `;
}

// PUBLIC_INTERFACE
function createFeaturedProducts() {
  // Demo products, should later be loaded from backend or API
  const products = [
    {
      name: 'Wireless Headphones',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      price: 79.99,
    },
    {
      name: 'Smartwatch Pro',
      image: 'https://images.unsplash.com/photo-1519864600265-abb204602c08?auto=format&fit=crop&w=400&q=80',
      price: 129.99,
    },
    {
      name: 'Trendy Sneakers',
      image: 'https://images.unsplash.com/photo-1517260911205-8b560b510b19?auto=format&fit=crop&w=400&q=80',
      price: 64.99,
    },
    {
      name: 'Eco Water Bottle',
      image: 'https://images.unsplash.com/photo-1519121780498-10f7ca2739e3?auto=format&fit=crop&w=400&q=80',
      price: 16.99,
    },
    {
      name: 'Noise Cancelling Earbuds',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      price: 49.99,
    },
    {
      name: 'Yoga Mat Deluxe',
      image: 'https://images.unsplash.com/photo-1519863879405-d5ee1fe26a19?auto=format&fit=crop&w=400&q=80',
      price: 21.99,
    },
  ];
  return `
    <section class="ss-featured-section" aria-label="Featured Products">
      <div class="ss-section-title">Featured Products</div>
      <div class="ss-product-grid">
        ${products
          .map(
            (prod, index) => `
            <div class="ss-product-card" tabindex="0" aria-label="${prod.name}">
              <img class="ss-product-img" src="${prod.image}" alt="${prod.name}">
              <div class="ss-product-details">
                <div class="ss-product-title">${prod.name}</div>
                <div class="ss-product-price">$${prod.price.toFixed(2)}</div>
                <button class="ss-add-cart-btn" data-prod-index="${index}">Add to Cart</button>
              </div>
            </div>
        `
          )
          .join('')}
      </div>
    </section>
  `;
}

// PUBLIC_INTERFACE
function createFooter() {
  return `
    <footer class="ss-footer">
      <div class="ss-footer-links">
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">FAQs</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div>
        &copy; ${new Date().getFullYear()} ShopSpark. All rights reserved.
      </div>
    </footer>
  `;
}

// PUBLIC_INTERFACE
function renderShopSparkLanding() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    ${createNavbar()}
    ${createHeroBanner()}
    ${createPromotionalBanners()}
    ${createFeaturedProducts()}
    ${createFooter()}
  `;

  // Event: Shop Now (scroll to products)
  const shopNowBtn = document.getElementById('ss-shop-now-btn');
  if (shopNowBtn) {
    shopNowBtn.addEventListener('click', () => {
      const section = document.querySelector('.ss-featured-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Add to Cart demo
  const cartBtns = document.querySelectorAll('.ss-add-cart-btn');
  cartBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.textContent = 'Added!';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Add to Cart';
        btn.disabled = false;
      }, 1400);
    });
  });
}

// Launch
renderShopSparkLanding();
