/*==================== MENU SHOW/HIDE ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
        
        // Change hamburger icon
        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('show-menu')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

/*===== MENU HIDDEN =====*/
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        
        // Reset hamburger icon
        if (navToggle) {
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

/*==================== CLOSE MENU ON OUTSIDE CLICK ====================*/
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('show-menu');
        
        // Reset hamburger icon
        if (navToggle) {
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
});

/*==================== CLOSE MENU ON ESCAPE KEY ====================*/
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu');
        
        // Reset hamburger icon and focus
        if (navToggle) {
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            navToggle.focus();
        }
    }
});

/*==================== HEADER SCROLL EFFECT ====================*/
function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL TO TOP ====================*/
function scrollUp() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 560) {
        scrollTop.classList.add('show-scroll');
    } else {
        scrollTop.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

/*==================== SCROLL TO TOP FUNCTIONALITY ====================*/
const scrollTopBtn = document.getElementById('scroll-top');
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 80;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active-link');
        } else {
            navLink?.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*==================== SMOOTH SCROLLING ====================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed header
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navMenu.classList.remove('show-menu');
            if (navToggle) {
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
});

/*==================== TYPING ANIMATION ====================*/
class TypeWriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.wait = parseInt(wait, 10);
        this.wordIndex = 0;
        this.txt = '';
        this.isDeleting = false;
        this.type();
    }

    type() {
        const currentWordIndex = this.wordIndex % this.words.length;
        const fullTxt = this.words[currentWordIndex];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 200;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

/*==================== INITIALIZE TYPING ANIMATION ====================*/
document.addEventListener('DOMContentLoaded', () => {
    const typeElement = document.querySelector('.hero__title');
    if (typeElement) {
        const words = ['SMTS - Android Developer', 'Mobile App Developer', 'Fintech Expert', 'Agri-tech Specialist'];
        new TypeWriter(typeElement, words, 2000);
    }
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(`
        .strength__item, 
        .passion__item, 
        .skills__category, 
        .project__card, 
        .experience__item, 
        .education__item,
        .achievement__item
    `);
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

/*==================== SKILLS ANIMATION ====================*/
function animateSkills() {
    const skillItems = document.querySelectorAll('.skill__item');
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }, index * 100);
    });
}

// Trigger skills animation when skills section is in view
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    skillsObserver.observe(skillsSection);
}

/*==================== FORM HANDLING ====================*/
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const message = formData.get('message').trim();
        
        // Validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        if (message.length < 10) {
            showNotification('Message should be at least 10 characters long', 'error');
            return;
        }
        
        // Simulate form submission
        const submitButton = this.querySelector('.contact__button');
        const originalText = submitButton.innerHTML;
        
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            showNotification('Thank you! Your message has been sent successfully. I\'ll get back to you soon.', 'success');
            this.reset();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            
            // Track form submission
            trackEvent('contact_form_submit', {
                name: name,
                email: email
            });
        }, 2000);
    });
}

/*==================== UTILITY FUNCTIONS ====================*/
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification__content">
            <i class="notification__icon ${getNotificationIcon(type)}"></i>
            <span class="notification__message">${message}</span>
        </div>
        <button class="notification__close" aria-label="Close notification">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        color: white;
        font-weight: 500;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        max-width: 400px;
        min-width: 300px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        transform: translateX(100%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        background: ${getNotificationColor(type)};
    `;
    
    // Style notification content
    const content = notification.querySelector('.notification__content');
    content.style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.75rem;
        flex: 1;
    `;
    
    // Style close button
    const closeButton = notification.querySelector('.notification__close');
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1rem;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.8;
        transition: opacity 0.2s ease;
        width: 24px;
        height: 24px;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        removeNotification(notification);
    }, 5000);
    
    // Add close button functionality
    closeButton.addEventListener('click', () => {
        removeNotification(notification);
    });
    
    // Close on hover over close button
    closeButton.addEventListener('mouseenter', () => {
        closeButton.style.opacity = '1';
        closeButton.style.background = 'rgba(255, 255, 255, 0.2)';
    });
    
    closeButton.addEventListener('mouseleave', () => {
        closeButton.style.opacity = '0.8';
        closeButton.style.background = 'none';
    });
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'fas fa-check-circle';
        case 'error': return 'fas fa-exclamation-circle';
        case 'warning': return 'fas fa-exclamation-triangle';
        default: return 'fas fa-info-circle';
    }
}

function getNotificationColor(type) {
    switch (type) {
        case 'success': return 'linear-gradient(135deg, #10b981, #059669)';
        case 'error': return 'linear-gradient(135deg, #ef4444, #dc2626)';
        case 'warning': return 'linear-gradient(135deg, #f59e0b, #d97706)';
        default: return 'linear-gradient(135deg, #3b82f6, #2563eb)';
    }
}

function removeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

/*==================== LAZY LOADING FOR IMAGES ====================*/
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.classList.add('lazy');
        imageObserver.observe(img);
    });
});

/*==================== PROJECT LINKS FUNCTIONALITY ====================*/
document.addEventListener('DOMContentLoaded', () => {
    const projectLinks = document.querySelectorAll('.project__link');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // If href is "#", prevent default and show coming soon message
            if (link.getAttribute('href') === '#') {
                e.preventDefault();
                showNotification('Project links will be available soon!', 'info');
            }
            
            // Track project link clicks
            const projectCard = link.closest('.project__card');
            const projectTitle = projectCard.querySelector('.project__title').textContent;
            const linkType = link.querySelector('i').classList.contains('fa-github') ? 'github' : 'playstore';
            
            trackEvent('project_link_click', {
                project: projectTitle,
                link_type: linkType
            });
        });
    });
});

