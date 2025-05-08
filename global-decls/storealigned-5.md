---
layout: stdlib-reference
---

# storeAligned

## Description

Store a value to a pointer with a known alignment.
Aligned stores are more efficient than unaligned stores on some platforms.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="storealigned-5.html">storeAligned</a>&lt;<a href="storealigned-5.html#decl-alignment" class="code_var">alignment</a>:<span class="code_keyword">int</span>, <a href="storealigned-5.html#typeparam-T" class="code_type">T</a>&gt;(
    <a href="../types/ptr-0/index.html" class="code_type">Ptr</a>&lt;<a href="storealigned-5.html#typeparam-T" class="code_type">T</a>&gt; <a href="storealigned-5.html#decl-ptr" class="code_param">ptr</a>,
    <a href="storealigned-5.html#typeparam-T" class="code_type">T</a> <a href="storealigned-5.html#decl-value" class="code_param">value</a>);

</pre>

## Generic Parameters

####  <a id="decl-alignment"></a>alignment  : int
The alignment of the store operation.

####  <a id="typeparam-T"></a>T

## Parameters

####  <a id="decl-ptr"></a>ptr  : [Ptr](../types/ptr-0/index.html)\<[T](../types/ptr-0/index.html#typeparam-T)\>
The pointer to store value to.

####  <a id="decl-value"></a>value  : [T](storealigned-5.html#typeparam-T)
The value to store.


## Remarks
When targeting SPIRV, this function maps to an <span class='code'>OpStore</span> instruction with the <span class='code'>Aligned</span> memory operand.
The functions maps to normal store operation on other targets.


