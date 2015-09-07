Globale Proxy instellingen
==========================

|Info|  |
|----|---|
|Olod|New Media Design & Development I|
|Auteur(s)|Philippe De Pauw - Waterschoot, Jonas Pottie|
|Opleiding|Bachelor in de Grafische en digitale media|
|Academiejaar|2015-16|

***

Inleiding
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

Instellingen Windows
--------------------

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

###Batch

**Global custom batch om Internet opties in te stellen via Registry key/value pairs (Dit is nuttig voor Chrome, Internet Explorer en Cartana):**

*Proxy On: [proxy_on.bat](../apps/win_proxy/proxy_on.bat)*
```
REG ADD "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable /t REG_DWORD /d 1 /f
REG ADD "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer /t REG_SZ /d "http://proxy.arteveldehs.be:8080" /f
REG ADD "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyOverride /t REG_SZ /d "<local>" /f
```

*Proxy Off: [proxy_off.bat](../apps/win_proxy/proxy_off.bat)*
```
REG ADD "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable /t REG_DWORD /d 0 /f
```

###Powershell

**Custom Powershell Script om proxy in Internet opties te switchen (toggle):**
```
$internetSettingsRegKey="HKCU:\Software\Microsoft\Windows\CurrentVersion\Internet Settings"
$currentProxyServer = ""
$proxyServer = "http://proxy.arteveldehs.be:8080"

Write-Host "Retrieve the proxy server ..."

$currentProxyServer = Get-ItemProperty -path $internetSettingsRegKey ProxyServer -ErrorAction SilentlyContinue

if([string]::IsNullOrEmpty($currentProxyServer))

{

    Write-Host "Proxy is actually disabled"

    Set-ItemProperty -path $internetSettingsRegKey ProxyEnable -value 1

    Set-ItemProperty -path $internetSettingsRegKey ProxyServer -value $proxyServer

    Write-Host "Proxy is now enabled"

}

else

{

    Write-Host "Proxy is actually enabled, server: " + $currentProxyServer

    Set-ItemProperty -path $internetSettingsRegKey ProxyEnable -value 0

    Remove-ItemProperty -path $internetSettingsRegKey -name ProxyServer

    Write-Host "Proxy is now disabled"

}
```

Uit te voeren via commando `powershell -executionpolicy bypass -File proxy_toggle.ps1`.

**Omgevingsvariabelen van de gebruiker instellen via powershell:**

```
[Environment]::SetEnvironmentVariable("HTTP_PROXY", $proxyServer, "User")
[Environment]::SetEnvironmentVariable("HTTPS_PROXY", $proxyServer, "User")
[Environment]::SetEnvironmentVariable("FTP_PROXY", $proxyServer, "User")
```

De omgevingsvariabelen kunnen hiermee via powershell eenvoudig toegevoegd/ingesteld worden. `$proxyServer` is de reeds aangemaakte variabele uit het vorige script.

**Resulteert in de finale code (lees niks is finaal en optimalisatie is een heilig woord voor een developers :) ):**

```
$internetSettingsRegKey="HKCU:\Software\Microsoft\Windows\CurrentVersion\Internet Settings"
$currentProxyServer = ""
$proxyServer = "http://proxy.arteveldehs.be:8080"

Write-Host "========================================================"
Write-Host "==    DRDYNSCRIPT'S PROXY TOGGLE POWERSHELL SCRIPT    =="
Write-Host "========================================================"
Write-Host "1. Retrieve the proxy server from the internet options ..."

$currentProxyServer = Get-ItemProperty -path $internetSettingsRegKey ProxyServer -ErrorAction SilentlyContinue

if([string]::IsNullOrEmpty($currentProxyServer))

{

    Write-Host "2. Internet options: Proxy is actually disabled"

    Set-ItemProperty -path $internetSettingsRegKey ProxyEnable -value 1

    Set-ItemProperty -path $internetSettingsRegKey ProxyServer -value $proxyServer

    Write-Host "3. Internet options: Proxy is now enabled"
        
    [Environment]::SetEnvironmentVariable("HTTP_PROXY", $proxyServer, "User")
    
    [Environment]::SetEnvironmentVariable("HTTPS_PROXY", $proxyServer, "User")
    
    [Environment]::SetEnvironmentVariable("FTP_PROXY", $proxyServer, "User")
    
    Write-Host "4. Environment variables: Proxy is now enabled"
        
}

else

{

    Write-Host "2. Internet options: Proxy is actually enabled, server: " + $currentProxyServer

    Set-ItemProperty -path $internetSettingsRegKey ProxyEnable -value 0

    Remove-ItemProperty -path $internetSettingsRegKey -name ProxyServer

    Write-Host "3. Internet options: Proxy is now disabled"
        
    [Environment]::SetEnvironmentVariable("HTTP_PROXY", $null, "User")
    
    [Environment]::SetEnvironmentVariable("HTTPS_PROXY", $null, "User")
    
    [Environment]::SetEnvironmentVariable("FTP_PROXY", $null, "User")
    
    Write-Host "4. Environment variables: Proxy is now disabled"
        

}

Write-Host "========================================================"
```

Uit te voeren via commando `powershell -executionpolicy bypass -File proxy_toggle.ps1`.

Toekomstige uitbreiding op deze code is **het automatisch checken van het netwerk** tijdens de opstart van een **shell** of **terminal**.


OSX
---

###.bashrc/.profile

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
    
###Making scripts better

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

* Nog betere custom functies voor AHS proxy, geschreven door Olivier Parent:

```
# Artevelde University College Ghent proxy server on/off
function proxy() {
    case "$1" in
        on)
            PXY=http://proxy.arteveldehs.be:8080
            NOPXY=localhost,127.0.0.1,.local
            export HTTP_PROXY=$PXY HTTPS_PROXY=$PXY FTP_PROXY=$PXY NO_PROXY=$NOPXY http_proxy=$PXY https_proxy=$PXY ftp_proxy=$PXY no_proxy=$NOPXY
            unset PXY NOPXY
            echo "Artevelde University College Ghent proxy server settings are SET"
            ;;
        off)
            unset HTTP_PROXY HTTPS_PROXY FTP_PROXY NO_PROXY http_proxy https_proxy
            echo "Artevelde University College Ghent proxy server settings are UNSET"
            ;;
        *)
            echo "Error: missing required parameter."
            echo "Usage: "
            echo "  proxy on"
            echo "  proxy off"
            echo "Proxy Server Settings: $HTTP_PROXY | Proxy Server Exceptions: $NO_PROXY"
            ;;
    esac
}
```

Toekomstige uitbreiding op deze code is **het automatisch checken van het netwerk** tijdens de opstart van een **shell** of **terminal**.

Bibliografie
------------
* [Bash proxy settings](http://blog.marcon.me/post/20217812089/bash-proxy-settings)
* [Proxy Auto Config](https://en.wikipedia.org/wiki/Proxy_auto-config)
* [.bashrc Olivier Parent](https://github.com/OlivierParent/artestead/blob/master/src/stubs/aliases)
* [VBScript WShell Internet Options](http://blogs.technet.com/b/heyscriptingguy/archive/2005/05/19/how-can-i-switch-between-using-a-proxy-server-and-not-using-a-proxy-server.aspx)