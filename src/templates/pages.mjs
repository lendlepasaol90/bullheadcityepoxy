import { site } from '../site.mjs';
import { esc, md, img } from '../lib/html.mjs';
import { layout, crumbs } from './layout.mjs';
import { leadForm, phoneLink } from './parts.mjs';
import { services } from '../content/services/index.mjs';

const top = ({ title, lede, image, trail }) => `<section class="dune dune--pg"><div class="wrap dune__grid"><div class="dune__txt">${crumbs(trail)}<h1>${esc(title)}</h1><p class="dune__lede">${lede}</p></div><div class="dune__fig"><span class="dune__sun" aria-hidden="true"></span>${img(image, { eager: true, sizes: '(max-width: 900px) 92vw, 440px', widths: [440, 800], ratio: 1, alt: '' })}</div></div></section>`;
const quick = (id) => `<aside class="pg__side">${leadForm({ id, heading: 'Free quote', intro: 'Send your details and we will be in touch.', button: 'Send request' })}</aside>`;

export function renderAbout() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'About us', path: '/about-us/' }];
  const body = `${top({ title: 'About Bullhead City Epoxy', lede: 'A floor coating company for the river communities, built around careful prep and a schedule that respects the heat.', image: 'riverRock', trail })}
<div class="wrap pg"><div class="pg__main rise">
${md(`We put down coatings on garages, homes, patios, businesses and industrial floors from Bullhead City south to Mohave Valley and up the hill toward Kingman. The work sounds simple, and the products are well known, but the results vary enormously depending on two things: how well the concrete is prepared and when the material goes down.

Those two things are where we spend our attention. Every floor is diamond ground. Cracks and joints are repaired before anything is spread. And in the hot months, our crews are mixing at first light, not at two in the afternoon.

## How we work

- **We look before we quote.** A visit lets us find old sealers, test for moisture and see how the space is really used.
- **We explain the options.** Epoxy, polyaspartic and polyurea all have a place. We tell you which one fits and why.
- **We put it in writing.** Prep, repairs and the coating system appear as separate lines.
- **We protect your property.** Walls, doors and nearby finishes are masked, and dust is extracted at the grinder.
- **We tell you when to use the floor.** Clear guidance on foot traffic, vehicles and furniture, adjusted for temperature.

## Who we work for

Full-time residents and winter visitors, landlords getting a rental ready, business owners along the Parkway and Highway 95, and managers of shops, warehouses and storage buildings. A lot of what we do involves boats, RVs and recreational gear, because that is how people live here.

## Working across a wide area

Our service area stretches along the river and up into the high desert, and conditions differ between the two. Kingman and Golden Valley sit far higher than the river and see cold winter mornings, while Bullhead City and Fort Mohave stay mild. We plan each job for its own conditions.

## Talk to us

The easiest way to start is the quote form or a phone call. We will arrange a visit, look at the concrete and send a written quote. There is no obligation and no pressure to decide on the spot.`)}
<p class="pg__btns"><a class="btn btn--brown" href="/contact-us/">Contact us</a><a class="btn btn--line" href="/service-areas/">Service areas</a></p>
</div>${quick('about-form')}</div>`;
  return layout({ path: '/about-us/', title: 'About Us | Bullhead City Epoxy', description: 'About Bullhead City Epoxy: diamond-ground prep, honest written quotes and coating schedules planned around river-valley heat in Mohave County.', body, current: 'about', image: 'riverRock', breadcrumbs: trail });
}

const towns = {
  'Bullhead City': 'All of the city, from riverfront homes and the Riviera area to neighborhoods along the Parkway and the newer streets climbing toward the foothills. Garages, interiors, patios and commercial floors.',
  'Fort Mohave': 'Subdivisions and golf community homes south along Highway 95, many with oversized garages and RV bays. Also shops and businesses on the highway.',
  'Mohave Valley': 'Larger rural lots with detached shops, barns and river properties further south.',
  'Golden Shores': 'River homes and boat garages near Topock, scheduled by arrangement.',
  'Golden Valley': 'Homes on acreage and big detached workshops west of Kingman, where winter mornings run much colder than on the river.',
  Kingman: 'Homes, businesses and industrial buildings up the hill. Higher elevation means a different working season, which we plan for.',
  'Oatman Road area': 'Rural properties and outbuildings toward the Black Mountains, by arrangement.',
  'Needles, CA': 'Commercial enquiries across the state line, by arrangement and subject to the requirements for work in California.',
};

export function renderAreas() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'Service areas', path: '/service-areas/' }];
  const body = `${top({ title: 'Our service area', lede: 'The Colorado River communities of Mohave County, plus Golden Valley and Kingman in the high desert.', image: 'desertBlue', trail })}
<div class="wrap">
  <div class="prose rise">${md(`Coating work is very sensitive to timing, especially in summer, when the best hours are early in the morning. Keeping our work concentrated along the river corridor lets us arrive while the slab is still cool. Places further out are scheduled with that in mind.

