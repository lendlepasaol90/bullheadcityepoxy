// Site-wide configuration for Bullhead City Epoxy.

export const site = {
  name: 'Bullhead City Epoxy',
  domain: 'https://bullheadcityepoxy.com',
  city: 'Bullhead City',
  cityLong: 'Bullhead City',
  region: 'Mohave County, Arizona',
  state: 'AZ',
  locale: 'en_US',

  // PLACEHOLDER — replace before launch, then set phoneVerified: true.
  phone: '(928) 555-0147',
  phoneHref: 'tel:+19285550147',
  phoneVerified: false,
  email: '',

  map: { query: 'Bullhead City, AZ', lat: 35.1478, lng: -114.5683, zoom: 12 },

  serviceAreas: [
    { name: 'Bullhead City', note: 'Riverfront homes, the Parkway corridor, Riviera and the neighborhoods climbing toward the foothills.' },
    { name: 'Fort Mohave', note: 'Newer subdivisions, golf course homes and big RV garages south along Highway 95.' },
    { name: 'Mohave Valley', note: 'Larger lots, shops and riverside properties further south.' },
    { name: 'Golden Shores', note: 'River homes and boat garages near Topock by arrangement.' },
    { name: 'Golden Valley', note: 'Workshops, detached garages and homes on acreage west of Kingman.' },
    { name: 'Kingman', note: 'Homes, businesses and industrial buildings up the hill.' },
    { name: 'Oatman Road area', note: 'Rural properties and outbuildings toward the Black Mountains.' },
    { name: 'Needles, CA', note: 'Commercial enquiries across the state line, by arrangement.' },
  ],

  projectTypes: [
    'Garage floor coating',
    'Residential interior floor',
    'Decorative flake floor',
    'Metallic epoxy floor',
    'Polyaspartic coating',
    'Polyurea coating',
    'Patio or pool deck',
    'Commercial floor',
    'Warehouse or industrial floor',
    'Not sure yet',
  ],
};

// Licensed Envato Elements photography, self-hosted as WebP in src/assets/img (key-<width>.webp).
export const images = {
  river: { file: 'river', w: 1600, h: 1200, widths: [480, 800, 1200, 1600], alt: "Wide river winding through dry desert country under a blue sky" },
  riverPalms: { file: 'riverPalms', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Palm trees reflected in calm water beside a sunny bank" },
  riverWide: { file: 'riverWide', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Desert river curving below distant mountain ranges" },
  riverRock: { file: 'riverRock', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Rocky desert shoreline beside bright blue water" },
  desert: { file: 'desert', w: 1600, h: 816, widths: [480, 800, 1200, 1600], alt: "Open desert with creosote and bare mountains in the distance" },
  desertBlue: { file: 'desertBlue', w: 1600, h: 1200, widths: [480, 800, 1200, 1600], alt: "Desert flats under a clear blue sky with distant peaks" },
  desertDusk: { file: 'desertDusk', w: 1600, h: 1600, widths: [480, 800, 1200, 1600], alt: "Warm sunset light over a quiet desert landscape" },
  monsoon: { file: 'monsoon', w: 1600, h: 874, widths: [480, 800, 1200, 1600], alt: "Storm clouds building over desert mountains" },
  jetskiDusk: { file: 'jetskiDusk', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Personal watercraft on the water as the sun sets" },
  boatPort: { file: 'boatPort', w: 1600, h: 1126, widths: [480, 800, 1200, 1600], alt: "Boat on its trailer parked beside a travel trailer at a desert home" },
  rvRoad: { file: 'rvRoad', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "White RV traveling a desert highway" },
  rvParked: { file: 'rvParked', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "RV parked among saguaro and desert scrub" },
  garageClassics: { file: 'garageClassics', w: 1600, h: 900, widths: [480, 800, 1200, 1600], alt: "Classic cars lined up on a polished floor" },
  garageYellow: { file: 'garageYellow', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Yellow sports car being rinsed in a wash bay" },
  shopBays: { file: 'shopBays', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Bright auto repair shop with cars on lifts" },
  mechanic: { file: 'mechanic', w: 1600, h: 1067, widths: [480, 800, 1200, 1600], alt: "Mechanic working on an engine in a busy shop" },
  living: { file: 'living', w: 1600, h: 1200, widths: [480, 800, 1200, 1600], alt: "Modern living room with a low sofa, wood table and seamless grey floor" },
  livingSofa: { file: 'livingSofa', w: 1600, h: 1333, widths: [480, 800, 1200, 1600], alt: "Living room with a pale sofa and round coffee tables on a smooth floor" },
  livingLight: { file: 'livingLight', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Bright empty room with tall windows and a pale floor" },
  warehouse: { file: 'warehouse', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Long warehouse aisle between tall rows of shelving" },
  warehouseCrew: { file: 'warehouseCrew', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Workers inspecting a bright, empty industrial building with a glossy floor" },
  fleetHall: { file: 'fleetHall', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Truck inside a large warehouse with yellow floor markings" },
  stripes: { file: 'stripes', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Yellow and black safety stripe on a work floor" },
  poolPatio: { file: 'poolPatio', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Modern outdoor lounge set beside a swimming pool" },
  coveredPatio: { file: 'coveredPatio', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Covered wooden patio with a grill and outdoor dining table" },
  retail: { file: 'retail', w: 1600, h: 1066, widths: [480, 800, 1200, 1600], alt: "Modern retail store with clothing displays over a light floor" },
};
