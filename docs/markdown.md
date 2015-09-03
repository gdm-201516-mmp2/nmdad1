Markdown
=======================================

|Info|  |
|----|---|
|Olod|New Media Design & Development I|
|Auteur(s)|Philippe De Pauw - Waterschoot, Jonas Pottie|
|Opleiding|Bachelor in de Grafische en digitale media|
|Academiejaar|2015-16|

***

Ontwikkeld in 2004 door John Gruber met toevoegingen door Aaron Swartz. Een syntax om geformatteerde “plain text” documenten aan te maken. Markdown is eenvoudig te lezen en te schrijven. Kan o.a. geconverteerd worden naar **HTML** of **PDF** d.m.v. bepaalde tools, bv. Markdown.pl (Perl script). Markdown bestanden bevatten de extensie ".md" of ".markdown". Bij voorkeur ".md"!

Wordt gebruikt om o.a. "readme"-bestanden aan te maken, bv. op **GitHub, Bitbucket, OpenStreetMap, SourceForge**, … . Wordt ook gebruikt in SSG (Static Site Generators) om statische webpagina’s aan te maken, alsook in CMS via teksteditors. Extra features, zoals tabellen, voetnoten, definitielijsten worden toegevoegd via andere markuptalen (Markdown Extra, Kramdown, Pandoc, …).

Er zijn redelijk wat online editoren beschikbaar om Markdown-bestanden aan te maken:

- StackEdit  
https://stackedit.io/
- Markable  
http://markable.in/
- Markdown Viewer  
http://www.markdownviewer.com/    
- Dillinger  
http://dillinger.io/

##Markdown syntax

HTML-markup dat niet ondersteund wordt door Markdown, moet geschreven worden in HTML. Deze HTML-markup moet wel gescheiden worden van de omliggende Markdown-inhoud d.m.v. een lege regel en de start- en eind-tags mogen niet voorzien worden van spaties of tabs. Markdown-stijlen kunnen niet toegevoegd worden binnen HTML-tags. HTML-tags kunnen wel toegevoegd worden binnen markdown-stijlen
Automatische “escaping” voor speciale karakters wordt door markdown ondersteund.

```
< wordt &lt;
& wordt &amp;
&copy; wordt &copy;
Web&Media wordt Web&amp;Media
```

Markdown wordt onderverdeeld in:

- **Blokelementen**
	- Paragraphs
	- Line Breaks
	- Headers
	- Blockquotes
	- Lists
	- Code blocks
	- Horizontal rules
- **Span elementen**
	- Links
	- Emphasis
	- Code
	- Images
- **Diversen**
	- Automatic links
	- Backslash escapes

###Paragraaf

> `<p>`

Een paragraaf bevat eén of meerdere lijnen van tekst en paragrafen worden gescheiden door een lege regel.

###Line Break

> `<br>` of `<br />`

Op het einde van een zin plaatsen we **minimaal twee spaties**, de volgende zin behoort dan tot deze paragraaf.

###Headers

> `<h1>` tot en met `<h6>`

Headers of headings in markdown kunnen we realiseren via twee syntaxen:

- **Setect-style** 
`<h1>` via `=` (equal sign)  
`<h2>` via `-` (dash sign)  
Eén of meerdere `=` of `-` voorzien
- **Atx-style**  
1 tot 6 `#` (sharp sign of kardinaal teken) voor de tekst voorzien  
1 `#` komt overeen met een `<h1>`  
6 `#` komt overeen met een `<h6>`  
de `#` moeten niet afgesloten worden

```
Markdown-code:

Heading h1
==========
Heading h2
----------
#Heading h1
##Heading h2
####Heading h3
#####Heading h4
######Heading h5
#######Heading h6

##Heading h2## (afsluiten hoeft niet)
```

###Blockquotes

> `<blockquote>`

Om een blockquote te definiëren gebruiken we het karakter `>`. Het is aangewezen om bij de start van elke regel het groter dan teken > te voorzien. Het is ook toegelaten om > te voorzien enkel bij de start van de eerste regel. Nested blockquotes (blockquote in een blockquote) kunnen toegevoegd worden door een extra groter dan teken > te voorzien aan het begin van de regel. Blockquotes kunnen eveneens andere markdown-elementen bevatten, bv.: headers, lists, code blocks, …

