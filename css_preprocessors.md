|Info| |
|----|----|
|Auteur(s)|Philippe De Pauw - Waterschoot|
|Opleiding|Grafische en Digitale Media|
|Academiejaar|2015-16|

***

CSS Preprocessors
=================

[SASS Website](http://sass-lang.com/)

Stylesheets worden groter, meer complex en harder om te onderhouden. Een preprocessor, zoals Sass, kan hierbij helpen. Sass laat toe om eigenschappen te gebruiker die niet bestaan in normale CSS, zoals: variabelen, nesting, mixins, inheritance (overerving) en anderen.
Sass-bestanden worden gecompileerd naar normale CSS-bestanden, die vervolgens gebruikt worden in een website. 


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

Een variabele kunnen we ook binnen een bepaalde selector definiëren. De scope van deze variabele kunnen we globaal maken d.m.v. `!global` keyword.

