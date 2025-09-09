// Import the language manager
import i18n from './language-manager.js';

// Make i18n available globally for use in other scripts
window.i18n = i18n;

// Handle document ready state
const initializeApp = () => {
  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Re-initialize language manager to ensure event listeners are attached
  if (i18n) {
    // Re-apply translations
    i18n.applyTranslations();
    
    // Explicitly call setupEventListeners again after DOM is fully loaded
    i18n.setupEventListeners();
    
    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', i18n.getCurrentLanguage());
  }

  // Rest of initialization
  initializeTheme();
  initializeScrollBehavior();
};

// Enhanced Dark mode toggle with animation
const initializeTheme = () => {
  const toggle = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('theme');
  const getPreferredTheme = () => storedTheme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  // Improved theme setting with transition
  const setTheme = theme => {
    document.body.classList.add('theme-transition');
    document.body.setAttribute('data-bs-theme', theme);
    
    // Update icon based on theme
    if (toggle) {
      if (theme === 'dark') {
        toggle.innerHTML = '<i class="bi bi-sun"></i>';
        toggle.setAttribute('title', 'Switch to light mode');
      } else {
        toggle.innerHTML = '<i class="bi bi-moon-stars"></i>';
        toggle.setAttribute('title', 'Switch to dark mode');
      }
    }
    
    // Remove transition class after animation completes
    setTimeout(() => {
      document.body.classList.remove('theme-transition');
    }, 300);
  };

  // Set initial theme
  setTheme(getPreferredTheme());

  // Theme toggle event listener with improved functionality
  toggle?.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-bs-theme');
    const next = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    
    // Add button animation
    toggle.classList.add('theme-toggle-spin');
    setTimeout(() => toggle.classList.remove('theme-toggle-spin'), 300);
  });
};

// Enhanced scroll behavior for navbar
const initializeScrollBehavior = () => {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
};

// Initialize everything when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // DOM already loaded, run immediately
  initializeApp();
}

