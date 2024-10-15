---
layout: stdlib-reference
---

# attribute [vk::image\_format]

## Description

Specify the storage format of a read-write texture. Can only be used on a texture typed struct field or global parameter.
This is an alias of the <span class='code'>[<a href="/stdlib-reference/attributes/vk_image_format#decl-format" class="code_param">format</a>]</span> attribute.

## Signature

<pre>
[vk::image_format(<a href="/stdlib-reference/attributes/vk_image_format#decl-format" class="code_param">format</a> : <a href="/stdlib-reference/types/string-0/index" class="code_type">String</a>)]
</pre>

## Parameters

#### format  : [String](/stdlib-reference/types/string-0/index) {#decl-format}
The storage format of the texture.


## See also

Please refer to <span class='code'><a href="/stdlib-reference/types/0texture-01/index" class="code_type">_Texture</a></span> for a complete list of allowed format strings.


