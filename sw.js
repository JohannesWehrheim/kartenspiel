<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2685.3">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; -webkit-text-stroke: #000000; min-height: 14.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">const CACHE_NAME = "deeptalk-v1";</span></p>
<p class="p1"><span class="s1">// Liste aller Dateien, die offline verfügbar sein sollen</span></p>
<p class="p1"><span class="s1">const ASSETS = [</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>"./",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>"./index.html",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>"./manifest.json",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>"./icon.png"</span></p>
<p class="p1"><span class="s1">];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// 1. Installieren und Cachen</span></p>
<p class="p1"><span class="s1">self.addEventListener("install", (e) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>e.waitUntil(</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>caches.open(CACHE_NAME).then((cache) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>return cache.addAll(ASSETS);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>})</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>);</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">// 2. Anfragen abfangen (Offline First Strategie)</span></p>
<p class="p1"><span class="s1">self.addEventListener("fetch", (e) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>e.respondWith(</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>caches.match(e.request).then((response) =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>// Wenn im Cache gefunden, nimm das. Sonst lade aus dem Internet.</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>return response || fetch(e.request);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>})</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>);</span></p>
<p class="p1"><span class="s1">});</span></p>
</body>
</html>
