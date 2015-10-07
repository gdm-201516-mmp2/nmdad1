Responsive Apps
===============

|Info|  |
|----|---|
|Olod|New Media Design & Development I|
|Auteur(s)|Philippe De Pauw - Waterschoot, Jonas Pottie|
|Opleiding|Bachelor in de Grafische en digitale media|
|Academiejaar|2015-16|

***

* [Apps](#apps)
    * [Soorten Apps](#soorten)
    * [Mobiele platformen](#mobiele-platformen)
* [Lay-outs](#lay-outs)
    * [Fixed lay-out](#fixed-lay-out)
    * [Relative lay-out](#relative-lay-out)
    * [Grid-systeem](#grid-systeem)
    * [Fixed lay-out met een grid-systeem](#fixed-lay-out-met-een-grid-systeem)
* [Responsive webdesign](#responsive-webdesign)
    * [Progressive enhancement](#progressive-enhancement)
    * [Media queries](#media-queries)
    * [Responsive images](#responsive-images)
    * [Responsive Mobile First grid-systeem](#responsive-mobile-first-grid-systeem)
***

Apps
----

Een app is de afkorting voor applicatie. Een app is software die draait op een toestel. Het kan uitgevoerd worden op een pc, smartphone, tablet, het internet of andere electronische toestellen.

###Soorten

We onderscheiden een aantal soorten apps, namelijk:

* desktop app
* webapp
* native app
* hybride app

Een **desktop app**:

- is een applicatie die zelfstandig draait (stand alone) op een desktop- of laptop computer, kortom binnen een besturingssysteem.
- wordt gedownload en geÃ¯nstalleerd op een pc.
- bevat een uitvoerbaar bestand (executable), waarmee de applicatie zal opgestart worden.

Een **webapp**:

- is de afkorting voor webapplicatie.
- is een website.
- draait binnen een webbrowser.
- wordt gecodeerd in een programmeertaal die door de webbrowser ondersteund wordt.

> **Voordelen:**
>
> - Implementatie via webtechnologieÃ«n, zoals: HTML, CSS, JavaScript en serverprogrammeertalen (ASP.NET, PHP, Ruby, ...)
> - Mobiele versie mogelijk via **CSS3 Media Queries**. Tekst, afbeeldingen en andere inhoud worden zo optimaal mogelijk weergegeven op het scherm van de gebruiker.
> - In de nabije toekomst kunnen we via de **Web API** meer hardware- en software functionaliteiten aanspreken van een toestel of device.

> **Nadelen:**
>
> - Hardware- en software functionaliteiten van een device zijn voorlopig nog moeilijk aanspreekbaar in verschillende webbrowsers.
> - Een internetverbinding is meestal noodzakelijk.
> - Opslag van data op het toestel zelf is beperkt.
> - Geld vragen aan de gebruiker is moeilijk, maar is wel mogelijk indien we extra gepersonaliseerde en interactive functionaliteiten aanbieden.
> - Administratie van de geldstromen moeten we zelf afhandelen.


Een **Native app**:

- is een applicatie die draait op een mobiel toestel of device, zoals op een smartphone of tablet.
- draait rechtstreeks op het besturingssysteem van het toestel zelf, en dus niet via een webbrowser.
- wordt gecodeerd in een programmeertaal die door het besturingssysteem ondersteund wordt, meestal omschreven als een native programmeertaal.
- wordt meestal gedistribueerd via centrale winkels, zoals: App Store, Play Store, Windows Phone Store, ... .

> **Voordelen:**
>
> - Alle functionaliteiten van het mobiel toestel zijn aanspreekbaar, zoals: camera, accelerometer, ... .
> - Mediabibliotheek van het mobiel toestel is toegankelijk.
> - Nauwe integratie met andere native applicaties is mogelijk.
> - Internetverbinding is meestal niet noodzakelijk. Vooral de inhoud is offline beschikbaar.
> - Geld vragen is mogelijk!
> - Administratie wordt afgehandeld door de centrale winkels.

> **Nadelen:**
>
> - Ontwikkelen per besturingssysteem:
> -- Apple iOS: Objective C
> -- Android OS: Java
> -- Windows Phone 8 OS: C#, XAML, ...
> - Hogere ontwikkelingskosten dan webapplicaties en hybride applicaties
> - Goedkeuring nodig voor plaatsing in de centrale winkels
> - De informatie is meestal niet up-to-date
> - Moet gedownload (uit de centrale winkels) en geÃ¯nstalleerd worden door de gebruiker

Een **Hybride app**:

- is een applicatie die draait op een mobiel toestel of device, zoals op een smartphone of tablet. Kan ook draaien op een desktop.
- draait onrechtstreeks op het besturingssysteem van het toestel zelf via een native container. Een native container is een webview control, die een native browser redering engine bevat. Deze native container kan ook een Runtime environment (Adobe AIR) of een Shell (Chromium Embedded Framework) zijn.
- wordt gecodeerd d.m.v. webtechnologieÃ«n: HTML, CSS en JavaScript.
- wordt meestal gedistribueerd via centrale winkels, zoals: App Store, Play Store, Windows Phone Store, ... .

> **Voordelen:**
>
> - 1x ontwikkelen en vervolgens distribueren naar de verschillende centrale winkels.
> - Cross platform.
> - Vele functionaliteiten van het mobiel toestel zijn aanspreekbaar, zoals: camera, accelerometer, ... .
> - Kan ook offline werken.

> **Nadelen:**
>
> - Iets minder snel dan pure Native applicaties.

### Mobiele platformen

Een platform is een computersysteem waarop applicaties werken. Een besturingssysteem vormt een belangrijk onderdeel van een platform en is afhankelijk van de hardware, en in het bijzonder de processorarchitectuur.

In mobiele toestellen worden meestal RISC[^RISC] processoren toegepast. De ontwikkeling van deze processoren hebben zich de laatste jaren gefocust op efficiëntie, waardoor ze energiezuinig zijn, ideaal voor mobiele toestellen.

Een RISC processor bevat één van de volgende architecturen:

- ARM-architectuur[^ARM]
- MIPS-architectuur[^MIPS]

Een CISC[^CISC] is geschikt voor allerlei soorten berekeningen en de ontwikkeling richtte zich vooral op pure kracht. De laatste jaren werd ook aandacht besteed aan efficiÃ«ntie waardoor ze ook voor mobile devices gebruikt kunnen worden. CISC processoren bevatten de x86-architectuur[^x86].

Een mobiel besturingssysteem is een besturingssysteem die aangepast moet worden aan de processorarchitectuur van het mobiel toestel.

|Mobiel OS|Omschrijving|Link|
|---------|------------|----|
|Android|Gebaseerd op de Linux kernel. Voor ARM-, MIPS- en x86-processoren.|<http://www.android.com/>|
|Android Wear|Angepaste Android-versie voor wearables zoals bijv. smartwatches|<http://developer.android.com/wear/index.html>
|MIUI|Eén van de vele alternatieve versies van Android die door de consument geÃ¯nstalleerd kan worden.|<http://en.miui.com/>|
|Fire OS|Een fork van Android die gebruikt wordt voor de tablets van Amazon|<https://developer.amazon.com/public/solutions/platforms/android-fireos>|
|Chrome OS|Gebaseerd op het opensource Chromium OS| <http://www.chromium.org/chromium-os, <http://www.youtube.com/watch?v=0QRO3gKj3qw>|
|iOS|Besturingssysteem voor alle Apple devices die een ARM-processor hebben.|<https://www.apple.com/benl/ios/>|
|Windows RT|Windows voor (tablet)computers die met ARM-processoren in plaats van x86-processoren. De naam staat waarschijnlijk voor RunTime™.|<http://windows.microsoft.com/nl-be/windows/rt>|
|Windows Phone|Voor devices met een ARM-processor. Deelt een aantal onderdelen met Windows RT.|<http://www.windowsphone.com/nl-be>|
|Blackberry OS|Het besturingssysteem van de Canadese firma Research in Motion, makers van BlackBerry smartphones.|<http://nl.blackberry.com/software/smartphones/blackberry-10-os.html>|
|Tizen|Leden van de Tizen Association zijn o.m. Samsung, Intel en Huawei. Opvolger van MeeGo (Intel & Nokia).Samsung wil op (korte) termijn Android en Bada vervangen door Tizen.|<https://www.tizen.org/>, <https://www.tizenassociation.org/members/>|
|Bada|Als één van de belangrijkste smartphone fabrikanten wil Samsung minder afhankelijk zijn van Google en Microsoft. Samsung is wil dit besturingssysteem laten samensmelten met Tizen.|<http://www.bada.com/>|
|Sailfish OS|Op Linux gebaseerd opensource besturingssysteem. Ontstaan uit Mer dat op zijn beurt ontstaan is toen Linux Foundation MeeGo opgaf ten voordele van Tizen.|<https://sailfishos.org/>|
|Firefox OS|Nu de Firefox browser niet meer zo populair is als weleer, zoekt Mozilla nieuwe afzetterreinen zoals de goedkopere smartphones.|<http://www.mozilla.org/en-US/firefox/os/>
|Ubuntu Touch|Nu Linux definitief de Desktop niet zal veroveren, richt Canonical zijn pijlen op phones en tablets.|<http://www.ubuntu.com/phone>, <http://www.ubuntu.com/tablet>|

Verwacht in 2016 (wereldwijd)[^mobileosmarket]:

- 50,3% Android
- 23,1% Windows Phone
- 21,0% iOS
- 3,0% Bada
- 2 % BlackBerry OS

Lay-outs
----------

###Fixed lay-out

Een **fixed lay-out** in webdesign is een lay-out waarbij de meeteenheid niet afhankelijk is van andere factoren, zoals de fontgrootte of de afmetingen van het browser-window, om de breedte van een webpagina te bepalen. De webpagina bevat een vaste breedte en verandert niet wanneer we:

- het browser-venster verkleinen of vergroten.
- fontgrootte aanpassen.

Meestal wordt de **absolute meeteenheid ** uitgedrukt in **pixels (px)** voor beeld en in **points (pt)**, **centimeters (cm), ...** voor print. Een **fixed grid lay-out** is een fixed lay-out die een **grid** gebruikt voor de verschillende kolommen binnen een webpagina. Een kolom bevat eveneens een vaste breedte uitgedrukt in pixels. In een fixed lay-out verandert de lay-out niet onder verschillende omstandigheden zoals bijv. bij verschillende resoluties.

Op dit moment[^now] gaan we ervan uit dat de meeste Internet gebruikers een resolutie[^pollw3] gebruiken op de desktop van minimaal **1366x768pixels** of hoger. Ongeveer 20% gebruikt een resolutie die lager is. Een grid-grootte van **1140pixels of 960pixels** worden algemeen aanvaard als vaste of maximum breedte van een webpagina. Een breedte van 960 pixels past goed op schermen met resolutie 1024x768pixels en er is nog plaats voor een kleine linker- en rechter marge, die adem-of witruimte geven.

**Voorbeeldcode fixed lay-out**

```html
<div class="wrapper">
     <div class="container">
         ...
     </div>	
 </div>
```

```css
 * {
     box-sizing:border-box;
 }
 .wrapper{
     width:100%;
     margin:0;
     padding:0;
 }
 .container{
     width:1140px;
     margin:0 auto;
}
```

In het bovenstaande voorbeeld hebben we een container gedefinieerd met een vaste breedte van 1140 pixels. Wijzigen van de fontgrootte en/of het browservenster hebben geen invloed op de breedte van deze container.

###Relative lay-out

Een relatieve lay-out is een lay-out waarbij de meeteenheid afhankelijk is van andere factoren, zoals de fontgrootte of de afmetingen van het browser-window, om de breedte van een webpagina te bepalen. De webpagina bevat een een variabele breedte en verandert wanneer we:

- het browser-venster verkleinen of vergroten.
- fontgrootte aanpassen.

De webpagina spreidt zich om de volledige breedte van het browser-venster te vullen gelijkaardig met een vloeistof (liquid) die zich verspreidt over de gehele oppervlakte van een container wanneer we deze vloeistof hierin gieten. Meestal wordt de **relatieve meeteenheid ** uitgedrukt in **percentages (%)**, **em** of **rem**  voor beeld en print. Indien de breedte van een webpagina wordt ingesteld op 86%, betekent dit 86% van de maximum breedte die het kan bevatten. Em is de hoogte van het basis-font gebruikt in een webpagina. 

> Veronderstellen we dat we een basis fontgrootte gebruiken van 16px, dan betekent 2.5em voor de fontgrootte van een h1: `16*2.5=40px`. 2.5em wordt relatief bekeken ten opzichte van 16px.

Voor echt heel grote of heel kleine schermen is deze lay-out niet echt om aan te zien.

> **Voorbeeld http://forum.politics.be:**
>
> Grote schermen
![enter image description here](https://lh6.googleusercontent.com/-h4eqPLhjpCU/U_2R-z_B51I/AAAAAAAAAG4/xl9BYmYAFcE/s0/forum_large.PNG "forum_large.PNG")
> Heel kleine schermen
![enter image description here](https://lh4.googleusercontent.com/-npmDOFg9K88/U_2SFuiYLOI/AAAAAAAAAHM/81TJpqWbLso/s0/forum_small.PNG "forum_small.PNG")
>

Andere benamingen voor een relative lay-out zijn: 

- Liquid lay-out
- Fluid lay-out
- Flexible lay-out
- Elastic lay-out

Een **fluid of liquid lay-out is een lay-out die de relatieve eenheid %** gebruikt. Een **elastic lay-out is een schaalbare lay-out op basis van standaard fontgrootte**. Relatieve eenheid gebaseerd op de font-size eigenschap uitgedrukt in **em of rem**. Indien we geen standaard font opgeven, dan zal het standaard font uit de webbrowser gebruikt worden. Meestal is dit het font "Times New Roman" met een grootte van 16 pixels.

> In Chrome via `chrome://settings/fonts`
>
> ![enter image description here](https://lh4.googleusercontent.com/-31UFrFjqR-8/U_2j4YJVEGI/AAAAAAAAAHo/iTwDORcbXrs/s0/font_chrome.PNG "font_chrome.PNG")
> 
> ![enter image description here](https://lh4.googleusercontent.com/-3HwQcnzR-Sg/U_2kAmEEF1I/AAAAAAAAAH0/ypVT480tYNw/s0/font_chrome_2.PNG "font_chrome_2.PNG")

De gebruiker kan dus ten alle tijden dit lettertype via de browserinstellingen aanpassen. Deze instelling heeft dus rechtstreekse invloed op de lay-out en typo van een webpagina.

### Grid-systeem

> *..a structure comprising a series of horizontal and vertical lines, used to arrange content.*

Een grid-systeem is een structuur bestaande uit horizontale- en verticale lijnen en wordt vervolgens gebruikt om inhoud erop uit te lijnen. Het wordt door designers gebruikt om inhoud en afbeeldingen gestructureerd te presenteren. 

Een grid-systeem geeft een solide basis om een lay-out voor designs te creëren voor webpagina's die uniform en consistent zijn doorheen de webpagina's waardoor de gebruikerservaring verbetert. 

Grid-systeem in webdesign bevat een aantal herkenbare termen, namelijk: **wrapper, container, row, column, gutter en offset**.

Een **wrapper** is een html-element die de volledige breedte omsluit van het browservenster omsluit, bevat geen padding of marges.

Een **container** is een html-element dat een absolute of relatieve breedte heeft en wordt gecentreerd binnen de wrapper. Een wrapper bevat slechts één container. Een container kan een linker- en rechter padding bevatten.

Een **row** is een html-element dat een absolute of relatieve breedte heeft en kan een negatieve linker- en rechter marge bevatten. Een container bevat één of meerdere row-elementen.

Een **column** is een html-element waarin inhoud wordt geplaatst. Deze inhoud kan over meerdere kolommen verspreid worden.

Een **gutter** is de afstand tussen de kolommen. De linker- en rechter padding van een rij is meestal gelijk aan de breedte van een gutter.

Een **offset** is de afstand die een kolom moet verplaatsen in de horizontale richting ten opzichte van de linker- of rechter kant van een rij.

> 
> $
> CONw = nc*COLw + nc*Gw + 2*CONpw + 2*ROWmw
> $
> 
> Waarbij:
> 
> - $nc$: aantal kolommen in de grid
> - $COLw$: de breedte van één kolom
> - $Gw$: de breedte van een gutter
> - $CONw$: de breedte van de container
> - $CONpw$: de breedte van de padding in horizontale richting van de container
> - $ROWmw$: de breedte van de marge in horizontale richting van een rij

Vermits meestal het aantal kolommen, de breedte van de container en de breedte van één gutter gekend zijn, kunnen we hierdoor de breedte van één kolom berkenen.

> $
> COLw = (CONw - nc*Gw - 2*CONpw - 2*ROWmw)/nc
> $

###Fixed lay-out met een grid-systeem

Voor de aanmaak van een fixed lay-out m.b.v. een grid-systeem bepalen we eerste de breedte van de container en van de gutter. In dit voorbeeld heeft de container een breedte van 1140 pixels en de gutter 24 pixels. De linker- en rechter padding van een container bedraagt de helft van de gutter, namelijk 12 pixels. Een rij bevat geen marges.

Via de universele selector (*) in CSS geven we aan alle html-elementen een initiële marge van 0 pixels en aan de padding ook 0 pixels. Daarnaast maken de linker- en rechter padding alsook de border breedte links en rechts deel uit van de opgegeven of gecalculeerde breedte van een html-element en dit via de eigenschap `box-sizing` met als waarde `border-box`. De container heeft een breedte van 1140 pixels en wordt centraal geplaatst in het browservenster.

**CSS voor de herkenbare termen uit een grid-systeem (margin gebruikt als gutter):**

```css
* {
    box-sizing: border-box;
    margin:0;
    padding:0;
}
.wrapper, .container, .row, .col {
    display:block;
}
.wrapper{
    width:100%;
}
.container{
    width:1140px;
    margin:auto;
    padding:0 12px;
}
.row{
    margin:0;
}
.row:before,
.row:after {
    content: " ";
    display: table;
}
.row:after {
    clear: both;
}
.row .row {
    margin:0 -12px;
}
.col{
    float:left;
    margin:0 12px 24px;
    overflow:hidden;
}
```

Alle kolommen worden links zwevend geplaatst en hebben een linker- en rechtermarge gelijk aan de helft van een gutter. De marge onder een kolom is gelijk aan de gutter-breedte. Alle inhoud binnen een kolom, die buiten de n de kolombreedte liggen worden afgesneden via `overflow:hidden`.

Het grid-systeem dat we willen maken moeten ook geneste grids ondersteunen. Dit betekent dat een kolom een rij kan bevatten en binnen deze laatste kunnen we terug kolommen definiëren. Dit principe is ook beter gekend als **nested grids**. Om dit te realiseren in CSS moeten we negatieve linker- en rechter marges toekennen aan de geneste rijen die gelijk zijn aan de breedte van een gutter. In ons voorbeeld bedragen deze marges -24 pixels.

In ons grid-systeem gebruiken wij 12 kolommen. Alle gegevens zijn nu gekend om de breedte van één kolom te berekenen via:

> $
> COLw = (CONw - nc*Gw - 2*CONpw - 2*ROWmw)/nc
> $
> 
> $
> COLw = (1140 - 12*24 - 2*12 - 2*0)/12 = 69
> $

De kolombreedte bedraagt dus 69 pixels. Deze waarde is noodzakelijk om alle kolommen te bereken uit deze grid, gaande van 12 kolommen tot 1 kolom.

> $
> Cew = noc*COLw + (noc-1)*Gw
> $
> 
> Voorbeeld noc = 6
> 
> $
> Cew = 6*69 + (6-1)*24 = 534
> $

Deze werkwijze passen we ook toe om de andere kolommen te berekenen, dit resulteert in:

|$noc$|$Cew$|
|-----|-----|
|12|1092|
|11|999|
|10|906|
|9|813|
|8|720|
|7|627|
|6|534|
|5|441|
|4|348|
|3|255|
|2|162|
|1|69|

De waarden kennen we vervolgens toe aan de corresponderende selectoren in CSS.

```css
.col-12{
    width:1092px;
}
.col-11{
    width:999px;
}
.col-10{
    width:906px;
}
.col-9{
    width:813px;
}
.col-8{
    width:720px;
}
.col-7{
    width:627px;
}
.col-6{
    width:534px;
}
.col-5{
    width:441px;
}
.col-4{
    width:348px;
}
.col-3{
    width:255px;
}
.col-2{
    width:162px;
}
.col-1{
    width:69px;
}
```

Om het grid-systeem visueel te testen kennen we nog een aantal kleuren toe aan de kolommen en de geneste kolommen.

```css
html{
    background:#333;
}
.col{
    background:#c0c0c0;
}
.col .col{
    background:#a0a0a0;
}
.col .col .col{
    background:#808080;
}
.col .col .col .col{
    background:#606060;
}
```

Vervolgens maken we de webpagina aan waarmee we de grid kunnen testen.

```html
<div class="wrapper">
    <div class="container">
        <div class="row">
            <div class="col col-12">col-12</div>
            <div class="col col-11">col-11</div>
            <div class="col col-1">col-1</div>
            <div class="col col-10">col-11</div>
            <div class="col col-2">col-2</div>
            <div class="col col-9">col-9</div>
            <div class="col col-3">col-3</div>
            <div class="col col-8">col-8</div>
            <div class="col col-4">col-4</div>
            <div class="col col-7">col-7</div>
            <div class="col col-5">col-5</div>
            <div class="col col-6">col-6</div>
            <div class="col col-6">col-6</div>
            <div class="col col-4">col-4</div>
            <div class="col col-4">col-4</div>
            <div class="col col-4">col-4</div>
            <div class="col col-3">col-3</div>
            <div class="col col-3">col-3</div>
            <div class="col col-3">col-3</div>
            <div class="col col-3">col-3</div>
            <div class="col col-2">col-2</div>
            <div class="col col-2">col-2</div>
            <div class="col col-2">col-2</div>
            <div class="col col-2">col-2</div>
            <div class="col col-2">col-2</div>
            <div class="col col-2">col-2</div>
            <div class="col col-1">col-1</div>
            <div class="col col-1">col-1</div>
            <div class="col col-1">col-1</div>
            <div class="col col-1">col-1</div>
            <div class="col col-1">col-1</div>
            <div class="col col-1">col-1</div>
            <div class="col col-1">col-1</div>
            <div class="col col-1">col-1</div>
            <div class="col col-1">col-1</div>
            <div class="col col-1">col-1</div>
            <div class="col col-1">col-1</div>
            <div class="col col-1">col-1</div>
        </div>
    </div>
</div>

<div class="wrapper">
    <div class="container">
        <div class="row">
            <div class="col col-12">
                col-12
                <div class="row">
                    <div class="col col-6">col-6</div>
                    <div class="col col-6">
                    col-6
                        <div class="row">
                            <div class="col col-3">col-3</div>
                            <div class="col col-3">
                                col-3
                                <div class="row">
                                    <div class="col col-2">col-2</div>
                                    <div class="col col-1">col-1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```


> **Output fixed grid lay-out**
> 
> ![enter image description here](https://lh4.googleusercontent.com/-Umzp9OwAXMI/U_8fq62pYGI/AAAAAAAAAIU/6w81C4g4gpU/s0/fixed_gridlayout.PNG "fixed_gridlayout.PNG")
> 

We merken op dat de som van de geneste kolommen gelijk is aan het aantal kolommen van de ouder (parent), bijv.: ouder col-3, de geneste kolommen col-2 en col-1.


Responsive webdesign
--------------------

Voorheen investeerde vele bedrijven in één aparte mobiele website, die inhoudelijk in grote mate gelijk was aan de originele desktop-website.  Door het vele aanbod aan resoluties volstaat één mobile website niet meer. In plaats van te werken met absolute vaste afmetingen is het veel nuttiger om websites te implementeren met relatieve eenheden, zoals: percentages, em of rem.

Responsive webdesign is een aanpak in webdesign om te streven naar een optimale weergave van de website voor een breed aanbod aan devices, zoals: desktops, smartphones, tablets, ... . Het design van een webpagina past zich aan aan de resolutie van het gebruikte toestel of device. De webpagina schaalt hierdoor mee met de afmetingen van het scherm zonder in te boeten op het gebied van gebruiksvriendelijkheid, leesbaarheid en de gebruikerservaring.

Een responsive website gebruikt o.a.:

- een fluid of elastic lay-out;
- flexibele afbeeldingen, video's en andere geïncorporeerde assets;
- CSS3 media queries.

Een fluid grid gerbuikt relatieve eenheden, zoals percentages, om het grid-systeem op te bouwen. Flexibele afbeeldingen zijn afbeeldingen waarvan de schaal zodanig wordt aangepast, zodat deze passen binnen hun container. Media queries laat ons toe om andere CSS-stijlregels te gebruiken gebaseerd op de karakteristieken van het toestel. De meest gehanteerde karakteristiek is de breedte van de browser op het toestel.

###Progressive enhancement

Progressive enhancement is een strategie in webdesign en omvat toegankelijkheid, semantische html-markup, externe stijl- en scriptbestanden. Het gaat ervan uit dat iedereen toegang heeft tot de basisinhoud en basisfunctionaliteit van een webpagina via een browser. Afhankelijk van de mogelijkheden van smartphones, tablets of pc's wordt deze basis webpagina uitgebreid met extra features. Deze werkt dus overal goed dit in tegenstelling tot **graceful degradation** waarbij we starten met een webpagina die alle inhoud en functionaliteiten bevat waarin we alle functionaliteiten uitschakelen die niet door het toestel wordt ondersteund na het optreden van fouten.

**Voorbeeld _Print This_ uit de website w3.org**
```
<p id="printthis">
<a href="javascript:window.print()">Print this page</a>
</p>
```


Links om een een webpagina uit te printen zijn een beetje nutteloos, omdat de gebruiker meestal het print-icoon hanteert. Ze kunnen wel nuttig zijn op het einde van een bepaalde wizard, bijv. om een reis te bestellen. Om deze links te realiseren is JavaScript noodzakelijk en dit via de `print()` methode uit het `window` object. Dit werkt enkel indien JavaScript toegepast kan worden. Wanneer de gebruiker JavaScript heeft uitgeschakeld, zal deze link en dus ook de actie die daaraan verbonden is niet werken. Dit resulteert in frustraties bij de gebruiker.

```
<p id="printthis">
  <a href="javascript:window.print()">Print this page</a>
</p>
<noscript>
  <p class="scriptwarning">
    Print a copy of your confirmation. 
    Select the "Print" icon in your browser,
    or select "Print" from the "File" menu.
  </p>
</noscript>
```

In het bovenstaande voorbeeld kunnen we beter de **gracefull degradation** aanpaak toepassen: vertel de gebruiker dat de link misschien niet zal werken om een welbepaalde reden of suggereer een alternatieve oplossing om de webpagina toch uit te printen.

Een betere aanpak is om een printknop pas te voorzien indien dit ondersteund wordt door de browser van de cliënt. **Progressive enhancement** betekent dat we pas functionaliteit aanbieden indien dit kan toegepast worden bij de cliënt.

```
<p id="printthis">Thank you for your order. Please print this page for your records.</p>
<script type="text/javascript">
(function(){
  if(document.getElementById){
    var pt = document.getElementById('printthis');
    if(pt && typeof window.print === 'function'){
      var but = document.createElement('input');
      but.setAttribute('type','button');
      but.setAttribute('value','Print this now');
      but.onclick = function(){
        window.print();
      };
      pt.appendChild(but);
    }
  }
})();
</script>
```

Indien de container, waarin we de toekomstige op toevoegen, aanwezig is en de globale functie `print()` aanspreekbaar is, genereren we een input-element van het button-type met als waarde: "Print this now". Vervolgens koppelen we een luisteraar aan dit input-element die luistert naar de gebeurtenis "click". In deze luisteraar roepen we de functie `window.print()` op, waardoor het document zal uitgeprint worden. We vergeten natuurlijk niet om dit input-element toe te voegen aan de container met `id="print-this"`.

In **mobile-first webdesign** wordt eerst de basisinhoud en functionaliteit ontwikkeld die werken op de 1ste generatie mobiele toestellen. Daarna wordt deze inhoud en functionaliteit uitgebreid afhankelijk van de features die het mobiel toestel of pc ondersteunen. Het is daarom dat ook de termen progressive enhancement en mobile-first webdesign nauw verweven zijn met responsive webdesign.

###Media queries

Een media query bestaat uit een mediatype en tenminste één expressie die de scope van stijlbestanden beperkt door gebruik van media-eigenschappen, zoals: width, height en kleur. 

Media queries laten toe om de presentatie van inhoud aan te passen aan en specifiek bereik van toestellen zonder dat de inhoud wordt gewijzigd. De html-structuur blijft ongewijzigd.

Een expressie resulteert in true of false. Het resultaat van een media querie is true indien het het gespecificeerde mediatype gelijk is aan het device-type, waarop de webpagina weergegeven wordt, en alle expressies true zijn.

De mediatypen die ondersteund worden in CSS zijn:

- `all`
	Geschikt  voor alle toestellen.
- `print`
	Geschikt voor paged media en documenten die bekeken worden via de print preview mode. Klaar om uitgeprint te worden.
- `screen`
	Geschikt voor computermonitoren.
- `speech`
	Bedoeld voor speech synthesizers.
- `aural`, `braille`, `projection`, `tv` en `tty`

```css
@media screen, print {
  body { line-height: 2.4em }
}
```

Indien we geen mediatype specificeren, dan wordt de waarde `all` aangenomen.  

```
<!-- CSS media query on a link element -->
<link rel="stylesheet" media="(max-width: 767px)" href="main_767.css" />

<!-- CSS media query within a stylesheet -->
<style>
@media (max-width: 767px) {
  #sidebar-right {
    background:#d0e0f0;
  }
}
</style>
```

CSS media queries kunnen toegevoegd worden aan een stylesheet link-element of binnen een stylesheet. Vergeet niet dat alle gelinkte stijlbestanden toch gedownload worden desondanks de media querie `false` is. Het gelinkte stijlbestand zal echter niet toegepast worden.

Complex media queries zijn mogelijk door gebruik te maken van logische operatoren: `not`, `and` en `only`.  De `and` operator wordt gebruikt om verschillende media features te combineren tot een enkele media querie. Alle media features moeten `true` zijn om de gecombineerde media querie `true` te maken. `not` en `only` operatoren moeten gebruikt worden bij opgegeven mediatype.

Verschillende media queries kunnen ook gecombineerd worden in een komma-gescheiden lijst. Hierin met minstens één van de media features `true` zijn om de gecombineerde media query `true` te maken.

```css
@media screen and (min-width: 768px) and (orientation: landscape) { ... }
```

De bovenstaande meda query zal `true` zijn indien het mediatype `screen` is, de minimum breedte van de viewport 768px bedraagt en de displaymode in landscape is.

```css
@media (min-width: 768px), handheld and (orientation: portrait) { ... }
```
Wanneer we op een device werken met een scherm en de viewpoort minimaal 768px bedraagt, dan zal de media querie `true` zijn. Maken we gebruik van een handheld device in portrait modus, dan zal de media query ook waar of `true` zijn.

```css
@media not screen and (color), print and (color) { ... }
```

Het `not` keyword is van toepassing op heel de media query, behalve als deze gescheiden wordt door een komma. Het bovenstaande wordt geëvalueerd als:

```css
@media (not (screen and (color))), print and (color) { ... }
```

Als het geen computermonitor is en geen kleuren bevat, dan is de media query `true`. Als het mediatype `print` is en kleuren bevatten dan is de media query ook `true`.

Naast het instellen van de mediatypen kunnen we bijkomen media features opgeven. De meeste media features kunnen voorzien worden van de prefixen `min-` (groter of gelijk aan) of `max-` (kleiner of gelijk aan). Indien een media feature niet van toepassingen is voor een device, dan zal de expressie altijd `false` zijn. 

In grid-systemen beperken we ons tot twee media features, namelijk `min-width` en `max-width` met het mediatype `screen`.  Met deze media feature `width` specificeren we de breedte van de viewport, de breedte van het document window of de breedte van de pagina-box op een printer. Voor het mediatype screen zijn er een aantal courante media queries voorhanden, die ook in responsive frameworks, zoals Twitter Bootstrap en Foundation Zurb, worden toegepast.

Er zijn twee technieken om webapplicaties te realiseren afhankelijk van het toestel, namelijk mobile-first of desktop-first. In mobile-first ontwerpen en implementeren we de webapplicatie zoals ze te bekijken zijn op een smartphone. In desktop-first ontwerpen en implementeren we de webapplicatie zoals ze te bekijken zijn op een desktop pc.

```css

	/* MOBILE FIRST */
	
	/* Extra Extra Small Devices (maximum width 479px), Phones, Default for Mobile-First no Media Query needed */ 

	/* Extra Small Devices, Phones */ 
	@media only screen and (min-width : 480px) {}

	/* Small Devices, Tablets */
	@media only screen and (min-width : 768px) {}

	/* Medium Devices, Desktops */
	@media only screen and (min-width : 992px) {}

	/* Large Devices, Wide Screens */
	@media only screen and (min-width : 1200px) {}
```

In mobile-first worden devices met een viewport kleiner dan 480px gezien als extra extra small devices. Extra small devices zijn toestellen waarvan de breedte varieert tussen 480px en 767px. Voor tablets hanteren we een viewport-breedte tussen 768px en 991px. Voor desktop-schermen hanteren we een breedte tussen 992px en 1199px. Groteren en wijde schermen beginnen vanaf een breedte van 1200px.

```css

	/* DESKTOP FIRST */
	
	/* Large Devices, Wide Screens (maximum width 1200px), Default for Desktop-First no Media Query needed */ 
	
	/* Medium Devices, Desktops */
	@media only screen and (max-width : 992px) {} 
	
	/* Small Devices, Tablets */
	@media only screen and (max-width : 768px) {}

	/* Extra Small Devices, Phones */ 
	@media only screen and (max-width : 480px) {}

	/* Extra Extra Small Devices, Phones */ 
	@media only screen and (max-width : 320px) {}	
```
Bij desktop-first vertrekken we vanuit de hoogste resolutie en voegen we vervolgens media queries toe tot en met het kleinste device, namelijk kleiner of gelijk aan 320px.

Er zijn heel wat media features die in CSS ondersteund worden:

- `color, min-color en max-color`
Aantal bits per kleurcomponent.
- `color-index, min-color-index en max-color-index`
Aantal mogelijke kleuren uit de color look-up table
-` aspect-ratio, min-aspect-ratio en max-aspect-ratio`
Ratio tussen de breedte en de hoogte van de viewport van het device, bv.: 9/16.
- `device-aspect-ratio, min-device-aspect-ratio en max-device-aspect-ratio`
Ratio tussen de breedte en de hoogte van het device, bv.: 9/16.
- `device-height, min-device-height en max-device-height`
De hoogte van het device, de volledige schermhoogte.
- `device-width, min-device-width en max-device-width`
De breedte van het device, de volledige schermbreedte.
- `orientation`
Mogelijke waarden voor de viewport `portrait` of `landscape`. 
- `resolution, min-resolution en max-resolution`
De resolution van het device gespecificeerd als dots-per-inch (dpi), dots-per-centimeter (dpcm) of dots-per-pixel (dppx).

###Responsive images

**Responsive images** zijn images of afbeeldingen die zich aanpassen aan de beschikbare ruimte waarin deze vervat zitten. Deze afbeeldingen behouden hun initiële bestandsgrootte, maar passen hun dimensie aan zodat ze passen binnen een bepaalde container.

###Responsive Mobile First grid-systeem

**HTML:**
```html	

```

**CSS:**
```css	
```

Adaptive webdesign
------------------

> Volgt later!

Contextual webdesign
--------------------

> Volgt later!

Bronnen
-------

[^RISC]: Reduced Instruction Set Computing

[^ARM]: Acorn RISC Machine
Fabrikanten: Apple (A-reeks), Qualcomm (Snapdragon), Nvidia (Tegra), Samsung (Exynos), â€¦

[^MIPS]: Microprocessor without Interlocked Pipeline Stages
Fabrikanten: Imagination Technologies (Warrior), â€¦

[^CISC]: Complex Instruction Set Computing

[^x86]:Om het onderscheid te maken met 32-bits versies, werden 64-bits versies soms x86-64 of x64 genoemd.
Fabrikanten: Intel (Atom, Core, Xeon), AMD (A-reeks, Phenom, Athlon), VIA Technologies (Nano, Eden, C7, C3)

[^mobileosmarket]:[Gartner](http://www.forbes.com/sites/louiscolumbus/2013/01/17/2013-roundup-of-mobility-forecasts-and-market-estimates/
)

[^now]: 26/08/2014

[^pollw3]: Poll resoluties w3schools: http://www.w3schools.com/browsers/browsers_display.asp

- http://www.thesitewizard.com/webdesign/liquid-elastic-fixed-relative-layout.shtml
- http://www.smashingmagazine.com/2009/06/02/fixed-vs-fluid-vs-elastic-layout-whats-the-right-one-for-you/
- http://www.smashingmagazine.com/2008/06/26/flexible-layouts-challenge-for-the-future/?cp=6
- http://webdesign.tutsplus.com/articles/all-about-grid-systems--webdesign-14471
- http://liquidapsive.com/
- http://www.responsys.com/blogs/nsm/cross-channel-marketing/difference-responsive-adaptive-web-design/
- http://venturebeat.com/2013/11/19/responsive-design-adaptive/
- http://marketingland.com/is-adaptive-web-design-or-ress-better-than-responsive-web-design-for-seo-59389
- http://visual.ly/adaptive-web-design-vs-responsive-web-design
- http://www.webmonkey.com/2013/05/the-two-flavors-of-a-one-web-approach-responsive-vs-adaptive/
- http://www.sitepoint.com/moving-beyond-responsive-web-adaptive-web/
- http://www.smashingmagazine.com/2014/05/14/responsive-images-done-right-guide-picture-srcset/
- http://www.smashingmagazine.com/2014/05/12/picturefill-2-0-responsive-images-and-the-perfect-polyfill/

>
> **Graceful degredation en progressive enhancement:**
> 
- http://searchnetworking.techtarget.com/definition/graceful-degradation
- http://en.wikipedia.org/wiki/Progressive_enhancement
- http://en.wikipedia.org/wiki/Responsive_web_design
- http://en.wikipedia.org/wiki/Fault_tolerance
- http://www.w3.org/wiki/Graceful_degredation_versus_progressive_enhancement
>
> **Media queries:**
> 
- https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries
- http://dev.w3.org/csswg/mediaqueries/#mf-dimensions
- http://code-tricks.com/css-media-queries-for-common-devices/