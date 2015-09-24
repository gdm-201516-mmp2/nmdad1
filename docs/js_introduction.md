JavaScript Introductie
======================

|Info|  |
|----|---|
|Olod|New Media Design & Development I|
|Auteur(s)|Philippe De Pauw - Waterschoot, Jonas Pottie|
|Opleiding|Bachelor in de Grafische en digitale media|
|Academiejaar|2015-16|

***

Inleiding
---------

JavaScript werd oorspronkelijk ontwikkeld door Brendan Eich (Netscape) in 1995. JavaScript is ook gekend onder de verkorte notatie **"JS"**. Deze notatie wordt in *lowercase* ook gebruikt als extensie van JavaScript bestanden. JavaScript is een platformonafhankelijke (cross-platform) Object geOriënteerde Programmeertaal (OOP). Het is een stuk eenvoudiger dan andere OOP-programmeertalen, zoals Java, C#, PHP5+, ... . Het is prototype gebaseerd en multi paradigma (OOP, functioneel en imperatief). De code is niet beveiligd door een **DLL (Dynamic Link Library)** en wordt uitgevoerd door een cliënt, in de meeste gevallen door een webbrowser.

Het is de scripting taal bij uitstek voor webpagina’s: HTML (structuur), CSS (opmaak) en JS (interactiviteit). JS wordt geïnterpreteerd door een JavaScript engine meestal een webbrowser, maar kan ook geïnterpreteerd worden in niet-browser omgevingen (Adobe Creative Suite, OpenOffice, Google Docs, …) en in Node.js, Apache CouchDB, … .

De **brontaal (core language)** voor JavaScript is het **ECMAScript**, momenteel versie 5.1 (sinds 2012 in iedere moderne webbrowser op 13-10-2014). Het wordt meestal uitgebreid met **ECMAScript Internationalization API**. JavaScript wordt daarnaast uitgebreid met een aantal **Web API's (Web Application Programming Interface)**, zoals DOM (Document Object Model), Device, Communication, Data Management, ... .

De brontaal ECMAScript omvat:

- Syntax van de taal (keywords, object literals, flowcontrol, …)
- Datatypen (string, number, boolean, function, object, …)
- Ingebouwde objecten en functies (Array, Date, Math, JSON, RegExp, parseFloat, decodeURI, …)
- Globaal objecten: window en document
- Prototype gebaseerde overervingsmechanisme
- Afhandelen van gebeurtenissen
- Afhandelen van fouten (throw, try/catch, custom made errortypen)
- Strict mode

Syntax
----------------------

De JS syntax is een **combinatie** van de syntax uit **Java- en C-talen**. JS bevat geen klassen, we gebruiken hiervoor **object-prototypen**. In JS zijn functions of methoden ook objecten! JS statements zijn commando’s naar de webbrowser, ze vertellen wat de webbrowser moet doen. JavaScript code is een sequentie van statements, uitgevoerd door de webbrowser in een welbepaalde volgorde. Statements worden steeds gescheiden door een puntkomma (semi-colon `;`).

**Code blocks** bevatten **gegroepeerde statements**, die samen uitgevoerd zullen worden. Een code block start linker accolade (left curly bracket `{`) en eindigt met een rechter accolade `}`. **Functies** zijn de meest gekende code blokken. Het identificeren van keywords, variabelen, eigenschappen en labels moet gebeuren via een unieke naam. Deze namen fungeren als unieke identifiers. **Een identifier moet starten met een letter, underscore (_) of een dollar teken `$`**. De karakters hierna kunnen ook een getal zijn.

**Gereserveerde identifiers (keywords) kunnen niet als eigen identifier gebruikt worden** (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Reserved_Words). Identifiers zijn **hoofdlettergevoelig (case sensitive)**, bv.: myCat is niet hetzelfde als MyCat. **Extra witruimte (white space) wordt genegeerd** door JavaScript, maar maakt de code leesbaarder. Tekst in een string kan onderbroken worden naar een volgende regel met een backslash `\`. Unicode character set (karakters, leestekens en symbolen)  wordt gehanteerd http://www.w3schools.com/charsets/ref_html_utf8.asp.


Waarden en variabelen
---------------------------

JS onderscheidt twee soorten waarden, namelijk primitieve- en objectwaarden. De **primitieve waarden** kunnen zijn:

- Getallen (Numbers)  
`46`, `2.365`, `NaN` (Not-a-Number)
- Logische (Boolean)  
`true` of `false`
- Logische (Boolean)  
`"Hello World"` of `'Hello Universe'`
- Null waarde  (deze waarde moeten we zelf toekennen aan een varaiabele
`null`
- Niet gedefinieerde waarde (declaratie van een variabele)  
`undefined`

De **object waarden** zijn: Object, Function, Array, Date, ...

**Variabelen (variables) zijn containers om informatie erin op te slaan**. De naam van een variabele (identifier) bevat een unieke naam! Declaratie van een gebeurt via het `var` keyword. Waarde wordt aan een variabele toegekend (initialisatie) via het gelijkheidsteken (assignment `=`).

```javascript
var _a;
console.log('The value of _a is ' + _a);//undefined
console.log('The value of _b is ' + _b);//throws ReferenceError

var _c;
if(_c === undefined){
  console.log('_c is undefined');
} else {
  console.log('_c is defined');
}

var _d;
if(!_d){
    console.log('_d is undefined');
}
```

> - Declaratie van variabele `_a`, bevat standaard de waarde `undefined`.
- De variabele `_b` is niet gedeclareerd (`ReferenceError` wordt geworpen - throw). - De code na deze fout wordt niet meer uitgevoerd, oplossing: `try/catch`
- In een conditioneel statement wordt `undefined` geëvalueerd als `false`.

```javascript
var _a;
console.log(_a + 2);

var _b = null;
console.log(_b / 6);
```

> - Tellen we bij een gedeclareerde variabele `_a` twee bij, dan zal de waarde hiervan geconverteerd worden naar `NaN` (Not-a-Number)
- Bevat een variabele `_b` de waarde `null`, zal na een mathematische berekening, de waarde `0` bevatten.

```javascript
var firstName = 'Philippe', surName = 'De Pauw - Waterschoot', nickName = 'drdynscript';