// Cookie consent functionality with improved UX
document.addEventListener('DOMContentLoaded', () => {
  // Initialize language manager
  if (i18n) {
    // Apply initial translations
    i18n.applyTranslations();
    
    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', i18n.getCurrentLanguage());
  }
  
  // Initialize scroll animations for modern UI
  initScrollAnimations();
  
  // Initialize cookie consent and GDPR toasts with improved UX
  const elements = {
    cookieConsentToast: document.getElementById('cookieConsentToast'),
    gdprToast: document.getElementById('gdprToast'),
    acceptGdpr: document.getElementById('acceptGdpr'),
    acceptAllCookies: document.getElementById('acceptAllCookies'),
    savePreferences: document.getElementById('savePreferences'),
    analyticsCookies: document.getElementById('analyticsCookies'),
    marketingCookies: document.getElementById('marketingCookies'),
    openCookieSettings: document.getElementById('openCookieSettings')
  };
  
  // Enhanced toast functionality with staggered display
  const toasts = {};
  
  // Only initialize toasts if they don't already have Bootstrap instances
  if (elements.cookieConsentToast && !elements.cookieConsentToast.hasAttribute('data-bs-toast-initialized')) {
    toasts.cookieConsent = new bootstrap.Toast(elements.cookieConsentToast, { delay: 2000 });
    elements.cookieConsentToast.setAttribute('data-bs-toast-initialized', 'true');
  } else if (elements.cookieConsentToast) {
    // If already initialized, retrieve the existing instance
    toasts.cookieConsent = bootstrap.Toast.getInstance(elements.cookieConsentToast);
  }
  
  if (elements.gdprToast && !elements.gdprToast.hasAttribute('data-bs-toast-initialized')) {
    toasts.gdpr = new bootstrap.Toast(elements.gdprToast, { delay: 1000 });
    elements.gdprToast.setAttribute('data-bs-toast-initialized', 'true');
  } else if (elements.gdprToast) {
    // If already initialized, retrieve the existing instance
    toasts.gdpr = bootstrap.Toast.getInstance(elements.gdprToast);
  }

  // Add event handler for the "Manage Cookies" button in the Cookie Policy modal
  elements.openCookieSettings?.addEventListener('click', () => {
    // Get the cookie consent toast instance
    const cookieConsentToast = bootstrap.Toast.getInstance(elements.cookieConsentToast) || 
                              new bootstrap.Toast(elements.cookieConsentToast, { delay: 2000 });
    
    // Show the cookie consent toast
    cookieConsentToast.show();
  });
  
  // Improved storage utilities with error handling
  const storage = {
    get: (key, defaultValue = null) => {
      try {
        return JSON.parse(localStorage.getItem(key) ?? 'null') ?? defaultValue;
      } catch (error) {
        console.error(`Error retrieving ${key} from storage:`, error);
        return defaultValue;
      }
    },
    set: (key, value) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (error) {
        console.error(`Error saving ${key} to storage:`, error);
        return false;
      }
    }
  };
  
  // Get stored preferences
  const cookiePreferences = storage.get('cookiePreferences');
  const gdprAccepted = storage.get('gdprAccepted', false);
  
  // Show relevant toasts with staggered timing for better UX
  setTimeout(() => {
    if (!gdprAccepted && toasts.gdpr) {
      toasts.gdpr.show();
    }
  }, 1000);
  
  setTimeout(() => {
    if (!cookiePreferences && toasts.cookieConsent) {
      toasts.cookieConsent.show();
    }
  }, 2000);
  
  // Create and save preferences object
  const createPreferences = ({ analytics = false, marketing = false }) => ({
    necessary: true, // Always required
    analytics,
    marketing,
    acceptedAt: new Date().toISOString()
  });
  
  const savePreferences = (preferences) => {
    if (storage.set('cookiePreferences', preferences)) {
      // Properly hide the toast after preferences are saved
      if (elements.cookieConsentToast) {
        elements.cookieConsentToast.classList.add('fade-out');
        setTimeout(() => {
          toasts.cookieConsent?.hide();
          elements.cookieConsentToast.classList.remove('fade-out');
        }, 300);
      }
      
      applyConsentPreferences(preferences);
      showPreferencesSavedToast();
    }
  };
  
  // Show feedback when preferences are saved
  const showPreferencesSavedToast = () => {
    const toastContainer = document.querySelector('.toast-container');
    if (toastContainer) {
      const savedToast = document.createElement('div');
      savedToast.className = 'toast align-items-center text-bg-success border-0';
      savedToast.setAttribute('role', 'alert');
      savedToast.setAttribute('aria-live', 'assertive');
      savedToast.setAttribute('aria-atomic', 'true');
      savedToast.innerHTML = `
        <div class="d-flex">
          <div class="toast-body">
            <i class="bi bi-check-circle me-2"></i> Your preferences have been saved
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      `;
      toastContainer.appendChild(savedToast);
      const bsToast = new bootstrap.Toast(savedToast, { delay: 3000 });
      bsToast.show();
      
      // Clean up DOM after toast is hidden
      savedToast.addEventListener('hidden.bs.toast', () => {
        savedToast.remove();
      });
    }
  };
  
  // Event handlers with improved feedback
  elements.acceptGdpr?.addEventListener('click', () => {
    if (storage.set('gdprAccepted', true)) {
      // Add animation before hiding
      if (elements.gdprToast) {
        elements.gdprToast.classList.add('fade-out');
        setTimeout(() => {
          toasts.gdpr?.hide();
          elements.gdprToast.classList.remove('fade-out');
        }, 300);
      } else {
        toasts.gdpr?.hide();
      }
    }
  });
  
  elements.acceptAllCookies?.addEventListener('click', () => {
    // Add button animation feedback
    if (elements.acceptAllCookies) {
      elements.acceptAllCookies.classList.add('btn-pulse');
      setTimeout(() => elements.acceptAllCookies.classList.remove('btn-pulse'), 300);
    }
    savePreferences(createPreferences({ analytics: true, marketing: true }));
  });
  
  elements.savePreferences?.addEventListener('click', () => {
    // Add button animation feedback
    if (elements.savePreferences) {
      elements.savePreferences.classList.add('btn-pulse');
      setTimeout(() => elements.savePreferences.classList.remove('btn-pulse'), 300);
    }
    savePreferences(createPreferences({
      analytics: elements.analyticsCookies?.checked ?? false,
      marketing: elements.marketingCookies?.checked ?? false
    }));
  });
  
  // Apply existing preferences if available
  if (cookiePreferences) {
    // Set checkboxes to saved values
    if (elements.analyticsCookies) elements.analyticsCookies.checked = cookiePreferences.analytics;
    if (elements.marketingCookies) elements.marketingCookies.checked = cookiePreferences.marketing;
    applyConsentPreferences(cookiePreferences);
  }
  
  // Modern card hover effects
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const icon = card.querySelector('.bi');
      if (icon) {
        icon.classList.add('text-brand');
      }
    });
    
    card.addEventListener('mouseleave', () => {
      const icon = card.querySelector('.bi');
      if (icon) {
        setTimeout(() => {
          icon.classList.remove('text-brand');
        }, 200);
      }
    });
  });
});

