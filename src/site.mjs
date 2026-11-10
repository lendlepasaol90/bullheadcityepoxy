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

// Licensed Unsplash photography (Unsplash License). Swap `id` for `src` to self-host.
export const images = {
  river: { id: 'photo-1736358787078-2c9a8eee13f1', alt: 'Broad river winding between desert mountains' },
  riverPalms: { id: 'photo-1673217933500-e1c4b33fb7bc', alt: 'Calm river water lined with palm trees' },
  riverWide: { id: 'photo-1724779171830-cb2578cd7748', alt: 'Wide stretch of water framed by bare desert ranges' },
  riverRock: { id: 'photo-1594528924944-454cea6f6a6a', alt: 'Rocky desert shoreline beside blue water' },
  desert: { id: 'photo-1749520143474-da1b2558aa3e', alt: 'Open desert with creosote and mountains in the distance' },
  desertBlue: { id: 'photo-1749520140583-e9a06cc6cc57', alt: 'Desert flats beneath a clear blue sky and distant peaks' },
  desertDusk: { id: 'photo-1718385635378-7933f82dc53a', alt: 'Sun setting over a quiet desert landscape' },
  monsoon: { id: 'photo-1756312853497-1af3172ce02f', alt: 'Storm clouds building over rugged desert hills' },
  jetski: { id: 'photo-1505867798796-639ec7e8cdf5', alt: 'Rider on a personal watercraft cutting across the water' },
  jetskiDusk: { id: 'photo-1768463852042-656c293ce22f', alt: 'Personal watercraft on the water at sunset with a boat behind' },
  boatPort: { id: 'photo-1676044980738-2872277ba68c', alt: 'Car parked beneath a covered boat under a carport' },
  rvRoad: { id: 'photo-1775641080262-1a4e3978a4b5', alt: 'White RV traveling a desert highway' },
  rvParked: { id: 'photo-1588132537312-54a898067dd4', alt: 'RV parked on open desert ground under a blue sky' },
  garageClassics: { id: 'photo-1766801075605-8c036a5c4ec3', alt: 'Several classic cars parked inside a clean garage' },
  garageYellow: { id: 'photo-1778942855356-52ce12958bcb', alt: 'Yellow sports car parked indoors on a smooth floor' },
  shopBays: { id: 'photo-1767681092416-bccf9410bda4', alt: 'Cars being serviced in a busy repair workshop' },
  mechanic: { id: 'photo-1615906655593-ad0386982a0f', alt: 'Mechanic working on a car engine in a shop' },
  living: { id: 'photo-1724582586529-62622e50c0b3', alt: 'Modern living room with a large window and seamless floor' },
  livingSofa: { id: 'photo-1724582586495-d050726cf354', alt: 'Living room with a couch and low table on a smooth floor' },
  livingLight: { id: 'photo-1724582586458-a51791349977', alt: 'Bright modern room with tall windows' },
  warehouse: { id: 'photo-1644079446600-219068676743', alt: 'Large warehouse with tall rows of shelving' },
  warehouseCrew: { id: 'photo-1772299121503-cd62a57e3a26', alt: 'Workers inspecting a large, empty industrial building' },
  fleetHall: { id: 'photo-1727893294198-e85137574f5b', alt: 'Warehouse holding rows of cars and trucks' },
  stripes: { id: 'photo-1707903286963-ccf1300c61e5', alt: 'Parking structure floor with yellow and black safety stripes' },
  poolPatio: { id: 'photo-1783125127094-ea962d41ba42', alt: 'Modern patio beside a swimming pool' },
  coveredPatio: { id: 'photo-1694885090746-d90472e11c0e', alt: 'Covered patio with a grill and outdoor table' },
  retail: { id: 'photo-1764795850238-7a024db5e3ee', alt: 'Modern retail interior with display cases' },
  industrialRoom: { id: 'photo-1783987597078-84d5ac51d518', alt: 'Empty industrial space with exposed ceiling' },
};
