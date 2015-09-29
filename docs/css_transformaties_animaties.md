CSS transformaties, transities en animaties
===========================================

|Info|  |
|----|---|
|Olod|New Media Design & Development I|
|Auteur(s)|Philippe De Pauw - Waterschoot, Jonas Pottie|
|Opleiding|Bachelor in de Grafische en digitale media|
|Academiejaar|2015-16|

***

Transformaties
--------------

Transformaties laten toe om de positie, grootte en vorm van een element te veranderen. In CSS kunnen we een element: verplaatsen (move), schalen (scale), roteren (rotate) en uitrekken/scheeftrekken (skew). Zowel 2D als 3D transformaties kunnen toegepast worden in CSS. Opgelet: het transformatiepunt ligt standaard in het midden van het element!

Transformaties kunnen toegekend worden aan een element via de transform eigenschap. Voor de meeste CSS3 eigenschappen, moeten browser specifiek prefixen toegevoegd worden aan deze eigenschappen:

|Browser(s)|Prefix|
|----------|------|
|Safari en Chrome|`-webkit-`|
|Mozilla|`-moz-`|
|IE|`-ms-`|
|Opera|`-o-`|
|De standaard W3C|Geen prefix!|

###2D-translatie

Translatie of verschuiving van een element, in dit geval in de 2D-ruimte. Translatie wordt in CSS gerealiseerd via de `translate` methoden:

- `translate(tx[,ty])`
Indien ty niet gespecifieerd wordt, zal ty = 0
- `translateX(tx)`
Translatie langs de X-as
- `translateY(ty)`
Translatie langs de Y-as

De waarden van translatie (tx, ty) kunnen uitgedrukt worden in een lengte (getal gevolgd door een lengte-eenheid, zoals: px, em, in, pt, mm, …) of in percentage (%).

```html
<div class="box orig">
  BOX
</div>
<div class="box eff1">
  BOX
</div>
```

```css
.box{
  display:block;
  background:#f60;
  width:160px;
  height:90px;
  text-align:center;
  line-height:90px;
  font-size:20px;
}
.orig{
  position:fixed;
  opacity:0.2;
}
.eff1{
  -webkit-transform:translate(20px,50%);
  -moz-transform:translate(20px,50%);
  -ms-transform:translate(20px,50%);
  -o-transform:translate(20px,50%);
  transform:translate(20px,50%);
}
```

In dit voorbeeld verplaatsen we een element: 20px verschuiving langs de X-as, 50% van de hoogte van het element verschuiving langs de Y-as.

