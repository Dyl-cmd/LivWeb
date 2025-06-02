// Navigation functionality
function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionName).classList.add('active');

    // Add active class to the clicked nav link
    event.target.classList.add('active');

    // Close mobile menu if open
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('active');
}

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Initialize particles when page loads
window.addEventListener('load', createParticles);

// Live Timer functionality
function updateTimer() {
    const startDate = new Date('February 3, 2023 00:00:00');
    const now = new Date();
    const difference = now - startDate;

    // Calculate time units
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the timer display
    const timerElement = document.getElementById('live-timer');
    if (timerElement) {
        timerElement.innerHTML = `
            <div class="timer-section">
                <span class="timer-number">${days}</span>
                <span class="timer-label">Days</span>
            </div>
            <div class="timer-section">
                <span class="timer-number">${hours.toString().padStart(2, '0')}</span>
                <span class="timer-label">Hours</span>
            </div>
            <div class="timer-section">
                <span class="timer-number">${minutes.toString().padStart(2, '0')}</span>
                <span class="timer-label">Minutes</span>
            </div>
            <div class="timer-section">
                <span class="timer-number">${seconds.toString().padStart(2, '0')}</span>
                <span class="timer-label">Seconds</span>
            </div>
        `;
    }
}

// Start the timer and update every second
setInterval(updateTimer, 1000);

// Image change functionality for polaroids
function changeImage(button) {
    // Create a file input element
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.className = 'file-input';
    
    fileInput.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                // Find the image element in the same polaroid
                const polaroid = button.closest('.polaroid');
                const img = polaroid.querySelector('.polaroid-image img');
                img.src = event.target.result;
                
                // Add a subtle animation
                img.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    img.style.transform = 'scale(1)';
                }, 100);
            };
            reader.readAsDataURL(file);
        }
    };
    
    // Trigger file selection
    fileInput.click();
}

// Add some sample image URLs for demonstration
const sampleImages = [
    'https://via.placeholder.com/300x200/ff6b6b/ffffff?text=New+Memory',
    'https://via.placeholder.com/300x200/4ecdc4/ffffff?text=Special+Moment',
    'https://via.placeholder.com/300x200/45b7d1/ffffff?text=Happy+Times',
    'https://via.placeholder.com/300x200/f9ca24/ffffff?text=Golden+Hour',
    'https://via.placeholder.com/300x200/6c5ce7/ffffff?text=Perfect+Day',
    'https://via.placeholder.com/300x200/fd79a8/ffffff?text=Sweet+Memories'
];

// Function to randomly change image (for demo purposes)
// function randomizeImage(polaroidElement) {
//     const img = polaroidElement.querySelector('.polaroid-image img');
//     const randomImage = sampleImages[Math.floor(Math.random() * sampleImages.length)];
//     img.src = randomImage;
// }

// Add double-click functionality to polaroids for quick image change
// document.addEventListener('DOMContentLoaded', () => {
//     // Add stagger animation to cards
//     const cards = document.querySelectorAll('.card');
//     cards.forEach((card, index) => {
//         card.style.animationDelay = `${index * 0.1}s`;
//     });
    
//     // Add double-click listener to polaroids
//     const polaroids = document.querySelectorAll('.polaroid');
//     polaroids.forEach(polaroid => {
//         polaroid.addEventListener('dblclick', () => {
//             randomizeImage(polaroid);
//         });
//     });
    
//     // Initialize the timer immediately
//     updateTimer();
// });