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

Om de proxy instellingen te verwijderen volstaat het om de namen van de coresponderende variabelen te veranderen, of gewoonweg de variabelen te verwijderen.

###OSX

* Open het `.bashrc` of `.profile` bestad via een editor, bijvoorbeeld `vi` of `grep`.
* `vi ~/.bashrc`
* Voeg de volgende installingen toe:
	* `export HTTP_PROXY='http://proxy.arteveldehs.be:8080'`
	* `export http_proxy=$HTTP_PROXY`
	* `export HTTPS_PROXY='http://proxy.arteveldehs.be:8080'`
	* `export https_proxy=$HTTPS_PROXY`
	* `export FTP_PROXY='http://proxy.arteveldehs.be:8080'`
	* `export FTP_proxy=$FTP_PROXY`
	
	
* Om de proxy instellingen te verwijderen voeren we de volgende commando's uit:
	* `unset HTTP_PROXY`
	* `unset http_proxy`
	* `unset HTTPS_PROXY`
	* `unset https_proxy`
	* `unset FTP_PROXY`
	* `unset ftp_proxy`

* Globale custom functies voor AHS proxy:

```
#AHS Proxy
export AHS_PROXY="false"
function enable_ahs_proxy {
 export HTTP_PROXY='http://proxy.arteveldehs.be:8080' 
 export http_proxy=$HTTP_PROXY
 export HTTPS_PROXY='http://proxy.arteveldehs.be:8080' 
 export https_proxy=$HTTPS_PROXY
 export FTP_PROXY='http://proxy.arteveldehs.be:8080' 
 export ftp_proxy=$HTTPS_PROXY
 export AHS_PROXY="true"
}
function disable_ahs_proxy {
 unset HTTP_PROXY
 unset http_proxy
 unset HTTPS_PROXY
 unset https_proxy
 unset FTP_PROXY
 unset ftp_proxy
 export AHS_PROXY="false"
}
```

Bibliografie
------------
* [Bash proxy settings](http://blog.marcon.me/post/20217812089/bash-proxy-settings)
* [Proxy Auto Config](https://en.wikipedia.org/wiki/Proxy_auto-config)