> It is important to understand that in such cases pull quotes break the usual content flow which may make it harder for the readers to actually follow the argumentation of the article. 

```
Markdown-code:

> It is important to understand that in such cases pull quotes break the usual content flow which may make it harder for the readers to actually follow the argumentation of the article. 
```

> This is the first level of quoting.
>
>> This is nested blockquote.
>
> Back to the first level.

```
Markdown-code:

> This is the first level of quoting.
>
>> This is nested blockquote.
>
> Back to the first level.
```

###Lists

> `<ul>` of `<ol>`

Twee soorten lijsten worden ondersteund in markdown, namelijk: ongeordende lijsten `<ul>` en geordende lijsten `<ol>`. Ongeordende lijsten kunnen gerealiseerd worden met de karakters `*` (asterix), `+` (plus) of `-` (koppelteken). Achter de vermelde karakters moeten we een spatie toevoegen. Geordende lijsten worden genummerd, gevolgd door een punt en een spatie. De nummering hoeft niet in volgorde te zijn, maar moeten wel **positieve gehele getallen** zijn. De gegenereerde geordende lijsten beginnen altijd met `1.`.

* Rood
* Groen
* Blauw

```
Markdown-code:

* Rood
* Groen
* Blauw
```

1014. HTML
106. CSS
8. JavaScript  

```
Markdown-code:

* Rood
* Groen
* Blauw
```

**Geneste lijsten** kunnen gerealiseerd worden door deze te laten **inspringen via de tab-toets**, gevolgd door een karakter om een listitem te genereren.

* HTML
	* HTML5
	* XHTML
* JavaScript
	* VanillaJS
	* jQuery
		1. Nice framework
		2. Most used framework in JavaScript

```
Markdown-code:

* HTML
	* HTML5
	* XHTML
* JavaScript
	* VanillaJS
	* jQuery
		1. Nice framework
		2. Most used framework in JavaScript
```

Paragrafen in lijsten mogen voorzien worden van insprongen, maar dat hoeft niet. Voorzien we een lege regel tussen twee "listitems", dan zal de inhoud van de resulterende "listitems" omsloten worden door een paragraaf. Een "listitem" kan meerdere paragrafen bevatten door een insprong te voorzien van 4 spaties of 1 tab.

1.  This is a list item with two paragraphs.     

    Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus. 

2.  Suspendisse id sem consectetuer libero luctus adipiscing.

```
Markdown-code:

1.  This is a list item with two paragraphs.     

    Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus. 

2.  Suspendisse id sem consectetuer libero luctus adipiscing.
```

Listitem kan een blockqoute bevatten: 4 spaties of een tab toevoegen gevolgd door het groter dan > teken. Listitem kan ook code bevatten: extra lege regel voorzien gevolgd door 8 spaties of twee tabs op een volgende regel. Een nummer gevolgd door een punt resulteert altijd in een listitem. Om dit te vermijden moeten we "backslash escapes" toevoegen.

* Een list item met een blockquote
    > Hey ik ben een blockquote in een lijst
* A list item with a code block:
  
        <div><strong>Hoi</strong></div>

```
Markdown-code:

* Een list item met een blockquote
    > Hey ik ben een blockquote in een lijst
* A list item with a code block:
  
        <div><strong>Hoi</strong></div>
```

2014. Wat een geweldig EK!  

2014\. Wat een geweldig EK!

```
Markdown-code:

2014. Wat een geweldig EK!  

2014\. Wat een geweldig EK!
```

###Code blocks

> `<pre><code>...</code></pre>`

Om een artikel te schrijven over programmeren of markup-talen kunnen we gebruik maken van pre-geformatteerde code blocks. In html worden deze omsloten door: `<pre><code>...</code></pre>`. In markdown voorzien we minstens 4 spaties of één tab in het begin van een regel om code te beschrijven. De karakters `&`, `< `en `>` worden geconverteerd naar HTML entities.  Markdown binnen code blocks worden niet geconverteerd naar HTML.

    <div class="copyright">        
        &copy;2014 Arteveldehogeschool            <img src="http://lorempixel.com/400/200/sports/1/" />  
    </div>

