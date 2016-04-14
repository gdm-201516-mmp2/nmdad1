Werkstuk 2e examenkans: "Open the gates for data"
=================================================

| Info                        |                                                                                         |
|-----------------------------|-----------------------------------------------------------------------------------------|
| OLOD                        | New Media Design & Development I                                                        |
| Docenten                    | Philippe De Pauw - Waterschoot, Jonas Pottie                                            |
| Opleiding                   | Bachelor in de Grafische en digitale media                                              |
| Academiejaar                | 2015-2016                                                                               |
| Werktitel                   | Open the gates for Data!                                                                |
| Subtitel                    | The Open Data Catalog.                                                                  |
| Briefing                    | **Lesweek  8 - Semester 4** Briefing                                                    |
| Deadline                    | **15-08-2016** Opleveren opdracht (Chamilo en Bitbucket)                                |
| Mondeling Examen            | Afgedrukt Productiedossier Demonstratie Webapp                                          |

Omschrijving
------------

Maak een **responsive mobile-first webapplicatie** waarin minimaal 6 datasets, afkomstig uit de dataset-pool van **Stad Gent**, verwerkt zijn. Conceptueel denken is heel belangrijk in deze applicatie. Dit betekent dat jullie verbanden moeten leggen tussen deze datasets. Het is louter niet alleen het oplijsten en visualiseren van deze datasets, er moet een **concept** rond gebouwd worden.

Deze applicatie is bestemd voor **+18 jarigen** waarbij de gebruiksvriendelijkheid, interactiviteit, uitbreidbaarheid en schaalbaarheid van belang zijn.