var olod = 'New Media Design & Development I';
var olod;
console.log(olod);
```

> - In JavaScript kunnen we meerdere variabele op één lijn declareren, door de variabelen te scheiden met een komma.
- Declareren we opnieuw dezelfde variabele, dan verliest deze variabele niet zijn waarde.

```javascript
var nFruit = 20, nVegetable = 12;//Global
if(nFruit > nVegetable){
    var nFruityPeople = 1325;//Global
}else{
    var nVegetablyPeople = 9862;//Global
}
console.log('nFruityPeople: ' + nFruityPeople);//1325
console.log('nVegetablyPeople: ' + nVegetablyPeople);//undefined
```

JavaScript bevat twee **scopes**: **lokaal** en **globaal**. De scope is de **aanspreekbaarheid** of **levensduur** van een variabele. De variabelen `nFruit` en `nVegetable` hebben een globale scope! Het `if` statement is een block statement, die op zich geen eigen scope bevatten. De variabelen hierin worden lokaal gekenmerkt t.o.v. het blok waarin deze zich bevinden . In dit voorbeeld gedragen deze laatste variabelen zich als globale variabelen.

```javascript
function TestCar(){
    var carSpeed = 256, carGear = 0; // local
	fastestCarSpeed = '379'; // global, once this function is called
	if (carSpeed != fastestCarSpeed) {
        carGear = 5;
		var carName = 'Herbie'; // local anywhere in this function after this line
	} else {
        carGear = 6;
		var carSound = 'Vroom'; // local, but will be undefined since never get in here.
	}
}
TestCar();
```

In het bovenstaande voorbeeld definiëren we een functie, die we vervolgens aanroepen. De variabelen `carSpeed` en `carGear` zijn lokale variabelen (enkel aanspreekbaar binnen de functie). De variabele `fastestCarSpeed` is een globale variabele (bevat geen var keyword). De variabelen binnen het if/else statement zijn lokale variabelen.

Datatypen
------------

In JS hebben we drie soorten datatypen: **primitieve**, **built-in objects** en **custom objects**. 

De **primitieve datatypen** hebben een overeenkomst met de primitieve waarden in JS, namelijk:

- **Boolean**  
Waar of niet waar, aan of uit, 1 of 0 kortom true of false.
vb.: `var isPlaying = true;`
- **Null**  
Niet bestaande waarde of "non existing value".
vb.: `var dataset = null;`
- **Number**  
Zowel positieve- als negatieve getallen al dan niet voorzien van een zweevend punt (floating point).
vb.: `var age = 32;
- **String**  
Verzameling van karakters maken een string. Omsloten door dubbele aanhelingstekens `"..."` of enkele `'...'`
vb.: `var firstName = 'Philippe';`
- **Undefined**  
Variabelen die gedeclareerd zijn, dus zonder waarde, bevatten de waarde `undefined`
.
vb.: `var persons;//Bevat de waarde undefined`

Ingebouwde (built-in) objecten in JS: **Object**, **Array**, **Date**, **Math**, **RegExp**, **Function**, ... .

###Numbers

```javascript
var a = 6 + 3;//9
var b = 0.1 + 0.3;//0.4

var r = 10;
var d = Math.PI*Math.pow(r,2);//314.1592653589793
```

> - Double-precision 64-bit format IEEE 754 waarden.
- Integer, Float, Decimal, … datatypen bestaan niet in JavaScript.
- Standaard numerieke operatoren worden ondersteund: optellen, aftrekken, vermenigvuldigen, delen, modulo, … .
- Geavanceerde mathematische functies via het Math object.

```javascript
var v = 2;
for (var i = 1; v != Infinity; i++){
   v *= v;
   console.log(i + ': ' + v);
}

console.log(-255/0);//-Infinity
console.log(255/0);//Infinity
```

> - Infinity is een globale constante om oneindigheid aan te duiden voor een numerieke waarde.
- Zowel negatieve als positieve oneindigheid worden ondersteund.
- In dit voorbeeld vermenigvuldigen we de vorige waarde van een variabele met zichzelf totdat we in stap 10 positieve oneindigheid bereiken.

```javascript
var octal = 0377;
var hex = 0xff;

console.log('octal: ' + octal);//255
console.log('hex: ' + hex);//255
console.log('equal: ' + (hex === octal));//255

var octalCalc = 7*Math.pow(8,0)+7*Math.pow(8,1)+3*Math.pow(8,2)+0*Math.pow(8,3);
console.log(octalCalc);
```

> - JavaScript ondersteunt ook octale en hexadecimale getallen.
- Numerieke waarde is octaal indien het voorafgegaan wordt met een `0`.
- Numerieke waarde is hexadecimaal indien het voorafgegaan wordt met een `0x`.

```javascript
var b10 = 255;
var b2 = b10.toString(2);//11111111
var b8 = b10.toString(8);//377
var b16 = b10.toString(16);//ff
```

> - Alle getallen in JavaScript worden bewaard als base ten decimalen.
- Om deze getallen te converteren naar een andere tallenstelsel (base) kunnen we gebruik maken van de `toString(n)` methode, waarbij n het tallenstelsel is.
- We merken op dat de prefixen niet zijn toegevoegd, deze handelingen moeten we zelf uitvoeren.

```javascript
var g1 = 142;
console.log(isNaN(g1));//false
var g2 = 142 / '1';
console.log(isNaN(g2));//false
var g3 = 142 / 'fun';
console.log(isNaN(g3));//true

if ((!g3)) {
   console.log('Value is not a number!');
}
```

> - `isNaN(value)` is een globale functie waarmee we nagaan of een waarde niet een getal is (Not-a-Number).
- In het voorbeeld delen we een numerieke waarde door een string, die een getal bevat. Tijdens deze bewerking wordt deze string geconverteerd naar een numerieke waarde, hierdoor is `g2` wel een Number.

```javascript
console.log(parseInt('10'));//10
console.log(parseInt('08'));//8
console.log(parseInt('08',10));//8
console.log(parseInt('0377',8));//255
console.log(parseInt('0xff',16));//255
console.log(parseInt('ff',10));//NaN
console.log(parseInt('0126.658',10));//126
```

> - `parseInt(string[,radix])` is een globale functie waarmee we een string, al dan niet voorzien van een talstelsel, converteren naar een integer.
- Standaard hanteert JavaScript het 10-talig talstelsel.
- Zonder radix zal, indien het eerste karakter `0 `is, deze `0` verwijderd worden, de overige karakters vormen dan het getal.
- Gebruiken we voor hexadecimale waarden een verkeerd talstelsel resulteert dit in `NaN`