/*==================== KEYBOARD NAVIGATION ====================*/
document.addEventListener('DOMContentLoaded', () => {
    // Add keyboard navigation for mobile menu
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach((link, index) => {
        link.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown' && index < navLinks.length - 1) {
                e.preventDefault();
                navLinks[index + 1].focus();
            } else if (e.key === 'ArrowUp' && index > 0) {
                e.preventDefault();
                navLinks[index - 1].focus();
            }
        });
    });
    
    // Add keyboard navigation for social links
    const socialLinks = document.querySelectorAll('.hero__social-link, .contact__social-link, .footer__social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                link.click();
            }
        });
    });
});

/*==================== PERFORMANCE OPTIMIZATIONS ====================*/
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events for better performance
window.removeEventListener('scroll', scrollHeader);
window.removeEventListener('scroll', scrollUp);
window.removeEventListener('scroll', scrollActive);

window.addEventListener('scroll', debounce(scrollHeader, 10));
window.addEventListener('scroll', debounce(scrollUp, 10));
window.addEventListener('scroll', debounce(scrollActive, 10));

/*==================== ANALYTICS TRACKING ====================*/
function trackEvent(eventName, eventData = {}) {
    // Placeholder for analytics tracking
    // You can integrate with Google Analytics, Mixpanel, etc.
    console.log('Event tracked:', eventName, eventData);
    
    // Example: Google Analytics 4
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventName, eventData);
    // }
    
    // Example: Facebook Pixel
    // if (typeof fbq !== 'undefined') {
    //     fbq('track', eventName, eventData);
    // }
}

/*==================== SECTION VIEW TRACKING ====================*/
document.addEventListener('DOMContentLoaded', () => {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                trackEvent('section_view', {
                    section: sectionId,
                    timestamp: new Date().toISOString()
                });
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => {
        if (section.id) {
            sectionObserver.observe(section);
        }
    });
});

/*==================== THEME PREFERENCE DETECTION ====================*/
document.addEventListener('DOMContentLoaded', () => {
    // Detect user's theme preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Listen for changes in theme preference
    prefersDarkScheme.addEventListener('change', (e) => {
        trackEvent('theme_preference_change', {
            prefers_dark: e.matches
        });
    });
    
    // Track initial theme preference
    trackEvent('theme_preference_detected', {
        prefers_dark: prefersDarkScheme.matches
    });
});

/*==================== INTERSECTION OBSERVER POLYFILL ====================*/
// For older browsers that don't support IntersectionObserver
if (!window.IntersectionObserver) {
    // Fallback: Use scroll event for animations
    window.addEventListener('scroll', debounce(() => {
        const elements = document.querySelectorAll('.strength__item, .passion__item, .skills__category, .project__card, .experience__item, .education__item, .achievement__item');
        
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                el.classList.add('animate');
            }
        });
    }, 100));
}

/*==================== ERROR HANDLING ====================*/
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    trackEvent('javascript_error', {
        message: e.message,
        filename: e.filename,
        lineno: e.lineno,
        colno: e.colno
    });
});

/*==================== PAGE LOAD TRACKING ====================*/
window.addEventListener('load', () => {
    trackEvent('page_loaded', {
        load_time: performance.now(),
        user_agent: navigator.userAgent,
        viewport_width: window.innerWidth,
        viewport_height: window.innerHeight
    });
});

/*==================== RESUME DOWNLOAD FUNCTIONALITY ====================*/
function downloadResume() {
    // Placeholder for resume download
    showNotification('Resume download will be available soon!', 'info');
    trackEvent('resume_download_attempt');
}

// Add resume download button if needed
document.addEventListener('DOMContentLoaded', () => {
    const heroButtons = document.querySelector('.hero__buttons');
    if (heroButtons) {
        // Uncomment to add resume download button
        // const resumeButton = document.createElement('a');
        // resumeButton.href = '#';
        // resumeButton.className = 'button button--outline';
        // resumeButton.innerHTML = '<i class="fas fa-download"></i> Download Resume';
        // resumeButton.addEventListener('click', (e) => {
        //     e.preventDefault();
        //     downloadResume();
        // });
        // heroButtons.appendChild(resumeButton);
    }
});

/*==================== CONTACT INFORMATION COPY ====================*/
document.addEventListener('DOMContentLoaded', () => {
    const emailElements = document.querySelectorAll('[href^="mailto:"]');
    
    emailElements.forEach(element => {
        element.addEventListener('click', (e) => {
            const email = element.getAttribute('href').replace('mailto:', '');
            
            // Try to copy email to clipboard
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    showNotification('Email address copied to clipboard!', 'success');
                }).catch(() => {
                    // Fallback: just show the email
                    showNotification(`Email: ${email}`, 'info');
                });
            }
            
            trackEvent('email_click', { email: email });
        });
    });
});

/*==================== PRINT STYLES HANDLING ====================*/
window.addEventListener('beforeprint', () => {
    trackEvent('page_print_attempt');
});

/*==================== FINAL INITIALIZATION ====================*/
document.addEventListener('DOMContentLoaded', () => {
    // Initialize page
    console.log('🚀 Sunny Kumar\'s Portfolio loaded successfully!');
    
    // Track page initialization
    trackEvent('portfolio_initialized', {
        timestamp: new Date().toISOString(),
        page_title: document.title
    });
    
    // Add loading complete class to body
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});
