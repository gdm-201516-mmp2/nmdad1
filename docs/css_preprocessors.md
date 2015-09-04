CSS Preprocessors
=================

|Info|  |
|----|---|
|Olod|New Media Design & Development I|
|Auteur(s)|Philippe De Pauw - Waterschoot, Jonas Pottie|
|Opleiding|Bachelor in de Grafische en digitale media|
|Academiejaar|2015-16|

***

Inleiding
---------

Stylesheets worden groter, meer complex en harder om te onderhouden. Een preprocessor, zoals Sass, kan hierbij helpen. Sass laat toe om eigenschappen te gebruiker die niet bestaan in normale CSS, zoals: variabelen, nesting, mixins, inheritance (overerving) en anderen.
Sass-bestanden worden gecompileerd naar normale CSS-bestanden, die vervolgens gebruikt worden in een website. 
	
###Variabelen

Variabelen in Sass worden gedefinieerd door het symbool `$` gevolgd door de naam van de variabele. Na het `:` kennen we een waarde toe aan deze variabele.

```
$primary-font-family:    Helvetica, sans-serif;
$primary-font-size:16px;
$primary-color: #333;

body {
  font: $primary-font-size $primary-font-family;
  color: $primary-color;
}
```

De variabele wordt vervangen door de waarde, die we eraan hebben toegekend, na compilatie:

```
body {
  font: 16px Helvetica, sans-serif;
  color: #333; }
```

###Nesting

Sass laat toe om dezelfde visuele hiërcharchy van HTML toe te passen op CSS selectoren. Overdreven gebruik van **nesting** zorgt ervoor dat de CSS moeilijk te onderhouden is, beperk dus de diepte (levels).

In het volgende voorbeeld definiëren we een typische navigatie voor een website.

```
nav {
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		
		li {
			display: inline-block;
			
			a {
				display: block;
				padding: 6px 12px;
				text-decoration: none;
				background:#333;
				color:#ddd;
			}
		}
	}
}
```

Na compilatie resulteert dit in:

```
nav ul {
  list-style: none;
  margin: 0;
  padding: 0; }
  nav ul li {
    display: inline-block; }
    nav ul li a {
      display: block;
      padding: 6px 12px;
      text-decoration: none;
      background: #333;
      color: #ddd; }
```

###Partials en import

Partials zijn kleine **snippets** van CSS die we kunnen integreren (include) in andere Sass bestanden. Op deze manier kunnen we CSS modulair maken waardoor deze gemakkelijker te onderhouden zijn. Naamconventie: `_naamvandepartial.scss`. De underscore `_` laat Sass weten dat dit een partial bestand is waardoor deze niet zal gecompileerd worden in een CSS bestand. Sass partials kunnen gebruikt worden via `@import` directive.

Nadeel van het gebruik van `@import` in CSS is dat het telkens een nieuw **HTTP request** uitvoert. Sass heeft dat nadeel niet vermits het geïmporteerde bestand combineert met de file, die deze import bevat. Dat resulteert in slechts één CSS bestand.

```
// _reset.scss

html,
body,
ul,
ol {
   	margin: 0;
  	padding: 0;
}
```

```
// base.scss

@import 'reset';

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}

```

Wanneer we een partial importeren hoeven we niet de `_` en de extensie `.scss` te vermelden. Sass is slim genoeg om dit zelf te bepalen.

De bovenvermelde Sass resulteert in één bestand `base.css`:

```
html,
body,
ul,
ol {
  margin: 0;
  padding: 0; }

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef; }
```

###Mixins





Installatie
-----------

|Applicaties||
|-----------|---|
|Koala|http://koala-app.com/|
|Mixture|http://mixture.io/|
|Scout|http://mhs.github.io/scout-app/|

|Commandline||
|-----------|---|
|Linux|`sudo su -c "gem install sass"`|
|Windows|via [Ruby Installer](http://rubyinstaller.org/)|
|Mac|Pre-installed|

Installatie van Sass via commandline:

* Open terminal of command prompt
* Installatie van sass
	* `gem install sass`
	* `sudo gem install sass` (installatie als superuser)
	* `sass -v` (nakijken versie sass)

Variabelen
----------

Een variabele kunnen we ook binnen een bepaalde selector definiëren. De scope van deze variabele kunnen we globaal maken d.m.v. `!global` keyword.

```
#main {
  $width: 760/16*1em !global;
  width: $width;
}

#sidebar {
  width: $width/2;
}
```

Resultaat:

```
#main {
  width: 47.5em; }

#sidebar {
  width: 23.75em; }
```

Willen we de lijnhoogte opgeven in het font CSS-attribuut via `/`, dan moeten we de variabelen omsluiten door `#{...}`.

```
$primary-font-family:    Helvetica, sans-serif;
$primary-font-size:16px;
$primary-font-lineheight:1.46;
$primary-color: #333;

body {
  font: #{$primary-font-size}/#{$primary-font-lineheight} $primary-font-family;
  color: $primary-color;
}
```

Resultaat:

```
body {
  font: 16px/1.46 Helvetica, sans-serif;
  color: #333; }
```


Bronnen
-------
* [SASS Website](http://sass-lang.com/)
* [Compass](http://compass-style.org/)