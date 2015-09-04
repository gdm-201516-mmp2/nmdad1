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

Via een mixin kunnen we CSS declaraties groeperen die we kunnen gebruiken in andere Sass bestanden. Een mixin is gelijkaardig met een JavaScript functie eventueel voorzien van argumenten, waardoor deze mixin flexibel wordt. Een goed voorbeeld van een mixin is het gebruik hiervan voor **vendor prefixes***.

```
@mixin transform-rotate($rotate){
	-webkit-transform: rotate($rotate +'deg');
	-moz-transform: rotate($rotate +'deg');
	-ms-transform: rotate($rotate +'deg');
	transform: rotate($rotate +'deg');
}

.box { 
	@include transform-rotate(45); 
}
``` 

Om een mixin aan te maken gebruiken we de `@mixin` directive gevolgd door een naam, in dit geval `transform-rotate`. Deze mixin bevat een argument `rotate`, waar we bij aanroep de rotatiehoek aan toekennen. De mixin kan gebruikt worden d.m.v. `@include` directive gevolgd door de naam van de mixin al dan niet aangevuld met waarden voor de desbetreffende argumenten.

```
.box {
  -webkit-transform: rotate("45deg");
  -moz-transform: rotate("45deg");
  -ms-transform: rotate("45deg");
  transform: rotate("45deg"); }
```

###Extend/Inheritance

Overerving is één van de meest toegepast Sass feature. Met `@extend` kunnen we CSS eigenschappen delen van een selector naar een andere.

```
.message{
	border:1px solid #bbb;
	background:#ddd;
	color:#333;
	padding:6px 12px;
}
.success{
	@extend .message;
	
	border-color:#3f3;
	background-color:#3f3;
}
.warning{
	@extend .message;
	
	border-color:#fa1;
	background-color:#fa1;
}
.error{
	@extend .message;
	
	border-color:#f11;
	background-color:#f11;
}
```

Generieke CSS eiegenschappen worden beschreven in de base selector in dit geval `.message`. Deze eigenschappen worden toegepast op de selectoren indien ze voorzien worden van de `@extend` directive.

```
.message, .success, .warning, .error {
  border: 1px solid #bbb;
  background: #ddd;
  color: #333;
  padding: 6px 12px; }

.success {
  border-color: #3f3;
  background-color: #3f3; }

.warning {
  border-color: #fa1;
  background-color: #fa1; }

.error {
  border-color: #f11;
  background-color: #f11; }
```

###Operatoren

Standaard wiskundige (Math) operatoren worden ondersteund: `+`, `-`, `*`, `/` en `%`.

```
section[role="main"] {
  float: left;
  width: 680px / 1140px * 100%;
}

aside[role="sidebar"] {
  float: left;
  width: 460px / 1140px * 100%;
}
```

Resulteert in:

```
section[role="main"] {
  float: left;
  width: 59.64912%; }

aside[role="sidebar"] {
  float: left;
  width: 40.35088%; }
```

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
  
CSS Extensions
--------------

###Nested

```
#main {
  width: 97%;

  p, div {
    font-size: 2rem;
    a { font-weight: bold; }
  }

  blockquote { font-size: 3rem; }
}
```

```
#main {
  width: 97%; }
  #main p, #main div {
    font-size: 2rem; }
    #main p a, #main div a {
      font-weight: bold; }
  #main blockquote {
    font-size: 3rem; }
```

###Referencing parent selector: &

```
a {
  font-weight: 700;
  text-decoration: none;
  &:hover { text-decoration: underline; }
  body.chrome & { font-weight: 300; }
}
```

`&` wordt vervangen door de parent selector. Kan zowel voor een pseudoklasse als na een andere selector (spatie voorzien) toegevoegd worden.

```
a {
  font-weight: 700;
  text-decoration: none; }
  a:hover {
    text-decoration: underline; }
  body.chrome a {
    font-weight: 300; }
```

```
.btn {
  border:1px solid #bbb;
  background:#bbb;
  color:#333;
  width:auto;
  padding:6px 12px;
  
  &--large {
    width:100%;
    padding:12px 24px;    
  }
  
  &__label {
    font-size:2rem;
    font-weight:700;
  }
  
  &:hover {
    border-color:#333;
    background-color:#333;
    color:#bbb;
  }
}
```

```
.btn {
  border: 1px solid #bbb;
  background: #bbb;
  color: #333;
  width: auto;
  padding: 6px 12px; }
  .btn--large {
    width: 100%;
    padding: 12px 24px; }
  .btn__label {
    font-size: 2rem;
    font-weight: 700; }
  .btn:hover {
    border-color: #333;
    background-color: #333;
    color: #bbb; }
```

Comments
--------


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