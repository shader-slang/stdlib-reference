---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedAddF64

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">RWByteAddressBuffer</a>.<a href="interlockedaddf64-0be.html">InterlockedAddF64</a>(
    <span class="code_keyword">uint</span> <a href="interlockedaddf64-0be.html#decl-byteAddress" class="code_param">byteAddress</a>,
    <span class="code_keyword">double</span> <a href="interlockedaddf64-0be.html#decl-valueToAdd" class="code_param">valueToAdd</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">double</span> <a href="interlockedaddf64-0be.html#decl-originalValue" class="code_param">originalValue</a>);

</pre>

## Parameters

####  <a id="decl-byteAddress"></a>byteAddress  : uint
####  <a id="decl-valueToAdd"></a>valueToAdd  : double
####  <a id="decl-originalValue"></a>originalValue  : double

## Availability and Requirements

Defined for the following targets:

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvAtomicFloat64AddEXT`.