```javascript
console.log(parseFloat('10.4'));//10.4
console.log(parseFloat('0.1235645899999877455'));//88
console.log(parseFloat('0377'));//377
console.log(parseFloat('0xff'));//0
console.log(parseFloat('ff'));//NaN
console.log(parseFloat('0126.658'));//126.658
console.log(parseFloat('314E-2'));//3.14
console.log(parseFloat('0.314E+1'));//3.14
```

> - `parseFloat(string)` is een globale functie waarmee we een string converteren naar een float of decimaal puntwaarde 
Hexadecimale stringwaarden worden niet herkend, gevolg `NaN`
- De `0` bij een octale stringwaarde wordt verwijderd en de resterende cijfers bepalen de waarde.
- Met `E-n` en `E+n` kunnen we het decimaal punt verschuiven, waarbij n gelijk is aan het aantal posities.


###Built-in objecten

Alles in JavaScript is een object: String, Number, Array, Date, Function, … . Een object bevat eigenschappen (properties) en acties (functies of methoden = functions). Het `Class` keyword bestaat niet! JS hanteert prototypen. Een object in JS kan herleid worden tot een verzameling van `key/value` pairs.Waarden geassocieerd met het object noemen we properties.

Om een property aan te spreken gebruiken we de volgende syntax:

- `objectnaam.eigenschapsnaam;`
- Bv.: `var lat = geolocation.latitude;`

Om een waarde toe te kennen aan een property gebruiken we de assignment operator:

- `objectnaam.eigenschapsnaam = waarde;`
- Bv: `geolocation.longitude = 50.238795;`

Om methoden aan te spreken gebruiken we de volgende syntax:

- `objectnaam.methodenaam;`
- Bv.: `game.play();`

Methoden kunnen ook object teruggeven aan de aanvrager. In dit geval bevat de methode het return keyword.

- Bv.: `var fullName = person.getFullName();`

Daarnaast kunnen methoden ook argumenten bevatten waaraan we waarden kunnen toekennen:

- Bv.: `person.setFirstName("Philippe");`

```javascript
var person = {};
person.firstName = "Philippe";
person.toString = function(){
    return this.firstName;
};
alert(person);//Philippe
```

> - Een leeg object aanmaken kunnen we realiseren m.b.v. `{` en `}` (curly braces) of via `new Object()`;
- De aanmaak met `{` en `}` is sneller en het geheugenverbruik is geringer!
- Aan dit object kunnen we nieuwe `key/value` pairs toekennen.
- In dit geval de eigenschap `firstName` met als string waarde `Philippe`.
- En een functie `toString`, die een string representatie teruggeeft, namelijk de waarde van de eigenschap `firstName`.

```javascript
var person = {
    "firstName":"Philippe",
    666:"The Devil",
    toString:function(){
        return this.firstName + ' -> ' + this["666"];
    }
};
alert(person);//Philippe -> The Devil
```

> - We kunnen de voorgaande code wat meer OOP gerelateerd schrijven d.m.v. de "literal notation"
- Het voordeel van deze aanpak is dat alle eigenschappen en methoden nu "echt" een onderdeel vormen van het object
- De keys kunnen zowel een string, een number of een naam bevatten (zonder enkele –of dubbele aanhalingstekens)
- In de "literal notation" worden alle key/value pairs gescheiden door een comma!


####String

Een **String** object bestaat uit een verzameling van karakters. Een string aanmaken  kunnen we realiseren m.b.v. **assignment operator** of via een constructor. De constructor wordt aangesproken wanneer we een instantie maken via de `new` operator.

####Array

```javascript
var academicYears = [];
academicYears[0] = '2009';
academicYears[1] = '2010';
academicYears[2] = '2011';
academicYears[3] = '2012';
academicYears[4] = '2013';
alert(typeof academicYears);//object
alert(academicYears[academicYears.length-1]);//2013
```

Arrays zijn zoals alles in JS ook objecten. Arrays zijn index gebaseerd, het eerste element bevat de index `0`, het laatste element de lengte van de array `–1`. Een nieuwe instantie maken van een array kunnen we realiseren m.b.v.:
`[` en `]` de snelste en minst intensieve manier, of via `new Array()`. Met het `typeof` keyword kunnen we het type opvragen van een variabele!

```javascript
var fruits = ["Apple", "Orange", "Cat", "Banana"];
console.log(fruits.toString());//Apple,Orange,Cat,Banana
console.log(fruits[2]);//Cat
console.log(fruits.length);//4
fruits.pop();
console.log(fruits.toString());//Apple,Orange,Cat
fruits.push('Banana','Melon');
console.log(fruits.toString());//Apple,Orange,Cat,Banana,Melon
var apple = fruits.shift();
console.log(fruits.toString());//Orange,Cat,Banana,Melon
fruits.unshift('Apple', 'Berry');
var indexCat = fruits.indexOf('Cat');
var cat = fruits.splice(indexCat, 1);
console.log(fruits.toString());//Apple,Berry,Orange,Banana,Melon
```

> - `toString()` methode converteert een array naar een string (elementen worden gescheiden door een comma)
- Elementen uit de Array kunnen we opvragen door een bepaalde index te specificeren.
- Het eerste element bevat de index `0`.
- Het laatste element bevat de index gelijk aan de lengte (`length` eigenschap) van de Array - 1.

```javascript
var fruits = ["Apple", "Orange", "Cat", "Banana"];
console.log(fruits.toString());//Apple,Orange,Cat,Banana
console.log(fruits[2]);//Cat
console.log(fruits.length);//4
fruits.pop();
console.log(fruits.toString());//Apple,Orange,Cat
fruits.push('Banana','Melon');
console.log(fruits.toString());//Apple,Orange,Cat,Banana,Melon
var apple = fruits.shift();
console.log(fruits.toString());//Orange,Cat,Banana,Melon
fruits.unshift('Apple', 'Berry');
var indexCat = fruits.indexOf('Cat');
var cat = fruits.splice(indexCat, 1);
console.log(fruits.toString());//Apple,Berry,Orange,Banana,Melon
```

> - De methode `pop()` verwijdert het laatste element uit een Array.
- Met de methode `push()` kunnen we één of meerdere elementen toevoegen aan een Array (na het laatste element).
- De methode `shift()` verwijdert het eerste element uit een Array.
- Met de methode `unshift()` kunnen we één of meerdere elementen toevoegen aan een Array (voor het eerste element) .
- Om het element "Cat" te verwijderen uit de Array, moeten we eerst de index hiervan opvragen via de methode `indexOf(‘Cat’)`.
- Vervolgens kunnen we dit element (of meerdere) verwijderen via de `splice()` methode.
- Deze methode bevat twee argumenten, namelijk de start-index en het aantal elementen dat we vervolgens willen verwijderen (in dit geval maar één).
- Indien geen elementen hebben gevonden via `indexOf` krijgen we de waarde `-1` terug.

