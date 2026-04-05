/**
 * Presentation Controller — De Brug tussen Kunst en Werkvloer
 */
(function () {
  'use strict';

  const totalSlides = 10;
  let current = 0;

  // DOM refs
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const counter = document.getElementById('slide-counter');
  const progressBar = document.getElementById('progress-bar');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');

  function goTo(index) {
    if (index < 0 || index >= totalSlides || index === current) return;

    // Remove active from current slide
    slides[current].classList.remove('active');
    slides[current].classList.add('exit');

    // After short delay remove exit class
    setTimeout(() => slides[current === index ? current : current].classList.remove('exit'), 450);

    const prev = current;
    current = index;

    // Activate new slide
    slides[current].classList.add('active');

    // Clean up exit on previous after transition
    setTimeout(() => slides[prev].classList.remove('exit'), 450);

    updateUI();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function updateUI() {
    // Counter
    counter.textContent = `Slide ${current + 1} / ${totalSlides}`;

    // Progress
    progressBar.style.width = `${((current + 1) / totalSlides) * 100}%`;

    // Dots
    dots.forEach((d, i) => d.classList.toggle('active', i === current));

    // Buttons
    btnPrev.disabled = current === 0;
    btnNext.disabled = current === totalSlides - 1;
  }

  // Events
  btnPrev.addEventListener('click', prev);
  btnNext.addEventListener('click', next);

  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
  });

  // "Terug naar begin" button on last slide
  const restartBtn = document.getElementById('btn-restart');
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      slides[current].classList.remove('active');
      current = 0;
      slides[current].classList.add('active');
      updateUI();
    });
  }

  // Initial state
  slides[0].classList.add('active');
  updateUI();
})();