```
Markdown-code:

	<div class="copyright">        
        &copy;2014 Arteveldehogeschool            <img src="http://lorempixel.com/400/200/sports/1/" />  
    </div>
```

###Horizontal rules

> `<hr>` of `<hr />`

Horizontale regels worden gerealiseerd in markdown door tenminste drie asterisks, underscores of hyphens te voorzien op een regel.

***
___

---

```
Markdown-code:

***
___

---
```

###Links

> `<a href="..." title="...">...</a>`

Markdown ondersteunt twee linktypen: inline en reference. Een tekst die fungeert als link wordt beschreven tussen vierkante haken `[` en `]` (square brackets) . Vervolgens vermelden we de URL en het optionele title-attribuut van de link tussen `(` en `)` (parenthesis). Lokale resources, op dezelfde server van het markdown document, kunnen omschreven worden d.m.v. een relatief pad.

This is [an example](http://example.com/ "Title of example") inline link.

See my [About](/about/) page for details. 

```
Markdown-code:

This is [an example](http://example.com/ "Title of example") inline link.

See my [About](/about/) page for details. 
```

```
De resulterende HTML (voor het eerste voorbeeld):

<p>This is <a href="http://example.com/" title="Title of example">an example</a> inline link.</p>
```

Een gerefereerde link bevat i.p.v. `(...)` een tweede set van vierkante haken. Hierbinnen definiëren we het label waarmee we de referentie identificeren. Ergens in het markdown document implementeren we deze referentie gebruik makend van het voorgaande label. Omsluit het label door vierkante haken, gevolgd door een dubbelpunt, ten minste één spatie of tab, de URL en eventueel een waarde die fungeert als title-attribuut voor de link. De labels zijn niet hoofdlettergevoelig!

This is [an example][id] reference-style link naar Het Laatste Nieuws.

[id]: http://www.hln.be "Het Laatste Nieuws"

```
Markdown-code:

This is [an example][id] reference-style link naar Het Laatste Nieuws.

[id]: http://www.hln.be "Het Laatste Nieuws"
```

I get 10 times more traffic from [Google][] than from [Yahoo][] or [MSN][].

[Google]: http://google.com/        "Google Search"
[Yahoo]: http://search.yahoo.com/  "Yahoo Search"
[MSN]: http://search.msn.com/    "MSN Search"

```
Markdown-code:

I get 10 times more traffic from [Google][] than from [Yahoo][] or [MSN][].

[Google]: http://google.com/        "Google Search"
[Yahoo]: http://search.yahoo.com/  "Yahoo Search"
[MSN]: http://search.msn.com/    "MSN Search"
```

###Emphasis

> `<strong>` en `<em>`

Om een `<em>`-element aan te maken omsluiten we de tekst met een enkele asterisks `*` of een enkele underscore `_`
Om een `<strong>`-element aan te maken omsluiten we de tekst met dubbele asteriks of dubbele underscores. Indien we de asteriks en/of underscore willen voorzien als inhoud van de tekst, dan moeten we deze backspace escapen.

**The World Cup** is cool!
_I like to be a Hipster_
_The End of the **World** is upon us!_
**The World will be a _Police State_**

```
Markdown-code:

**The World Cup** is cool!
_I like to be a Hipster_
_The End of the **World** is upon us!_
**The World will be a _Police State_**
```

_\*Hey Deze tekst is voorzien van asteriks\*_

```
Markdown-code:

_\*Hey Deze tekst is voorzien van asteriks\*_
```

###Inline Code

> `<code>...</code>`

Om inline code te beschrijven in markdown omsluiten we deze code door "bactick quotes" (\`). Na rendering zullen deze quotes vervangen worden door het `<code>`-element. `&`, `<` en `> ` worden  in inline-code vertaald naar `&amp;`, `&lt;` en `&gt;`.

Om een lijn uit te printen in het console venster gebruiken we de JavaScript functie: `Console.log(message);`
``De code wordt eveneens voorzien van een backtick quote (`)``

```
Markdown-code:

Om een lijn uit te printen in het console venster gebruiken we de JavaScript functie: `Console.log(message);`
``De code wordt eveneens voorzien van een backtick quote (`)``
```

###Images

> `<code>...</code>`

Om afbeeldingen te integreren in markdown is de syntax gelijkaardig met de syntax om links te realiseren. De definitie van een afbeelding begint met een uitroepingsteken `!`. Gevolgd door de `alt`-attribuut tekst omsloten door vierkante haken. Vervolgens wordt het absoluut of relatief pad naar de afbeelding vermeld, eventueel aangevuld met het `title`-attribuut tekst. Dit alles omsloten door `(` en `)`. Inline en reference-style images worden beiden ondersteund. Dimensies van een afbeelding kunnen niet opgegeven worden in markdown.

![De Maan](http://www.digital-photography-school.com/wp-content/uploads/2010/12/lunar-eclipse.jpg "Wondermooie Maan")
![Steve Jobs][Steve J]

[Steve J]:http://www.insideris.com/wp-content/uploads/2012/04/stevejobbs.jpg "Steve Jobs"

```
Markdown-code:

