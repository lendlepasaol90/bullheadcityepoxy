// Service registry: order here drives the menu, footer and homepage index.
import garage from './garage-floor-epoxy.mjs';
import residential from './interior-floors.mjs';
import flake from './flake-floors.mjs';
import metallic from './metallic-floors.mjs';
import polyaspartic from './polyaspartic-coatings.mjs';
import polyurea from './polyurea-coatings.mjs';
import patio from './patio-pool-deck-coatings.mjs';
import commercial from './commercial-coatings.mjs';

export const services = [garage, residential, flake, metallic, polyaspartic, polyurea, patio, commercial];
export const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
