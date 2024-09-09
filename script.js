const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const themeBtn = document.getElementById('theme-btn');
const body = document.body;



// Toggle between light and dark themes
themeBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeBtn.textContent = '🌞';  // Sun icon for light mode
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeBtn.textContent = '🌙';  // Moon icon for dark mode
    }
});

// Function to toggle hamburger menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the hamburger menu when clicking outside (anywhere in the body) or on a nav link
document.addEventListener('click', (e) => {
    const target = e.target;

    if (!hamburger.contains(target) && !navLinks.contains(target)) {
        navLinks.classList.remove('active');
    }
});

// Close hamburger after clicking any navigation link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.querySelector('.skills-section');
    const options = {
      threshold: 0.2 // Trigger when 20% of the section is visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    observer.observe(skillsSection);
  });

  

  // Add scroll-based animation (fade-in effect on scroll)
const projectCards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

projectCards.forEach(card => {
    observer.observe(card);
});