![De Maan](http://www.digital-photography-school.com/wp-content/uploads/2010/12/lunar-eclipse.jpg "Wondermooie Maan")
![Steve Jobs][Steve J]

[Steve J]:http://www.insideris.com/wp-content/uploads/2012/04/stevejobbs.jpg "Steve Jobs"
```

###Diversen

**Automatische links voor URLs en email adressen** kunnen in markdown gerealiseerd worden door de link te omsluiten tussen `<` en `>`.

<http://daringfireball.net/projects/markdown/syntax>
<philippe.depauw@arteveldehs.be>

```
Markdown-code:

<http://daringfireball.net/projects/markdown/syntax>
<philippe.depauw@arteveldehs.be>
```

```
Resulterende HTML:

<p><a href="http://daringfireball.net/projects/markdown/syntax">http://daringfireball.net/projects/markdown/syntax</a> <br>
<a href="mailto:philippe.depauw@arteveldehs.be">philippe.depauw@arteveldehs.be</a></p>
```

Backslash escapes voor de volgende karakters: 

\\
\`
\*
\-
\_
\{
\}
\[
\]
\(
\)
\#
\+
\.
\!

```
Markdown-code:

\\
\`
\*
\-
\_
\{
\}
\[
\]
\(
\)
\#
\+
\.
\!
```

##Markdown Extra

Toevoegen van extra features aan de standaard Markdown-taal:

- Elementen met id/class attributen
- Tabellen
- Definition lists
- Abbreviations
- Markdown binnen HTML-elementen
- Fenced code blocks

###Tables

> 
		<table>
			<thead>
				<tr><th>...</th></tr>
			</thead>
			<tbody>
				<tr><th>...</th></tr>
			</tbody>
		</table>

De eerste lijn bevat de kolomhoofdingen. De tweede lijn bevat een separatorlijn via koppeltekens `–`. De volgende lijnen vertegenwoordigen de rijen in de tabel. Kolommen worden gescheiden via `|`. Uitlijnen van tekst kunnen we realiseren via:

- `:--` (links uitlijnen)
- `--:` (rechts uitlijnen)
- `:--:` (centreren)

Item      | Value
--------- | -----
Computer  | 1600 USD
Phone     | 12 USD
Pipe      | 1 USD

You can specify column alignment with one or two colons:

| Item      |    Value | Qty  |
| :-------- | --------:| :--: |
| Computer  | 1600 USD |  5   |
| Phone     |   12 USD |  12  |
| Pipe      |    1 USD | 234  |


```
Markdown-code:

| Item      |    Value | Qty  |
| :-------- | --------:| :--: |
| Computer  | 1600 USD |  5   |
| Phone     |   12 USD |  12  |
| Pipe      |    1 USD | 234  |
```

###Definition Lists

> 
		<dl>
			<dt>Term 1</dt>
			<dd>Definition A</dd>
			<dd>Definition B</dd>
			<dt>Term 2</dt>
		</dl>

**Definition lists** bestaan uit termen en definities van deze termen, gelijkaardig met een woordenboek. Een term wordt vermeld op een aparte regel. De definities voor deze termen worden voorafgegaan door een dubbelpunt `:`. Iedere definitie wordt genoteerd op een aparte regel. Tussen de volgende term en de eventueel voorafgaande definitie moet een lege regel voorzien worden.

Term 1
Term 2
:   Definition A
:   Definition B

Term 3

:   Definition C

:   Definition D

	> part of definition D


```
Markdown-code:

Term 1
Term 2
:   Definition A
:   Definition B

Term 3

:   Definition C

:   Definition D

	> part of definition D
```


###Abbreviations

> `<abbr title="...">...</abbr>`

Abbreviations zijn afkortingen. We definiëren een asterisk gevolgd door de afkorting omsloten door vierkante haken. Vervolgens, na een dubbelpunt, lichten we de afkorting toe via tekst.

The HTML specification is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]: World Wide Web Consortium

