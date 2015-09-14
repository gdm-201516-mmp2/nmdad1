BEM, OOCSS en SMACSS
====================

|Info|  |
|----|---|
|Olod|New Media Design & Development I|
|Auteur(s)|Philippe De Pauw - Waterschoot, Jonas Pottie|
|Opleiding|Bachelor in de Grafische en digitale media|
|Academiejaar|2015-16|

***

Inleiding
---------

OOCSS
-----

> Basically, a CSS “object” is a repeating visual pattern, that can be abstracted into an independent snippet of HTML, CSS, and possibly JavaScript. That object can then be reused throughout a site.

OOCSS is een programmeer paradigma. OOCSS staat voor Object Oriented CSS. De principes van een object geörienteerde programmeertaal, zoals: C#, Java, e.d., worden toegepast op CSS.

OOCSS is een methodologie om herbruikbare modulaire CSS te schrijven met de nadruk op snelheid, schaalbaarheid en gemakkelijk te onderhouden.

OOCSS werd voor het eerst geïntroduceerd door [Nicole Sullivan](http://www.stubbornella.org/content/) en is gekenmerkt op twee principes, namelijk: 

* Separating structure from skin: separeren van de positionering en stijl van een element of object. Een CSS klasse mag dus geen combinatie bevatten van structuur/postie en skin/stijl eigenschappen.
* Separating container from content: afhankelijkheid van een component met zijn container doorbreken. Elk object kan geplaatst worden in een andere container met behoud van vorm en gedrag.

```
.btn-small {
	width: 200px;
	padding: 10px;
	border: solid 1px #ccc;
	background: linear-gradient(#ccc, #222);
	box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;
}
.btn-large {
	width: 600px;
	padding: 20px;
	border: solid 1px #ccc;
	background: linear-gradient(#ccc, #222);
	box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;
}
```

Bekijken we het bovenstaande voorbeeld, dan merken we generieke instellingen op betreffende `border`, `background` en `box-shadow`. We kunnen deze eigenschappen beter onder een gemeenschappelijke noemer toevoegen.

```
.btn {
	border: solid 1px #ccc;
	background: linear-gradient(#ccc, #222);
	box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;
}
.btn-small {
	width: 200px;
	padding: 10px;
}
.btn-large {
	width: 600px;
	padding: 20px;
}
```

Onderstaand voorbeeld [Media object](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/) door Nicole Sullivan.

HTML:

```
<div class="media attribution">

  <a href="http://twitter.com/stubbornella" class="img">
    <img src="http://stubbornella.com/profile_image.jpg" alt="me" />
  </a>

  <div class="bd">
    @Stubbornella 14 minutes ago
  </div>

</div>
```

CSS:

```
/* ====== media ====== */
.media {margin:10px;}
.media, .bd {overflow:hidden; _overflow:visible; zoom:1;}
.media .img {float:left; margin-right: 10px;}
.media .img img{display:block;}
.media .imgExt{float:right; margin-left: 10px;}
```

Wanneer een website groeit in omvang betekent dit meestal een enorme toename van CSS selectoren. Na een tijdje is dit nog moeilijk hanteerbaar. Daarom zoeken we naar generieke elementen elementen binnen een website, die we vervolgens modulair maken. Op deze manier kunnen we CSS klassen hergebruiken en worden de CSS bestanden ook niet exponentieel groter. OOCSS zorgt ervoor dat het aantal vermeldingen van klassen via `class` attribuut in de HTML toeneemt. Kleinere CSS bestanden met de OOCSS methodologie toegepast zorgt voor snelle websites.

###Richtlijnen

* Vermijd het gebruik van **descendent** selectoren: `.widget h3`
* Vermijd IDs om elementen te stijlen. IDs in HTML mogen enkel gebruikt worden voor grote secties in de webpagina, zoals: header, main, footer, e.d. of voor unieke elementen die via JavaScript moeten aangesproken worden.
* Vermijd klassen rechtstreeks te verbinden aan elementen: `header.header`
* Vermijd het gebruik van `!important`
* Kijk jouw CSS na via [CSS Lint](http://csslint.net/), [CSS validator](https://jigsaw.w3.org/css-validator/), [Code Beautify](http://codebeautify.org/cssvalidate), e.d.
* Gebruik grid systemen

###Praktische voorbeelden

####Voorbeeld 1

HTML:

```
...
<body>
	<div class="header">
	</div>
	<div class="main">
	</div>
</body>
```

CSS:

```
.header {
	width:1140px;
	margin:0 auto;
	position:relative;
	padding:24px;
	overflow:hidden;
	background:#333;
}
.footer {
	width:1140px;
	margin:0 auto;
	position:relative;
	padding:24px;
	overflow:hidden;
	background:#666;
}
```

In het bovenstaande voorbeeld merken we redundante instellingen op betreffende de structuur of positie van een element. Dit moeten we vermijden! Oplossing: aanmaak van een nieuwe selector `.container` waarin we deze instellingen implementeren.

HTML:

```
...
<body>
	<div class="header container">
	</div>
	<div class="main container">
	</div>
</body>
```

CSS:

```
.container {
	width:1140px;
	margin:0 auto;
	position:relative;
	padding:24px;
	overflow:hidden;
}
.header {
	background:#333;
}
.footer {
	background:#666;
}
```

####Voorbeeld 2

BEM
---

BEM staat voor *block, element, modifier* en is een frontend naam methodlogie ontwikkeld door [Yandex](http://yandex.ru/). Het is een manier om andere ontwikkelaars CSS klassen meer transparantie en betekenis te geven, het is strikt en informatief.

**Block** is een entiteit dat op zichzelf kan bestaan, bv.: `header`, `container`, `menu`, `checkbox`, ... . Een **Element** vormt een deel van een entiteit en kan op zichzelf niet bestaan. Het is semantisch verbonden aan de entiteit of ouder, bv.: `menu item`, `list item`, `header title`, ... . Een **Modifier** verandert de status van een entiteit qua vorm en/of gedrag, bv.: `disabled`, `highlighted`, `checked`, `size big`, ... . In de BEM syntax mag men geen gebruik maken van IDs, enkel klasnamen en is een `block` en `element` niet afhankelijk van andere `blocks` of `elementen`.

De naamconventie volgt de volgende pattronen:

CSS:
```
.block {}
.block__element {}
.block--modifier {}
```

* `.block` representeert een component of een hoger niveau van abstarctie
* `.block__element` representeert een afstammeling (descendant) van `.block` die invloed uitoefent op de vorm/gedrag van `.block`
* `.block--modifier` representeert een andere status of versie van `.block`.

HTML:
```
<div class="block block--modifier">
	<div class="block__element block__element--modifier">
	</div>
</div>
```

Om een `.block__element` in te stellen gebasseerd op de modifier `.block--modifier` via CSS:

`.block--modifier .block__element { display:none; }`

Modifier van het element:

`.block__element--modifier { display:none; }`

HTML:
```
<form class="form form--theme-ahs form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>
```

CSS:

```
.form { /* ... */ }
.form--theme-ahs { /* ... */ }
.form--simple { /* ... */ }
.form__input { /* ... */ }
.form__submit { /* ... */ }
.form__submit--disabled { /* ... */ }
```

De klasse `.form` is een `block` en bevat de modifiers `.form--theme-ahs` en `.form--simple`. Het formulier bevat twee elementen, namelijk `.form__input` en `.form__submit`. De **submit** knop bevat tevens een modifier, namelijk `.form__submit--disabled`.

###Voorbeeld 1

HTML:

```
<div class="media">

  <a href="http://twitter.com/stubbornella" class="media__img-link">
    <img class="img-link__img" src="http://stubbornella.com/profile_image.jpg" alt="me" />
  </a>

  <div class="media__body">
    @Stubbornella 14 minutes ago
  </div>

</div>
```

CSS:

```
/* ====== media ====== */
.media {margin:10px;}
.media__body {overflow:hidden; _overflow:visible; zoom:1;}
.media__img-link {float:left; margin-right: 10px;}
.img-link__img{display:block;}
```

###Voorbeeld 2 (behance card)

Behance Card uit een bepaald bord:

![Behance Card](images/behance.png)

De anatomy (atomen) van zo'n kaart bestaat uit:

* afbeelding
* titel
* auteur(s)
* divider
* categorie(ën)
* icoon + cijfer voor appreciatie
* icoon + cijfer voor het aantal views
* icoon + tooltip voor publicatiedatum

De bovenstaande onderdelen kunnen we groeperen (moleculen):

* afbeelding
* info (titel + auteur)
* metadata (categorieën + divider + [icoon + cijfers/tooltip]*3)

Deze drie onderdelen vormen een kaart (organisme of component). We kunnen deze onderdelen in de volgende HTML structuur gieten:

```
<div class="card">
	<section class="card__picture">
		<a class="picture__link" href="">
			<picture class="picture__element">
				<img src="" alt="" />
			</picture>
		</a>		
	</section>
	<section class="card__info">
		<h2 class="info__title">
			<a class="title__link" href="">
			</a>
		</h2>
		<p class="info__author">
		</p>
	</section>
	<section class="card__metadata">
		<section class="metadata__fields">
			<a class="fields__field"></a>
		</section>
		<hr>
		<section class="metadata__stats">
			<span class="stats__likes"></span>
			<span class="stats__views"></span>
			<span class="stats__pub-date"></span>
		</section>		
	</section>
</div>
```











[Get BEM](http://getbem.com/introduction/)
[About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
[Atomic OOBEMITSCSS](http://www.sitepoint.com/atomic-oobemitscss/)
[Organizing CSS: OOCSS, SMACSS, and BEM](https://mattstauffer.co/blog/organizing-css-oocss-smacss-and-bem)
[http://www.smashingmagazine.com/2013/08/other-interface-atomic-design-sass/](http://www.smashingmagazine.com/2013/08/other-interface-atomic-design-sass/)

Bronnen
-------

[OOCSS](http://appendto.com/2014/04/oocss/)
[OOCSS Smashing Magazine](http://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/)
[OOCSS Slideshare](http://www.slideshare.net/stubbornella/object-oriented-css)
[Atomic OOBEMITSCSS](http://www.sitepoint.com/atomic-oobemitscss/)