/**
 * Applies the user's consent preferences to the website
 * @param {Object} preferences - The user's consent preferences
 */
const applyConsentPreferences = (preferences) => {
  if (preferences?.analytics) {
    // Initialize analytics scripts here
    console.log('Analytics enabled');
    // Example: loadAnalyticsScript();
  }
  
  if (preferences?.marketing) {
    // Initialize marketing scripts here
    console.log('Marketing enabled');
    // Example: loadMarketingScript();
  }
};

/**
 * Initialize scroll animations for a modern UI experience
 */
const initScrollAnimations = () => {
  // Create intersection observer for fade-in animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        // Keep observing sections for re-animation when scrolling back up
        if (!entry.target.classList.contains('section')) {
          observer.unobserve(entry.target);
        }
      } else if (entry.target.classList.contains('section')) {
        // Remove animation when section is out of view for re-animation
        entry.target.classList.remove('animate-in');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -100px 0px' });
  
  // Apply to section elements for fade-in effects
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('animate-ready', 'section');
    observer.observe(section);
  });
  
  // Apply to cards for staggered animations
  document.querySelectorAll('.card').forEach((card, index) => {
    card.classList.add('animate-ready');
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });
  
  // Apply to headings for subtle animations
  document.querySelectorAll('h1, h2, h3, .display-5, .display-6').forEach((heading) => {
    heading.classList.add('animate-ready');
    heading.style.transitionDelay = '0.1s';
    observer.observe(heading);
  });
  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Add highlight animation to target section
        targetElement.classList.add('section-highlight');
        setTimeout(() => targetElement.classList.remove('section-highlight'), 1000);
        
        // Smooth scroll
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Account for fixed header
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarMenu = document.querySelector('.navbar-collapse');
        if (navbarMenu && navbarMenu.classList.contains('show')) {
          navbarToggler.click();
        }
      }
    });
  });
  
  // Animate navbar links based on scroll position
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    document.querySelectorAll('.navbar .nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
  
  // Parallax effect for hero section
  const heroImage = document.querySelector('.hero-section img');
  if (heroImage) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled < 600) {
        heroImage.style.transform = `translateY(${scrolled * 0.15}px)`;
      }
    });
  }
};