```
Markdown-code:

The HTML specification is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]: World Wide Web Consortium
```

###Footnotes


Voetnoten gedragen zich als reference-style links. Bestaan uit een marker in de tekst (zal geconverteerd worden naar een superscript number) en de voetnootdefinitie, dat zal geplaatst worden in een lijst van voetnoten op het einde van het document. Voetnoten zijn uniek en kunnen niet meerdere keren gebruikt worden!. De nummering van de voetnoten in de output worden gegenereerd van boven naar beneden van het markdown-document. Het label bevat `^` als prefix en wordt omsloten door vierkante haken.

You can create footnotes like this[^foot1].

That's some text with a footnote.[^foot2]

[^foot1]: And that's the footnote.

[^foot2]: Here is the *text* of the **footnote**.

```
Markdown-code:

You can create footnotes like this[^foot1].

That's some text with a footnote.[^foot2]

[^foot1]: And that's the footnote.

[^foot2]: Here is the *text* of the **footnote**.

```

```
Resulterende HTML van het eerste deel uit het bovenstaande voorbeeld:

<p>You can create footnotes like this<a href="#fn:foot1" id="fnref:foot1" title="See footnote" class="footnote">3</a>.</p>
<p>That’s some text with a footnote.<a href="#fn:foot2" id="fnref:foot2" title="See footnote" class="footnote">4</a>
</p>

Resulterende HTML van het tweede deel uit het bovenstaande voorbeeld:

<div class="footnotes"><hr><ol><li id="fn:stackedit"><a href="https://stackedit.io/">StackEdit</a> is a full-featured, open-source Markdown editor based on PageDown, the Markdown library used by Stack Overflow and the other Stack Exchange sites. <a href="#fnref:stackedit" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:gfm"><strong>GitHub Flavored Markdown</strong> (GFM) is supported by StackEdit. <a href="#fnref:gfm" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:foot1">And that’s the footnote. <a href="#fnref:foot1" title="Return to article" class="reversefootnote">↩</a></li><li id="fn:foot2">Here is the <em>text</em> of the <strong>footnote</strong>. <a href="#fnref:foot2" title="Return to article" class="reversefootnote">↩</a></li></ol></div>
```

###Fenced code blocks

Fenced code blocks zijn code blocks zonder extra spaties of tabs. We moeten een **start fence** en **eind fence** voorzien, elk op een aparte regel. Gebruik van een tilde `~` of backtick \` als karakter voor een fence zijn toegelaten. Na de eerste fence kunnen we de waarde van het class attribuut vermelden, die gebruikt kan worden door **syntax highlighters**. In vele online service wordt enkel backtick \` met een vast aantal, namelijk drie.

```javascript
// Foo
var bar = 0;
```

##Bibliografie

> **Markdown:**
> 
- <http://en.wikipedia.org/wiki/Markdown>
- <http://en.wikipedia.org/wiki/Lightweight_markup_language>
- <http://daringfireball.net/projects/markdown/>
- <http://fletcherpenney.net/multimarkdown/>
- <http://markable.in/file/aa191728-9dc7-11e1-91c7-984be164924a/>
- <http://mashable.com/2013/06/24/markdown-tools/>
>
> **Markdown Extra:**
>  
- <http://en.wikipedia.org/wiki/Markdown_Extra>
- <https://michelf.ca/projects/php-markdown/extra/>