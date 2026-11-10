import { site } from '../site.mjs';
import { esc, md, inline, img, abs } from '../lib/html.mjs';
import { layout, crumbs } from './layout.mjs';
import { leadForm, phoneLink } from './parts.mjs';
import { bySlug } from '../content/services/index.mjs';

const slugify = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const idOf = (b) => b.id || slugify(b.heading);

function blk(b) {
  const id = idOf(b);
  const h = `<h2 id="${id}">${esc(b.heading)}</h2>`;
  switch (b.kind) {
    case 'split':
      return `<section class="sb sb--split${b.flip ? ' sb--flip' : ''}" aria-labelledby="${id}"><div class="sb__txt rise">${h}${md(b.body)}</div><figure class="sb__fig rise d1">${img(b.image, { sizes: '(max-width: 900px) 92vw, 420px', widths: [420, 760], ratio: 4 / 5 })}</figure></section>`;
    case 'options':
      return `<section class="sb" aria-labelledby="${id}"><div class="rise">${h}${md(b.body || '')}</div><div class="opts">${b.items.map((o, i) => `<article class="rise d${i % 3}"><h3>${esc(o.name)}</h3><p>${inline(o.body)}</p></article>`).join('')}</div>${b.after ? `<div class="rise sb__after">${md(b.after)}</div>` : ''}</section>`;
    case 'uses':
      return `<section class="sb" aria-labelledby="${id}"><div class="rise">${h}${md(b.body || '')}</div><ul class="uses">${b.items.map((u, i) => `<li class="rise d${i % 3}"><b>${esc(u.name)}</b><span>${inline(u.body)}</span></li>`).join('')}</ul></section>`;
    case 'steps':
      return `<section class="sb" aria-labelledby="${id}"><div class="rise">${h}${md(b.body || '')}</div><ol class="trail">${b.items.map((s) => `<li class="rise"><h3>${esc(s.name)}</h3><p>${inline(s.body)}</p></li>`).join('')}</ol></section>`;
    case 'callout':
      return `<section class="sb sb--call rise" aria-labelledby="${id}">${h}${md(b.body)}</section>`;
    case 'local':
      return `<section class="sb sb--local" aria-labelledby="${id}"><div class="sb--local__bg" aria-hidden="true">${img(b.image || 'desert', { widths: [800, 1400], alt: '' })}</div><div class="sb--local__in rise">${h}${md(b.body)}</div></section>`;
    case 'table':
      return `<section class="sb" aria-labelledby="${id}"><div class="rise">${h}${md(b.body || '')}</div><div class="tbl rise"><table><thead><tr>${b.cols.map((c) => `<th scope="col">${esc(c)}</th>`).join('')}</tr></thead><tbody>${b.rows.map((r) => `<tr><th scope="row">${esc(r[0])}</th>${r.slice(1).map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>${b.after ? `<div class="rise sb__after">${md(b.after)}</div>` : ''}</section>`;
    default:
      return `<section class="sb rise" aria-labelledby="${id}">${h}${md(b.body)}</section>`;
  }
}

export function renderService(s) {
  const path = `/${s.slug}/`;
  const rel = (s.related || []).map((r) => bySlug[r]).filter(Boolean);
  const body = `
<div class="progress" aria-hidden="true"><i data-progress></i></div>
<section class="dune">
  <div class="wrap dune__grid">
    <div class="dune__txt">
      ${crumbs([{ name: 'Home', path: '/' }, { name: s.name, path }])}
      <h1>${esc(s.h1)}</h1>
      <p class="dune__lede">${inline(s.lede)}</p>
      <div class="dune__btns"><button class="btn btn--gold" type="button" data-quote>Get a free quote</button>${phoneLink('btn btn--line')}</div>
      <ul class="chips">${(s.chips || []).map((c) => `<li>${esc(c)}</li>`).join('')}</ul>
    </div>
    <div class="dune__fig"><span class="dune__sun" aria-hidden="true"></span>${img(s.image, { eager: true, sizes: '(max-width: 900px) 92vw, 500px', widths: [500, 800, 1100], ratio: 1 })}</div>
  </div>
</section>
<div class="wrap svc">
  <div class="svc__intro rise">${md(s.intro)}</div>
  <details class="guide rise"><summary>In this guide</summary><ol>${s.blocks.map((b) => `<li><a href="#${idOf(b)}">${esc(b.toc || b.heading)}</a></li>`).join('')}<li><a href="#faq">Common questions</a></li><li><a href="#quote">Request a quote</a></li></ol></details>
  ${s.blocks.map(blk).join('\n')}
</div>
<section class="sec sec--paper" id="faq" aria-labelledby="faq-h">
  <div class="wrap narrow">
    <div class="sh rise"><h2 id="faq-h">${esc(s.faqHeading)}</h2>${s.faqIntro ? `<p>${esc(s.faqIntro)}</p>` : ''}</div>
    <div class="faq">${s.faqs.map((f) => `<details class="rise"><summary>${esc(f.q)}</summary><div>${md(f.a)}</div></details>`).join('')}</div>
  </div>
</section>
${rel.length ? `<section class="sec" aria-labelledby="rel-h"><div class="wrap"><div class="sh rise"><h2 id="rel-h">Related services</h2></div>
<ul class="rel">${rel.map((r, i) => `<li class="card rise d${i}"><a href="/${r.slug}/"><span class="card__img">${img(r.image, { sizes: '(max-width: 700px) 92vw, 360px', widths: [360, 640], ratio: 4 / 3, alt: '' })}</span><h3>${esc(r.name)}</h3><p>${esc(r.tagline)}</p></a></li>`).join('')}</ul></div></section>` : ''}
<section class="sec final" id="quote" aria-labelledby="final-h">
  <div class="wrap final__grid">
    <div class="rise">
      <h2 id="final-h">${esc(s.cta.heading)}</h2>
      ${md(s.cta.body)}
      <p class="final__tel">Prefer to talk? ${phoneLink()}</p>
    </div>
    <div class="final__card rise d1">${leadForm({ id: `${s.slug}-form`, heading: 'Free quote request', withMessage: true, preset: s.formPreset })}</div>
  </div>
</section>`;
  const area = site.serviceAreas.map((a) => ({ '@type': 'Place', name: a.name.includes(',') ? a.name : `${a.name}, AZ` }));
  const schema = [
    { '@type': 'Service', '@id': abs(path) + '#service', name: s.name, serviceType: s.serviceType, description: s.description, provider: { '@id': abs('/#business') }, areaServed: area, url: abs(path) },
    { '@type': 'FAQPage', mainEntity: s.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '') } })) },
  ];
  return layout({ path, title: s.title, description: s.description, body, current: s.slug, image: s.image, schema, breadcrumbs: [{ name: 'Home', path: '/' }, { name: s.name, path }] });
}
