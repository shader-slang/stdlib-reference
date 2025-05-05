---
layout: stdlib-reference
---

# attribute [instance]

## Description

Used on a geometry shader entry point to specify the number of instances to execute for each input primitive.

## Signature

<pre>
[<a href="/stdlib-reference/attributes/instance">instance</a>(<a href="/stdlib-reference/attributes/instance#decl-count" class="code_param">count</a> : <span class="code_keyword">int</span>)]
</pre>

## Parameters

#### count  : int {#decl-count}
The number of instances to execute for each input primitive.


## Remarks

When using this attribute, a geometry shader can declare a parameter with <span class='code'>SV_GSInstanceID</span> semantic to get the instance index.


