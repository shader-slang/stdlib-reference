---
layout: stdlib-reference
---

# attribute [vk::offset]

## Description

Declare offset for a struct field. Applies to all kinds of structs when targeting Vulkan.
Applies only to structs that are directly used as interface blocks (such as push constants and uniforms)
when targeting GLSL, as GLSL does not support the <span class='code'>offset</span> qualifier on regular structs.
This attribute has no effect on other targets.


## Signature

<pre>
[vk::offset(<a href="vk_offset.html#decl-index" class="code_param">index</a> : <span class="code_keyword">int</span>)]
</pre>

## Parameters

####  <a id="decl-index"></a>index  : int

