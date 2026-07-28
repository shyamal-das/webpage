// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navInner = document.querySelector('.nav-inner');

if (toggle && navInner) {
  toggle.addEventListener('click', () => {
    const open = navInner.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Graceful fallback for the profile photo before it's added to /Image
const photo = document.querySelector('.intro-photo');
const photoWrap = document.querySelector('.intro-photo-wrap');
if (photo && photoWrap) {
  photo.addEventListener('error', () => {
    photoWrap.classList.add('no-image');
  });
}
