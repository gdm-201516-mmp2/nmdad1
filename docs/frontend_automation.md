Front-end automation
==================

|Info|  |
|----|---|
|Olod|New Media Design & Development I|
|Auteur(s)|Philippe De Pauw - Waterschoot, Jonas Pottie|
|Opleiding|Bachelor in de Grafische en digitale media|
|Academiejaar|2015-16|

***

Proxy instellingen binnen de Arteveldehogeschool
------------------------------------------------------------

|Protocol|Proxy server|
|--------|------|
|HTTP|http://proxy.arteveldehs.be:8080|
|HTTPS|http://proxy.arteveldehs.be:8080|
|FTP|http://proxy.arteveldehs.be:8080|

Deze proxy settings zijn van toepassing op de verbindingen:

- Arteveldehs Veilig (Wifi)
- Arteveldehs via KAT-6, UTP netwerkkabel

**Arteveldehs Open heeft geen proxy instellingen (settings) nodig**. Nadeel: om de 15 minuten terug inloggen!  Thuis hebben we waarschijnlijk geen proxy server, waardoor deze proxy instellingen uitgeschakeld moeten worden!

Automation tools
---------------------

###Git

Git is een revisie (revision control) beheersysteem en een broncode (source code) management systeem (SCM). Initieel ontwikkeld door Linus Torvalds voor de Linux Kernel Development. Iedere Git werkmap bevat een volledige **repository** met een overzicht van de geschiedenis en bevat ook **tracking capaciteiten**. Git is niet afhankelijk van een centrale opslagplaats!

Nieuwe versies van een app worden eerst **lokaal bewaard** in een **lokale copy van de centrale opslagplaats** (server). Deze lokale opslagplaats kan later **gesynchroniseerd** worden met de centrale opslagplaats. **Conflicten** in versies worden aangeduid door de git software, zodat een teamlid deze kan oplossen!

