const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
         navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
        'shadow-sm');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
    }else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
        'shadow-sm');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
    }
});

// ----------- light mode and dark mode -----------

function toggleTheme() {
  const body = document.getElementById("pageBody");
  const moonIcon = document.getElementById("moonIcon");
  const sunIcon = document.getElementById("sunIcon");

  const isDark = body.classList.contains("darkTheme");

  if (isDark) {
    body.classList.remove("darkTheme");
    body.classList.add("lightTheme");
    moonIcon.classList.remove("hidden");
    sunIcon.classList.add("hidden");
    localStorage.theme = "light";
  } else {
    body.classList.remove("lightTheme");
    body.classList.add("darkTheme");
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");
    localStorage.theme = "dark";
  }
}

// Apply theme from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
  const body = document.getElementById("pageBody");
  const moonIcon = document.getElementById("moonIcon");
  const sunIcon = document.getElementById("sunIcon");

  const userTheme = localStorage.theme || "light";
  if (userTheme === "dark") {
    body.classList.remove("lightTheme");
    body.classList.add("darkTheme");
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");
  } else {
    body.classList.remove("darkTheme");
    body.classList.add("lightTheme");
    moonIcon.classList.remove("hidden");
    sunIcon.classList.add("hidden");
  }
});

