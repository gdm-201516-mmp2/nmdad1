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