---
layout: stdlib-reference
---

# enum DescriptorKind

## Description

Represent the kind of a descriptor type.


## Values 

####  <a id="decl-Unknown"></a>_Unknown = _
####  <a id="decl-Texture"></a>_Texture = _
Unknown descriptor kind.

####  <a id="decl-CombinedTextureSampler"></a>_CombinedTextureSampler = _
A texture descriptor.

####  <a id="decl-ConstantBuffer"></a>_ConstantBuffer = _
A combined texture and sampler state descriptor.

####  <a id="decl-StorageBuffer"></a>_StorageBuffer = _
A constant buffer descriptor.

####  <a id="decl-Buffer"></a>_Buffer = DescriptorKind\.StorageBuffer_
A storage buffer descriptor.

####  <a id="decl-Sampler"></a>_Sampler = _
Deprecated. Use <span class='code'><a href="index.html#decl-StorageBuffer" class="code_var">StorageBuffer</a></span> instead.

####  <a id="decl-AccelerationStructure"></a>_AccelerationStructure = _
A sampler state descriptor.

####  <a id="decl-UniformTexelBuffer"></a>_UniformTexelBuffer = _
A ray tracing acceleration structure descriptor.

####  <a id="decl-StorageTexelBuffer"></a>_StorageTexelBuffer = _
A uniform texel buffer descriptor (read-only).