```javascript
var fruits = ["Apple", "Orange", "Cat", "Banana"];
fruits.reverse();
console.log(fruits.toString());//Banana,Cat,Orange,Apple
var fruitsOfTheDay = fruits.slice(0, 3);
console.log(fruitsOfTheDay.toString());//Banana,Cat,Orange
var lastFruits = fruits.slice(-2);
console.log(lastFruits.toString());//Orange,Apple
```

> - `reverse()`  
Omkeren van de volgorde van de elementen in een Array.
- `slice(begin[,end])`  
Geeft een nieuwe Array terug die een portie van de oorspronkelijke Array bevat.
De oorspronkelijk Array wordt niet gewijzigd!
- `concat(value1, value2)`  
Geeft een nieuwe Array terug, die bestaat uit de elementen uit de oorspronkelijke Array en de opgegeven waarden
- Meer info over arrays:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

```javascript
var academicYears = ['1999', 16, true];
alert(academicYears[1]);

var person = {
    'firstName':'Philippe',    
    666:'The Devil',
    toString:function(){
        return this.firstName + ' -> ' + this['666'];
    }
};
alert(person['666']);//The Devil
alert(person['toString']());//Philippe -> The Devil
```

De elementen binnen een Array hoeven niet van hetzelfde type te zijn! We kunnen ook direct elementen toevoegen aan de Array tijdens de creatie hiervan. **Objecten** in JS zijn ook **associatieve arrays**. Dit wil zeggen dat de publieke eigenschappen  en methoden toegankelijk zijn d.m.v. de keys: **eigenschapsnamen** en **methodenamen**.

```javascript
var femalesinghent = [];
femalesinghent['2012'] = 19532;
femalesinghent['2011'] = 18245;
femalesinghent['2010'] = 14236;
alert('Amount of females in 2011: ' + femalesinghent['2011']);
```

In een associatieve array zijn de elementen toegankelijk via de key of via de index. Indien de key een nummer is, kunnen we deze niet rechtstreeks aanspreken, bv: `femalesinghent.2011` kan niet! We moeten in dit geval de key aanspreken via een associatieve array.

```javascript
var matrix = [
        [1,6,9],
        [2,4,8],
        [3,5,7]
    ];
matrix[1][1];//4
matrix[0][2];//9
matrix[2][0];//3
console.log(matrix.join('\n'));
/*
1,6,9
2,4,8
3,5,7
*/
```

Een two-dimensional Array is een multidimensionale Array. Deze soort bevat twee dimensies, namelijk een Array in een Array.

```javascript
var persons = [];
persons.push('Philippe De Pauw - Waterschoot');
persons.push('Olivier Parent');
persons.push('Jonas Pottie');
persons.push('Tom Neuttiens');
for(var i=0;i<persons.length;i++){
    console.log('Person ' + i + ': ' + persons[i]);
}
/*
Person 0: Philippe De Pauw - Waterschoot Person 1: Olivier Parent Person 2: Jonas Pottie Person 3: Tom Neuttiens
*/
```

> - Itereren van alle elementen uit de Array via een for-loop.
- Van index `0` tot en met de lengte van de `Array-1`.

####Math

Het Math object laat toe om mathematische- of wiskundige berekeningen uit te voeren. Het Math object is een actief object en is reeds geinitialiseerd. Dat betekent ook dat het **geen constructor** bevat in tegenstelling tot het Array object. Het is vergelijkbaar met een statische klasse met statische eigenschappen en methoden in OOP talen, zoals C#, Java, ... .

```javascript
var x = Math.PI*Math.pow(r,2);
var y = Math.sin(Math.PI*60/180);
var speed = 2-Math.random()*4;
```
####Date


Operatoren en controlestructuren
--------------------------------

Javascript bevat een aantal soorten operatoren:

- Rekenkundige operatoren **(arithmetic)**
`+, -, *, /, %, ++ en –`
- Gelijkstellingsoperatoren **(assignment)**
`=, +=, -=, *=, /= en %=`
- Vergelijkingsoperatoren **(comparison)**
`>, <, >=, <=, !=, !==, == en ===`
- Logische operatoren **(logical)**
`&&, || en !`
- Conditionele operator **(conditional)**

###Rekenkundige operatoren

> Arithmetic operators

```javascript
var a = 6;
var b = a + 4;//10
console.log(b++);//10
console.log(b);//11
var c = 7;
console.log(++c);//8
var d = a - 8;//-2
var e = 8;
console.log(e--);//8
console.log(e);//7
var f = 9;
console.log(--f);//8
```

> - `+` (addition)
- `-` (substraction)
- `/` (division)
- `*` (multiplication)
- `%` (modulus)
- `--` (decrement)
- `++` (increment)

```javascript
var y = 9;
var x = y - 4;//5
x = x * 4;//20
x = x / 8;//2.5
x = y % 2;//1
x = ++y;//y = 10, x = 10
x = y++;//y = 11, x = 10
x = --y;//y = 10, x = 10
x = y--;//y = 9, x = 10
```

De `+` operator bij strings voegt string variabelen of tekstwaarden bij elkaar (**concatenating**). Numerieke waarden worden niet opgeteld indien ze worden voorafgegaan door een string. Conversie van een numerieke waarde naar een string kan o.a. door het optellen van een lege string.

```javascript
var str_1 = 'Hello';
var str_2 = 'World';
var str_3 = str_1 + ' ' + str_2;//'Hello World'
var str_4 = '67' + 3 + 4;//'6734'
var str_5 = 3 + 4 + '67';//'767'
var str_6 = 99 + '';//'99'
```

###Gelijkstellingsoperatoren

> Assignment operators

```javascript
var x = 12, y = 3;
x = y;//3
x += y;//6
x -= y;//3
x *= y;//9
x /= y;//3
x %= y;//0
```

> - `=, +=, -=, *=, /= en %=`
- `x += y` zelfde als `x = x + y`;
- `x -= y` zelfde als `x = x - y`;
- `x /= y` zelfde als `x = x / y`;
- `x *= y`zelfde als `x = x * y`;
- `x %= y` zelfde als `x = x % y`;

###Vergelijkingsoperatoren 

> Comparisson operators

