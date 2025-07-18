// Initialize products (you would replace this with actual data from your backend)
function initializeProducts() {
    const featuredContainer = document.getElementById('featured-products');
    const allProductsContainer = document.getElementById('all-products-grid');
    
    // Example product data - replace with your actual products
    const products = [
        { id: 1, name: 'Box Braid Wig', category: 'Box', featured: true },
        { id: 2, name: 'Fulani Braid Wig', category: 'Fulani', featured: true },
        { id: 3, name: 'Goddess Braid Wig', category: 'Goddess', featured: true },
        { id: 4, name: 'Lemonade Braid Wig', category: 'Cornrow', featured: true },
        { id: 5, name: 'Twist Braid Wig', category: 'Twist', featured: false },
        { id: 6, name: 'Knotless Braid Wig', category: 'Knotless', featured: false },
        // Add more products as needed
    ];
    
    // Create product cards
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-item group relative';
        productCard.setAttribute('data-category', product.category);
        
        productCard.innerHTML = `
            <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img src="path/to/product-image.jpg" alt="${product.name}" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <div>
                    <h3 class="text-sm text-gray-700">
                        <a href="#">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${product.name}
                        </a>
                    </h3>
                </div>
                <p class="text-sm font-medium text-gray-900">$99.99</p>
            </div>
        `;
        
        if (product.featured) {
            featuredContainer.appendChild(productCard.cloneNode(true));
        }
        allProductsContainer.appendChild(productCard);
    });
}

// Initialize products when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeProducts);
  // Close order form when clicking outside
  document.addEventListener('click', (e) => {
    const form = document.getElementById('order-form');
    if (form && e.target === form) {
      closeOrderForm();
    }
  });
});
//Products Section

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
    //TopBar
    document.addEventListener('DOMContentLoaded', function() {
  const track = document.getElementById('testimonial-track');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  const testimonials = document.querySelectorAll('#testimonial-track > div');
  
  let currentIndex = 0;
  const testimonialCount = testimonials.length;
  
  // Set initial position
  updateSliderPosition();
  
  // Next testimonial
  nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % testimonialCount;
    updateSliderPosition();
  });
  
  // Previous testimonial
  prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + testimonialCount) % testimonialCount;
    updateSliderPosition();
  });
  
  // Auto-advance every 5 seconds (optional)
  let autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonialCount;
    updateSliderPosition();
  }, 5000);
  
  // Pause auto-slide on hover
  track.addEventListener('mouseenter', () => clearInterval(autoSlide));
  track.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonialCount;
      updateSliderPosition();
    }, 5000);
  });
  
  function updateSliderPosition() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
    
    // Update button states (optional)
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === testimonialCount - 1;
  }
  
  // Optional: Touch/swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, {passive: true});
  
  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, {passive: true});
  
  function handleSwipe() {
    const threshold = 50; // Minimum swipe distance
    
    if (touchEndX < touchStartX - threshold) {
      // Swipe left - next
      currentIndex = (currentIndex + 1) % testimonialCount;
    } else if (touchEndX > touchStartX + threshold) {
      // Swipe right - previous
      currentIndex = (currentIndex - 1 + testimonialCount) % testimonialCount;
    }
    
    updateSliderPosition();
  }
});