---
layout: stdlib-reference
---

# RasterizerOrderedByteAddressBuffer\.InterlockedMax

## Description

Perform an atomic max operation at the specified byte
location of the byte address buffer.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/interlockedmax-0b">InterlockedMax</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/interlockedmax-0b#decl-dest" class="code_param">dest</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/interlockedmax-0b#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/interlockedmax-0b#decl-original_value" class="code_param">original_value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/index" class="code_type">RasterizerOrderedByteAddressBuffer</a>.<a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/interlockedmax-0b">InterlockedMax</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/interlockedmax-0b#decl-dest" class="code_param">dest</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/interlockedmax-0b#decl-value" class="code_param">value</a>);

</pre>

## Parameters

#### dest  : uint {#decl-dest}
The byte address at which to perform the atomic max operation.

#### value  : uint {#decl-value}
The operand of the atomic operation.

#### original\_value  : uint {#decl-original_value}
The original value at <span class='code'><a href="/stdlib-reference/types/rasterizerorderedbyteaddressbuffer-0ahls/interlockedmax-0b#decl-dest" class="code_param">dest</a></span> before the max operation.


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### spirv
Available in all stages.



