// Show selected page
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Play sound if on pets page
    if (pageId === 'pets') {
        document.getElementById('petSound').play();
    }
}

// Easter egg functions
function showEasterEgg() {
    document.getElementById('easterEgg').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hideEasterEgg() {
    document.getElementById('easterEgg').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Random pet facts in console
console.log('%c🐾 Did you know? Dogs have been superhero sidekicks since the 1940s!', 'color: #00b4ff; font-size: 14px;');
console.log('%c🦸‍♂️ The most common superpower among pets is... UNCONDITIONAL LOVE!', 'color: #ff9800; font-size: 14px;');