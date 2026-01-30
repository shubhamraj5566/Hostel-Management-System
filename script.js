// Contact form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! We’ve received your message and will reply soon.");
  e.target.reset();
});
// Navigation Bar
let lastScrollTop = 0;
    const navbar = document.querySelector("header");

    window.addEventListener("scroll", function() {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        // Scrolling down → hide navbar
        navbar.style.top = "-90px";
      } else {
        // Scrolling up → show navbar
        navbar.style.top = "0";
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

// Hamburger Icon
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("hum");

// Toggle menu
hamburger.onclick = () => {
  nav.classList.toggle("show");
};

// Close menu on link click
nav.querySelectorAll("a").forEach(link => {
  link.onclick = () => {
    nav.classList.remove("show");
  };
});

// Close menu when clicking outside
document.onclick = (e) => {
  if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove("show");
  }
};

