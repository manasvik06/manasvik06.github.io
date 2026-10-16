document.getElementById("year").textContent = new Date().getFullYear();

// Fade sections in as they scroll into view
const revealer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        revealer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => revealer.observe(el));

// Nav: border once scrolled, highlight the section in view
const nav = document.querySelector(".nav");
const links = [...document.querySelectorAll(".nav nav a")];
const sections = links.map((a) => document.querySelector(a.getAttribute("href")));

function onScroll() {
  nav.classList.toggle("scrolled", window.scrollY > 8);
  const y = window.scrollY + window.innerHeight * 0.35;
  let current = null;
  sections.forEach((s, i) => { if (s && s.offsetTop <= y) current = links[i]; });
  links.forEach((a) => a.classList.toggle("active", a === current));
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
