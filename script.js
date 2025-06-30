// Theme toggling with local storage and smooth transition
function toggleTheme() {
    const body = document.getElementById('pageBody');
    const moonIcon = document.getElementById('moonIcon');
    const sunIcon = document.getElementById('sunIcon');
    const isDark = body.classList.toggle('darkTheme');
    body.classList.toggle('lightTheme', !isDark);

    body.style.transition = 'background 0.6s cubic-bezier(.4,2,.2,1), color 0.4s';

    if (isDark) {
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
        localStorage.setItem('theme', 'darkTheme');
    } else {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        localStorage.setItem('theme', 'lightTheme');
    }
}

// Set theme on load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const body = document.getElementById('pageBody');
    if (savedTheme === 'darkTheme') {
        body.classList.add('darkTheme');
        body.classList.remove('lightTheme');
        document.getElementById('moonIcon').classList.add('hidden');
        document.getElementById('sunIcon').classList.remove('hidden');
    } else {
        body.classList.add('lightTheme');
        body.classList.remove('darkTheme');
        document.getElementById('sunIcon').classList.add('hidden');
        document.getElementById('moonIcon').classList.remove('hidden');
    }
});

// Mobile menu open/close
function openMenu() {
    document.getElementById('sideMenu').style.right = '0';
}
function closeMenu() {
    document.getElementById('sideMenu').style.right = '-18rem';
}

// Animate in header text on load for extra pop
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('.animate-fadeIn').forEach(el => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
            el.style.transition = 'all 1s cubic-bezier(.4,2,.2,1)';
        });
        document.querySelectorAll('.animate-fadeIn2').forEach(el => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
            el.style.transition = 'all 1.3s cubic-bezier(.4,2,.2,1)';
        });
    }, 150);
});

// Adds smooth scroll on all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.length > 1) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
