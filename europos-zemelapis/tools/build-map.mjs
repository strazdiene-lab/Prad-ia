import fs from 'fs';
import * as topo from 'topojson-client';
import * as simp from 'topojson-simplify';
import * as d3 from 'd3-geo';
const world = JSON.parse(fs.readFileSync('node_modules/world-atlas/countries-10m.json'));
const pre = simp.presimplify(world);
const w = parseFloat(process.argv[2]||'1e-7');
const s = simp.simplify(pre, w);
const W=1000,H=1000;
const proj = d3.geoAzimuthalEqualArea().rotate([-15,-54]).fitExtent([[10,10],[W-10,H-10]],
  {type:'MultiPoint',coordinates:[[-24,64],[-18,27.5],[62,50],[68,77],[20,81.5],[-10,36],[45,40],[40,34]]});
const [x0,y0]=[0,0]; 
console.error('scale',proj.scale(),'translate',proj.translate());
proj.clipExtent([[0,0],[W,H]]);
const path = d3.geoPath(proj).digits(1);
const countries = topo.feature(s, s.objects.countries).features;
const borders = topo.mesh(s, s.objects.countries, (a,b)=>a!==b);
const land = topo.merge(s, s.objects.countries.geometries);
const out = { scale: proj.scale(), translate: proj.translate(), land: path(land)||'', borders: path(borders)||'' };
// compute bounds of land to choose height
fs.writeFileSync('map.json', JSON.stringify(out));
console.error('land',out.land.length,'borders',out.borders.length, 'bounds', d3.geoPath(proj).bounds(land));
