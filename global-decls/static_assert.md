---
layout: stdlib-reference
---

# static\_assert

## Description



@experimetal
Perform a compile-time condition check and emit a compile-time error if the condition is false.

## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/static_assert">static_assert</a>(
    <span class="code_keyword">bool</span> <a href="/stdlib-reference/global-decls/static_assert#decl-condition" class="code_param">condition</a>,
    <a href="/stdlib-reference/types/nativestring-06/index" class="code_type">NativeString</a> <a href="/stdlib-reference/global-decls/static_assert#decl-errorMessage" class="code_param">errorMessage</a>);

</pre>

## Parameters

#### condition  : bool {#decl-condition}
The compile-time condition to check.

#### errorMessage  : [NativeString](/stdlib-reference/types/nativestring-06/index) {#decl-errorMessage}
The error message to emit if the condition is false.


