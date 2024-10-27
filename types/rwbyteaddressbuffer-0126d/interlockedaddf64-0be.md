---
layout: stdlib-reference
---

# RWByteAddressBuffer\.InterlockedAddF64

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/index" class="code_type">RWByteAddressBuffer</a>.<a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddf64-0be">InterlockedAddF64</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddf64-0be#decl-byteAddress" class="code_param">byteAddress</a>,
    <span class="code_keyword">double</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddf64-0be#decl-valueToAdd" class="code_param">valueToAdd</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">double</span> <a href="/stdlib-reference/types/rwbyteaddressbuffer-0126d/interlockedaddf64-0be#decl-originalValue" class="code_param">originalValue</a>);

</pre>

## Parameters

#### byteAddress  : uint {#decl-byteAddress}
#### valueToAdd  : double {#decl-valueToAdd}
#### originalValue  : double {#decl-originalValue}

## Availability and Requirements

Defined for the following targets:

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `spvAtomicFloat64AddEXT`.


