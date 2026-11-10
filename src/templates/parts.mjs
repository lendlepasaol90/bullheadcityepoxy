import { site } from '../site.mjs';
import { esc } from '../lib/html.mjs';
import { services } from '../content/services/index.mjs';

export const phoneLink = (cls = '') => `<a${cls ? ` class="${cls}"` : ''} href="${site.phoneHref}">${esc(site.phone)}</a>`;

const field = (f, name, label, input) => `<p class="fld"><label for="${f(name)}">${label}</label>${input}<span class="fld__err" aria-live="polite"></span></p>`;

/* Lead form. `steps: true` splits it into two short screens (used by the header ticket). */
export function leadForm({ id, heading, intro, button = 'Send my request', withMessage = false, preset = '', steps = false, tone = '' }) {
  const f = (n) => `${id}-${n}`;
  const opts = site.projectTypes.map((t) => `<option${t === preset ? ' selected' : ''}>${esc(t)}</option>`).join('');
  const name = field(f, 'name', 'Name', `<input id="${f('name')}" name="name" type="text" autocomplete="name" required maxlength="80">`);
  const project = field(f, 'project', 'What are we coating?', `<select id="${f('project')}" name="project" required><option value="">Choose a project</option>${opts}</select>`);
  const phone = field(f, 'phone', 'Phone', `<input id="${f('phone')}" name="phone" type="tel" autocomplete="tel" inputmode="tel" required>`);
  const email = field(f, 'email', 'Email', `<input id="${f('email')}" name="email" type="email" autocomplete="email" required maxlength="120">`);
  const msg = withMessage ? `<p class="fld fld--wide"><label for="${f('message')}">Anything else? <span class="fld__opt">Optional</span></label><textarea id="${f('message')}" name="message" rows="3" maxlength="2000" placeholder="Garage size, boat or RV bay, timing"></textarea></p>` : '';
  const hp = `<span class="hp" aria-hidden="true"><label for="${f('company')}">Company</label><input id="${f('company')}" name="company" type="text" tabindex="-1" autocomplete="off"></span>`;
  const note = `<p class="lf__note">We only use these details to reply about your floor. <a href="/privacy-policy/">Privacy policy</a></p><div class="lf__msg" role="status" aria-live="polite"></div>`;
  const go = `<button class="btn btn--brown lf__go" type="submit"><span>${esc(button)}</span></button>`;
  const head = `${heading ? `<p class="lf__title">${esc(heading)}</p>` : ''}${intro ? `<p class="lf__intro">${esc(intro)}</p>` : ''}`;
  if (steps) {
    return `<form class="lf lf--steps" id="${id}" action="/api/lead" method="post" novalidate data-lead-form data-steps>
  ${head}
  <div class="stp" data-step="1"><p class="stp__n">Step 1 of 2</p>${project}${name}<button class="btn btn--brown btn--block" type="button" data-next>Next: contact details</button></div>
  <div class="stp" data-step="2" hidden><p class="stp__n">Step 2 of 2</p>${phone}${email}${hp}${go}<button class="stp__back" type="button" data-back>Back</button></div>
  ${note}
</form>`;
  }
  return `<form class="lf${tone ? ` lf--${tone}` : ''}" id="${id}" action="/api/lead" method="post" novalidate data-lead-form>
  ${head}
  <div class="lf__grid">${name}${phone}${email}${project}${msg}${hp}</div>
  ${go}
  ${note}
</form>`;
}

const logo = (cls = '') => `<a class="mark${cls}" href="/" aria-label="${esc(site.name)} home">
      <!-- Logo placeholder: replace this span pair with the final logo image. -->
      <span class="mark__ph" aria-hidden="true"></span><span class="mark__txt">Bullhead City <b>Epoxy</b></span>
    </a>`;