> **Git flow: **
>  
>  ![Git flow](https://lh3.googleusercontent.com/-QJ8Ag3kMo_4/VDQpjQipAoI/AAAAAAAAAeQ/wIhx5fbKBwA/s0/gitflow.png "gitflow.png")

**GitHub** is een webgebaseerde (web-based) service om software development projecten te herbergen (hosten) gebruik makend van het Git revisie (revision control) beheersysteem. Het wordt veel gebruikt voor open-source software development projecten. GitHub bevat de volgende plannen:

- Private repositories (betalend)
- Public repositories (gratis en open-source)
- GitHub Enterprise (GitHub systeem opzetten op eigen servers)

**Bitbucket** is een centraal systeem voor gedistribueerde versie control systeem. Het bevat o.a. **een issue tracker, wiki en integraties met andere populaire services, zoals Basecamp**. De gratis versie van Bitbucket bevat ook ondersteuning voor beschermde repositories, doch in aantal beperkt (max 5 op 7-10-2014). De community die GitHub gebruikt is ongeveer 5x zo groot dan deze die Bitbucket gebruiken (op 7-10-2014). GitHub private repositories zijn duurder dan deze uit Bitbucket, bron: <http://osintegrators.github.io/githubvbitbucket/>.

De installatie van `git` kan getest worden door het commando `git` uit te voeren via commandline. 

####Configuratie

- Username
	- `git config --global user.name "drdynscript"`
- Email = Account
	- `git config --global user.email "drdynscript@gmail.com"`
- Proxy servers
	- `git config --global http.proxy "http://proxy.arteveldehs.be:8080"`
	- `git config --global https.proxy "http://proxy.arteveldehs.be:8080"`    
- Verwijderen van Proxy servers
	- `git config --global --unset http.proxy`
	- `git config --global --unset https.proxy`
- Https gebruiken i.p.v. git (proxy)
	- `git config --global url."https://github.com".insteadOf git://github.com`
- Editeren van `.gitconfig`
	- `vi ~/.gitconfig` of 'grep ~/.gitconfig' (vi & grep zijn editors)

Door Ã©Ã©n van deze handelingen uit te voeren wordt er een configuratiebestand geschreven op de locatie `~/.gitconfig` (of `~/.config/git/config`). `~` komt overeen met de homelocatie van een gebruiker, bv. op windows: `C:\Users\drdynscript`.

> **.gitconfig** bestand
>  
>  ![.gitconfig bestand](https://lh6.googleusercontent.com/-aLFCUuMhef4/VIBf7a6kQLI/AAAAAAAAArM/-Uq1g4zBTdo/s0/gitconfig.PNG "gitconfig.PNG")

####Commando's

- Toevoegen van bestanden en mappen aan de volgende commit.
	- `git add *.*`
- Commit of doorvoeren van de toegevoegde bestanden en mappen.
	- `git commit -m "Update Git Repository"`
- Push of versturen van de commit naar de online repository.
	- `git push -u origin master`

####Up-to-date blijven met de cursusinhoud

**EÃ©nmalig klonen van de cursus** <https://bitbucket.org/drdynscript/nmdadi_201415/overview>, via de url vermeld rechtsboven in de browser: <https://drdynscript@bitbucket.org/drdynscript/nmdadi_201415.git>.

- `git clone https://drdynscript@bitbucket.org/drdynscript/nmdadi_201415.git`

Om een update te ontvangen van de cursus, navigeren we naar de aangemaakte folder `nmdadi_201415`. Hierbinnen voeren we hetvolgende commando uit:

- `git pull origin master`

Het resultaat van dit commando geeft de wijzigingen en toevoegen weer per bestand. Uiteraard kunnen jullie niet via de `push` optie van het `git` commando wijzigingen aanbrengen in deze cursus, maar suggesties en opmerkingen zijn steeds welkom.

###Ruby Gems

Ruby Gems is een package manager voor de Ruby programmeertaal. Het is een formaat om Ruby-programmaâ€™s en bibliotheken te distribueren. Daarnaast is het een tool om de installatie van gems eenvoudig te beheren. De distributie van gems verloopt via online server(s).

Het gem commandline-tool zit vervat in **Ruby**. Ruby is een dynamische open-source programmeertaal met de focus op eenvoudigheid en productiviteit. De syntax is elegant, natuurgetrouw en eenvoudig te lezen en te schrijven. Het is geÃ¯nspireerd door Perl met Smalltalk eigenschappen, zie <http://en.wikipedia.org/wiki/Ruby_(programming_language>. Ruby is ontwikkeld door  Yukihiro â€œMatzâ€ Matsumoto, zie <https://www.ruby-lang.org/en/>.

Ruby installatie via <https://www.ruby-lang.org/en/downloads/>:

- Windows  
Via **RubyInstaller**, pik, **Chocolatey**, **NuGet**, ...
- OSX  
Via rbenv, RVM (Ruby Version Manager), **Homebrew**
- Linux/Unix  
Via **rbenv**, RVM, **apt**, yup/yum, packman, **Linuxbrew**â€¦

De installatie van Ruby Gems kan getest worden door het commando `gem` uit te voeren via commandline. 

####Commando's

- GeÃ¯nstalleerde gems
	- `gem list`
- Ruby Gems version
	- `gem --version`
- Update Ruby Gems
	- `gem update --system`

###npm

[npm](https://npmjs.org/ "Node Package Manager") staat voor Node Packaged Modules (officieel) of Node Package Manager (community). Het is de officiÃ«le â€œpackage managerâ€ voor Node.js. NPM bevat een aantal hoofdfunctionaliteiten:

- Runt via de command line
- Beheer (Management) van afhankelijkheden (dependencies) binnen een applicatie
- Installatie van Node.js applicaties die beschikbaar zijn op de â€œnpmRegistryâ€
- Gekende `npm` packages: `bower`, `grunt`, `gulp`, `yo`, `underscore`, `lodash`, `express`, ...
- Zoeken naar packages via webapplicatie: <https://www.npmjs.org/>

De installatie van Node Package Manager kan getest worden door het commando `npm` uit te voeren via commandline. 

####Configuratie

Door het commando `npm config edit` uit te voeren wordt er een configuratiebestand geschreven op de locatie `~/.npmrc`. `~` komt overeen met de homelocatie van een gebruiker, bv. op windows: `C:\Users\drdynscript`. In dit bestand worden alle nuttige instellen, met betrekking op Node Package Manager, toegevoegd. De meeste instellingen staan weliswaar in commentaar en zijn dus nog niet actief!

Om een instelling actief te maken verwijderen we `;` vooraan uit een regel. Dit kunnen we bijvoorbeeld doen bij de instellingen `proxy` en `https_proxy` wanneer we surfen op internet via een proxy server, bijvoorbeeld: `http://proxy.arteveldehs.be:8080`.

Instellingen van `npm` kunnen ook uitgevoerd worden via commandline:

- `npm set http_proxy http://proxy.arteveldehs.be:8080`
- `npm set https_proxy http://proxy.arteveldehs.be:8080`

> **.npmrc** bestand
>  
>  ![.npmrc bestand](https://lh3.googleusercontent.com/-c2Xky2fCKY8/VIBfj4uLP3I/AAAAAAAAArA/Cw6HBKXT8kE/s0/npmrc.png "npmrc.png")

####Commando's
  
- Update `npm` naar de laatste beschikbare versie of globale installatie.
	- `npm update -g npm`
- Ophalen van het versienummer van `npm`.
	- `npm --version` 
- Lokale installatie van `bower`.
	- `npm install bower`  
- Bekijken van de details van een npm package, in dit geval `gulp`.
	- `npm view gulp`
- Zoeken naar bepaalde packages via zoekstrings.
	- `npm search grunt`  

###Bower

[Bower](https://github.com/bower/bower "Bower GitHub Repo") is een **â€œpackage managerâ€** voor het web of **Browser package manager** (officieel). Bower heeft als hoofddoel het afhandelen van JavaScript bibliotheken. Ook beheert het andere mogelijke pakketten, zoals: HTML, CSS en andere assets. Een pakket betekent elke publiek toegankelijke code en assets, meestal gedeeld via een **Git repository**. Bower is afhankelijk van **Node.js en npm**. 

Om Bower globaal te installeren voeren we het volgende commando uit:

- `npm install -g bower`

Tijdens de installatie worden heel wat modules gedownload via npm. Op windows toestellen wordt Bower toegevoegd als node_module in de directory: `C:\Users\{UserName}\AppData\Roaming\npm\node_modules\bower`

De installatie van Bower kan getest worden door het commando `bower` uit te voeren via commandline. 

####Configuratie

De configuratie van Bower is niet globaal en gebeurt dus lokaal per applicatie. Een bower configuratiebestand `.bowerrc` moeten we manueel aanmaken via een verkenner of commandline. Dit bestand kan een aantal [instellingen](http://bower.io/docs/config/ ".bowerrc") bevatten. Onderstaand een voorbeel van een `.bowerrc` configuratiebestand.

```
{
  "directory": "bower_components",
  "analytics": false,
  "timeout": 12000,
  "colors":false,
  "registry": {
    "search": [
      "http://localhost:8080",
      "https://bower.herokuapp.com"
    ]
  }
}
```

####Commando's

- Aanmaak van een lokaal `bower.json` bestand
	- `bower init`  
- Toevoegen van **dependencies via command-line.
	- `bower install {component}#{version} --save`  
- Toevoegen van bootstrap in een lokale folder.
	- `bower install --save bootstrap`  
- Toevoegen van bootstrap in een lokale folder en vervolgens bootstrap vermelden in het reeds aangemaakt `bower.json` bestand.
	- `bower install --save-dev bootstrap`
- Zoeken naar bower componenten.
	- `bower search jquery`
- Lokale installatie van modernizr met vermelding van de versie.
	- `bower install --save-dev modernizr#2.6.2`
- Lokale installatie van andere pakketten.
	- `bower install --save-dev lodash#2.2.1`
	- `bower install --save-dev json3#3.2.5`
	- `bower install --save-dev bootstrap#3.0.1`


###Gulp





####Installatie van Gulp pakketten

- Toevoegen van gulp in een lokale folder en vervolgens gulp vermelden in het reeds aangemaakt `package.json` bestand.
	- `npm install --save-dev gulp`
- Lokale installatie van andere pakketten.
	- `npm install --save-dev gulp-jshint`
	- `npm install --save-dev gulp-concat`
	- `npm install --save-dev gulp-uglify`

###PhantomJS

PhantomJS is een scriptbare "headless WebKit" browser, waarbij de API van WebKit aangesproken kan worden zonder een interface. Het is snel, intuÃ¯tief met een herkenbare syntax, namelijk JavaScript. Het bevat daardoor native ondersteuning voor: DOM, CSS Selectoren, JSON, Canvas en SVG.

PhantomJS wordt vooral gebruikt om de inhoud van webpagina's te op te slaan in afbeeldingen (JPEG, GIF en PNG) en/of PDF. De inhouden van SVG, Canvas en MathML worden eveneens toegevoegd aan deze screenshots. 

> **Meest gebruikte features:**
>  
- Webapplicaties testen
- Screen capture
- Page automation
- Network monitoring

- Installatie op Windows
	- `https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-1.9.8-windows.zip` 
- Installatie op MAC via Homebrew 
	- `brew install phantomjs`   
- Installatie via npm
	- `npm install -g phantomjs`  

Installatie van automation tools op de verschillende populaire operating systems (OS)
--------------------------------------------------------------------------------------

###MAC OSX

####Homebrew

Links: <http://brew.sh/>, <https://github.com/Homebrew/homebrew/tree/master/share/doc/homebrew#readme>
   
Installatie:
`ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

- GeÃ¯nstalleerde Homebrew packages:
	- `brew list`
- Lijst van geÃ¯nstalleerde Homebrew packages zonder afhankelijkheden (dependencies):
	- `brew leaves`
- Zoeken naar Homebrew packages online:
	- `brew search nodejs`
- Toon de informatie van een package:
	- `brew info nodejs`
- Update van Homebrew
	- `brew update`
    
####git

**Installatie via Homebrew**

- `brew install git`

**Installatie achter een proxy-server**:

- `sudo -E brew install git`

####Ruby Gems

**Installatie via Homebrew**:

- `brew install ruby`

**Indien `gem` niet aanwezig zou zijn in de `ruby` distributie**:

- `brew install gem`

####npm

**Installatie via Homebrew**:

- `brew install nodejs`

**Indien npm niet aanwezig zou zijn in de `nodejs` distributies**:

- `brew install nmp`

***

###Linux OS, zoals UBUNTU

####apt-get

Installatie: reeds aanwezig op OS

Installatie van een package:

- `sudo apt-get install nodejs`
    
Update van een package:

- `sudo apt-get install nodejs`
- of `sudo apt-get --only-upgrade install nodejs`
    
####Linuxbrew (adapt van Homebrew)

Link: <https://github.com/Homebrew/linuxbrew>

####git

**Installatie via apt-get**:

- `sudo apt-get install git`

**Installatie achter een proxy-server**:

- `sudo -E apt-get install git`

###Windows

####Globale proxy instellingen

- Binnen het netwerk van de Arteveldehogeschool moeten we de proxy-server toevoegen aan de omgevingsvariabelen (environment variables)
- Ga naar Computer `\> RMT+Settings \> Advanced settings \> Environment Variables`
- Selecteer vervolgens Newâ€¦
- Name of the variable: `HTTP_PROXY`
- Value of the variable: `http://proxy.arteveldehs.be:8080`
- Diezelfde werkwijze passen we toe om een nieuwe variabele `HTTPS_PROXY`

>![Algemene proxy instellingen windows via AHS veilig en Netwerkkabel](https://lh6.googleusercontent.com/-DfcwKmFs4iU/VDRK5GpBisI/AAAAAAAAAgI/YRCf0cRGIJo/s0/proxywindows.png "proxywindows.png")

  
####Chocolatey

Link: <https://chocolatey.org/>
   
-	Installatie:
	- `C:\> @powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin`
	- of `PS> iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))`    
- Zoeken naar mogelijke packages via webapplicatie:   
	- <https://chocolatey.org/packages>
- Zoeken naar Chocolatey packages online:
	- `choco search nodejs`
- Update van chocolatey:
	- `choco install chocolatey` 
- Installatie van een package:
	- `choco install git` 
- Verwijderen van een package:
	- `choco uninstall git`  
- Update van een package
	- `choco update git`
   
####nuget

Link: <https://www.nuget.org/>

####Voorbeeld commando's en packages

**tree**

Tree toont de mappenstructuur van een bepaalde folder en maakt deel uit van Windows OS en is automatisch geÃ¯nstalleerd op Windows OS. Updates van dit commando is niet mogelijk in Windows OS!

> ![tree commando Windows OS](https://lh5.googleusercontent.com/-E1h1DnynWeU/VH4iNP0aoVI/AAAAAAAAApY/-hEGkMrxjVQ/s0/tree_windows.PNG "tree_windows.PNG")

Oplijsting van de boomstructuur van een bepaalde folder:
`tree`

Bewaren van de voorgaande oplijsting in een bestand:
`tree > docs/tree.txt`

> ![tree dump in een bestand tree.txt in de folder docs](https://lh6.googleusercontent.com/-GHb84JVir5w/VH4k3PcDynI/AAAAAAAAApo/6aIVH7ALiJE/s0/tree_file.PNG "tree_file.PNG")

**dir** of **ls**

Oplijsten van de bestanden en mappen in een bepaalde folder op het eerste subniveau.

**cd** of **chdir**

*Change Directory*, of het wijzigen van het pad naar een andere folder.

- Niveau hoger of terug.
	- `cd..`
- Naar het root niveau van de huidige media of schijf.
	- `cd\`
- Naar een specifieke folder binnenin een bepaalde folder.
	- `cd Opleiding`
- Naar een specifieke folder met wildcard.
	- `cd Opl*`
	- of `cd Opl` + TAB-toets
- Naar een specifieke media of schijf.
	- `cd z:\`

**mkdir**

*Make Directory*, of het aanmaken van een nieuwe folder.

- `mkdir app_ghent_toilets`

####git

**Download via**: http://msysgit.github.io/

- Vergeet niet de laatste of voorlaatste optie te selecteren tijdens de Git Setup Installatie Wizard. Op deze manier kunnen we het `git` commando overal aanspreken!

>![Git installatie windows](https://lh6.googleusercontent.com/-_Vj4yr0Wxaw/VDQ8j9Y-9ZI/AAAAAAAAAek/imALhb6pq2E/s0/gitinstallwindows.png "gitinstallwindows.png")

####Ruby Gems

**Installatie op Windows via RubyInstaller:**
  
- Link: <http://rubyinstaller.org/>
- Zelf-omvattende windows-based installer, bestaande uit de Ruby programmeertaal, een uitvoeromgeving, documentatie, â€¦

>![Ruby Installatie Windows](https://lh6.googleusercontent.com/-sUoiMQRbvzQ/VDQ-3z1iRnI/AAAAAAAAAfE/Avp3DcH2cPA/s0/rubyinstallwin.png "rubyinstallwin.png")
  
- Vink zeker de tweede optie aan: Add Ruby executables to your Â´PATHÂ´
- Hierdoor worden de uitvoerbare bestanden van Ruby herkend via commandline op elke locatie op de computer

> ![Ruby install windows wizard](https://lh4.googleusercontent.com/-IMvQqweeT3w/VDQ_SP0_eaI/AAAAAAAAAfQ/EzDFEEQQokg/s0/rubyinstallwinwizard.png "rubyinstallwinwizard.png")

####npm

Installatie van npm gebeurt via de download van [Node.js](http://nodejs.org/download/ "Node.js"). 

![Node.js website](https://lh5.googleusercontent.com/-TQx6Gu7MkUA/VDS_Q_yRk9I/AAAAAAAAAgw/Pc4BPlYY8mE/s0/nodejs.png "nodejs.png")

**Installatie op Windows:**
  
- Aan te raden om alle opties te selecteren!
- **Add to Path** is noodzakelijk om om het even welke locatie op de harde schijf Node.js en npm aan te spreken via de command line.

>![Node.js Installatie Windows](https://lh3.googleusercontent.com/-FZtgntLdhrs/VDS_xwj75zI/AAAAAAAAAg8/6GW4An5PRHM/s0/nodejsinstallwin.png "nodejsinstallwin.png")

####PhantomJS

> **Toevoegen van PhantomJS executable in `PATH` variabele Windows (enkel indien we geen gebruik gemaakt hebben van npm!)**
> 
> *Geavanceerde instellingen Windows*
>  
> ![enter image description here](https://lh4.googleusercontent.com/-DsGr7SEbwOc/VG2mm2gHi_I/AAAAAAAAAos/EwLlLJbfADM/s0/geavanceerde+instellingen.PNG "geavanceerde instellingen.PNG")
>   
> *Omgevingsvariabelen*
>    
> ![enter image description here](https://lh6.googleusercontent.com/-a9FfJFfzuQA/VG2m3EFUrJI/AAAAAAAAAo4/iNNmDtylB80/s0/omgevingsvariabelen.PNG "omgevingsvariabelen.PNG")

Bibliografie
-------------

> **Git:**
>  
- https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf
>  
> **npm:**
>  
- <http://browsenpm.org/help>
- <https://www.npmjs.org/>
- <https://www.npmjs.org/browse/star>
>   
> **PhantomJS:**
> 
- <http://phantomjs.org/>
> 
> **Bower:**
>  
- <https://github.com/bower/bower>
- <http://sindresorhus.com/bower-components/>
- <http://bower.io/search/>
>
> **Gulp:**
>   
- <http://www.smashingmagazine.com/2014/06/11/building-with-gulp/>

