# Europos žemėlapis

Mokymosi ir testo programa Europos fizinės geografijos objektams (jūros, sąsiauriai, kanalai, įlankos, pusiasaliai, salos, kalnai, lygumos, upės, ežerai, ledynai, ugnikalniai, kraštiniai taškai).

- `index.html` – paruoštas puslapis (atidaryti naršyklėje).
- `src.html` – šaltinis; objektų sąrašas ir koordinatės yra masyve `I`.
- `tools/build-map.mjs` – sugeneruoja kontūrus `tools/map.json` iš Natural Earth (world-atlas) duomenų.
- `tools/assemble.mjs` – įterpia `map.json` į `src.html` ir sukuria `index.html`.