```javascript
var x = 6;
x == 8;//false
x == 6;//true
x == '6';//true
x === '6';//false
x != 9;//true
x != '6';//false
x !== 6;//false
x !== '6';//true
x > 9;//false
x < 9;//true
x >= 5;//true
x <= 4;//false
1 == true;//true
1 === true;//false
```

> - `>, <, >=, <=, !=, !==, == en ===`
- `!=` (niet gelijk aan, verschillend van)
- `!==` (andere waarde of ander type)
- `==` (gelijk aan)
- `===` (gelijke waarde en gelijke type)

###Logische operatoren 

> Logical operators

```javascript
var x = 8, y = 5;
(x < 10 && y > 2);//true
(x == 6 || y == 5);//true
!(x > y);//false
```

> - `&&` (en)
- `||` (of)
- `!` (niet)
- `&&` heeft een hogere prioriteit dan ||

###Conditionele operatoren 

> Conditional operator of ternary operator

```javascript
var isGamePlaying = false;
var msg = (!isGamePlaying)?'Game Over':'Playing';//'Game Over'
```

> - Toekennen van een waarde aan een variabele gebaseerd op een bepaalde conditie
- `naamvariabele = (conditie)?waarde1:waarde2`

###Conditionele statements

> Conditional Statements:
>  
>  - `if`, `if/else`, `if/else if/else`
>  - `switch`
>  
> Extra statements toepasbaar in conditionele statements:
>  
>  `break`, `continue`, `try/catch`, `throw`

####if

```javascript
var enemiesKilled = 50, levelfailed = false;
if(enemiesKilled < 40){
    levelfailed = true;
}
var msg = (levelfailed)?'Game Over':'Next level';//'Next level'
```

> - Als een bepaalde conditie waar is (`true`), zal de code tussen `{` en `}` uitgevoerd worden.
- Vb.: `50 > 40`, conditie is niet waar, levelfailed staat standaard op `false`, waardoor de waarde in msg ‘Next level’ bevat.

####if/else

```javascript
var isFinished = true, msg;
if(!isFinished){
    msg = 'I am still playing';
}else{
    msg = 'I Finished the game';
}
console.log('Game state: ' + msg);
```

> - Als een bepaalde conditie waar is (true), zal de code tussen { en } uitgevoerd worden, indien niet waar wordt de code bij het else statement tussen { en } uitgevoerd.
- Indien isFinished de waarde false bevat, wordt de conditie waar (lees niet false) en wordt de code tussen { en } uitgevoerd.
- Wordt de waarde van de variabele isFinished true, dan zal de code uit het else statement uitgevoerd worden.

####if/else if/else

```javascript
var age = 31;
if(age < 18){
    msg = 'You are an adolescent.';
}else if(age >= 18 && age < 32){
    msg = 'You are an adult.';
}else{
    msg = 'You are getting older :).';
}
console.log(msg);
```

> - Als een bepaalde conditie waar is (true), zal de code tussen { en } uitgevoerd worden, indien niet waar wordt de volgende conditie bekeken (else if), indien nogmaals niet waar, dan wordt de code bij het else statement tussen { en } uitgevoerd.
- Meerdere condities kunnen in sequentie nagegaan worden, indien de vorige conditie niet waar was!

####switch/base, break en default

```javascript
var direction = 'SW', msg;
switch(direction){
    case 'N':
        msg = 'North';
        break;
    case 'NE':
        msg = 'North-East';
        break;
    case 'E':
        msg = 'East';
        break;
    case 'SE':
        msg = 'South-East';
        break;
    case 'S':
        msg = 'South';
        break;
    case 'SW':
        msg = 'South-West';
        break;
    case 'W':
        msg = 'West';
        break;
    case 'NW':
        msg = 'North-West';
        break;
    default:
        msg = 'No direction defined!';
}
console.log(msg);
```

> - Eerst en vooral wordt een bepaalde expressie geëvalueerd. Vervolgens wordt deze expressie vergelijken met de waarden voor elk mogelijk geval (case) in de structuur.
- Indien er een overeenkomst is met een bepaald geval, zal de code hierin uitgevoerd worden.
- De code wordt hierin afgesloten met het break statement, behalve bij het default statement (het standaard geval, indien geen overeenkomst gevonden).

```javascript
var dayOfTheWeek = new Date().getDay();
var msg;
switch(dayOfTheWeek){
    case 0:case 6:msg='It\'s weekend :)';break;
    default:msg='I wish it was weekend!';
}
console.log(msg);
```

> - Meerdere gevallen (cases) kunnen dezelfde code bevatten en plaatsen we beter achter elkaar gescheiden door een dubbelpunt.
- De getDay() methode van het Date object heeft een cijfer terug, die de dag van de week representeert: 0 (zondag), 1 (maandag), …, 6 (zaterdag)
Eerst en vooral wordt een bepaalde expressie geëvalueerd. Vervolgens wordt deze expressie vergelijken met de waarden voor elk mogelijk geval (case) in de structuur.
- Indien er een overeenkomst is met een bepaald geval, zal de code hierin uitgevoerd worden.
- De code wordt hierin afgesloten met het break statement, behalve bij het default statement (het standaard geval, indien geen overeenkomst gevonden).



###Lussen statements

> Loop Statements:
>  
>  - `for`, `for/in`, `for/of`, `forEach`, `for each`, `while`, `do/while`
>  
> Extra statements toepasbaar in conditionele statements:
>  
>  `break`, `continue`, `try/catch`, `throw`


Functies
--------

Zoals we eerder al kenbaar maakten, zijn functies objecten. Functies hebben naast eigenschappen ook methoden wat gelijk is aan andere functies. Functies zijn uiteraard ook uitvoerbaar (to invoke). Functies kunnen in JS ook gekopieerd, verwijderd, … worden.

```javascript
function Hello(message){
    return message;
}
alert(Hello("World"));

var Hello = function(message){
    return message;
}
alert(Hello("World"));
```

Functies zijn objecten waardoor we welbepaalde eigenschappen kunnen aanspreken, zoals:  `length`, `name`, `arity`, `caller` en `constructor`. Ook algemene overgeërfde methoden kunnen we aanspreken: `apply`, `bind`, `call`, `isGenerator`, `toSource` en `toString`.

```javascript
var Hello = function Hello(message){
    return message;
};
alert(Hello.length + ' ' + Hello.name);//1 Hello

var Tweet = Hello;
alert(Tweet.call(null, "I send a tweet!"));//I send a tweet!
```

Functies geven altijd een waarde terug. Zonder het return statement geeft het de waarde `undefined` terug! Functies kunnen ook andere objecten teruggeven of zelfs andere functies!

