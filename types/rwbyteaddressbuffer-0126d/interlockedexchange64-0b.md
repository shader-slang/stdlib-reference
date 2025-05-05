---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedExchange64

## Description

Perform a 64-bit integer atomic exchange operation at <span class='code'><a href="interlockedexchange64-0b.html#decl-byteAddress" class="code_param">byteAddress</a></span>.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="index.html" class="code_type">RWByteAddressBuffer</a>.<a href="interlockedexchange64-0b.html">InterlockedExchange64</a>(
    <span class="code_keyword">uint</span> <a href="interlockedexchange64-0b.html#decl-byteAddress" class="code_param">byteAddress</a>,
    int64_t <a href="interlockedexchange64-0b.html#decl-value" class="code_param">value</a>);

<span class="code_keyword">void</span> <a href="index.html" class="code_type">RWByteAddressBuffer</a>.<a href="interlockedexchange64-0b.html">InterlockedExchange64</a>&lt;<a href="interlockedexchange64-0b.html#typeparam-T" class="code_type">T</a>&gt;(
    <span class="code_keyword">uint</span> <a href="interlockedexchange64-0b.html#decl-byteAddress" class="code_param">byteAddress</a>,
    <a href="interlockedexchange64-0b.html#typeparam-T" class="code_type">T</a> <a href="interlockedexchange64-0b.html#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <a href="interlockedexchange64-0b.html#typeparam-T" class="code_type">T</a> <a href="interlockedexchange64-0b.html#decl-outOriginalValue" class="code_param">outOriginalValue</a>)
    <span class='code_keyword'>where</span> <a href="interlockedexchange64-0b.html#typeparam-T" class="code_type">T</a> : __BuiltinInt64Type;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: \_\_BuiltinInt64Type

## Parameters

####  <a id="decl-byteAddress"></a>byteAddress  : uint
The address at which to perform the atomic exchange operation.

####  <a id="decl-value"></a>value  : int64\_t
The operand for the exchange operation.

####  <a id="decl-value"></a>value  : [T](interlockedexchange64-0b#typeparam-T)
The operand for the exchange operation.

####  <a id="decl-outOriginalValue"></a>outOriginalValue  : [T](interlockedexchange64-0b#typeparam-T)
The original value at <span class='code'><a href="interlockedexchange64-0b.html#decl-byteAddress" class="code_param">byteAddress</a></span> before the exchange operation.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvInt64Atomics`.


