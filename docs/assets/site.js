/* Brain MRI Tumor Detection — project site
   Three small behaviours, no dependencies:
   1. scroll-spy on the sidebar nav
   2. mobile nav toggle
   3. charts animate in once, when they first scroll into view          */

(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- 1. scroll-spy ------------------------------------------------ */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="#"]'));
  var sections = links
    .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
    .filter(Boolean);

  function markCurrent(id) {
    links.forEach(function (a) {
      if (a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }

  if (sections.length && 'IntersectionObserver' in window) {
    var visible = new Map();
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) visible.set(e.target.id, e.intersectionRatio);
        else visible.delete(e.target.id);
      });
      // at the very top nothing has scrolled past the band yet — show section 1
      if (window.scrollY < 80) { markCurrent(sections[0].id); return; }
      if (!visible.size) return;
      // the topmost section still inside the band wins
      var best = null;
      sections.forEach(function (s) {
        if (!visible.has(s.id)) return;
        if (best === null) best = s.id;
      });
      if (best) markCurrent(best);
    }, { rootMargin: '-15% 0px -70% 0px', threshold: [0, 0.25, 0.5] });

    sections.forEach(function (s) { spy.observe(s); });
    if (window.scrollY < 80) markCurrent(sections[0].id);
  }

  /* ---- 2. mobile nav ------------------------------------------------ */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
      }
    });
  }

  /* ---- 3. charts animate on first view ------------------------------ */
  var charts = Array.prototype.slice.call(document.querySelectorAll('.chart'));

  // Without this class the charts render fully drawn — so no-JS and
  // reduced-motion visitors never see a blank plot.
  if (reduced || !('IntersectionObserver' in window)) return;
  document.body.classList.add('js-anim');

  var reveal = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('chart-in');
      obs.unobserve(e.target);
    });
  }, { threshold: 0.25 });

  charts.forEach(function (c) { reveal.observe(c); });
})();