// Enhanced Bootstrap form validation with improved user feedback
(() => {
  const forms = document.querySelectorAll('.needs-validation');
  
  const validateInput = (input) => {
    // Add realtime validation as user types
    input.addEventListener('input', () => {
      if (input.checkValidity()) {
        input.classList.add('is-valid');
        input.classList.remove('is-invalid', 'shake-invalid');
      } else {
        // Don't show invalid state while user is actively typing
        if (input.value.length > 3) {
          input.classList.add('is-invalid');
          input.classList.remove('is-valid');
        }
      }
    });
    
    // Clear validation state when field is emptied
    input.addEventListener('blur', () => {
      if (input.value === '') {
        input.classList.remove('is-valid', 'is-invalid', 'shake-invalid');
      } else if (!input.checkValidity()) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
      }
    });
  };
  
  Array.from(forms).forEach(form => {
    // Add modern validation to all form fields
    form.querySelectorAll('input, select, textarea').forEach(validateInput);
    
    // Submit handler
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        
        // Focus the first invalid element
        const firstInvalid = form.querySelector(':invalid');
        if (firstInvalid) {
          firstInvalid.focus();
          
          // Add attention animation
          firstInvalid.classList.add('shake-invalid');
          setTimeout(() => firstInvalid.classList.remove('shake-invalid'), 600);
        }
      } else {
        // Show success state on valid submission
        event.preventDefault();
        form.classList.add('was-validated', 'form-success');
        
        // Replace form with success message
        const submitBtn = form.querySelector('[type="submit"]');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<i class="bi bi-check-circle"></i> Sent!';
        }
        
        // Simulate form submission
        setTimeout(() => {
          const formWrapper = form.parentElement;
          if (formWrapper) {
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success animate-fade-in';
            
            // Get success message from i18n if available
            if (window.i18n) {
              successMessage.innerHTML = `
                <i class="bi bi-check-circle-fill me-2"></i>
                <strong>${window.i18n.getText('contact.form.success')}</strong>
              `;
            } else {
              successMessage.innerHTML = `
                <i class="bi bi-check-circle-fill me-2"></i>
                <strong>Thank you for your message!</strong><br>
                We'll get back to you as soon as possible.
              `;
            }
            
            // Animate form transition
            form.style.height = `${form.offsetHeight}px`;
            form.style.overflow = 'hidden';
            form.style.opacity = '0';
            form.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
              form.style.height = '0';
              setTimeout(() => {
                formWrapper.appendChild(successMessage);
                form.remove();
              }, 300);
            }, 200);
          }
        }, 1000);
      }
      
      form.classList.add('was-validated');
    }, false);
  });
})();

// Initialize custom tooltips and popovers
document.addEventListener('DOMContentLoaded', () => {
  // Initialize tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  
  // Initialize popovers
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
  
  // Prevent multiple modal initializations
  const modalElements = document.querySelectorAll('.modal');
  modalElements.forEach(modalElement => {
    if (!modalElement.hasAttribute('data-bs-modal-initialized')) {
      // Only initialize modals that haven't been initialized yet
      new bootstrap.Modal(modalElement);
      modalElement.setAttribute('data-bs-modal-initialized', 'true');
    }
  });
  
  // Handle modal triggers manually to prevent duplicate initialization
  document.querySelectorAll('[data-bs-toggle="modal"]').forEach(trigger => {
    if (!trigger.hasAttribute('data-bs-modal-trigger-initialized')) {
      trigger.addEventListener('click', event => {
        event.preventDefault();
        const targetSelector = trigger.getAttribute('data-bs-target') || trigger.getAttribute('href');
        const targetModal = document.querySelector(targetSelector);
        
        if (targetModal) {
          // Get the existing modal instance or create a new one
          const modalInstance = bootstrap.Modal.getInstance(targetModal) || new bootstrap.Modal(targetModal);
          modalInstance.show();
        }
      });
      trigger.setAttribute('data-bs-modal-trigger-initialized', 'true');
    }
  });
  
  // Set up language-switching event listeners if language manager is available
  window.i18n = i18n; // Make i18n available globally
  
  // Listen for language change events
  window.addEventListener('languageChanged', (event) => {
    console.log(`Language changed to: ${event.detail.language}`);
    // Additional language-specific adjustments can be added here
  });
});
