# Website vakantiewoning Sankt Lambrecht

## Wat zit erin
- index.html — Nederlandse versie (startpagina)
- de.html — Duitse versie
- en.html — Engelse versie
- assets/style.css — vormgeving
- assets/script.js — menu, fotoweergave en kaart
- assets/img/ — placeholderafbeeldingen

## Online zetten
Upload de volledige inhoud van deze map (inclusief de map assets) naar de webruimte van je hosting, meestal de map "public_html", "httpdocs" of "www". Daarna is de site direct bereikbaar via je domeinnaam. Er is geen database of installatie nodig.

## Placeholders vervangen
1. Teksten: zoek in index.html op "VUL IN", in de.html op "AUSFÜLLEN" en in en.html op "FILL IN". Vervang de tekst tussen de blokhaken én verwijder de omliggende span met class "vulin", bijvoorbeeld: vervang `<span class="vulin">[VUL IN: bijv. 6]</span>` door `6`.
2. Foto's: zet je eigen foto's in assets/img en vervang in de drie HTML-bestanden de verwijzingen naar de .svg-bestanden door je eigen bestandsnamen (bij voorkeur .jpg van maximaal 300 kB per foto, circa 1600 pixels breed). De bestandsnamen geven aan welke foto waar hoort.
3. Contact: de mailto- en tel-links bevatten dezelfde placeholders als de zichtbare tekst en zijn dus ook vindbaar met de zoektermen hierboven. Vervang bijvoorbeeld `href="mailto:[VUL IN: e-mailadres]"` door `href="mailto:jouw@adres.nl"` en `href="tel:[VUL IN: telefoonnummer]"` door `href="tel:+31612345678"`.
4. Kaartpositie: de kaart staat nu op het centrum van Sankt Lambrecht. Wil je de exacte positie van de woning tonen, pas dan in assets/script.js de coördinaten aan (regels met "bbox" en "marker") en in de HTML-bestanden de OpenStreetMap-link.
5. Zoekmachines: bovenin elk HTML-bestand staan hreflang-regels met relatieve verwijzingen. Vervang die bij livegang door volledige adressen met je eigen domeinnaam (staat als commentaar in de bestanden aangegeven).

## Controle voor livegang
Open elke pagina in de browser en controleer of nergens meer een geel gemarkeerde placeholder zichtbaar is. Controleer de drie taalversies apart.
