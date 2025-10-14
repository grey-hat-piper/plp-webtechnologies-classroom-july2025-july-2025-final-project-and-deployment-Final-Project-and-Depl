// Mobile menu toggle
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  if (navLinks.classList.contains("active")) {
    navLinks.style.display = "flex";
    navLinks.style.background = "#119955";
  } else {
    navLinks.style.display = "none";
  }
});

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});

// Scroll animations
const animatedElements = document.querySelectorAll(".fade-in, .slide-left, .slide-right");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach(el => observer.observe(el));

// Testimonials Carousel
const track = document.getElementById("testimonial-track");
const testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showTestimonial() {
  index = (index + 1) % testimonials.length;
  track.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showTestimonial, 4000); // every 4s

// Navbar hide on scroll
  let lastScrollTop = 0;
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down → fade out
      navbar.style.opacity = "0";
      navbar.style.pointerEvents = "none"; // prevents invisible nav clicks
    } else {
      // Scrolling up → fade back in
      navbar.style.opacity = "1";
      navbar.style.pointerEvents = "auto";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // avoid negative values
  });
