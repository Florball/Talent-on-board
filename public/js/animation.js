// Scroll Reveal
window.sr = ScrollReveal();

// Animación a logo, call to action, button
sr.reveal('.logo, .section-home__txt, .section-home__btn', {
  distance: '200px',
  duration: 1300,
  origin: 'left'
});
// Animación a section-home
sr.reveal('.section-home__isotipo, .section-home__title, .section-home__subtitle', {
  distance: '200px',
  duration: 1000,
  origin: 'right'
});
