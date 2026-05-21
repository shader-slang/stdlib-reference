---
layout: stdlib-reference
---

# RWStructuredBuffer\<T, L\>\.Load

## Description

Load an element from the buffer at the specified location.



## Signature 

<pre>
/// Requires Capability Set 1:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">RWStructuredBuffer</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-L" class="code_type">L</a>&gt;.<a href="load-0.html">Load</a>&lt;<a href="load-0.html#typeparam-TIndex" class="code_type">TIndex</a>&gt;(<a href="load-0.html#typeparam-TIndex" class="code_type">TIndex</a> <a href="load-0.html#decl-location" class="code_param">location</a>)
    <span class='code_keyword'>where</span> <a href="load-0.html#typeparam-TIndex" class="code_type">TIndex</a> : <a href="../../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-L" class="code_type">L</a> : <a href="../../interfaces/ibufferdatalayout-017b/index.html" class="code_type">IBufferDataLayout</a>;

/// Requires Capability Set 2:
<a href="index.html#typeparam-T" class="code_type">T</a> <a href="index.html" class="code_type">RWStructuredBuffer</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#typeparam-L" class="code_type">L</a>&gt;.<a href="load-0.html">Load</a>&lt;<a href="load-0.html#typeparam-TIndex" class="code_type">TIndex</a>&gt;(
    <a href="load-0.html#typeparam-TIndex" class="code_type">TIndex</a> <a href="load-0.html#decl-location" class="code_param">location</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="load-0.html#decl-status" class="code_param">status</a>)
    <span class='code_keyword'>where</span> <a href="load-0.html#typeparam-TIndex" class="code_type">TIndex</a> : <a href="../../interfaces/0_builtinintegertype-029g/index.html" class="code_type">__BuiltinIntegerType</a>
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-L" class="code_type">L</a> : <a href="../../interfaces/ibufferdatalayout-017b/index.html" class="code_type">IBufferDataLayout</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-TIndex"></a>TIndex: [\_\_BuiltinIntegerType](../../interfaces/0_builtinintegertype-029g/index.html)
Type of the index.


## Parameters

####  <a id="decl-location"></a>location  : [TIndex](load-0.html#typeparam-TIndex)
The index of buffer.

####  <a id="decl-status"></a>status  : uint

## Return value
The element at the specified index.


## Availability and Requirements

### Capability Set 1

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

#### wgsl
Available in all stages.

#### spirv
Available in all stages.

#### llvm
Available in all stages.


### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.