```javascript
var factorial = function(n) {
    n = parseInt(n);
    if (isNaN(n)) return undefined;
    return n > 1 ? (n * factorial(n - 1)) : n < 0 ? (n * factorial(n + 1)) : 1;
}
alert(factorial(4));
```

> - De code demonstreert een recursieve functie
- Een recursieve functie is een functie die zichzelf kan oproepen
- In dit voorbeeld berekenen we de faculteit van een bepaald getal (argument `n`)
- De functie `isNaN(n)` wordt gebruikt om na te gaan of de waarde van een variabele geen getal is (Not-A-Number).

```javascript
Math.factorial = function(n) {
    n = parseInt(n);
    if (isNaN(n)) return undefined;
    return n > 1 ? (n * Math.factorial(n - 1)) : n < 0 ? (n * Math.factorial(n + 1)) : 1;
}
console.log(Math.factorial(4));
```

Bestaande objecten in JavaScript kunnen we uitbreiden met extra functionaliteiten. In dit geval breiden we het `Math` object uit met een functie waarmee we faculteit van een bepaald getal kunnen berekenen. Wanneer we herhaaldelijke faculteiten willen berekenen, dan kunnen we beter gebruik maken van cache technieken!

OOP in JavaScript
-----------------

### Algemene OOP termen

- **Class (klasse)**
Definieert de eigenschappen en acties van een object.
- **Object**
Is een instantie van een vooraf gedefinieerde klasse.
- **Property** (eigenschap)
Een karakteristiek van een object, bv.: haarkleur.
- **Method** (methode of functie)
Een actie die door het object kan uitgevoerd worden, bv: eten.
- **Constructor**
Wordt aangeroepen tijdens het instantiëren van een klasse. Een instantie van een klasse noemen we een object.
- **Inheritance (overerving)**
Een klasse kan eigenschappen en acties overerven (to inherit) van een andere klasse.
- **Encapsulation** (encapsulatie)
	- De mate van bescherming geven aan eigenschappen en acties.
	- Voorkomen van corrupte gegevens.
	- Hanteren van vooropgestelde domeinlogica.
	- Vele OOP talen bevatten de keywords:
		- **Public**
		Toegankelijk door alle klassen
		- **Private**
		Enkel toegankelijk door de klasse zelf
		- **Protected**
		Toegankelijk door de klasse zelf en alle afgeleide klassen
		- **Internal**
		Toegankelijk door alle klassen binnen eenzelfde naamruimte (namespace)
- **Namespace**
Is een container of omgeving waarbinnen we een logische groepering van klassen organiseren.
- **Polymorphism** (polymorphisme)
Het overschrijven ven overgeërfde functies
In deze nieuwe function kunnen we de functie van de ouder (waarvan men overerft) aanspreken!
- **Static property**
Dit is een eigenschap die niet van waarde zal veranderen en ook niet vereist dat de klasse zal geïnstantieerd worden. We kunnen deze eigenschap gewoonweg aanspreken via:
`naamvandeklasse.naamvandeigenschap`.
De eigenschap wordt meestal in capitalen uitgedrukt.
- **Static methods**
Dit zijn methoden die direct kunnen aangeroepen worden via:
`naamvandeklasse.naamvandemethode`.
- **Interfaces**
	- Beschrijft de noodzakelijk eigenschappen, methoden, delegates en events die aanwezig moeten zijn in de klasse, die deze interface implementeert!
	- Een interface kan geen “state” of implementatie bevatten.
	- De eigenschappen bevatten geen waarden en methoden bevatten geen instructies en kunnen ook geen waarden teruggeven aan de aanvrager (caller).
	- Een interface wordt meestal aangeduid via de prefix `“I”`, bv.: `IPerson`.
- **Abstract class**
	- Een abstract klasse kan niet geïnstantieerd worden
	- Een abstract klasse kan abstracte eigenschappen en methoden bevatten
	- Een abstract klasse kan overgeërfd worden
	- Abstracte eigenschappen en methoden kunnen overschreven worden
- **Sealed class**
Een sealed klasse kan niet overgeërfd worden!

###Object initializers

```javascript
var person = {
    "firstname":"Philippe",
    "surname":"De Pauw",
    "toString": function(){
        return this.firstname + ' ' + this.surname;
    }
};

var p = person;
p.firstname = "Olivier";
p.surname = "Parent";
alert(p);

var p2 = person;
p2.firstname = "Achmed";
p2.surname = "Parent";
alert(p2);
```

> - Creatie van eigen objecten
- Literal notatie, zoals JSON(P) maar dan een stijk vrijer wat betreft de key/value pairs.
- Bestaat uit een verzameling van key/value pairs.
- De key fungeert als identifier.
- Namen, nummers of string notatie worden toegelaten als een identifier, bij voorkeur string notaties.
- Alle gedefinieerde identifiers zijn altijd toegankelijk voor iedereen (public).
- Geen constructor, stel een nieuwe variabele p gelijk aan het object literal person.
- De browser maakt hierdoor een kloon aan van het person object.

```javascript
shittyplace = {
    "type":"Urinoir",
    "geolocation":{"lat":50.35671,"lng":3.75896},
    "toString": function(){
        return this.type;
    }
};

var s = shittyplace;
s.type = "Volwaardig sanitair";
s.geolocation.lat = 46.24587;
s.geolocation.lng = 5.124987;
alert(s);
```

Een identifier kunnen we eenvoudig aanspreken via de naam van de identifier. In het bovenstaande voorbeeld hebben we ook een functie `toString` gedefinieerd die de voornaam en familienaam teruggeeft aan de aanvrager.

Syntax:

- Het object wordt omsloten door curly braces `{` en `}`.
- Alle eigenschappen en methoden worden gescheiden door een comma.
- Identifier en de waarde ervan worden gescheiden door een dubbelpunt `:` (colon).

Vergeet het `;` niet na de curly brace `}`. Een eigenschap kan eveneens een array of literal object bevatten, zie `geolocation` property.

```javascript
var movie = {
    "title":"Lock, Stock and Two Smoking Barrels",
    "synopsis":"A botched card game in London triggers four friends, thugs, weed-growers, hard gangsters, loan sharks and debt collectors to collide with each other in a series of unexpected events, all for the sake of weed, cash and two antique shotguns.",
    "year":1998,
    "toString":function(){
        return this.title;
    }
};
console.log(movie);//Get the object
console.log(movie.toString());//Get the string representation of the object

//Make a clone of the previous object (movie)
var movie2 = movie;
movie2.title = "De reis van Chihiro";
movie2.synopsis = "In the middle of her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and monsters; where humans are changed into animals; and a bathhouse for these creatures.";
movie2.year = 2001;
console.log(movie2);
```



