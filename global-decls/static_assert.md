---
layout: stdlib-reference
---

# static\_assert

## Description



@experimetal
Perform a compile-time condition check and emit a compile-time error if the condition is false.

## Signature 

<pre>
<span class="code_keyword">void</span> <a href="static_assert.html">static_assert</a>(
    <span class="code_keyword">bool</span> <a href="static_assert.html#decl-condition" class="code_param">condition</a>,
    <a href="../types/nativestring-06/index.html" class="code_type">NativeString</a> <a href="static_assert.html#decl-errorMessage" class="code_param">errorMessage</a>);

</pre>

## Parameters

####  <a id="decl-condition"></a>condition  : bool
The compile-time condition to check.

####  <a id="decl-errorMessage"></a>errorMessage  : [NativeString](../types/nativestring-06/index.html)
The error message to emit if the condition is false.


