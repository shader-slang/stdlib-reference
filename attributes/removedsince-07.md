---
layout: stdlib-reference
---

# attribute [RemovedSince]

## Description

Mark a declaration as removed starting from the specified language version.


## Signature

<pre>
[<a href="removedsince-07.html">RemovedSince</a>(<a href="removedsince-07.html#decl-languageVersion" class="code_param">languageVersion</a> : <span class="code_keyword">int</span>, <a href="removedsince-07.html#decl-message" class="code_param">message</a> : <a href="../types/string-0/index.html" class="code_type">String</a>)]
</pre>

## Parameters

####  <a id="decl-languageVersion"></a>languageVersion  : int
The first version from which the declaration is considered removed.

####  <a id="decl-message"></a>message  : [String](../types/string-0/index.html)
The diagnostic message to show when the declaration is used.


## See also

<span class='code'>[<a href="deprecated.html">deprecated</a>]</span>.


