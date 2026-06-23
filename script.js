
// CUSTOM CURSOR
const dot  = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
(function animateCursor() {
  dot.style.left  = mx + 'px';
  dot.style.top   = my + 'px';
  rx += (mx - rx) * 0.14;
  ry += (my - ry) * 0.14;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateCursor);
})();

// STICKY NAV
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});


// HAMBURGE MENU
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
function closeMenu() {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
}

// SCROLL REVEAL
const reveals  = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));


// SKILL BAR (ANIMATED ON SCROLL)
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar-fill').forEach(f => {
        f.style.transform = `scaleX(${f.style.getPropertyValue('--w')})`;
      });
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.skill-bars').forEach(el => barObserver.observe(el));

// COUNT NUMBERS
const countObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el   = e.target;
    const end  = parseInt(el.dataset.count);
    let cur    = 0;
    const step = Math.ceil(end / 40);
    const timer = setInterval(() => {
      cur = Math.min(cur + step, end);
      el.textContent = cur + (end >= 10 ? '+' : '');
      if (cur >= end) clearInterval(timer);
    }, 35);
    countObserver.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => countObserver.observe(el));


// CONTACT FORM
function submitForm() {
  const name  = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  const msg   = document.getElementById('fmessage').value.trim();
  if (!name || !email || !msg) {
    alert('Please fill in your name, email, and message.');
    return;
  }
  document.getElementById('formSuccess').style.display = 'block';
  document.getElementById('contactForm').querySelector('button').style.display = 'none';
}

