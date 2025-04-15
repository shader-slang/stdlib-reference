---
layout: stdlib-reference
---

# CoopVec\<T, N:int\>\.copyFrom

## Description

Copy values from another CoopVec instance into this one. The source CoopVec can have a different element type,
in which case appropriate type conversion will be performed.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/coopvec-04/index#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="/stdlib-reference/types/coopvec-04/copyfrom-4">copyFrom</a>&lt;<a href="/stdlib-reference/types/coopvec-04/copyfrom-4#typeparam-U" class="code_type">U</a>&gt;(<a href="/stdlib-reference/types/coopvec-04/index" class="code_type">CoopVec</a>&lt;<a href="/stdlib-reference/types/coopvec-04/copyfrom-4#typeparam-U" class="code_type">U</a>, <a href="/stdlib-reference/types/coopvec-04/index#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/types/coopvec-04/copyfrom-4#decl-other" class="code_param">other</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/copyfrom-4#typeparam-U" class="code_type">U</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/coopvec-04/index#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

#### U: [\_\_BuiltinArithmeticType](/stdlib-reference/interfaces/0_builtinarithmetictype-029j/index) {#typeparam-U}

## Parameters

#### other  : [CoopVec](/stdlib-reference/types/coopvec-04/index)\<U, [N](/stdlib-reference/types/coopvec-04/index#decl-N)\> {#decl-other}
The source CoopVec to copy from.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.