> Resources:
> ----------
* [Datasets Stad Gent](https://data.stad.gent/datasets)
* [Stad Gent Open Data Portaal](http://www.appsforghent.be/library)
* Buiten deze verplicht aantal datasets uit de Wereldbank (waarrond het concept gebouwd moet worden) kan men ook extra databanken raadplegen ter ondersteuning van dit concept:
    * UN Data
    * YouTube, Vimeo
    * Soundcloud
    * Yahoo Query Language (YQL)
    * Wikipedia
    * TV Maze, themoviedb, Subtitleseeker, Open Movie Database
    * Flickr, Foursquare, Google Places
    * ... (vraag toelating aan de docenten om eventueel andere API's extra aan te spreken)

De opdracht omvat deze onderdelen:

 1. Productiedossier;
 2. Mobiele webapplicatie.


Specificaties
-------------

> Dit zijn de **minimum**specificaties! Voorzie zelf extra's.

### Productiedossier

#### Inhoudelijke specificaties

> Respecteer de volgorde!

 1. Briefing & Analyse
 2. Specificaties
 3. Ideeënbord(en)  
    Ideeën (afbeeldingen met korte uitleg en/of tekst) die mogelijk in het eindproduct gebruikt kunnen worden
 4. Wireframe van het e-mailsjabloon
 5. Wireflow van de Webapp  
    Wireframes met aanduiding van interactie. Elke uniek scherm moet gemaakt worden. Schermen waarvan de inhoud dynamisch verandert moeten maar 1 keer gemaakt worden. 
 6. Moodboard  
    Sfeer die het ontwerp van het e-mailsjabloon en de webapp moet uitstralen.
 7. [Style Tiles][] (3&times;)  
    Kleine ontwerpen die snel gemaakt kunnen worden, en waaruit tenslotte 1 gekozen wordt die als basis voor het uiteindelijk ontwerp wordt gebruikt.
 8. Visual designs  
    1. Mobiele Webapp
    Uitwerking van de wireframes: elk uniek scherm en detail.
 9. Screenshots (eindresultaat)
    1. Mobiele Webapp
       - Smartphone
         - Globaal overzicht (1&times;)
         - Details (2&times;)
       - Desktop
         - Globaal overzicht (1&times;)
         - Details (2&times;)
    2. Codesnippets
       - HTML (1&times;),
       - CSS of SCSS (1&times;)
       - JavaScript (3&times;)
10. Tijdsbesteding  
    1 [timesheet](timesheets.md) per student (detaillering tot op 0,25 uur, in taken die ongeveer 2 tot 4 uur duren)

#### Technische specificaties

 - A4 (210 &times; 297 mm)
 - Staand of liggend
 - Quadri
 - Afgedruk opleveren op mondeling examen.

### Mobiele Webapplicatie

#### Functionele specificaties

Verplichte onderdelen voor de webapplicatie (opgelijst in alfabetische volgorde):

 - Blijf op de hoogte (maandelijkse nieuwsbrief)
 - Doen
 - Eten en drinken
 - Evenementen
 - Nieuws
 - Ontdekken
 - Overnachten
 - Weer

#### Niet-functionele specificaties

 - Responsive
 - Mobile First 
 - One Page Webapplication 
    * Bookmark routes
    * of een webapplicatie bestaande uit verschillende pagina's
 - Preloaders/Loaders
    * Om de app in te laden
    * Tijdens het inladen van JSON(P)
    * Lokale data bestanden
 - De meeste inhoud wordt beheerd in data bastanden en dynamisch ingeladen
 - Adaptive images, video's en sounds
 - Google Maps integratie of gelijkaardig
    * Custom look-and-feel
 - GEO-location
    * Toon de locatie van de gebruiker op een Map
    * Hou rekening met deze locatie in andere onderdelen van deze app
 - Social Media Bookmarking (Open Graph)
 - Animaties via SVG en/of Canvas
 - Lokaal caching van data en bronbestanden (cache manifest)
 - Gebruiker ervaart een interactief webapplicatie
 - Gebruiker kan favoriete data lokaal bewaren
 - Gebruiker kan de webapplicatie bookmarken in browser, bureaublad en als native app in het overzicht
 - Automation verplicht (optionaal)!
    * Componenten worden via Bower toegevoegd in de components folder van de app folder
    * SASS bestanden worden automatisch omgezet in corresponderende CSS-bestanden
    * CSS-bestanden worden met elkaar verbonden in één bestand en geminified
    * De JS code wordt automatisch nagekeken op syntax fouten (JS-bestanden worden met elkaar verbonden in één bestand en geminified)
    * De dist-folder wordt automatisch aangevuld met bestanden en folders via Grunt of Gulp
    * Screenshots van de verschillende breekpunten worden automatisch uitgevoerd via Phantom, Casper of andere bibliotheken

#### Technische specificaties

 - HTML5
 - CSS
   - Voor bonuspunten:  SCSS met [7-1 Architectuur][] via [Gulp][]
 - JavaScript (en/of [jQuery][] 2.2.x)
 - Template engines: Jade, Haml, Swig of Handlebars
 - Storage: JSON bestanden, localstorage en/of IndexedDB
 - Bibliotheken: jQuery, underscore.js, lodash.js, crossroads.js, js-signals, Hasher.js, ...

Niet vergeten!
--------------

Op elk ingediend onderdeel moet deze informatie vermeld worden:

* Klas
* Voornaam en familienaam
* Opleidingsonderdeel: NMDAD I
* Academiejaar: 2015-2016
* Opleiding: Bachelor in de grafische en digitale media
- Afstudeerrichting: Multimediaproductie
* Opleidingsinstelling: Arteveldehogeschool

Bijvoorbeeld in het Nederlands:

> 2MMPa, John Doe
> NMDAD I, Academiejaar 2015-2016  
> Bachelor in de grafische en digitale media, Multimediaproductie  
> Arteveldehogeschool

Bijvoorbeeld in het Engels:

> 2MMPa, John Doe
> E-design, Academic Year 2015-2016  
> Bachelor of Graphical and Digital Media, Multimediaproduction
> Artevelde University College Ghent

Source Code Management
----------------------

> Het werkstuk wordt op een Bitbucket-repository gepubliceerd dat toegankelijk is voor [Olivier Parent][https://bitbucket.org/olivierparent] en [Philippe De Pauw - Waterschoot][https://bitbucket.org/drdynscript].

- Maak een team aan in bitbucket:
    - gdm-1516-2MMPA-{loginnaam} 
    - 2MMPA staat voor de klas (en is dus variabel), mogelijke waarden: 2MMPA, 2MMPB of 2MMPC.
    - {loginnaam} = jouw AHS-loginnaam 
- Maak hierin de volgende repositories aan:
    - **open_the_gates_for_data_app**. Bevat de applicatie volgens de opgelegde mappenstructuur.
    - **open_the_gates_for_data_docs**. Bevat productiedossier, screenshots, ... volgens de opgelegde structuur.

### Mappen en bestanden

- **open_the_gates_for_data_app** (folder) 
- **open_the_gates_for_data_docs** (folder)
    - images (folder, bevat afbeeldingen die relatief gelinkt zijn in dossier.md)
    - dossier.md
    - dossier.pdf (pas toevoegen net voor de deadline)
    - poster.pdf (pas toevoegen net voor de deadline)
    - presentatie.pdf (pas toevoegen net voor de deadline)
    - README.md (Bevat een synopsis van de applicatie + relatieve links naar de andere bestanden binnen deze folder)
    - screencast.mpeg (pas toevoegen net voor de deadline)
    - screenshot_320.png
    - screenshot_480.png
    - screenshot_640.png
    - screenshot_800.png
    - screenshot_960.png
    - screenshot_1024.png
    - screenshot_1280.png  
    - timesheet.xslx  
    
### App structuur

- **open_the_gates_for_data_app** (folder)
    - app (folder)
        - data (folder)
            - kan JSON bestanden bevatten
        - docs (folder)
            - install.md
        - images (folder)
            - icons (folder)
                - favicon.ico
                - verschillende touch iconen
        - scripts (folder)
        - styles (folder)        
            - images (folder)
            - fonts (folder)
            - scss (folder)
        - 404.html
        - humans.txt
        - index.html
        - manifest.webapp
        - robots.txt
        - sitemap.xml   
    - bower_components (folder - niet op Git)
    - dist (folder)
        - .gitkeep
    - node_modules (folder - niet op Git)
    - test (folder)
        - .gitkeep
    - .bowerrc
    - .gitattributes
    - .gitignore
    - .jscsrc
    - .jshintrc
    - bower.json
    - gulpfile.js
    - LICENSE
    - package.json
    - README.md    

### Branches

Gebruik git met de [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).

Nieuwe branch per functionaliteit, nadat de functionaliteit klaar is voor productie (nadat alle testen succesvol verlopen zijn), dan wordt de branch in de master branch gemerged.

#### Commit Prefixes

|Prefix|Verklaring|
|:-----|:---------|
|[FEATURE]|Deelfunctionaliteit|
|[FIX]|Bugfix|
|[TASK]|Bijv. refactoring (structuur, naamgeving aanpassen), updates van derden toepassen.|
|[WIP]|*Work in Progress,* voor tussentijdse commits van iets wat nog niet af is.|

### Voorbeeld

Branch `account-feature`:

 - [FEATURE] Add user registration form and save data to db
 - [TASK] Rename field `lastname` to `familyname`   
 
Timesheet
----------

### Waarom?

Waarom?

Klanten/werkgevers weten graag hoe lang je aan iets zal werken en hoe lang je er effectief aan gewerkt hebt. Een realistische inschatting maken van hoelang iets zal duren kan enkel op basis van (lange) werkervaring. Daarom is het belangrijk dat je nu al bijhoudt hoe lang iets duurt, zodat je deze softskill leert. Dit is geen plezante bezigheid, maar maak er een gewoonte van om dit fequent bij te houden. Achteraf nog weten hoelang je aan iets gewerkt hebt is vaak nog lastiger.

Hoe?

Houd dagelijks een timesheet bij in Excel. Vermeld per dag de (deel)functionaliteit(en) waaraan je gewerkt hebt en hoe lang. De kleinste opdeling is een kwartier (0,25 uur). Iedere student moet **minimaal 70 uur** besteden aan deze opdracht buiten de lesuren. Dat komt ongeveer 8,75 uur per week, indien spreiding voorzien. Alle studenten binnen een groep moeten een gelijkaardig aandeel hebben in het **dev** en **design** gedeelte. Bij ondermaatse prestatie (kwaliteit, uren, dev / design gedeelte) wordt dit afgerekend! 

### Voorbeeld

|Datum|Student|Domein|Taak|Tijd|
|----:|:------|:-----|:--|----:|
|2016-03-24|Philippe De Pauw|DEV|Doctrinemigration voor user|0,25 uur|
|2015-03-26|Jonas Pottie|DES|Registratieformulier|3,75 uur|
|2016-04-15|Student x|DEV|x|1,5 uur|
|2015-05-22|Alle studenten|-|**Totaal**|**168 uur**|  


Presentatie
-----------

Tijdens de presentie toon je aan:

- dat de frontend correct werkt;
- dat het project een geautomatiseerde workflow bevat;
- dat alle items op de checklist aanwezig zijn;
- of er eventuele extra's toegevoegd zijn.

Zorg voor een grafisch verzorgde presentatie en verzorgd taalgebruik. Gebruik PowerPoint (of alternatieven), screencasts en live demonstraties

> **Controleer extra goed op spellingsfouten!**


Digitaal
--------

### Chamilo

> **Opgelet:** In te dienen op de deadline.
> **Controleer extra goed op spellingsfouten!**

Naamgeving zip-bestand:

 - `openthegatesfordata_nmdad1.zip`, bijv.: `openthegatesfordata_nmdad1.zip`

> **Structuur zie Source Code Management**
        
### Hosting Arteveldehogeschool

> **Opgelet:** Online op de deadline.
> Voorbeeld URL: http://www.arteveldehogeschool.be/campusGDM/studenten_201516/loginnaam/nmdad1/openthegatesfordata  
> **Controleer extra goed op spellingsfouten!**


[7-1 Architectuur]: http://sass-guidelin.es/#architecture
[Foundation for Emails]: http://foundation.zurb.com/emails.html
[Gulp]: http://gulpjs.com
[jQuery]: http://jquery.com
[SCSS]: http://sass-lang.com
[Style Tiles]: http://styletil.es