If your town is not listed here, give us a call. We will tell you straight away whether we can help.`)}</div>
  <ul class="towns">${site.serviceAreas.map((a, i) => `<li class="rise d${i % 3}"><h2>${esc(a.name)}</h2><p>${esc(towns[a.name] || a.note)}</p></li>`).join('')}</ul>
  <div class="prose rise"><h2>Services available across the area</h2><ul>${services.map((s) => `<li><a href="/${s.slug}/">${esc(s.name)}</a>: ${esc(s.tagline)}</li>`).join('')}</ul></div>
</div>
<section class="sec final" id="quote" aria-labelledby="final-h"><div class="wrap final__grid"><div class="rise"><h2 id="final-h">Not sure if you are in range?</h2><p>Fill in the form and we will let you know if your address is on our route, or ring us on ${phoneLink()}.</p></div><div class="final__card rise d1">${leadForm({ id: 'areas-form', heading: 'Free quote request', withMessage: true })}</div></div></section>`;
  return layout({ path: '/service-areas/', title: 'Service Areas | Epoxy Floors Bullhead City, Fort Mohave, Kingman', description: 'Floor coatings in Bullhead City, Fort Mohave, Mohave Valley, Golden Shores, Golden Valley, Kingman and nearby Colorado River communities.', body, current: 'areas', image: 'desertBlue', breadcrumbs: trail });
}

export function renderContact() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact-us/' }];
  const body = `${top({ title: 'Contact us', lede: 'Ask a question or request a free quote for your garage, home, patio or business floor.', image: 'jetskiDusk', trail })}
<div class="wrap pg" id="quote">
  <div class="pg__main rise">
    <h2>What helps us quote</h2>
    <ul><li>Which space you want coated, and roughly how big it is</li><li>Whether there is old paint, sealer or coating on the floor now</li><li>Cracks, stains or damage you have noticed</li><li>Whether boats, RVs, trailers or heavy equipment use the space</li><li>When you are in town, if you split your year</li></ul>
    <p><strong>Phone:</strong> ${phoneLink()}${site.email ? `<br><strong>Email:</strong> <a href="mailto:${esc(site.email)}">${esc(site.email)}</a>` : ''}</p>
    <h3>What happens next</h3>
    <ol><li>We get back to you to set up a visit.</li><li>We look at the concrete, measure and bring samples.</li><li>You receive a written quote with clear options.</li></ol>
  </div>
  <div class="final__card rise d1">${leadForm({ id: 'contact-form', heading: 'Free quote request', withMessage: true })}</div>
</div>`;
  return layout({ path: '/contact-us/', title: 'Contact | Free Epoxy Floor Quotes in Bullhead City', description: 'Request a free on-site quote for garage, home, patio, commercial or warehouse floor coatings in Bullhead City and the river communities.', body, current: 'contact', image: 'jetskiDusk', breadcrumbs: trail });
}

export function renderPrivacy() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'Privacy policy', path: '/privacy-policy/' }];
  const body = `${top({ title: 'Privacy policy', lede: 'What we collect through this website and what we do with it.', image: 'desertDusk', trail })}
<div class="wrap prose" style="padding-bottom:5rem">${md(`## What we collect

Our quote and contact forms ask for your name, phone number, email address, the type of project and any notes you add. The page you sent the form from is recorded with it. The site does not run advertising or tracking cookies.

## How it is used

We use your details only to reply to you, arrange a visit and talk about your project. We do not sell or rent them, and we do not pass them on for marketing.

## Services we rely on

Form submissions may reach us through an email or workflow service. The map is provided by Google Maps and the photographs are delivered by Unsplash. These providers may log standard technical information, such as IP addresses, under their own privacy policies.

## Changing or removing your details

If you would like us to correct or delete information you have sent, get in touch through the [contact page](/contact-us/).

## Updates

If this policy changes, the new wording will appear on this page, and it takes effect from the date it is posted.`)}</div>`;
  return layout({ path: '/privacy-policy/', title: 'Privacy Policy | Bullhead City Epoxy', description: 'How Bullhead City Epoxy collects and uses the details you send through the quote and contact forms on this website, and how to have them removed.', body, breadcrumbs: trail });
}

export function render404() {
  const body = `<section class="nf"><div class="wrap narrow"><h1>We could not find that page</h1><p class="dune__lede">The link may be old or mistyped. Try one of these instead.</p><p class="pg__btns"><a class="btn btn--brown" href="/">Homepage</a><a class="btn btn--line" href="/garage-floor-coatings/">Garage coatings</a><a class="btn btn--line" href="/contact-us/">Contact</a></p></div></section>`;
  return layout({ path: '/404.html', title: 'Page Not Found | Bullhead City Epoxy', description: 'The page you were looking for could not be found.', body }).replace('<meta name="robots" content="index, follow, max-image-preview:large">', '<meta name="robots" content="noindex">');
}
