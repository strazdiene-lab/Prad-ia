// Įterpia žemėlapio kontūrus (tools/map.json) į src.html ir sukuria index.html
import fs from 'fs';
const dir = new URL('..', import.meta.url).pathname;
const map = fs.readFileSync(dir + 'tools/map.json', 'utf8');
const src = fs.readFileSync(dir + 'src.html', 'utf8');
fs.writeFileSync(dir + 'index.html', src.replace('__MAP__', () => map));
