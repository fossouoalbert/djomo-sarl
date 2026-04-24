
// =======================
// LOADER
// =======================
window.addEventListener('load', () => {
  const loader = document.getElementById('pageLoader');
  const progress = document.getElementById('loaderProgress');

  let loaded = 0;

  const interval = setInterval(() => {
    loaded += 10;
    progress.style.width = loaded + "%";

    if (loaded >= 100) {
      clearInterval(interval);
      loader.classList.add('loaded');
      setTimeout(() => loader.remove(), 400);
    }
  }, 100);
});


// =======================
// AOS ANIMATION
// =======================
AOS.init({
  once: true
});


// =======================
// GSAP HERO
// =======================
gsap.from(".hero h1", {
  y: 50,
  opacity: 0,
  duration: 1
});


// =======================
// COMPTEURS
// =======================
const counters = document.querySelectorAll("[data-target]");

const animateCounters = () => {
  counters.forEach(counter => {
    const target = +counter.dataset.target;
    let start = 0;

    const update = () => {
      start += target / 50;

      if (start < target) {
        counter.innerText = Math.floor(start);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };

    update();
  });
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll(".hero-stats").forEach(el => {
  observer.observe(el);
});


// =======================
// NAVBAR SCROLL EFFECT
// =======================
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.topbar');

  if (window.scrollY > 50) {
    nav.style.background = "#000";
  } else {
    nav.style.background = "rgba(0,0,0,0.8)";
  }
});


// =======================
// WHATSAPP FORM
// =======================
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const projet = document.getElementById("projet").value;

    const numero = "237676393943";

    const message = `
🏗️ DJOMO SARL - Nouvelle demande

👤 Nom : ${nom}
📧 Email : ${email}
📝 Projet : ${projet}

Merci de nous répondre rapidement.
`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  });
}