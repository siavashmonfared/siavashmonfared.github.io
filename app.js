(function () {
  // Theme toggle with localStorage
  const body = document.body;
  const btn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('sm-theme');
  if (saved === 'light' || saved === 'dark') body.dataset.theme = saved;
  function paint() { btn.textContent = body.dataset.theme === 'light' ? 'LIGHT' : 'DARK'; }
  paint();
  btn.addEventListener('click', () => {
    body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('sm-theme', body.dataset.theme);
    paint();
  });

  // Changelog
  const root = document.getElementById('changelog');
  const open = new Set(['natmat-2025']);
  function render() {
    root.innerHTML = '';
    for (const n of window.NEWS) {
      const el = document.createElement('div');
      el.className = 'entry';
      el.dataset.open = open.has(n.id) ? 'true' : 'false';
      el.innerHTML = `
        <div class="entry-date">${n.date}</div>
        <div class="entry-tag">${n.tag}</div>
        <div class="entry-head">${n.headline}</div>
        <div class="entry-toggle">+</div>
        <div class="entry-body"><div>
          <p>${n.body}</p>
          ${n.media ? `<div class="entry-media"><img src="${n.media}" alt="${n.headline}" loading="lazy" /></div>` : ''}
          ${n.ref ? `<div class="ref">${n.ref}</div>` : ''}
          ${n.link ? `<a href="${n.link}" target="_blank" rel="noreferrer">OPEN ↗</a>` : ''}
        </div></div>
      `;
      el.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') return;
        open.has(n.id) ? open.delete(n.id) : open.add(n.id);
        render();
      });
      root.appendChild(el);
    }
  }
  render();

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) {
      e.target.classList.add('reveal');
      io.unobserve(e.target);
    }
  }, { threshold: 0.1 });
  document.querySelectorAll('.section, .section-head, .research-row, .featured, .timeline, .footer').forEach(el => io.observe(el));
})();
