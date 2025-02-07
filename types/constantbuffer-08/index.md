---
layout: stdlib-reference
---

# struct ConstantBuffer\<T, L\>

*Conditionally conforms to:* \_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>

## Generic Parameters

#### T {#typeparam-T}
#### L: [IBufferDataLayout](/stdlib-reference/interfaces/ibufferdatalayout-017b/index) = [DefaultDataLayout](/stdlib-reference/types/defaultdatalayout-07b/index) {#typeparam-L}

## Fields

#### [kind](/stdlib-reference/types/constantbuffer-08/kind) : [DescriptorKind](/stdlib-reference/types/descriptorkind-0a/index) = [DescriptorKind](/stdlib-reference/types/descriptorkind-0a/index)\.[Buffer](/stdlib-reference/types/descriptorkind-0a/index#decl-Buffer) {#decl-kind}

## Methods

* [init](/stdlib-reference/types/constantbuffer-08/init)

## Conditional Conformances

### Conformance to \_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>
`ConstantBuffer<T, L>` additionally conforms to `\_\_IDynamicResourceCastable\<\_\_DynamicResourceKind\.General\>` when the following conditions are met:

  * [L](/stdlib-reference/types/constantbuffer-08/index#typeparam-L) : [IBufferDataLayout](/stdlib-reference/interfaces/ibufferdatalayout-017b/index)