export function header(current = '') {
  const link = (href, label, key) => `<li><a href="${href}"${current === key ? ' aria-current="page"' : ''}>${label}</a></li>`;
  const svcCurrent = services.some((s) => s.slug === current);
  return `<a class="skip" href="#main">Skip to content</a>
<div class="sunbar"><div class="wrap sunbar__in"><p>Floor coatings for Bullhead City, Fort Mohave and Mohave Valley</p><a href="${site.phoneHref}">Call ${esc(site.phone)}</a></div></div>
<header class="hdr" data-header>
  <div class="wrap hdr__in">
    ${logo()}
    <nav class="nav" aria-label="Main">
      <ul>
        ${link('/', 'Home', 'home')}
        <li class="nav__svc"><button type="button" class="nav__btn${svcCurrent ? ' is-cur' : ''}" aria-expanded="false" aria-controls="svc-menu">Services<svg viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5l5 5 5-5"/></svg></button>
          <div class="menu" id="svc-menu">
            <ul>${services.map((s) => `<li><a href="/${s.slug}/"${current === s.slug ? ' aria-current="page"' : ''}><b>${esc(s.name)}</b><span>${esc(s.tagline)}</span></a></li>`).join('')}</ul>
          </div>
        </li>
        ${link('/about-us/', 'About us', 'about')}
        ${link('/service-areas/', 'Service areas', 'areas')}
        ${link('/contact-us/', 'Contact', 'contact')}
      </ul>
    </nav>
    <div class="hdr__act">
      <a class="hdr__tel" href="${site.phoneHref}">${esc(site.phone)}</a>
      <button class="btn btn--gold btn--sm" type="button" data-quote aria-controls="ticket" aria-expanded="false">Free quote</button>
      <button class="menu-btn" type="button" data-menu aria-expanded="false" aria-controls="mnav"><span class="visually-hidden">Menu</span><i></i></button>
    </div>
  </div>
  <div class="mnav" id="mnav" hidden>
    <div class="wrap">
      <ul class="mnav__pg">
        <li><a href="/">Home</a></li>
        <li><details${svcCurrent ? ' open' : ''}><summary>Services</summary><ul>${services.map((s) => `<li><a href="/${s.slug}/">${esc(s.name)}</a></li>`).join('')}</ul></details></li>
        <li><a href="/about-us/">About us</a></li>
        <li><a href="/service-areas/">Service areas</a></li>
        <li><a href="/contact-us/">Contact</a></li>
      </ul>
      <div class="mnav__ctas"><a class="btn btn--brown btn--block" href="${site.phoneHref}">Call ${esc(site.phone)}</a><button class="btn btn--gold btn--block" type="button" data-quote>Free quote</button></div>
    </div>
  </div>
</header>
<aside class="ticket" id="ticket" role="dialog" aria-modal="false" aria-labelledby="ticket-h" hidden>
  <div class="ticket__top">
    <p class="ticket__h" id="ticket-h">Get a free quote</p>
    <button class="ticket__x" type="button" data-quote-close aria-label="Close quote form"><svg viewBox="0 0 14 14" aria-hidden="true"><path d="M2 2l10 10M12 2L2 12"/></svg></button>
  </div>
  <p class="ticket__sub">Two quick steps. We will reply to set up a time to look at your floor.</p>
  ${leadForm({ id: 'ticket-form', steps: true, button: 'Send request' })}
</aside>
<button class="launch" type="button" data-quote data-launch aria-controls="ticket" hidden>Free quote</button>`;
}

export function footer() {
  const m = site.map;
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(m.query)}&ll=${m.lat},${m.lng}&z=${m.zoom}&output=embed`;
  return `<footer class="ft">
  <div class="wrap ft__grid">
    <div class="ft__brand">
      ${logo(' mark--ft')}
      <p>Garage, home, patio, commercial and shop floor coatings for the Colorado River communities of Mohave County.</p>
      <a class="ft__tel" href="${site.phoneHref}">${esc(site.phone)}</a>
    </div>
    <nav aria-label="Footer services"><p class="ft__h">Services</p><ul>${services.map((s) => `<li><a href="/${s.slug}/">${esc(s.name)}</a></li>`).join('')}</ul></nav>
    <nav aria-label="Footer pages"><p class="ft__h">Company</p><ul><li><a href="/about-us/">About us</a></li><li><a href="/service-areas/">Service areas</a></li><li><a href="/contact-us/">Contact</a></li><li><a href="/privacy-policy/">Privacy policy</a></li><li><a href="/sitemap.xml">Sitemap</a></li></ul></nav>
    <div class="ft__map"><p class="ft__h">Bullhead City, Arizona</p><div class="ft__frame"><iframe title="Map of Bullhead City, Arizona" src="${src}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div><p class="ft__mapnote">Map shows the area we serve. Estimates are carried out at your property.</p></div>
  </div>
  <div class="wrap ft__base"><p>© <span data-year>2026</span> ${esc(site.name)}</p><p>Serving Bullhead City and the Colorado River communities</p></div>
</footer>`;
}
