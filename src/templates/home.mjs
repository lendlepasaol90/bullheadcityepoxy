import { site } from '../site.mjs';
import { esc, md, inline, img, abs } from '../lib/html.mjs';
import { layout } from './layout.mjs';
import { leadForm, phoneLink } from './parts.mjs';
import { services, bySlug } from '../content/services/index.mjs';

const svcLink = (slug, text) => `[${text || bySlug[slug].name}](/${slug}/)`;

const reasons = [
  { t: 'Scheduled around the thermometer', d: 'From May through September we mix and spread in the early hours, when the slab is coolest and the resin behaves. Afternoons are for grinding prep indoors or nothing at all.', i: 'sun' },
  { t: 'Every slab gets ground', d: 'Diamond grinding opens the concrete so the coating can bite. It is part of every quote, never an upgrade.', i: 'grind' },
  { t: 'Topcoats chosen for UV', d: 'River-town garages sit open half the day. We finish with light-stable polyaspartic or urethane, so the floor keeps its color.', i: 'shield' },
  { t: 'Quotes you can read', d: 'Prep, repairs, system and extras on separate lines, with a straight answer about what your concrete needs.', i: 'list' },
];

const icons = {
  sun: '<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/>',
  grind: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.5"/><path d="M12 4v3M12 17v3M4 12h3M17 12h3"/>',
  shield: '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
  list: '<path d="M8 6h12M8 12h12M8 18h12"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',
};
const icon = (k) => `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[k]}</svg>`;

const benefits = [
  ['Sheds dust for good', 'Bare concrete powders under tires and boots. A sealed floor stops that, which matters in a town where the wind already brings plenty of dust indoors.'],
  ['Cleans with a hose', 'Lake sand, sunscreen drips and fishing-day mess rinse off a coated garage floor instead of soaking in.'],
  ['Brighter space', 'Light-colored coatings bounce light into dim garages and shops, which makes the space feel larger and safer to work in.'],
  ['Resists oil and fuel', 'Outboard oil, gear lube and fuel spills sit on the surface long enough to wipe up.'],
  ['Grip where you need it', 'Texture can be built into the topcoat around doors, wash bays and pool steps.'],
  ['Protects the slab', 'A coating seals the surface against stains and the grit that slowly wears concrete away.'],
];

const steps = [
  ['Look and measure', 'We visit, measure, check moisture, find old sealers and talk about how you use the space.'],
  ['Written quote', 'You get an itemized proposal with the system we recommend and why.'],
  ['Grind and repair', 'Diamond grinding with dust extraction, then crack, pit and joint repair.'],
  ['Coat in the cool hours', 'Base, broadcast or pigment and topcoat, timed to the slab temperature.'],
  ['Walk-through', 'We check the floor with you and explain cure times and care.'],
];

const faqs = [
  { q: 'Can you install epoxy when it is 115 degrees outside?', a: 'Not in the afternoon. Hot slabs shorten working time and can make resin cure too fast and bubble. In summer we start at first light, keep batches small, use slower hardeners and finish before the slab heats up. Some projects simply wait for October.' },
  { q: 'Will hot tires lift the coating?', a: 'Hot-tire pickup happens when a coating is too thin, poorly bonded or not fully cured. Grinding, proper film thickness and an honest cure time before parking prevent it. We tell you exactly when it is safe to pull in.' },
  { q: 'Which coating is best for a garage that faces west?', a: 'A west-facing garage takes full afternoon sun. We use a light-stable polyaspartic topcoat over the base so the color does not yellow, and lighter colors that stay cooler underfoot.' },
  { q: 'Can I coat my RV or boat garage?', a: 'Yes. Taller bays often carry heavier loads and more fluids, so we look closely at the slab and joints and use a thicker system where trailer jacks and leveling blocks sit.' },
  { q: 'Do you coat pool decks and patios?', a: 'Yes, with outdoor systems built for sun, water and bare feet. See our [patio and concrete coatings](/patio-concrete-coatings/) page.' },
  { q: 'How long does a garage take?', a: 'Most two- and three-car garages take one to two days of work, plus cure time before vehicles return. Polyaspartic systems shorten that wait.' },
  { q: 'Do I need to be home during the work?', a: 'Not the whole time. We need access, power and a clear space. If you are a winter resident, we can arrange the job around the weeks you are in town.' },
  { q: 'Are estimates free?', a: 'Yes. We come out, look at the concrete and send a written quote. There is no obligation.' },
];