> **Output in de browser:**
>
>  ![enter image description here](https://lh3.googleusercontent.com/-XhQh7vuBhZc/VBwDwnoUdrI/AAAAAAAAAN8/u-6OAzneuVg/s0/translate1.png "translate1.png")

###2D-schalen

Elementen kunnen geschaald worden in de X- en/of Y-richting. Schalen wordt in CSS gerealiseerd via de `scale` methoden:

- `scale(sx[,sy])`
Indien sy niet gespecifieerd wordt, zal sy = 1
- `scaleX(sx)`
- `scaleY(sy)`

De waarden van schalen (sx, sy) moeten uitgedrukt worden met een getal (positief of negatief floating-point getal).

```css
…
.eff1{
 -webkit-transform:translate(100%, 100%) rotate(45deg);
  -moz-transform:translate(100%, 100%) rotate(45deg);
  -ms-transform:translate(100%, 100%) rotate(45deg);
  -o-transform:translate(100%, 100%) rotate(45deg);
  transform:translate(100%, 100%) rotate(45deg);
}
```

In het voorbeeld voeren we eerst een translatie uit van 100% in beide richtingen (x en y). Gevolgd door het roteren in uurwijzerzin met 45 graden (rotatiepunt ligt in het midden van het element)
Overeenkomstige matrix: [cos(angle) sin(angle) -sin(angle) cos(angle) 0 0].

> **Output in de browser:**
>
>  ![enter image description here](https://lh6.googleusercontent.com/-qNmnCdSZjY4/VBwFBVuEk1I/AAAAAAAAAOI/XhXo5TkOdD8/s0/scale1.PNG "scale1.PNG")

###2D-scheeftrekken

Elementen kunnen scheefgetrokken worden in de X- en/of Y-richting. Scheeftrekken wordt in CSS gerealiseerd via de `skew` methoden:

- `skew(ax[ay])`
Indien ay niet gespecifieerd wordt, zal ay = 0deg
- `skewX(ax)`
Scheeftrekken langs de X-as
- `skewY(ay)`
Scheeftrekken langs de Y-as

De waarden van scheeftrekken (ax, ay) wordt uitgedrukt in aantal graden: positief of negatief getal gevolgd door `deg`.

```css
…
.eff1{
 -webkit-transform:translate(100%, 100%) skew(45deg, -30deg);
  -moz-transform:translate(100%, 100%) skew(45deg, -30deg);
  -ms-transform:translate(100%, 100%) skew(45deg, -30deg);
  -o-transform:translate(100%, 100%) skew(45deg, -30deg);
  transform:translate(100%, 100%)  skew(45deg, -30deg);
}
```

In het voorbeeld voeren we eerst een translatie uit van 100% in beide richtingen (x en y). Gevolgd door het scheeftrekken langs de X-as met 45 graden en -30 graden langs de Y-as.

> **Output in de browser:**
>
>  ![enter image description here](https://lh4.googleusercontent.com/-bQ12SYxQGFg/VBwJ53GUOxI/AAAAAAAAAOg/iMlIQpRQ6BE/s0/skew.png "skew.png")

###2D-matrix

Transformaties kunnen ook voorzien worden via een 2D-matrix. Een matrix in CSS bevat 6 argumenten:

- `matrix(a, c, b, d, e, f)`

>
>
> ![enter image description here](https://lh5.googleusercontent.com/-mS7ODlQMU2E/VBwL6fJPV7I/AAAAAAAAAO0/pdf0aYHjsfA/s0/matrix.png "matrix.png")
>
> - a en d zorgen voor het schalen van een element
- c en b zorgen voor het roteren of schuintrekken van een element
- e en f zorgen voor de translatie in de X- en Y-richting
- Default matrix: a = 1, c = 0, b = 0, d = 1, e = 0 en f = 0
>
> ![enter image description here](https://lh6.googleusercontent.com/-pf7D7GLAOA4/VBwMdAWR8JI/AAAAAAAAAPA/xFvP9pyJOyk/s0/matrix2.png "matrix2.png")

Enkele voorbeelden:

- `transform:matrix(1,0,0,1,20,30);`
Translatie 20px in de X-richting en 30px in de Y-richting
- `transform:matrix(1,0.5,0.6,1,0,0);`
Schuintrekken van het element
- `transform:matrix(0,866,0.5,-0.5,0,866,0,0);`
Rotatie wijzerzin van het element (30 graden rotatie)

```css
…
.eff1{
 -webkit-transform:matrix(0.866,0.5,-0.5,0.866,100,100);
  -moz-transform:matrix(0.866,0.5,-0.5,0.866,100,100);
  -ms-transform:matrix(0.866,0.5,-0.5,0.866,100,100);
  -o-transform:matrix(0.866,0.5,-0.5,0.866,100,100);  transform:matrix(0.866,0.5,-0.5,0.866,100,100);
}
```

De matrix resulteert in een translatie van 100 pixels in de Y- en de X-richting, rotatie van het element met 30 graden in uurwijzerzin.


> **Output in de browser:**
>
>  ![enter image description here](https://lh6.googleusercontent.com/-QQ5AlCYZyq4/VBwMyOetRTI/AAAAAAAAAPM/WrLUqD6-EUU/s0/matrix3.png "matrix3.png")


###2D-transformatiepunt

Bij “default” ligt dit punt in het midden van het element, de initiële waarde bedraagt 50% 50%. Roteren we bv. een element, dan ligt het rotatiepunt initieel in het midden van het element. Het transformatie punt kunnen we via CSS op een andere plaats leggen en dit via de ``transform-origin` eigenschap:

- `transform-origin(x [, y])`

De waarden van het transformatiepunt (x, y) kunnen uitgedrukt worden in een lengte (getal gevolgd door een lengte-eenheid, zoals: px, em, in, pt, mm, …) , in percentage (%) of via gedefinieerde keywords (left, center, right, top en bottom).


```css
…
.eff1{
 -webkit-transform-origin:0 0;
  -moz-transform-origin:0 0;
  -ms-transform-origin:0 0;
  -o-transform-origin:0 0;
  transform-origin:0 0;
  -webkit-transform:rotate(60deg);
  -moz-transform:rotate(60deg);
  -ms-transform:rotate(60deg);
  -o-transform:rotate(60deg);
  transform:rotate(60deg);
}
```

In dit voorbeeld verplaatsen we het transformatiepunt naar de linkerbovenhoek van het element via de waarden `0 0` of `left top`. Vervolgens roteren we het element met 60 graden in uurwijzerzin.

> **Output in de browser:**
>
>  ![enter image description here](https://lh6.googleusercontent.com/-XQ_bNlIDH6g/VBwNqdDgNII/AAAAAAAAAPc/2EM_7v4TReE/s0/transformatiepunt.png "transformatiepunt.png")

###2D-voorbeelden

####Voorbeeld 1: translatie

```css
#example1 .box:nth-of-type(1){
-ms-transform:translate(220px, 160px);
-webkit-transform:translate(220px, 160px);
transform:translate(220px, 160px);
}
#example1 .box:nth-of-type(2){
-ms-transform:translate(50%, 50%);
-webkit-transform:translate(50%, 50%);
transform:translate(50%, 50%);
}
#example1 .box:nth-of-type(3){
-ms-transform:translate(0, -50px);
-webkit-transform:translate(0, -50px);
transform:translate(0, -50px);
}
```

> **Output:**
> ![enter image description here](https://lh3.googleusercontent.com/-e1UvaCjKh9E/VBwRUjOYeKI/AAAAAAAAAP4/D2R0TLI4Ph4/s0/ex1.PNG "ex1.PNG")

###"Voorbeeld 2: rotatie

```css
#example2 .box:nth-of-type(1){
-ms-transform:rotate(60deg);
-webkit-transform:rotate(60deg);
transform:rotate(60deg);
}
#example2 .box:nth-of-type(2){
-ms-transform:rotate(-36deg);
-webkit-transform:rotate(-36deg);
transform:rotate(-36deg);
}
```

> **Output:**
> ![enter image description here](https://lh4.googleusercontent.com/-I3_s3anQVxk/VBwRajtRf0I/AAAAAAAAAQE/h3fGf2Ytc6s/s0/ex2.PNG "ex2.PNG")

####Voorbeeld 3: schalen

```css
#example3 .box:nth-of-type(1){
-ms-transform:scale(2.6);
-webkit-transform:scale(2.6);
transform:scale(2.6);
}
#example3 .box:nth-of-type(2){
-ms-transform:scale(2, 1.5);
-webkit-transform:scale(2, 1.5);
transform:scale(2, 1.5);
}
#example3 .box:nth-of-type(3){
-ms-transform:scaleY(-1);
-webkit-transform:scaleY(-1);
transform:scaleY(-1);
}
```

> **Output:**
> ![enter image description here](https://lh3.googleusercontent.com/-jclSH0UimFE/VBwRpRBdM4I/AAAAAAAAAQQ/oJI5oK8q650/s0/ex3.PNG "ex3.PNG")

####Voorbeeld 4: scheeftrekken

```css
#example4 .box:nth-of-type(1){
-ms-transform:skew(30deg);
-webkit-transform:skew(30deg);
transform:skew(30deg);
}
#example4 .box:nth-of-type(2){
-ms-transform:skew(60deg, 20deg);
-webkit-transform:skew(60deg, 20deg);
transform:skew(60deg, 20deg);
}
#example4 .box:nth-of-type(3){
-ms-transform:skewY(-30deg);
-webkit-transform:skewY(-30deg);
transform:skewY(-30deg);
}
```

> **Output:**
> ![enter image description here](https://lh3.googleusercontent.com/-hSg2oQBMrKQ/VBwRtq682pI/AAAAAAAAAQg/cFE6_7UHBMM/s0/ex4.PNG "ex4.PNG")

####Voorbeeld 5: transformatiepunt met rotatie

```css
#example6 .box:nth-of-type(1){
-ms-transform:rotate(30deg);
-webkit-transform:rotate(30deg);
transform:rotate(30deg);
-ms-transform-origin:left top;
-webkit-transform-origin:left top;
transform-origin:left top;
}
#example6 .box:nth-of-type(2){
-ms-transform:rotate(30deg);
-webkit-transform:rotate(30deg);
transform:rotate(30deg);
-ms-transform-origin:60% 40%;
-webkit-transform-origin:60% 40%;
transform-origin:60% 40%;
}
#example6 .box:nth-of-type(3){
-ms-transform:rotate(30deg);
-webkit-transform:rotate(30deg);
transform:rotate(30deg);
-ms-transform-origin:80% bottom;
-webkit-transform-origin:80% bottom;
transform-origin:80% bottom;
}
```

> **Output:**
> ![enter image description here](https://lh4.googleusercontent.com/-j-Y8D_9xeio/VBwRxTY-c5I/AAAAAAAAAQs/jmcUY2op2rk/s0/ex5.PNG "ex5.PNG")

####Voorbeeld 6: combinatie van transformatiemethoden

```css
#example7 .box:nth-of-type(1){
-ms-transform:translate(100%, 100%) rotate(30deg) skewX(15deg) scale(2);
-webkit-transform:translate(100%, 100%) rotate(30deg) skewX(15deg) scale(2);
transform:translate(100%, 100%) rotate(30deg) skewX(15deg) scale(2);;
-ms-transform-origin:50% 50%;
-webkit-transform-origin:50% 50%;
transform-origin:50% 50%;
}
```

> **Output:**
> ![enter image description here](https://lh5.googleusercontent.com/-muUBLdiSixA/VBwR1XP7mFI/AAAAAAAAAQ4/_qa_PoOZXq4/s0/ex6.PNG "ex6.PNG")

Bronnen
-------

> **2D-transformaties**
>
> - <http://www.w3schools.com/css/css3_2dtransforms.asp>
- <https://developer.mozilla.org/en-US/docs/Web/CSS/transform>
- <https://developer.mozilla.org/en-US/docs/Web/CSS/translation-value>
- <http://dev.opera.com/articles/understanding-the-css-transforms-matrix/>
- <http://www.useragentman.com/blog/2011/01/07/css3-matrix-transform-for-the-mathematically-challenged/>
- <http://www.w3schools.com/cssref/css3_pr_transform-origin.asp>
- <https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin>
- <https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function>
>
> **3D-transformaties:**
>
> - <http://desandro.github.io/3dtransforms/docs/perspective.html>