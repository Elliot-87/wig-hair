 document.addEventListener('DOMContentLoaded', function() {
      const slides = [
        document.getElementById('slide-1'),
        document.getElementById('slide-2'),
        document.getElementById('slide-3')
      ];
      const dots = document.querySelectorAll('.slider-dot');
      let currentSlide = 0;
      
      // Initialize slider
      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.style.opacity = i === index ? '1' : '0';
        });
        
        dots.forEach((dot, i) => {
          dot.classList.toggle('bg-opacity-100', i === index);
          dot.classList.toggle('w-6', i === index);
          dot.classList.toggle('bg-opacity-50', i !== index);
        });
        
        currentSlide = index;
      }
      
      // Dot click handlers
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
      });
      
      // Auto-rotate slides every 5 seconds
      setInterval(() => {
        showSlide((currentSlide + 1) % slides.length);
      }, 5000);
      
      // Initialize first slide
      showSlide(0);
    });
              function filterProducts(category) {
    // Filter products based on category
    const filteredProducts = products.filter(product => 
        product.category.toLowerCase().includes(category.toLowerCase()) ||
        (category === 'audio' && ['Headphones', 'Speakers'].includes(product.category))
    );
    
    // Update the product display
    displayFilteredProducts(filteredProducts);
    
    // Scroll to products section
    document.getElementById('featured-products').scrollIntoView({ behavior: 'smooth' });
}

function displayFilteredProducts(filteredProducts) {
    const featuredContainer = document.getElementById('featured-products');
    featuredContainer.innerHTML = `
        <h3 class="text-2xl font-bold col-span-full mb-6">${filteredProducts.length} Products Found</h3>
        ${filteredProducts.map(product => createProductCard(product)).join('')}
    `;
    
    // Update the "View All" button to show all products again
    const viewAllBtn = document.createElement('button');
    viewAllBtn.className = 'bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded col-span-full mb-8';
    viewAllBtn.innerHTML = 'Show All Products';
    viewAllBtn.addEventListener('click', () => {
        loadFeaturedProducts();
    });
    featuredContainer.prepend(viewAllBtn);
    
    // Add event listeners to new products
    addCartEventListeners('#featured-products .add-to-cart');
}
//Products
const products = [
    {
        id: 1,
        name: "Brazilian Straight - 100% Human Hair",
        type: "straight",
        length: "24 inches",
        price: 189.99,
        oldPrice: 249.99,
        image: "images/8.jpg",
        badge: "BESTSELLER",
        featured: true
    },
    {
        id: 2,
        name: "Peruvian Curly - 100% Human Hair",
        type: "curly",
        length: "22 inches",
        price: 219.99,
        image: "images/5.jpg",
        featured: true
    },
    {
        id: 3,
        name: "Malaysian Wavy - 100% Human Hair",
        type: "wavy",
        length: "20 inches",
        price: 199.99,
        image: "images/bnf.jpg",
        featured: true
    },
    {
        id: 4,
        name: "Kinky Curly - 100% Human Hair",
        type: "kinky",
        length: "18 inches",
        price: 179.99,
        oldPrice: 209.99,
        image: "images/braidal.jpg",
        badge: "NEW",
        featured: true
    },
    // Additional products
    {
        id: 5,
        name: "Indian Straight - 100% Human Hair",
        type: "straight",
        length: "26 inches",
        price: 229.99,
        image: "images/11.jpg"
    },
    {
        id: 6,
        name: "Brazilian Body Wave - 100% Human Hair",
        type: "wavy",
        length: "22 inches",
        price: 209.99,
        image: "images/17.jpg"
    },
    {
        id: 7,
        name: "Peruvian Deep Curly - 100% Human Hair",
        type: "curly",
        length: "20 inches",
        price: 239.99,
        image: "images/2.jpg"
    },
    {
        id: 8,
        name: "Afro Kinky - 100% Human Hair",
        type: "kinky",
        length: "16 inches",
        price: 169.99,
        image: "images/13.jpg"
    },
    {
        id: 9,
        name: "Brazilian Straight - 100% Human Hair",
        type: "straight",
        length: "24 inches",
        price: 189.99,
        oldPrice: 249.99,
        image: "images/15.jpg",
        badge: "BESTSELLER",
        featured: true
    },
    {
        id: 10,
        name: "Peruvian Curly - 100% Human Hair",
        type: "curly",
        length: "22 inches",
        price: 219.99,
        image: "images/17.jpg",
        featured: true
    },
    {
        id: 11,
        name: "Malaysian Wavy - 100% Human Hair",
        type: "wavy",
        length: "20 inches",
        price: 199.99,
        image: "images/6.jpg",
        featured: true
    },
    {
        id: 12,
        name: "Kinky Curly - 100% Human Hair",
        type: "kinky",
        length: "18 inches",
        price: 179.99,
        oldPrice: 209.99,
        image: "images/14.jpg",
        badge: "NEW",
        featured: true
    },
    {
        id: 13,
        name: "Indian Straight - 100% Human Hair",
        type: "straight",
        length: "26 inches",
        price: 229.99,
        image: "images/14.jpg"
    },
    {
        id: 14,
        name: "Brazilian Body Wave - 100% Human Hair",
        type: "wavy",
        length: "22 inches",
        price: 209.99,
        image: "images/queen.jpg"
    },
    {
        id: 15,
        name: "Peruvian Deep Curly - 100% Human Hair",
        type: "curly",
        length: "20 inches",
        price: 239.99,
        image: "images/2.jpg"
    },
    {
        id: 16,
        name: "Afro Kinky - 100% Human Hair",
        type: "kinky",
        length: "16 inches",
        price: 169.99,
        image: "images/12.jpg"
    }
];

