---
layout: stdlib-reference
---

# copysign\_half

## Description

Copy-sign. Returns a value whose magnitude is from one operand and whose sign is from another operand.



## Signature 

<pre>
<a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, <a href="/stdlib-reference/global-decls/copysign_half#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/copysign_half">copysign_half</a>&lt;<a href="/stdlib-reference/global-decls/copysign_half#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;(
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, <a href="/stdlib-reference/global-decls/copysign_half#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/copysign_half#decl-x" class="code_param">x</a>,
    <a href="/stdlib-reference/types/vector/index" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, <a href="/stdlib-reference/global-decls/copysign_half#decl-N" class="code_var">N</a>&gt; <a href="/stdlib-reference/global-decls/copysign_half#decl-y" class="code_param">y</a>);

</pre>

## Generic Parameters

#### N  : int {#decl-N}

## Parameters

#### x  : [vector](/stdlib-reference/types/vector/index)\<half, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-x}
The value to use as the magnitude.

#### y  : [vector](/stdlib-reference/types/vector/index)\<half, [N](/stdlib-reference/types/vector/index#decl-N)\> {#decl-y}
The value to use as the sign.


## Return value
A value whose magnitude is from <span class='code'><a href="/stdlib-reference/global-decls/copysign_half#decl-x" class="code_param">x</a></span> and whose sign is from <span class='code'><a href="/stdlib-reference/global-decls/copysign_half#decl-y" class="code_param">y</a></span>.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### spirv
Available in all stages.



