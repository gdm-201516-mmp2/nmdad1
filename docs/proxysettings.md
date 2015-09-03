Proxy instellingen
==================

|Info|  |
|----|---|
|Olod|New Media Design & Development I|
|Auteur(s)|Philippe De Pauw - Waterschoot, Jonas Pottie|
|Opleiding|Bachelor in de Grafische en digitale media|
|Academiejaar|2015-16|

***

Globale proxy instellingen
------------------------------------------------

|Protocol|Proxy server|
|--------|------|
|HTTP|http://proxy.arteveldehs.be:8080|
|HTTPS|http://proxy.arteveldehs.be:8080|
|FTP|http://proxy.arteveldehs.be:8080|

Deze proxy settings zijn van toepassing op de verbindingen:

- Arteveldehs Veilig (Wifi)
- Arteveldehs via KAT-6, UTP netwerkkabel

**Arteveldehs Open heeft geen proxy instellingen (settings) nodig**. Nadeel: om de 15 minuten terug inloggen! Op de meeste plekken hebben we waarschijnlijk geen proxy server, waardoor deze proxy instellingen uitgeschakeld moeten worden!

###Windows

* Ga naar `Configuratiescherm\Systeem en beveiliging\Systeem`
* Klik vervolgens op `Geavanceerde instellingen`
* Klik binnen het venster `Systeemeigenschappen` op de `Omgevingsvariabelen` knop
* Klik daarna op een item uit de `Systeemvariabelen` fieldset, waarna we op `Nieuw` knop drukken.
* In het nieuwe venster kunnen we vervolgens een nieuwe systeemvariabele opegeven. 

|Naam van de variabele|Waarde van de variabele|
|--------|------|
|HTTP_PROXY|http://proxy.arteveldehs.be:8080|
|HTTPS_PROXY|http://proxy.arteveldehs.be:8080|
|FTP_PROXY|http://proxy.arteveldehs.be:8080|

###OSX

