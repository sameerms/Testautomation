
#ZAP Scanning Report




##Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 1 |
| Low | 2 |
| Informational | 0 |

##Alert Detail


  
  
  
### X-Frame-Options Header Not Set
##### Medium (Medium)
  
  
  
  
#### Description
<p>X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.</p>
  
  
  
* URL: [http://elsa-portalsit.utvikling.local/sitemap.xml](http://elsa-portalsit.utvikling.local/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [http://elsa-portalsit.utvikling.local/](http://elsa-portalsit.utvikling.local/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
* URL: [http://elsa-portalsit.utvikling.local/robots.txt](http://elsa-portalsit.utvikling.local/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Frame-Options`
  
  
  
  
Instances: 3
  
### Solution
<p>Most modern Web browsers support the X-Frame-Options HTTP header. Ensure it's set on all web pages returned by your site (if you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. ALLOW-FROM allows specific websites to frame the web page in supported web browsers).</p>
  
### Reference
* http://blogs.msdn.com/b/ieinternals/archive/2010/03/30/combating-clickjacking-with-x-frame-options.aspx

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
### Web Browser XSS Protection Not Enabled
##### Low (Medium)
  
  
  
  
#### Description
<p>Web Browser XSS Protection is not enabled, or is disabled by the configuration of the 'X-XSS-Protection' HTTP response header on the web server</p>
  
  
  
* URL: [http://elsa-portalsit.utvikling.local/sitemap.xml](http://elsa-portalsit.utvikling.local/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-XSS-Protection`
  
  
  
  
* URL: [http://elsa-portalsit.utvikling.local/](http://elsa-portalsit.utvikling.local/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-XSS-Protection`
  
  
  
  
* URL: [http://elsa-portalsit.utvikling.local/robots.txt](http://elsa-portalsit.utvikling.local/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-XSS-Protection`
  
  
  
  
Instances: 3
  
### Solution
<p>Ensure that the web browser's XSS filter is enabled, by setting the X-XSS-Protection HTTP response header to '1'.</p>
  
### Other information
<p>The X-XSS-Protection HTTP response header allows the web server to enable or disable the web browser's XSS protection mechanism. The following values would attempt to enable it: </p><p>X-XSS-Protection: 1; mode=block</p><p>X-XSS-Protection: 1; report=http://www.example.com/xss</p><p>The following values would disable it:</p><p>X-XSS-Protection: 0</p><p>The X-XSS-Protection HTTP response header is currently supported on Internet Explorer, Chrome and Safari (WebKit).</p><p>Note that this alert is only raised if the response body could potentially contain an XSS payload (with a text-based content type, with a non-zero length).</p>
  
### Reference
* https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet
* https://blog.veracode.com/2014/03/guidelines-for-setting-security-headers/

  
#### CWE Id : 933
  
#### WASC Id : 14
  
#### Source ID : 3

  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [http://elsa-portalsit.utvikling.local/sitemap.xml](http://elsa-portalsit.utvikling.local/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [http://elsa-portalsit.utvikling.local/js/vendor.85b9ae2367a6d8c5b19f.js](http://elsa-portalsit.utvikling.local/js/vendor.85b9ae2367a6d8c5b19f.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [http://elsa-portalsit.utvikling.local/js/app.2015bc659f92dccb55aa.js](http://elsa-portalsit.utvikling.local/js/app.2015bc659f92dccb55aa.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [http://elsa-portalsit.utvikling.local/robots.txt](http://elsa-portalsit.utvikling.local/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [http://elsa-portalsit.utvikling.local/js/manifest.9124b938d9562aefed95.js](http://elsa-portalsit.utvikling.local/js/manifest.9124b938d9562aefed95.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [http://elsa-portalsit.utvikling.local/](http://elsa-portalsit.utvikling.local/)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [http://elsa-portalsit.utvikling.local/css/app.c9be52cf6aaa169497ca6ed0ff22da7b.css](http://elsa-portalsit.utvikling.local/css/app.c9be52cf6aaa169497ca6ed0ff22da7b.css)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 7
  
### Solution
<p>Ensure that the application/web server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to 'nosniff' for all web pages.</p><p>If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the web application/web server to not perform MIME-sniffing.</p>
  
### Other information
<p>This issue still applies to error type pages (401, 403, 500, etc) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.</p><p>At "High" threshold this scanner will not alert on client or server error responses.</p>
  
### Reference
* http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx
* https://www.owasp.org/index.php/List_of_useful_HTTP_headers

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3
