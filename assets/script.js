// Vakantiewoning Sankt Lambrecht — gedeeld script (mobiel menu, lightbox, kaart)

document.addEventListener('DOMContentLoaded', function () {

  // Mobiel menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('nav.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') nav.classList.remove('open');
    });
  }

  // Lightbox
  var lightbox = document.getElementById('lightbox');
  var lbImg = lightbox ? lightbox.querySelector('img') : null;
  var lbCaption = lightbox ? lightbox.querySelector('.bijschrift') : null;
  var lbSluit = lightbox ? lightbox.querySelector('.sluit') : null;
  var lbTrigger = null; // element dat de lightbox opende, voor focusherstel

  function openLightbox(src, caption, trigger) {
    if (!lightbox) return;
    lbTrigger = trigger || null;
    lbImg.src = src;
    lbImg.alt = caption || '';
    if (lbCaption) lbCaption.textContent = caption || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (lbSluit) lbSluit.focus();
  }
  function closeLightbox() {
    if (!lightbox || !lightbox.classList.contains('open')) return;
    lightbox.classList.remove('open');
    lbImg.src = '';
    document.body.style.overflow = '';
    if (lbTrigger) { lbTrigger.focus(); lbTrigger = null; }
  }

  document.querySelectorAll('.galerij button.foto').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var img = btn.querySelector('img');
      openLightbox(img.getAttribute('src'), img.getAttribute('alt'), btn);
    });
  });

  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('sluit')) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') { closeLightbox(); return; }
      // eenvoudige focus-trap binnen de open lightbox
      if (e.key === 'Tab') {
        e.preventDefault();
        if (lbSluit) lbSluit.focus();
      }
    });
  }

  // Hero-diavoorstelling: langzaam wisselende buitenaanzichten rond het huis
  var slides = document.querySelectorAll('.hero-slides .hero-img');
  var beweging = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (slides.length > 1 && !beweging.matches) {
    var actief = 0;
    setInterval(function () {
      slides[actief].classList.remove('actief', 'terug');
      actief = (actief + 1) % slides.length;
      slides[actief].classList.add('actief');
      // wissel de bewegingsrichting per foto, alsof je verder om het huis vliegt
      if (actief % 2 === 1) slides[actief].classList.add('terug');
    }, 7000);
  }

  // Kaart: pas laden na klik (privacyvriendelijk, geen extern verzoek bij paginabezoek)
  var kaartKnop = document.getElementById('laad-kaart');
  if (kaartKnop) {
    kaartKnop.addEventListener('click', function () {
      var wrap = document.querySelector('.kaart-wrap');
      var bbox = '14.2982%2C47.0644%2C14.3282%2C47.0844';
      var marker = '47.074375%2C14.313222';
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.openstreetmap.org/export/embed.html?bbox=' + bbox + '&layer=mapnik&marker=' + marker;
      iframe.title = 'OpenStreetMap – Sankt Lambrecht';
      iframe.loading = 'lazy';
      wrap.innerHTML = '';
      wrap.appendChild(iframe);
    });
  }
});
