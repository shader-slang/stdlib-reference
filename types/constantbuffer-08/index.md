---
layout: stdlib-reference
---

# struct ConstantBuffer\<T, L\>

*Conditionally conforms to:* \_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>

## Generic Parameters

####  <a id="typeparam-T"></a>T
####  <a id="typeparam-L"></a>L: [IBufferDataLayout](../../interfaces/ibufferdatalayout-017b/index) = [DefaultDataLayout](../defaultdatalayout-07b/index)

## Fields

####  <a id="decl-descriptorAccess"></a>[descriptorAccess](descriptoraccess-a) : [DescriptorAccess](../descriptoraccess-0a/index) = [DescriptorAccess](../descriptoraccess-0a/index)\.[Read](../descriptoraccess-0a/index#decl-Read)
####  <a id="decl-kind"></a>[kind](kind) : [DescriptorKind](../descriptorkind-0a/index) = [DescriptorKind](../descriptorkind-0a/index)\.[Buffer](../descriptorkind-0a/index#decl-Buffer)

## Methods

* [init](init)

## Conditional Conformances

### Conformance to \_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>
`ConstantBuffer<T, L>` additionally conforms to `\_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>` when the following conditions are met:

  * [L](index#typeparam-L) : [IBufferDataLayout](../../interfaces/ibufferdatalayout-017b/index)

<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

Handle <handle-0>
descriptorAccess <descriptoraccess-a>
init <init>
kind <kind>
```
RTD-TOC-END -->