const gallery = [
  ['garageClassics', 'Classic cars on a sealed garage floor'],
  ['boatPort', 'Boat and car storage under one roof'],
  ['livingSofa', 'Seamless floor in a living room'],
  ['shopBays', 'Repair shop service bays'],
  ['poolPatio', 'Patio and pool surround'],
  ['warehouse', 'Racked warehouse aisles'],
  ['garageYellow', 'Showroom-style garage'],
  ['stripes', 'Safety striping on a parking floor'],
  ['rvParked', 'RV pads and tall garage bays'],
];

export function renderHome() {
  const body = `
<section class="hero" aria-labelledby="hero-h">
  <div class="wrap hero__top">
    <h1 id="hero-h" class="hero__h">Floor coatings for life on the river</h1>
    <div class="hero__side">
      <p class="hero__lede">Garage, home, patio and commercial floors for Bullhead City and the Colorado River communities, prepared properly and installed around the heat.</p>
      <div class="hero__btns"><button class="btn btn--gold" type="button" data-quote>Get a free quote</button><a class="btn btn--line" href="#services">See services</a></div>
    </div>
  </div>
  <div class="wrap">
    <div class="hero__strip">
      ${img('river', { eager: true, sizes: '(max-width: 1240px) 94vw, 1180px', widths: [700, 1100, 1600, 2200], ratio: 21 / 8 })}
      <svg class="arc" viewBox="0 0 1000 380" preserveAspectRatio="none" aria-hidden="true"><path d="M-10 370 Q 500 -120 1010 370"/></svg>
    </div>
    <ul class="hero__counts">
      <li><b data-count="9">9</b><span class="hero__lbl">coating services, from garages to warehouses</span></li>
      <li><b data-count="8">8</b><span class="hero__lbl">river and desert communities on our map</span></li>
      <li><b data-count="3">3</b><span class="hero__lbl">coating families: epoxy, polyaspartic and polyurea</span></li>
    </ul>
  </div>
</section>

<section class="sec" id="intro" aria-labelledby="intro-h">
  <div class="wrap two">
    <div class="rise">
      <h2 id="intro-h">A floor company that plans its day around the sun</h2>
      ${md(`Bullhead City sits low on the Colorado River, a few hundred feet above sea level, across the water from Laughlin. That low elevation gives the town its mild winters and its punishing summers. It also shapes every floor we put down. Concrete here can sit far hotter than the air in the afternoon, and liquid coatings respond to slab temperature more than anything else.

So our work starts early and stops when the slab says so. We grind and repair the concrete first, test it for moisture, pick products that tolerate the conditions, and spread resin when it will level and bond the way it should. The result is a floor that looks good on day one and still looks good after a few summers of hot tires, river sand and open garage doors.

We coat garages, casitas and living spaces, patios and pool decks, shops, restaurants, warehouses and fleet buildings across Bullhead City, Fort Mohave, Mohave Valley and the towns up the hill toward Kingman.`)}
    </div>
    <figure class="sunfig rise d1">${img('riverPalms', { sizes: '(max-width: 900px) 80vw, 420px', widths: [420, 700, 900], ratio: 1 })}<figcaption>The river sets the pace of life here, and the sun sets the pace of our work.</figcaption></figure>
  </div>
</section>

<section class="sec sec--paper" id="why" aria-labelledby="why-h">
  <div class="wrap">
    <div class="sh rise"><h2 id="why-h">Why homeowners and businesses call us</h2><p>Nothing fancy, just the habits that keep coatings stuck to concrete in a hot, dusty, sunny place.</p></div>
    <ul class="why">${reasons.map((r, i) => `<li class="rise d${i}"><span class="why__ic">${icon(r.i)}</span><h3>${esc(r.t)}</h3><p>${esc(r.d)}</p></li>`).join('')}</ul>
  </div>
</section>

<section class="sec rail-sec" id="services" aria-labelledby="svc-h">
  <div class="wrap">
    <div class="rail__hd">
      <div class="sh rise"><h2 id="svc-h">Our coating services</h2><p>Nine services, each with its own page that explains the system, where it fits and what to expect.</p></div>
      <div class="rail__btns"><button type="button" class="rbtn" data-rail="-1" aria-label="Previous services"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg></button><button type="button" class="rbtn" data-rail="1" aria-label="Next services"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg></button></div>
    </div>
  </div>
  <div class="rail" data-railbox tabindex="0" aria-label="Services list, scroll sideways for more">
    <ul>${services.map((s) => `<li class="card"><a href="/${s.slug}/"><span class="card__img">${img(s.image, { sizes: '320px', widths: [360, 640], ratio: 4 / 3, alt: '' })}</span><h3>${esc(s.name)}</h3><p>${esc(s.homeBlurb)}</p><span class="card__go">Read about ${esc(s.name.toLowerCase())}</span></a></li>`).join('')}</ul>
  </div>
</section>

<section class="sec chap" id="garages" aria-labelledby="gar-h">
  <div class="wrap chap__grid">
    <div class="chap__img rise">${img('boatPort', { sizes: '(max-width: 900px) 94vw, 560px', widths: [560, 900, 1200], ratio: 5 / 4 })}</div>
    <div class="rise d1">
      <h2 id="gar-h">Garage floors for boats, RVs, side-by-sides and the family car</h2>
      ${md(`In a river town, the garage does a lot more than hold a sedan. It is where the boat waits on its trailer, where the jet skis get rinsed off, where the side-by-side comes back caked in wash sand, and where an RV bay might take up half the lot. Those floors see fuel, two-stroke oil, wet sand and heavy point loads from trailer jacks and stabilizers.

Our ${svcLink('garage-floor-coatings', 'garage floor coatings')} start with grinding and crack repair, then build a base coat, a full or partial broadcast of color flake and a UV-stable topcoat. In tall RV and boat bays we add thickness under jacks and leveling blocks. Around the door we can add texture, because wet floors and flip-flops are a poor mix.`)}
      <p class="chap__links"><a href="/garage-floor-coatings/">Garage coatings</a><a href="/decorative-flake-flooring/">Flake floors</a><a href="/polyaspartic-floor-coatings/">Polyaspartic</a></p>
    </div>
  </div>
</section>

<section class="sec chap chap--flip sec--paper" id="residential" aria-labelledby="res-h">
  <div class="wrap chap__grid">
    <div class="chap__img rise">${img('living', { sizes: '(max-width: 900px) 94vw, 560px', widths: [560, 900, 1200], ratio: 5 / 4 })}</div>
    <div class="rise d1">
      <h2 id="res-h">Living spaces, casitas and laundry rooms</h2>
      ${md(`Plenty of homes here are built on slab, and many owners are tired of carpet that holds dust or tile with grout lines that never look clean. A coated floor is seamless, cool underfoot and easy to mop. It suits casitas, game rooms, laundry and mudrooms, and full living areas in homes that go for a modern look.

${svcLink('residential-epoxy-flooring', 'Residential epoxy')} inside the house is about patience: careful dust control, flattening the slab, a moisture check, and finishes that suit the room. Solid colors, fine flake, quartz textures and polished-look clear coats are all on the table. For a showpiece room, ${svcLink('metallic-epoxy-flooring', 'metallic epoxy')} gives the floor movement and depth.`)}
    </div>
  </div>
</section>

<section class="sec chap" id="commercial" aria-labelledby="com-h">
  <div class="wrap chap__grid">
    <div class="chap__img rise">${img('retail', { sizes: '(max-width: 900px) 94vw, 560px', widths: [560, 900, 1200], ratio: 5 / 4 })}</div>
    <div class="rise d1">
      <h2 id="com-h">Commercial floors for shops, restaurants and service businesses</h2>
      ${md(`The local economy runs on visitors, retirees and the people who look after them, and that means a lot of floor traffic. Restaurants and bars need surfaces that shrug off spills and hot cleaning water. Clinics and offices want something bright and simple to sanitize. Retail shops and showrooms want a floor that looks good with sand tracked in from the parking lot.

Our ${svcLink('commercial-epoxy-flooring', 'commercial epoxy flooring')} is scheduled to keep you open, often in sections or over a closed day. We match the system to the business: slip-resistant textures in kitchens, chemical-resistant topcoats in service areas and decorative finishes in customer-facing rooms.`)}
    </div>
  </div>
</section>

<section class="sec chap chap--flip sec--paper" id="industrial" aria-labelledby="ind-h">
  <div class="wrap chap__grid">
    <div class="chap__img rise">${img('warehouseCrew', { sizes: '(max-width: 900px) 94vw, 560px', widths: [560, 900, 1200], ratio: 5 / 4 })}</div>
    <div class="rise d1">
      <h2 id="ind-h">Warehouses, fleet yards and industrial buildings</h2>
      ${md(`Along Highway 95 and up toward Kingman there are distribution buildings, marine and RV repair shops, contractor yards and equipment storage that take a beating. Forklifts, pallet jacks, hydraulic fluid and grit all wear concrete down, and dusty floors end up on stock and in machinery.

Our ${svcLink('warehouse-floor-coatings', 'warehouse floor coatings')} focus on durability: heavy grinding, joint repair, high-build epoxy or flexible ${svcLink('polyurea-floor-coatings', 'polyurea')} bases, chemical-resistant topcoats and painted-in lanes and safety zones. We work in phases so racking and operations can shift around us.`)}
    </div>
  </div>
</section>

<section class="sec deco" id="decorative" aria-labelledby="deco-h">
  <div class="wrap deco__grid">
    <div class="rise">
      <h2 id="deco-h">Decorative and metallic finishes</h2>
      ${md(`Coatings do not have to look industrial. ${svcLink('decorative-flake-flooring', 'Decorative flake')} floors use layered vinyl chips to give a stone-like look that hides dust and sand between sweeps. Blends can lean warm, with tan and copper, or cool, with grey and river blue.

Metallic epoxy goes further. Pigments are worked by hand through clear resin to create swirls, veins and soft clouds. It suits living rooms, home bars, salons and showrooms, anywhere the floor is meant to be looked at as well as walked on.`)}
      <ul class="swatches" aria-label="Example color directions">
        <li><span style="--c:#d6b16a"></span>Desert gold</li>
        <li><span style="--c:#9cc3d6"></span>River blue</li>
        <li><span style="--c:#8a6a52"></span>Canyon brown</li>
        <li><span style="--c:#c9c2b6"></span>Driftwood grey</li>
        <li><span style="--c:#efe4cf"></span>Sand</li>
      </ul>
    </div>
    <figure class="deco__fig rise d1">${img('garageYellow', { sizes: '(max-width: 900px) 94vw, 520px', widths: [520, 900], ratio: 4 / 5 })}</figure>
  </div>
</section>

<section class="bleed" aria-labelledby="bleed-h">
  <div class="bleed__bg" aria-hidden="true"><div data-parallax>${img('riverWide', { widths: [900, 1400, 2000], alt: '' })}</div></div>
  <div class="wrap bleed__in rise">
    <h2 id="bleed-h">Book your floor before the summer heat arrives</h2>
    <p>October through April is the easy season for coatings on the river. Spring tends to get busy as winter residents try to finish projects before heading north. Tell us about your floor and we will pencil in a visit.</p>
    <div class="bleed__btns"><button class="btn btn--gold" type="button" data-quote>Request a free quote</button>${phoneLink('btn btn--ghost')}</div>
  </div>
</section>

<section class="sec" id="process" aria-labelledby="proc-h">
  <div class="wrap">
    <div class="sh rise"><h2 id="proc-h">How a project runs, start to finish</h2><p>Five stages, the same on a single-car garage as on a warehouse.</p></div>
    <ol class="path">${steps.map(([t, d], i) => `<li class="rise d${i % 4}"><span class="path__dot" aria-hidden="true">${i + 1}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`).join('')}</ol>
    <div class="prose rise">${md(`Preparation carries most of the weight. A coating is only as strong as the concrete surface it grips, and builder sealers, paint, curing compounds, efflorescence and oil stains all get in the way. Grinding removes them and leaves a texture the base coat can lock into. Cracks are cut out and filled, spalled edges rebuilt, and control joints either honored or filled depending on where they are.

After that, timing is everything. A base coat that goes down on a cool slab has time to soak in and level. The same coat on a sun-baked slab can kick off in the bucket. That is why our summer start times look unusual, and why we sometimes recommend fast-curing ${svcLink('polyaspartic-floor-coatings', 'polyaspartic')} systems that finish in a single day.`)}</div>
  </div>
</section>

<section class="sec sec--paper" id="benefits" aria-labelledby="ben-h">
  <div class="wrap">
    <div class="sh rise"><h2 id="ben-h">What a coated floor does for you</h2></div>
    <dl class="bens">${benefits.map(([t, d], i) => `<div class="rise d${i % 3}"><dt>${esc(t)}</dt><dd>${esc(d)}</dd></div>`).join('')}</dl>
  </div>
</section>

<section class="sec" id="local" aria-labelledby="local-h">
  <div class="wrap two two--wide">
    <div class="rise">
      <h2 id="local-h">Why Bullhead City owners choose a coated floor</h2>
      ${md(`A lot of people here split their year between the river and somewhere cooler, and they want a home that is easy to lock up and come back to. A sealed garage and patio mean less dust, fewer stains and nothing that needs scrubbing on arrival.

Others are here full time and live outdoors as much as the weather allows. Their garages double as workshops, gyms and gear rooms. Their patios host family all winter. They want floors that look finished and take abuse.

Business owners see the same thing at a larger scale. A clean, bright floor tells customers the place is cared for, and a sealed floor is far quicker to clean at closing time.`)}
    </div>
    <div class="rise d1">
      <h3 class="small-h">Common reasons people get in touch</h3>
      <ul class="ticks">
        <li>A stained, dusty garage floor under a dripping boat or trailer.</li>
        <li>Old garage paint peeling up where the tires sit.</li>
        <li>A patio or pool deck too hot for bare feet.</li>
        <li>A shop floor that sheds dust onto tools and stock.</li>
        <li>Worn carpet in a living area that never feels clean.</li>
        <li>A deadline before leaving for the summer months.</li>
      </ul>
    </div>
  </div>
</section>

<section class="sec sec--sky" id="climate" aria-labelledby="clim-h">
  <div class="wrap">
    <div class="sh rise"><h2 id="clim-h">Working with the local climate</h2><p>How the working window on a typical garage slab changes between winter and peak summer.</p></div>
    <div class="clock rise" role="img" aria-label="Diagram comparing working hours. In January most of the day is suitable for coating. In July only the early morning hours are suitable.">
      <div class="clock__row"><span class="clock__m">January</span><div class="clock__bar"><i class="k-cold" style="--a:0;--b:7"></i><i class="k-good" style="--a:7;--b:17"></i><i class="k-cold" style="--a:17;--b:24"></i></div></div>
      <div class="clock__row"><span class="clock__m">July</span><div class="clock__bar"><i class="k-warm" style="--a:0;--b:4"></i><i class="k-good" style="--a:4;--b:9"></i><i class="k-hot" style="--a:9;--b:20"></i><i class="k-warm" style="--a:20;--b:24"></i></div></div>
      <div class="clock__axis" aria-hidden="true"><span>Midnight</span><span>6 am</span><span>Noon</span><span>6 pm</span><span>Midnight</span></div>
      <ul class="clock__key"><li><i class="k-good"></i>Good for coating</li><li><i class="k-warm"></i>Possible with care</li><li><i class="k-hot"></i>Too hot to coat</li><li><i class="k-cold"></i>Too cool for most epoxies</li></ul>
    </div>
    <div class="cols3">
      <div class="rise">${md(`### Heat

Summer highs here regularly pass 110°F, and sun-facing concrete gets hotter still. Heat shortens pot life and can cause bubbles, outgassing and uneven sheen. We work at dawn, keep garage doors closed until the slab is coated, and shade work areas where we can.`)}</div>
      <div class="rise d1">${md(`### Sun

The desert sun yellows standard epoxy over time. Wherever daylight reaches the floor, from open garages to patios, we finish with a UV-stable topcoat, and we steer outdoor colors toward lighter tones that stay cooler.`)}</div>
      <div class="rise d2">${md(`### Wind, dust and monsoon

Spring wind and summer storms push fine dust into every space. We seal openings during application and wipe down before every coat. Monsoon humidity can also slow some products, so we check the forecast before big pours.`)}</div>
    </div>
  </div>
</section>

<section class="sec" id="gallery" aria-labelledby="gal-h">
  <div class="wrap">
    <div class="sh rise"><h2 id="gal-h">Floors and spaces we coat</h2><p>The kinds of rooms and buildings we work on most around the river.</p></div>
    <ul class="gal">${gallery.map(([k, c], i) => `<li class="rise d${i % 3}"><figure>${img(k, { sizes: '(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 380px', widths: [400, 760] })}<figcaption>${esc(c)}</figcaption></figure></li>`).join('')}</ul>
  </div>
</section>

<section class="sec sec--paper" id="areas" aria-labelledby="areas-h">
  <div class="wrap two two--wide">
    <div class="rise">
      <h2 id="areas-h">Communities we serve</h2>
      ${md(`We concentrate on the river corridor from Bullhead City south through Fort Mohave and Mohave Valley, with regular trips up to Golden Valley and Kingman. Keeping the service area tight lets us start early in summer without losing the cool hours to the drive.`)}
      <p><a class="btn btn--line" href="/service-areas/">More about our service area</a></p>
    </div>
    <ul class="areas rise d1">${site.serviceAreas.map((a) => `<li><b>${esc(a.name)}</b><span>${esc(a.note)}</span></li>`).join('')}</ul>
  </div>
</section>

<section class="sec" id="faq" aria-labelledby="faq-h">
  <div class="wrap narrow">
    <div class="sh rise"><h2 id="faq-h">Questions we get asked</h2></div>
    <div class="faq">${faqs.map((f) => `<details class="rise"><summary>${esc(f.q)}</summary><div>${md(f.a)}</div></details>`).join('')}</div>
  </div>
</section>

<section class="sec final" id="quote" aria-labelledby="final-h">
  <div class="wrap final__grid">
    <div class="rise">
      <h2 id="final-h">Tell us about your floor</h2>
      ${md(`Send a few details and we will set up a time to look at the concrete, talk through options and get you a written quote. If you are out of town for the season, let us know when you are back and we will plan around it.`)}
      <p class="final__tel">Prefer to talk? ${phoneLink()}</p>
    </div>
    <div class="final__card rise d1">${leadForm({ id: 'home-form', heading: 'Free quote request', withMessage: true })}</div>
  </div>
</section>`;

  const schema = [
    { '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') } })) },
  ];
  return layout({
    path: '/',
    title: 'Epoxy Flooring Bullhead City AZ | Garage, Patio & Commercial',
    description: 'Epoxy, polyaspartic and polyurea floor coatings in Bullhead City, Fort Mohave and Mohave Valley. Garages, RV and boat bays, patios, homes and businesses.',
    body,
    current: 'home',
    image: 'river',
    schema,
  });
}