###Object constructors

```javascript
function Person(){
    this.firstName;
    this.surName;
    this.isFemale = true;
    this.toString = function(){
        return this.firstName + ' ' + this.surName;
    }
}
//Create a Person -> Object
var p = new Person();//Initialize
p.firstName = "Philippe";
p.surName = "De Pauw - Waterschoot";
p.isFemale = false;
console.log(p);
console.log(p.toString());
```

We gebruiken het `Function` keyword om een klasse aan te maken in JavaScript. `This` keyword betekent dat de variabele betrekking heeft op de klasse en dat deze variabele toegankelijk is voor iedereen (public). Een nieuwe instantie maken kunnen we via het `new` keyword waardoor de constructor van de klasse wordt aangesproken. In dit geval zonder argumenten.

Een waarde aan een eigenschap toekennen doen we via de "assignment" operator `=`. De waarde `Philippe` wordt gestopt als inhoud van de variabele `firstname`. Een waarde opvragen gebeurt gewoonweg door deze eigenschap aan te spreken, net zoals het uitvoeren van een functie of methode.

```javascript
function Person(){
    this.firstname;
    this.surname;
    this.toString = function(){
        return this.firstname + ' ' + this.surname;
    }
}

var p = new Person();
alert(p.constructor === Person);//true

var obj = {};
alert(obj.constructor === Object);

var years = [2010,2011,2012];
alert(years.constructor === Array);
```

De constructor eigenschap retourneert een referentie naar de object functie die het prototype aanmaakt! In de meeste gevallen is dat de functie zelf die geïnstantieerd zal worden! JavaScript bevat reeds een aantal ingebouwde constructors, zoals: Object, Array, Function, RegExp, Number, String, Boolean, Date, Error, SyntaxError, … .

> `var obj = {};`

>  Is beter dan

>  `var obj = new Object();`

>  ***

>  `var arr = [];`

>  Is beter dan

>  `var arr = new Array();`

>  ***

>  `var rge = /[a-z]/gmi;`

>  Is beter dan

>  `var rge = new RegExp(‘[a-z]’, ‘gmi’);`

>  ***

>  `var hello = function(message){return message;}`

>  Is beter dan

>  `var hello = new Function(‘message’, ‘return message’);`

```
function Movie(){
    this.title;
    this.synopsis;
    this.year;
    this.toString = function(){
        return this.title;
    };
}

var movie1 = new Movie();//Make an instance of the (class) Movie via new keyword
console.log(movie1);
movie1.title = "De reis van Chihiro";
movie1.synopsis = "In the middle of her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and monsters; where humans are changed into animals; and a bathhouse for these creatures.";
movie1.year = 2001;
console.log(movie1);
```

###Private, public en closures

```javascript
function Person(){
    var _firstname;
    var _surname;

    function toString(){
        return _firstname + ' ' + _surname;
    }

    return{
        getFirstName:function(){
            return _firstname;
        },
        setFirstName:function(value){
            _firstname = value;
        },
        getSurName:function(){
            return _surname;
        },
        setSurName:function(value){
            _surname = value;
        },
        toString:toString
    };
}

var p = new Person();
p.setFirstName("Philippe");
p.setSurName("De Pauw");
alert(p);
```

> - Om een variabele binnen een klasse te beschermen, kunnen we het `var` keyword gebruiken (= **private**)
- Hierdoor zijn deze variabelen niet toegankelijk door derden
- De function `toString` hebben we ook "private" gemaakt
- In een `return` statement definiëren we de eigenschappen en methoden die wel toegankelijk mogen zijn (**public**). Hierin hanteren we de **literal notatie**!
- We maken bijvoorbeeld de variabele `_firstname` toegankelijk via de identifier `getFirstName`, wat een functie is!

```javascript
function Person(){
    var _firstname;
    var _surname;

    function toString(){
        return _firstname + ' ' + _surname;
    }

    function getFirstName(){
        return _firstname;
    }
    function setFirstName(value){
        _firstname = value;
    }

    function getSurName(){
        return _surname;
    }
    function setSurName(value){
        _surname = value;
    }

    return{
        getFirstName:getFirstName,
        setFirstName:setFirstName,
        getSurName:getSurName,
        setSurName:setSurName,
        toString:toString
    };
}

var p = new Person();
p.setFirstName("Philippe");
p.setSurName("De Pauw");
alert(p);
```

> - De voorgaande code kunnen we ook nog anders implementeren.
- In deze nieuwe aanpak maken we alle methoden private.
- Om deze public te maken vermelden we deze functie d.m.v. de sleutel.
- Bv.: we spreken de functie `getFirstName` aan via de key getFirstName
- Vergeet niet dat de sleutel ook een andere naam mag bevatten.
- De notatie binnen het return statement is logischerwijs de literal notatie van een object!

```javascript
//Simulate Encapsulation in Object Constructor
function ApplicationUser(){
    //Private variables
    var _userName;
    var _password;
    var _email;

    //Private function or method
    function toString(){
        return _userName + ' -> Email: ' + _email;
    }

    //Public methods
    return {
        toString:toString,
        getUserName:function(){
            return _userName;
        },
        setUserName:function(value){
            _userName = value;
        },
        getEmail:function(){
            return _email;
        },
        setEmail:function(value){
            _email = value;
        }
    };
}
//Make an instance of the ApplicationUser (class)
var user1 = new ApplicationUser();
user1.setUserName('Philippe');
user1.setEmail('De Pauw - Waterschoot');
console.log(user1.toString());
```

```javascript
function PC(){
    //Private Variables
    var _nCores = 32;
    var _memorySize = 128;
    var _ssd = 2000;
    //Private Methods
    function toString(){
        return 'PC: ' + _nCores + ' cores, ' + _memorySize + ' GB RAM';
    }
    //Public Methods aka Closures
    return {
        toString:toString,
        setNumberOfCores:function(value){
            _nCores = value;
        },
        getNumberOfCores:function(){
            return _nCores;
        }
    };
}

var raspBerryAmericanPie = new PC();
console.log(raspBerryAmericanPie._nCores);
console.log(raspBerryAmericanPie.toString());
raspBerryAmericanPie.setNumberOfCores(69874);
console.log(raspBerryAmericanPie.getNumberOfCores());
```

###Prototypes

