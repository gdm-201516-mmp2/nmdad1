Responsive Apps
===============

|Info|  |
|----|---|
|Olod|New Media Design & Development I|
|Auteur(s)|Philippe De Pauw - Waterschoot, Jonas Pottie|
|Opleiding|Bachelor in de Grafische en digitale media|
|Academiejaar|2015-16|

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


Een **Native app **:

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

In mobiele toestellen worden meestal RISC[^RISC] processoren toegepast. De ontwikkeling van deze processoren hebben zich de laatste jaren gefocust op efficiÃ«ntie, waardoor ze energiezuinig zijn, ideaal voor mobiele toestellen.

Een RISC processor bevat Ã©Ã©n van de volgende architecturen:

- ARM-architectuur[^ARM]
- MIPS-architectuur[^MIPS]

Een CISC[^CISC] is geschikt voor allerlei soorten berekeningen en de ontwikkeling richtte zich vooral op pure kracht. De laatste jaren werd ook aandacht besteed aan efficiÃ«ntie waardoor ze ook voor mobile devices gebruikt kunnen worden. CISC processoren bevatten de x86-architectuur[^x86].

Een mobiel besturingssysteem is een besturingssysteem die aangepast moet worden aan de processorarchitectuur van het mobiel toestel.

|Mobiel OS|Omschrijving|Link|
|---------|------------|----|
|Android|Gebaseerd op de Linux kernel. Voor ARM-, MIPS- en x86-processoren.|<http://www.android.com/>|
|Android Wear|Angepaste Android-versie voor wearables zoals bijv. smartwatches|<http://developer.android.com/wear/index.html>
|MIUI|EÃ©n van de vele alternatieve versies van Android die door de consument geÃ¯nstalleerd kan worden.|<http://en.miui.com/>|
|Fire OS|Een fork van Android die gebruikt wordt voor de tablets van Amazon|<https://developer.amazon.com/public/solutions/platforms/android-fireos>|
|Chrome OS|Gebaseerd op het opensource Chromium OS| <http://www.chromium.org/chromium-os, <http://www.youtube.com/watch?v=0QRO3gKj3qw>|
|iOS|Besturingssysteem voor alle Apple devices die een ARM-processor hebben.|<https://www.apple.com/benl/ios/>|
|Windows RT|Windows voor (tablet)computers die met ARM-processoren in plaats van x86-processoren.De naam staat waarschijnlijk voor â€˜RunTimeâ€™.|<http://windows.microsoft.com/nl-be/windows/rt>|
|Windows Phone|Voor devices met een ARM-processor. Deelt een aantal onderdelen met Windows RT.|<http://www.windowsphone.com/nl-be>|
|Blackberry OS|Het besturingssysteem van de Canadese firma Research in Motion, makers van BlackBerry smartphones.|<http://nl.blackberry.com/software/smartphones/blackberry-10-os.html>|
|Tizen|Leden van de Tizen Association zijn o.m. Samsung, Intel en Huawei. Opvolger van MeeGo (Intel & Nokia).Samsung wil op (korte) termijn Android en Bada vervangen door Tizen.|<https://www.tizen.org/>, <https://www.tizenassociation.org/members/>|
|Bada|Als Ã©Ã©n van de belangrijkste smartphone fabrikanten wil Samsung minder afhankelijk zijn van Google en Microsoft. Samsung is wil dit besturingssysteem laten samensmelten met Tizen.|<http://www.bada.com/>|
|Sailfish OS|Op Linux gebaseerd opensource besturingssysteem. Ontstaan uit Mer dat op zijn beurt ontstaan is toen Linux Foundation MeeGo opgaf ten voordele van Tizen.|<https://sailfishos.org/>|
|Firefox OS|Nu de Firefox browser niet meer zo populair is als weleer, zoekt Mozilla nieuwe afzetterreinen zoals de goedkopere smartphones.|<http://www.mozilla.org/en-US/firefox/os/>
|Ubuntu Touch|Nu Linux definitief de Desktop niet zal veroveren, richt Canonical zijn pijlen op phones en tablets.|<http://www.ubuntu.com/phone>, <http://www.ubuntu.com/tablet>|

Verwacht in 2016 (wereldwijd)[^mobileosmarket]:

- 50,3% Android
- 23,1% Windows Phone
- 21,0% iOS
- 3,0% Bada
- 2 % BlackBerry OS

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