// Format price as ZAR (South African Rand)
function formatZAR(price) {
    return 'R ' + price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Create product card HTML
function createProductCard(product) {
    return `
        <div class="group relative product-card transition duration-300 ease-in-out">
            <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-center object-cover lg:w-full lg:h-full">
                ${product.badge ? `<div class="absolute top-2 right-2 bg-pink-450 text-white text-xs font-bold px-2 py-1 rounded-full">${product.badge}</div>` : ''}
            </div>
            <div class="mt-4 flex justify-between">
                <div>
                    <h3 class="text-sm text-gray-700">
                        <a href="#">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${product.name}
                        </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">${product.length}</p>
                </div>
                <div class="text-right">
                    <p class="text-sm font-medium text-gray-900">${formatZAR(product.price)}</p>
                    ${product.oldPrice ? `<p class="text-xs text-gray-500 line-through">${formatZAR(product.oldPrice)}</p>` : ''}
                </div>
            </div>
            <button data-id="${product.id}" class="add-to-cart mt-2 w-full bg-pink-450 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition duration-300">
                Order Now
            </button>
        </div>
    `;
}

// Simple cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id == productId);
    if (product) {
        // In a real app, you would add to cart logic here
        alert(`Added to cart: ${product.name} - ${formatZAR(product.price)}`);
        
        // Update cart count
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            const currentCount = parseInt(cartCount.textContent);
            cartCount.textContent = currentCount + 1;
        }
    }
}

// Load products when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedProducts();
    loadAllProducts();
    
    // View All Products toggle
    const viewAllBtn = document.getElementById('view-all-btn');
    const allProductsSection = document.getElementById('all-products');
    
    viewAllBtn.addEventListener('click', function() {
        allProductsSection.classList.toggle('hidden');
        
        if (allProductsSection.classList.contains('hidden')) {
            this.innerHTML = 'View All Products <i class="fas fa-chevron-down ml-2"></i>';
        } else {
            this.innerHTML = 'Show Less <i class="fas fa-chevron-up ml-2"></i>';
            // Scroll to the all products section
            allProductsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Load featured products
function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featured-products');
    const featuredProducts = products.filter(product => product.featured);
    
    featuredContainer.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    
    // Add event listeners to add to cart buttons
    document.querySelectorAll('#featured-products .add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            addToCart(productId);
        });
    });
}

// Load all products
function loadAllProducts() {
    const allProductsContainer = document.getElementById('all-products-grid');
    allProductsContainer.innerHTML = products.map(product => createProductCard(product)).join('');
    
    // Add event listeners to add to cart buttons
    document.querySelectorAll('#all-products-grid .add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            addToCart(productId);
        });
    });
}