Iedere functie heeft een prototype eigenschap. Deze eigenschap bevat een object zoals je die kan verkrijgen met `{` en `}`. De prototype eigenschap kan zelf eigenschappen en methoden bevatten, het bevat een verborgen link naar het object zelf. De prototype eigenschap kan zelfs vervangen worden door een totaal andere structuur. Het gebruik van het `prototype` keyword zorgt voor een betere performantie dan de voorgaande methoden. Objecten die van een klasse overerven, waarin prototypen zijn gedefinieerd, maken "clonen" van deze prototypen. Wijzigen we een prototype uit de originele klasse, dan heeft deze invloed op de objecten die hiervan overerven!

```javascript
function Person(){}
var p = new Person();
alert(p instanceof Person);//true
Person.prototype = {};
alert(p instanceof Person);//false
```

> - In de code hiernaast definiëren we een nieuwe klasse `Person`
- Vervolgens maken we een instantie van de deze klasse = object, bewaard in variabele `p`
- Op dit moment is `p` een instantie van (`instanceof`) `Person`
- Wijzigen we vervolgens de `prototype` eigenschap van de klasse `Person` door een nieuw `Object` hierin aan te maken
- Dan zal het object `p` niet meer een instantie zijn van de klasse `Person`

```javascript
function Person(){}
Person.prototype.firstName = "Philippe";
var p = new Person();
alert(p.firstName);//Philippe
Person.prototype.firstName = "Olivier";
alert(p.firstName);//Olivier
p.firstName = "Obama";
alert(p.firstName);//Obama
alert(Person.prototype.firstName);//Olivier
Person.prototype.firstName = "Linus";
alert(p.firstName);//Obama
```

> - Aan deze klasse `Person` voegen we een nieuwe eigenschap toe aan de `prototype` eigenschap, namelijk `firstName` met als waarde `Philippe`
- Na het instantiëren van deze klasse vragen we de eigenschap `firstName` op `Philippe`
- Geven we vervolgens de waarde `Olivier` aan de eigenschap `firstName` via het `prototype`, dan zal het object `p` ook deze waarde bevatten!
- Veranderen we de waarde van de eigenschap `firstName` via het object `p`, dan zal deze de nieuwe waarde bevatten
- Veranderen we de firstName eigenschap via de `prototype` eigenschap met de nieuwe waarde `Linus`
- Dan zit nog steeds de waarde `Obama` in het object `p`

```javascript
function Person(){}
Person.prototype = {
    talk:function(){
        return "I'm talking!";
    }
};
function Student(){}
Student.prototype = new Person();

function Lecturer(){}
Lecturer.prototype = new Person();

//--------------------------------

function Student(){}
Student.prototype = Person.prototype;

function Lecturer(){}
Lecturer.prototype = Person.prototype;
```

- `Student` en `Lecturer` zijn subklassen van de klasse `Person`
- Om dit te verwezenlijken moeten we de `prototype` eigenschap van `Student` en `Lecturer` gelijkstellen aan een nieuwe instantie van de klasse `Person`
- We kunnen dit ook verwezenlijken door het voorgaande gelijk te stellen aan de `prototype` eigenschap van de klasse Person
- Nice link: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures> en <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model>

###Naamruimten

Naamruimten of namespaces zijn voorlopg niet ingebed in de broncode van JS, maar wwe kunnen deze wel simuleren via objecten. Eerst en vooral maken we een globaal object aan. In dit globaal object kunnen we andere objecten en functies (methoden) koppelen.

```javascript
var DrDynscript = DrDynscript || {};
DrDynscript.AppGhentParkings = {};
DrDynscript.AppGhentParkings.Models = {};
```

> - `DrDynscript` fungeert als de "main" namespace. Hierbinnen definiëren we de andere namespaces.
- `AppGhentParkings` fungeert als een sub-namespace binnen de `DrDynscript` namespace.
- `{}` betekent de aanmaak van een `object`, voorlopig zonder eigenschappen en acties

```javascript
DrDynscript.AppGhentParkings.Models.Person = function(){
	…
};

var p = new DrDynscript.AppGhentParkings.Models.Person();
p.setFirstName("Philippe");
p.setSurName("De Pauw");
alert(p);
```

> - We definiëren een nieuwe klasse Person binnen de namespace `DrDynscript.AppGhentParkings.Models`
- De klasse `Person` is voorlopig een lege OOP klasse
- De syntax na de assignment operator `=` definieert een naamloze functie
- Voor een Object constructor functie is de bovenstaande code geldig
- Om een nieuwe instantie te maken moeten we het volledig pad, lees namespace, naar de klasse vermelden.

###Voorbeeld

```javascript
var drdynscript = drdynscript || {};
drdynscript.appgdm = {};
drdynscript.appgdm.models = {};

drdynscript.appgdm.models.Person = (function(){
    var _firstName;

    //CONSTRUCTOR
	Person.prototype.constructor = Person;
	function Person(){}

    //GET AND SET METHODS
    Person.prototype.getFirstName = function(){
        return _firstName;
    };
    Person.prototype.setFirstName = function(value){
        _firstName = value;
    };

    return Person;
}());

var p = new drdynscript.appgdm.models.Person();
alert(p.getFirstName());
```

> - We maken een nieuwe naamruimte `drdynscript` aan
- Deze naamruimte bevat een sub-naamruimte `appgdm`
- Vervolgens bevat deze sub-naamruimte, de naamruimte `models`
- In deze laatste naamruimte voegen we een nieuwe klasse `Person` toe, via een naamloze functie
- Deze naamloze functie bevat tenminste:
    - Het gelijkstellen van de constructor van de prototype-eigenschap aan de constructor van de `Person` klasse (reset)
    - Definitie van de constructor
    - Teruggeven van het `Person` object (inclusief alle publieke methoden en eigenschappen)
- We breiden vervolgens de `Person` klasse uit met `private` variabelen
- In dit geval beperken we ons tot de voornaam van een persoon, via de variabele `_firstName`
- Deze variabele is niet toegankelijk door derden!
- Om deze variabele toegankelijk te maken, moeten we `get` en `set` methoden voorzien, die uiteraard publiek toegankelijk zijn!
- Deze twee methoden zullen toegevoegd worden aan de prototype eigenschap!

Bronnen
-------

- <http://www.w3schools.com/js/>
- <https://developer.mozilla.org/nl/docs/Web/JavaScript>
- <https://nl.wikipedia.org/wiki/JavaScript>
- <https://www.javascript.com/>
- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript>