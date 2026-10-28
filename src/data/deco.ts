// Dessins très légers en filigrane (voir `.has-deco` dans global.css).
import canne from '../assets/brand/canne.svg?url';
import bouteille from '../assets/brand/bottle.svg?url';

const urls = { canne, bouteille };
export type Deco = keyof typeof urls;
export const decoStyle = (name: Deco) => `--deco:url(${urls[name]})`;
