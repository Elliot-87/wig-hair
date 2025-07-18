
  const backToTopBtn = document.getElementById('backToTopBtn');

  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.remove('opacity-0', 'invisible');
      backToTopBtn.classList.add('opacity-100', 'visible');
    } else {
      backToTopBtn.classList.remove('opacity-100', 'visible');
      backToTopBtn.classList.add('opacity-0', 'invisible');
    }
  });

  // Smooth scroll to top when clicked
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

 
        // Initialize all sliders
        document.addEventListener('DOMContentLoaded', function() {
            const sliders = document.querySelectorAll('.category-slider');
            
            sliders.forEach(slider => {
                const grid = slider.querySelector('.property-grid');
                const prevBtn = slider.querySelector('.slider-prev');
                const nextBtn = slider.querySelector('.slider-next');
                const cards = slider.querySelectorAll('.property-card');
                let currentPosition = 0;
                let cardWidth = cards[0].offsetWidth + 25; // card width + gap
                
                function updateSlider() {
                    grid.style.transform = `translateX(-${currentPosition}px)`;
                }
                
                nextBtn.addEventListener('click', () => {
                    const maxScroll = grid.scrollWidth - grid.parentElement.offsetWidth;
                    currentPosition = Math.min(currentPosition + cardWidth * 2, maxScroll);
                    updateSlider();
                });
                
                prevBtn.addEventListener('click', () => {
                    currentPosition = Math.max(currentPosition - cardWidth * 2, 0);
                    updateSlider();
                });
                
                // Handle window resize
                window.addEventListener('resize', () => {
                    cardWidth = cards[0].offsetWidth + 25;
                    updateSlider();
                });
            });
            
            // Category tabs functionality
            const tabs = document.querySelectorAll('.category-tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remove active class from all tabs
                    tabs.forEach(t => t.classList.remove('active'));
                    // Add active class to clicked tab
                    tab.classList.add('active');
                    
                    const category = tab.dataset.category;
                    // In a real implementation, you would filter properties here
                    // For this demo, we'll just scroll to the category
                    if (category !== 'all') {
                        document.querySelector(`[data-category="${category}"]`).scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // AR badge click handler
            document.addEventListener('click', function(e) {
                if (e.target.closest('.ar-badge')) {
                    // In a real app, this would launch AR/VR view
                    alert('Augmented Reality tour would launch here!\n(Requires AR-capable device)');
                }
            });
        });

         document.addEventListener('DOMContentLoaded', function() {
        // Initialize all sliders (existing code remains the same)
        const sliders = document.querySelectorAll('.category-slider');
        
        sliders.forEach(slider => {
            const grid = slider.querySelector('.property-grid');
            const prevBtn = slider.querySelector('.slider-prev');
            const nextBtn = slider.querySelector('.slider-next');
            const cards = slider.querySelectorAll('.property-card');
            let currentPosition = 0;
            let cardWidth = cards[0].offsetWidth + 25; // card width + gap
            
            function updateSlider() {
                grid.style.transform = `translateX(-${currentPosition}px)`;
            }
            
            nextBtn.addEventListener('click', () => {
                const maxScroll = grid.scrollWidth - grid.parentElement.offsetWidth;
                currentPosition = Math.min(currentPosition + cardWidth * 2, maxScroll);
                updateSlider();
            });
            
            prevBtn.addEventListener('click', () => {
                currentPosition = Math.max(currentPosition - cardWidth * 2, 0);
                updateSlider();
            });
            
            window.addEventListener('resize', () => {
                cardWidth = cards[0].offsetWidth + 25;
                updateSlider();
            });
        });
        
        // Improved Category tabs functionality
        const tabs = document.querySelectorAll('.category-tab');
        const categorySections = document.querySelectorAll('.category-slider');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');
                
                const category = tab.dataset.category.replace('#', '');
                
                if (category === '') {
                    // Show all categories for "All Properties"
                    categorySections.forEach(section => {
                        section.style.display = 'block';
                    });
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else {
                    // Hide all categories first
                    categorySections.forEach(section => {
                        section.style.display = 'none';
                    });
                    
                    // Show only the selected category
                    const targetSection = document.querySelector(`[data-category="${category}"]`);
                    if (targetSection) {
                        targetSection.style.display = 'block';
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
        
        // AR badge click handler (existing code remains the same)
        document.addEventListener('click', function(e) {
            if (e.target.closest('.ar-badge')) {
                alert('Augmented Reality tour would launch here!\n(Requires AR-capable device)');
            }
        });
    });
    //Products
    // Product data (replace with your actual data)
const products = {
  box: [
    {id: 1, name: "Box Braid Wig - Classic", price: 129.99, length: "22 inches", image: "images/bold-removebg-preview.png"},
    {id: 2, name: "Box Braid Wig - Jumbo", price: 149.99, length: "24 inches", image: "images/8.jpg"},
    {id: 3, name: "Box Braid Wig - Classic", price: 129.99, length: "22 inches", image: "images/5.jpg"},
    {id: 4, name: "Box Braid Wig - Jumbo", price: 149.99, length: "24 inches", image: "images/bnf.jpg"},
    {id: 5, name: "Box Braid Wig - Classic", price: 129.99, length: "22 inches", image: "images/5.jpg"},
    {id: 6, name: "Box Braid Wig - Jumbo", price: 149.99, length: "24 inches", image: "images/bnf.jpg"},
    // Add 4 more box braid products...
  ],
  fulani: [
    {id: 7, name: "Fulani Braid Wig - Traditional", price: 139.99, length: "20 inches", image: "images/braidal.jpg"},
    {id: 8, name: "Fulani Braid Wig - Traditional", price: 139.99, length: "20 inches", image: "images/11.jpg"},
     {id: 9, name: "Fulani Braid Wig - Traditional", price: 139.99, length: "20 inches", image: "images/17.jpg"},
      {id: 10, name: "Fulani Braid Wig - Traditional", price: 139.99, length: "20 inches", image: "images/2.jpg"},
       {id: 11, name: "Fulani Braid Wig - Traditional", price: 139.99, length: "20 inches", image: "images/13.jpg"},
        {id: 12, name: "Fulani Braid Wig - Traditional", price: 139.99, length: "20 inches", image: "images/15.jpg"},



  ],
  goddess: [
    {id: 13, name: "Goddess Braid Wig - Classic", price: 149.99, length: "26 inches", image: "images/6.jpg"},
    {id: 14, name: "Goddess Braid Wig - Classic", price: 149.99, length: "26 inches", image: "images/14.jpg"},
    {id: 15, name: "Goddess Braid Wig - Classic", price: 149.99, length: "26 inches", image: "images/queen.jpg"},
    {id: 16, name: "Goddess Braid Wig - Classic", price: 149.99, length: "26 inches", image: "images/2.jpg"},
    {id: 17, name: "Goddess Braid Wig - Classic", price: 149.99, length: "26 inches", image: "images/12.jpg"},
    {id: 18, name: "Goddess Braid Wig - Classic", price: 149.99, length: "26 inches", image: "images/15-removebg-preview.png"},
    // Add 5 more goddess braid products...
  ],
   twist: [
    {id: 19, name: "Goddess Braid Wig - Classic", price: 149.99, length: "26 inches", image: "images/6.jpg"},
    {id: 20, name: "Goddess Braid Wig - Classic", price: 149.99, length: "26 inches", image: "images/14.jpg"},
    {id: 21, name: "Goddess Braid Wig - Classic", price: 149.99, length: "26 inches", image: "images/queen.jpg"},
    {id: 22, name: "Goddess Braid Wig - Classic", price: 149.99, length: "26 inches", image: "images/2.jpg"},
    {id: 23, name: "Goddess Braid Wig - Classic", price: 149.99, length: "26 inches", image: "images/12.jpg"},
    {id: 24, name: "Goddess Braid Wig - Classic", price: 149.99, length: "26 inches", image: "images/15-removebg-preview.png"},
    // Add 5 more goddess braid products...
  ],
  knotless: [
    {id: 25, name: "Lemonade Braid Wig - Classic", price: 139.99, length: "18 inches", image: "images/12-removebg-preview.png"},
    {id: 26, name: "Lemonade Braid Wig - Classic", price: 139.99, length: "18 inches", image: "images/17-removebg-preview.png"},
    {id: 27, name: "Lemonade Braid Wig - Classic", price: 139.99, length: "18 inches", image: "images/braidal-removebg-preview.png"},
    {id: 28, name: "Lemonade Braid Wig - Classic", price: 139.99, length: "18 inches", image: "images/15-removebg-preview.png"},
    {id: 29, name: "Lemonade Braid Wig - Classic", price: 139.99, length: "18 inches", image: "images/braidal-removebg-preview.png"},
    {id: 30, name: "Lemonade Braid Wig - Classic", price: 139.99, length: "18 inches", image: "images/bold-removebg-preview.png"},
    // Add 5 more lemonade braid products...
  ],
  
};

// Format price as ZAR
function formatZAR(price) {
  return 'R ' + price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Create product card HTML
function createProductCard(product) {
  return `
    <div class="group relative product-card transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <!-- Image Container with Fixed Aspect Ratio -->
      <div class="relative overflow-hidden rounded-2xl bg-white shadow-md border-2 border-pink-200 group-hover:shadow-lg group-hover:border-pink-300 flex-shrink-0">
        <!-- Uniform Image Container -->
        <div class="w-full pb-[125%] relative"> <!-- 4:5 aspect ratio -->
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          >
        </div>
        
        ${product.bestseller ? `
          <div class="absolute top-4 right-4 bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-medium font-montserrat animate-pulse">
            Bestseller
          </div>
        ` : ''}
      </div>
      
      <!-- Product Info -->
      <div class="mt-4 px-2 flex flex-col flex-grow">
        <div class="flex justify-between items-start">
          <div class="pr-2">
            <h3 class="text-lg font-medium text-gray-900 font-cormorant line-clamp-2">${product.name}</h3>
            <p class="mt-1 text-sm text-gray-600 font-montserrat">${product.length}</p>
          </div>
          <div class="text-right flex-shrink-0">
            <p class="text-lg font-medium text-pink-700 font-montserrat">${formatZAR(product.price)}</p>
            ${product.originalPrice ? `
              <p class="text-sm text-gray-400 line-through font-montserrat">${formatZAR(product.originalPrice)}</p>
            ` : ''}
          </div>
        </div>
        
        <!-- Order Button (always visible at bottom) -->
        <button 
          onclick="openOrderForm(${product.id})" 
          class="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-4 rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 font-medium font-montserrat shadow-md hover:shadow-lg"
        >
          <span class="flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
            </svg>
            Order Now
          </span>
        </button>
      </div>
    </div>
  `;
}
// Render products to a grid
function renderProducts(productsToRender, gridId) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = productsToRender.map(product => createProductCard(product)).join('');
}

// Open order form
function openOrderForm(productId) {
  // Find product in all categories
  let product;
  for (const category in products) {
    product = products[category].find(p => p.id === productId);
    if (product) break;
  }
  
  if (!product) return;

  // Create form HTML
  const formHTML = `
    <div id="order-form" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg max-w-md w-full shadow-xl transform transition-all duration-300 scale-95 opacity-0"
           id="order-form-inner">
        <div class="p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-gray-900">Order ${product.name}</h2>
            <button onclick="closeOrderForm()" class="text-gray-500 hover:text-gray-700 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 class="font-bold text-gray-900">Selected Product</h3>
            <p class="text-gray-700">${product.name} - ${product.length}</p>
            <p class="font-bold text-pink-500 mt-1">${formatZAR(product.price)}</p>
          </div>

          <form id="whatsapp-order-form" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" name="name" id="name" required 
                     class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500">
            </div>
            
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
              <input type="tel" name="phone" id="phone" required
                     placeholder="With country code (e.g. 27821234567)"
                     class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500">
            </div>
            
            <div>
              <label for="notes" class="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
              <textarea name="notes" id="notes" rows="3" placeholder="Color, length preference, etc."
                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"></textarea>
            </div>
            
            <button type="submit" 
                    class="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Send Order via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  `;

  // Inject into DOM
  document.body.insertAdjacentHTML('beforeend', formHTML);
  
  // Animate form in
  setTimeout(() => {
    document.getElementById('order-form-inner').classList.remove('scale-95', 'opacity-0');
    document.getElementById('order-form-inner').classList.add('scale-100', 'opacity-100');
  }, 10);

  // Handle form submission
  document.getElementById('whatsapp-order-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const phoneNumber = '27821234567'; // Replace with your WhatsApp number
    const productInfo = `Product: ${product.name} (${product.length}) - ${formatZAR(product.price)}`;
    
    const message = `New Order Inquiry:%0A%0A` +
                   `*Name:* ${formData.get('name')}%0A` +
                   `*Phone:* ${formData.get('phone')}%0A` +
                   `*Product:* ${productInfo}%0A` +
                   `*Notes:* ${formData.get('notes') || 'None'}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    
    // Close form
    closeOrderForm();
  });
}

// Close order form with animation
function closeOrderForm() {
  const formInner = document.getElementById('order-form-inner');
  if (formInner) {
    formInner.classList.remove('scale-100', 'opacity-100');
    formInner.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
      const form = document.getElementById('order-form');
      if (form) form.remove();
    }, 300);
  }
}
// Add scroll effect
  document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  });
  //TopBar
  // Example slider logic (adjust as needed)
let currentSlide = 0;
const track = document.getElementById('marketing-slider-track');
const slides = document.querySelectorAll('#marketing-slider-track > div');

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(nextSlide, 5000); // Rotate every 5s

// Marketing Slider
function initMarketingSlider() {
  const slider = document.getElementById('marketing-slider');
  const slides = document.querySelectorAll('#marketing-slider > div');
  const dots = document.querySelectorAll('.marketing-slider-dot');
  let currentIndex = 0;
  let interval;

  function goToSlide(index) {
    currentIndex = index;
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
    
    dots.forEach(dot => dot.classList.remove('opacity-100'));
    dots[currentIndex].classList.add('opacity-100');
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  }

  // Start auto-sliding
  function startSlider() {
    interval = setInterval(nextSlide, 4000);
  }

  // Add click events to dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(interval);
      goToSlide(index);
      startSlider();
    });
  });

  // Initialize
  goToSlide(0);
  startSlider();
}
//Marketing
  // Simple slider functionality
  document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('marketing-slider');
    const dots = document.querySelectorAll('.slider-dot');
    let currentIndex = 0;
    const totalSlides = 4;
    
    // Auto-rotate slides every 5 seconds
    const interval = setInterval(nextSlide, 5000);
    
    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update dot indicators
      dots.forEach((dot, index) => {
        dot.classList.toggle('opacity-100', index === currentIndex);
        dot.classList.toggle('opacity-50', index !== currentIndex);
      });
    }
    
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }
    
    // Dot click navigation
    dots.forEach(dot => {
      dot.addEventListener('click', function() {
        currentIndex = parseInt(this.getAttribute('data-index'));
        updateSlider();
        // Reset timer
        clearInterval(interval);
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
  // Testimonial Slider Logic (self-contained with unique IDs)
  const testimonialSlider = {
    init: function() {
      // Unique element selectors specific to this slider
      this.track = document.getElementById('testimonial-track');
      this.prevBtn = document.getElementById('prev-testimonial');
      this.nextBtn = document.getElementById('next-testimonial');
      this.slides = document.querySelectorAll('#testimonial-track > div');
      
      // Slider state
      this.currentIndex = 0;
      this.slideCount = this.slides.length;
      this.autoSlideInterval = null;
      this.slideDuration = 6000; // 6 seconds
      
      // Initialize
      if (this.track && this.slides.length > 0) {
        this.setupEventListeners();
        this.updateSliderPosition();
        this.startAutoSlide();
      }
    },
    
    setupEventListeners: function() {
      // Navigation buttons
      if (this.prevBtn) {
        this.prevBtn.addEventListener('click', () => {
          this.stopAutoSlide();
          this.prevSlide();
          this.startAutoSlide();
        });
      }
      
      if (this.nextBtn) {
        this.nextBtn.addEventListener('click', () => {
          this.stopAutoSlide();
          this.nextSlide();
          this.startAutoSlide();
        });
      }
      
      // Pause on hover
      this.track.addEventListener('mouseenter', () => this.stopAutoSlide());
      this.track.addEventListener('mouseleave', () => this.startAutoSlide());
    },
    
    updateSliderPosition: function() {
      const slideWidth = this.slides[0].offsetWidth;
      this.track.style.transform = `translateX(-${this.currentIndex * slideWidth}px)`;
    },
    
    nextSlide: function() {
      this.currentIndex = (this.currentIndex + 1) % this.slideCount;
      this.updateSliderPosition();
    },
    
    prevSlide: function() {
      this.currentIndex = (this.currentIndex - 1 + this.slideCount) % this.slideCount;
      this.updateSliderPosition();
    },
    
    startAutoSlide: function() {
      this.stopAutoSlide(); // Clear existing interval
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, this.slideDuration);
    },
    
    stopAutoSlide: function() {
      if (this.autoSlideInterval) {
        clearInterval(this.autoSlideInterval);
        this.autoSlideInterval = null;
      }
    },
    
    handleResize: function() {
      this.updateSliderPosition();
    }
  };
  
  // Initialize the testimonial slider
  testimonialSlider.init();
  
  // Make it available globally if needed (optional)
  window.testimonialSlider = testimonialSlider;
});
//Navbar
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('nav');
  
  if (nav) {
    // Add scroll effect
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        nav.classList.add('scrolled', 'shadow-lg');
        nav.classList.remove('hover:backdrop-blur-lg');
      } else {
        nav.classList.remove('scrolled', 'shadow-lg');
        nav.classList.add('hover:backdrop-blur-lg');
      }
    });
    
    // Initialize scroll state
    window.dispatchEvent(new Event('scroll'));
  }
});
// Close mobile menu when resizing to desktop
window.addEventListener('resize', function() {
  if (window.innerWidth >= 768) { // Match your md: breakpoint
    Alpine.store('mobileMenuOpen', false);
  }
});