// Filter products by type
function filterProducts(type) {
    const filteredProducts = products.filter(product => product.type === type);
    const allProductsContainer = document.getElementById('all-products-grid');
    
    allProductsContainer.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    
    // Show the all products section
    const allProductsSection = document.getElementById('all-products');
    const viewAllBtn = document.getElementById('view-all-btn');
    
    if (allProductsSection.classList.contains('hidden')) {
        allProductsSection.classList.remove('hidden');
        viewAllBtn.innerHTML = 'Show Less <i class="fas fa-chevron-up ml-2"></i>';
    }
    
    // Scroll to the all products section
    allProductsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Add event listeners to add to cart buttons
    document.querySelectorAll('#all-products-grid .add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            addToCart(productId);
        });
    });
}
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
    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
        
        // Add real-time validation
        const nameInput = document.getElementById('contact-name');
        const emailInput = document.getElementById('contact-email');
        
        nameInput.addEventListener('input', () => validateField(nameInput));
        emailInput.addEventListener('input', () => validateEmail(emailInput));
    }
    
    // Smooth scrolling for contact links
    document.querySelectorAll('a[href^="#contact"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function validateField(field) {
    const isValid = field.value.trim().length > 0;
    const checkIcon = field.nextElementSibling;
    
    if (isValid) {
        field.classList.remove('border-red-300');
        field.classList.add('border-green-300');
        checkIcon.classList.remove('hidden');
    } else {
        field.classList.remove('border-green-300');
        field.classList.add('border-red-300');
        checkIcon.classList.add('hidden');
    }
    
    return isValid;
}

function validateEmail(emailField) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(emailField.value.trim());
    const checkIcon = emailField.nextElementSibling;
    
    if (isValid) {
        emailField.classList.remove('border-red-300');
        emailField.classList.add('border-green-300');
        checkIcon.classList.remove('hidden');
    } else {
        emailField.classList.remove('border-green-300');
        emailField.classList.add('border-red-300');
        checkIcon.classList.add('hidden');
    }
    
    return isValid;
}

async function handleContactSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = document.getElementById('contact-submit');
    const submitText = document.getElementById('submit-text');
    const spinner = document.getElementById('submit-spinner');
    const messageDiv = document.getElementById('form-message');
    
    // Validate all fields
    const nameValid = validateField(document.getElementById('contact-name'));
    const emailValid = validateEmail(document.getElementById('contact-email'));
    const messageValid = validateField(document.getElementById('contact-message'));
    const consentChecked = document.getElementById('contact-consent').checked;
    
    if (!nameValid || !emailValid || !messageValid || !consentChecked) {
        showFormMessage(messageDiv, 'Please fill all required fields correctly', 'error');
        return;
    }
    
    // Prepare form data
    const formData = {
        name: document.getElementById('contact-name').value.trim(),
        email: document.getElementById('contact-email').value.trim(),
        subject: document.getElementById('contact-subject').value.trim(),
        message: document.getElementById('contact-message').value.trim(),
        consent: true
    };
    
    // Show loading state
    submitBtn.disabled = true;
    submitText.textContent = 'Sending...';
    spinner.classList.remove('hidden');
    messageDiv.classList.add('hidden');
    
    try {
        // Simulate API call (replace with actual fetch)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        showFormMessage(messageDiv, 'Your message has been sent successfully! We will get back to you soon.', 'success');
        form.reset();
        
        // Reset validation indicators
        document.querySelectorAll('.fa-check-circle').forEach(icon => {
            icon.classList.add('hidden');
        });
        document.querySelectorAll('input, textarea').forEach(field => {
            field.classList.remove('border-green-300', 'border-red-300');
        });
    } catch (error) {
        showFormMessage(messageDiv, 'There was an error sending your message. Please try again later.', 'error');
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitText.textContent = 'Send Message';
        spinner.classList.add('hidden');
    }
}

function showFormMessage(element, message, type) {
    element.textContent = message;
    element.className = 'p-4 rounded-md';
    
    if (type === 'success') {
        element.classList.add('bg-green-100', 'text-green-700');
    } else {
        element.classList.add('bg-red-100', 'text-red-700');
    }
    
    element.classList.remove('hidden');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        element.classList.add('hidden');
    }, 5000);
}
//Back to Top
 document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('hidden');
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
        backToTopButton.classList.add('hidden');
      }
    });
    
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  //Testimonials
  document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('testimonial-track');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    let currentIndex = 0;
    const testimonialCount = 3;
    const itemWidth = 100; // Percentage
    
    function updateSlider() {
      track.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
      
      // Add animation class
      track.classList.add('animate-slide');
      setTimeout(() => {
        track.classList.remove('animate-slide');
      }, 700);
    }
    
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % testimonialCount;
      updateSlider();
    });
    
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + testimonialCount) % testimonialCount;
      updateSlider();
    });
    
    // Auto-rotate every 8 seconds
    setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonialCount;
      updateSlider();
    }, 8000);
  });
  