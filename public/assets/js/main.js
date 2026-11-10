/* Bullhead City Epoxy — interactions */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hover = matchMedia('(hover: hover)');

  /* Header shadow, launcher and reading progress */
  const hdr = $('[data-header]'), launch = $('[data-launch]'), bar = $('[data-progress]');
  const onScroll = () => {
    hdr?.classList.toggle('is-up', scrollY > 10);
    if (launch) launch.hidden = scrollY < 600 || !ticket.hidden;
    if (bar) { const h = document.documentElement.scrollHeight - innerHeight; bar.style.transform = `scaleX(${h > 0 ? Math.min(1, scrollY / h) : 0})`; }
  };

  /* Services menu */
  const nb = $('.nav__btn'), menu = $('#svc-menu');
  const setMenu = (o) => { if (!nb) return; nb.setAttribute('aria-expanded', String(o)); menu.classList.toggle('open', o); };
  if (nb) {
    const li = nb.parentElement; let t;
    nb.addEventListener('click', () => setMenu(nb.getAttribute('aria-expanded') !== 'true'));
    li.addEventListener('mouseenter', () => { if (hover.matches) { clearTimeout(t); setMenu(true); } });
    li.addEventListener('mouseleave', () => { if (hover.matches) t = setTimeout(() => setMenu(false), 200); });
    li.addEventListener('focusout', (e) => { if (!li.contains(e.relatedTarget)) setMenu(false); });
    document.addEventListener('click', (e) => { if (!li.contains(e.target)) setMenu(false); });
  }

  /* Mobile menu */
  const mb = $('[data-menu]'), mnav = $('#mnav');
  const setNav = (o) => { if (!mb) return; mnav.hidden = !o; mb.setAttribute('aria-expanded', String(o)); };
  mb?.addEventListener('click', () => setNav(mnav.hidden));

  /* Quote ticket */
  const ticket = $('#ticket'), hdrQuote = $('.hdr__act [data-quote]');
  let opener = null;
  function setTicket(o, from) {
    if (!ticket) return;
    if (o) { opener = from || document.activeElement; setNav(false); setMenu(false); }
    ticket.hidden = !o;
    hdrQuote?.setAttribute('aria-expanded', String(o));
    if (o) setTimeout(() => { const f = $('.stp:not([hidden]) select, .stp:not([hidden]) input', ticket) || $('input', ticket); f?.focus({ preventScroll: true }); }, 60);
    else opener?.focus?.({ preventScroll: true });
    onScroll();
  }
  $$('[data-quote]').forEach((b) => b.addEventListener('click', (e) => { e.stopPropagation(); setTicket(ticket.hidden || b.closest('#mnav') != null, b); }));
  $$('[data-quote-close]').forEach((b) => b.addEventListener('click', () => setTicket(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (ticket && !ticket.hidden) setTicket(false);
    setMenu(false);
    if (mnav && !mnav.hidden) { setNav(false); mb.focus(); }
  });
  onScroll(); addEventListener('scroll', onScroll, { passive: true });

  /* Services rail */
  const rail = $('[data-railbox]');
  $$('[data-rail]').forEach((b) => b.addEventListener('click', () => {
    const card = $('.card', rail); const step = card ? card.getBoundingClientRect().width + 19 : 320;
    rail.scrollBy({ left: +b.dataset.rail * step * (innerWidth > 1100 ? 2 : 1), behavior: calm ? 'auto' : 'smooth' });
  }));

  /* Reveal */
  const els = $$('.rise');
  if (calm || !('IntersectionObserver' in window)) els.forEach((e) => e.classList.add('shown'));
  else { const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('shown'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }); els.forEach((e) => io.observe(e)); }

  /* Parallax */
  const px = $$('[data-parallax]');
  if (px.length && !calm) { let q = false; const go = () => { const vh = innerHeight; px.forEach((el) => { const r = el.parentElement.getBoundingClientRect(); if (r.bottom < 0 || r.top > vh) return; el.style.transform = `translate3d(0,${(((r.top + r.height / 2 - vh / 2) / vh) * -70).toFixed(1)}px,0)`; }); q = false; }; addEventListener('scroll', () => { if (!q) { q = true; requestAnimationFrame(go); } }, { passive: true }); go(); }

  /* Counters */
  const tick = (el) => { const end = +el.dataset.count; if (calm) { el.textContent = end; return; } const t0 = performance.now(); const f = (t) => { const p = Math.min(1, (t - t0) / 1300); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); }; el.textContent = '0'; requestAnimationFrame(f); };
  if ('IntersectionObserver' in window) { const co = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { tick(en.target); co.unobserve(en.target); } }), { threshold: 0.6 }); $$('[data-count]').forEach((c) => co.observe(c)); }

  /* Forms */
  const rules = {
    name: (v) => (v.trim().length >= 2 ? '' : 'Please enter your name.'),
    phone: (v) => (v.replace(/\D/g, '').length >= 10 ? '' : 'Please enter a 10-digit phone number.'),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Please enter a valid email address.'),
    project: (v) => (v ? '' : 'Please choose a project type.'),
  };
  const check = (el) => {
    const r = rules[el.name]; if (!r) return true;
    const m = r(el.value), box = el.closest('.fld'), err = $('.fld__err', box);
    box.classList.toggle('err', !!m); el.setAttribute('aria-invalid', m ? 'true' : 'false');
    if (err) { err.id ||= el.id + '-err'; el.setAttribute('aria-describedby', err.id); err.textContent = m; }
    return !m;
  };
  const showStep = (form, n) => { $$('.stp', form).forEach((s) => (s.hidden = s.dataset.step !== String(n))); $(`.stp[data-step="${n}"] select, .stp[data-step="${n}"] input`, form)?.focus(); };

  $$('[data-lead-form]').forEach((form) => {
    const ph = form.elements.phone;
    ph?.addEventListener('input', () => { const d = ph.value.replace(/\D/g, '').replace(/^1/, '').slice(0, 10); ph.value = d.length > 6 ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}` : d.length > 3 ? `(${d.slice(0, 3)}) ${d.slice(3)}` : d; });
    $$('input, select', form).forEach((el) => { el.addEventListener('blur', () => el.value && check(el)); el.addEventListener('input', () => el.closest('.fld')?.classList.contains('err') && check(el)); el.addEventListener('change', () => el.closest('.fld')?.classList.contains('err') && check(el)); });

    $('[data-next]', form)?.addEventListener('click', () => {
      const fs = $$('.stp[data-step="1"] [name]', form).filter((el) => rules[el.name]);
      if (!fs.map(check).every(Boolean)) { fs.find((f) => f.getAttribute('aria-invalid') === 'true')?.focus(); return; }
      showStep(form, 2);
    });
    $('[data-back]', form)?.addEventListener('click', () => showStep(form, 1));

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const msg = $('.lf__msg', form), fs = $$('[name]', form).filter((el) => rules[el.name]);
      if (!fs.map(check).every(Boolean)) {
        const bad = fs.find((f) => f.getAttribute('aria-invalid') === 'true');
        const st = bad?.closest('.stp'); if (st?.hidden) showStep(form, st.dataset.step);
        bad?.focus(); return;
      }
      const btn = $('.lf__go', form), lbl = $('span', btn), txt = lbl.textContent;
      btn.disabled = true; lbl.textContent = 'Sending…'; msg.className = 'lf__msg'; msg.textContent = '';
      const data = Object.fromEntries(new FormData(form)); data.page = location.pathname;
      try {
        const res = await fetch(form.action, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
        const out = await res.json().catch(() => ({}));
        if (!res.ok || !out.ok) throw new Error();
        form.classList.add('sent'); msg.classList.add('ok');
        msg.textContent = `Thanks, ${data.name.trim().split(' ')[0]}. We have your request and will be in touch soon to set up a visit.`;
        msg.tabIndex = -1; msg.focus({ preventScroll: true });
      } catch {
        msg.classList.add('no');
        const t = $('.hdr__tel');
        msg.innerHTML = `Your request did not go through. Please try again or call <a href="${t?.getAttribute('href') || '#'}">${t?.textContent.trim() || 'us'}</a>.`;
      } finally { btn.disabled = false; lbl.textContent = txt; }
    });
  });

  $$('[data-year]').forEach((y) => (y.textContent = new Date().getFullYear()));
})();
