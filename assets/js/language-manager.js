/**
 * Language manager for multi-language support
 * This file serves as a central hub for language switching and text management
 */

// Import language files
import en from './i18n/en.js';
import de from './i18n/de.js';
import fr from './i18n/fr.js';

/**
 * Language Manager Class
 * Handles language switching, text retrieval, and DOM updates
 */
class LanguageManager {
  constructor() {
    // Available languages
    this.languages = {
      en: en,
      de: de,
      fr: fr
    };
    
    // Default language
    this.currentLang = 'en';
    
    // Initialize
    this.init();
  }
  
  /**
   * Initialize the language manager
   */
  init() {
    // Try to load user's preferred language from localStorage
    const savedLang = localStorage.getItem('language');
    
    if (savedLang && this.languages[savedLang]) {
      this.currentLang = savedLang;
    } else {
      // Detect browser language as fallback
      const browserLang = navigator.language.split('-')[0];
      if (this.languages[browserLang]) {
        this.currentLang = browserLang;
      }
    }
    
    // Update the language display in the UI
    this.updateLanguageDisplay();
    
    // Apply initial translations
    this.applyTranslations();
    
    // Set up language switcher event listeners
    this.setupEventListeners();
  }
  
  /**
   * Set up event listeners for language switching
   */
  setupEventListeners() {
    // Wait for DOM content to be fully loaded
    const setupListeners = () => {
      const languageOptions = document.querySelectorAll('.language-option');
      const languageDropdown = document.querySelector('#languageDropdown');
      
      if (languageOptions.length === 0 || !languageDropdown) {
        console.warn('Language options or dropdown not found in the DOM. Retrying in 100ms...');
        // If elements not found, try again after a short delay
        setTimeout(setupListeners, 100);
        return;
      }
      
      console.log('Setting up language switcher listeners for', languageOptions.length, 'options');
      
      // Set up language option click handlers
      languageOptions.forEach(option => {
        // Remove any existing listeners to prevent duplicates
        const newHandler = function(event) {
          const lang = event.currentTarget.getAttribute('data-lang');
          console.log('Language option clicked:', lang);
          this.switchLanguage(lang);
        }.bind(this);
        
        option.removeEventListener('click', this._handleLanguageOptionClick);
        this._handleLanguageOptionClick = newHandler;
        
        // Add the click event listener
        option.addEventListener('click', this._handleLanguageOptionClick);
      });
    };
    
    // Run setup immediately
    setupListeners();
    
    // Also set up listeners when DOM is fully loaded (backup)
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setupListeners);
    }
  }
  
  /**
   * Switch the current language
   * @param {string} lang - Language code to switch to
   */
  switchLanguage(lang) {
    if (this.languages[lang] && this.currentLang !== lang) {
      this.currentLang = lang;
      
      // Save to localStorage
      localStorage.setItem('language', lang);
      
      // Update the UI
      this.updateLanguageDisplay();
      
      // Apply translations
      this.applyTranslations();
      
      // Update HTML lang attribute
      document.documentElement.setAttribute('lang', lang);
      
      // Dispatch event for other components
      window.dispatchEvent(new CustomEvent('languageChanged', {
        detail: { language: lang }
      }));
    }
  }
  
  /**
   * Update the language indicator in the UI
   */
  updateLanguageDisplay() {
    const currentLangEl = document.getElementById('currentLang');
    if (currentLangEl) {
      currentLangEl.textContent = this.currentLang.toUpperCase();
      
      // Add class to highlight the active language in the dropdown
      document.querySelectorAll('.language-option').forEach(option => {
        const lang = option.getAttribute('data-lang');
        if (lang === this.currentLang) {
          option.classList.add('active');
        } else {
          option.classList.remove('active');
        }
      });
      
      // Also update the dropdown button text to show current language
      const dropdownButton = document.getElementById('languageDropdown');
      if (dropdownButton) {
        dropdownButton.innerHTML = `<i class="bi bi-globe"></i> <span id="currentLang">${this.currentLang.toUpperCase()}</span>`;
      }
      
      console.log('Language display updated to:', this.currentLang);
    } else {
      console.warn('currentLang element not found in the DOM');
    }
  }
  
  /**
   * Get translation text by key
   * @param {string} key - Dot notation path to the translation string
   * @param {object} replacements - Optional object with replacement values
   * @returns {string} - Translated text
   */
  getText(key, replacements = {}) {
    // Get the current language strings
    const strings = this.languages[this.currentLang];
    
    // Navigate the object using the dot notation
    const keyParts = key.split('.');
    let value = strings;
    
    // Navigate through nested objects
    for (const part of keyParts) {
      if (value && typeof value === 'object' && part in value) {
        value = value[part];
      } else {
        // Key not found, fallback to English or return the key itself
        console.warn(`Translation key not found: ${key}`);
        
        // Try English as fallback
        if (this.currentLang !== 'en') {
          let fallback = this.languages.en;
          let found = true;
          
          for (const part of keyParts) {
            if (fallback && typeof fallback === 'object' && part in fallback) {
              fallback = fallback[part];
            } else {
              found = false;
              break;
            }
          }
          
          if (found) {
            value = fallback;
          } else {
            // Last resort: return the key
            return key;
          }
        } else {
          // If already in English and key not found, return the key
          return key;
        }
      }
    }
    
    // If value is not a string, return the key
    if (typeof value !== 'string') {
      console.warn(`Translation key does not point to a string: ${key}`);
      return key;
    }
    
    // Replace placeholders if any
    if (Object.keys(replacements).length) {
      return value.replace(/\{(\w+)\}/g, (match, key) => {
        return replacements[key] !== undefined ? replacements[key] : match;
      });
    }
    
    return value;
  }
  
  /**
   * Apply translations to all elements with data-i18n attribute
   */
  applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      
      // Get the translation
      const translation = this.getText(key);
      
      // Check element type to apply translation correctly
      if (element.tagName === 'INPUT' && element.type === 'placeholder') {
        element.placeholder = translation;
      } else if (element.tagName === 'INPUT' && element.type === 'value') {
        element.value = translation;
      } else if (element.tagName === 'IMG') {
        element.alt = translation;
      } else {
        element.textContent = translation;
      }
    });
    
    // Special handling for select options
    const selects = document.querySelectorAll('select[data-i18n-options]');
    selects.forEach(select => {
      const optionsKey = select.getAttribute('data-i18n-options');
      const options = this.getNestedObject(this.languages[this.currentLang], optionsKey.split('.'));
      
      if (options && Array.isArray(options)) {
        // Save selected value
        const selectedValue = select.value;
        
        // Clear options
        select.innerHTML = '';
        
        // Add placeholder if available
        const placeholderKey = select.getAttribute('data-i18n-placeholder');
        if (placeholderKey) {
          const placeholder = this.getText(placeholderKey);
          const option = document.createElement('option');
          option.value = '';
          option.textContent = placeholder;
          select.appendChild(option);
        }
        
        // Add translated options
        options.forEach((optionText, index) => {
          const option = document.createElement('option');
          option.value = index.toString();
          option.textContent = optionText;
          select.appendChild(option);
        });
        
        // Restore selected value if possible
        if (selectedValue) {
          select.value = selectedValue;
        }
      }
    });
  }
  
  /**
   * Helper function to get a nested object property by array of keys
   * @param {object} obj - The object to navigate
   * @param {array} keys - Array of keys to navigate with
   * @returns {any} - The found value or undefined
   */
  getNestedObject(obj, keys) {
    return keys.reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
  }
  
  /**
   * Get the current language code
   * @returns {string} - Current language code
   */
  getCurrentLanguage() {
    return this.currentLang;
  }
  
  /**
   * Check if the current language is RTL
   * @returns {boolean} - True if the current language is RTL
   */
  isRTL() {
    // Add RTL languages here if needed
    const rtlLanguages = [];
    return rtlLanguages.includes(this.currentLang);
  }
}

// Create and export a singleton instance
const i18n = new LanguageManager();
export default i18n;