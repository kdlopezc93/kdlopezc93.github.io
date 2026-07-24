/**
 * Cycles between the quote elements inside the floating Turing-quotes widget
 * on the Reflections page. Text content itself is kept in sync with the
 * selected language by i18n.js (via data-i18n) — this only toggles visibility.
 */
(function () {
  "use strict";

  const quotes = document.querySelectorAll(".turing-float-quote");
  if (quotes.length < 2) return;

  let current = 0;
  setInterval(function () {
    quotes[current].classList.remove("is-visible");
    current = (current + 1) % quotes.length;
    quotes[current].classList.add("is-visible");
  }, 8000);
})();
