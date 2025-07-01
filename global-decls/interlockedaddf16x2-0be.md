---
layout: stdlib-reference
---

# InterlockedAddF16x2

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="interlockedaddf16x2-0be.html">InterlockedAddF16x2</a>(
    <a href="../types/ptr-0/index.html" class="code_type">Ptr</a>&lt;<a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, 2&gt;&gt; <a href="interlockedaddf16x2-0be.html#decl-dest" class="code_param">dest</a>,
    <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, 2&gt; <a href="interlockedaddf16x2-0be.html#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <a href="../types/vector/index.html" class="code_type">vector</a>&lt;<span class="code_keyword">half</span>, 2&gt; <a href="interlockedaddf16x2-0be.html#decl-originalValue" class="code_param">originalValue</a>);

</pre>

## Parameters

####  <a id="decl-dest"></a>dest  : [Ptr](../types/ptr-0/index.html)\<[vector](../types/vector/index.html)\<half, 2 \>\>
####  <a id="decl-value"></a>value  : [vector](../types/vector/index.html)\<half, 2\>
####  <a id="decl-originalValue"></a>originalValue  : [vector](../types/vector/index.html)\<half, 2\>

## Availability and Requirements

Defined for the following targets:

#### spirv
Available in all stages.



