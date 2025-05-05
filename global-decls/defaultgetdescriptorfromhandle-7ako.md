---
layout: stdlib-reference
---

# defaultGetDescriptorFromHandle

## Description

The default implementation of <span class='code'><a href="/stdlib-reference/global-decls/getdescriptorfromhandle-3dh">getDescriptorFromHandle</a></span>, which converts from a descriptor handle
to a descriptor object.




## Signature 

<pre>
<a href="/stdlib-reference/global-decls/defaultgetdescriptorfromhandle-7ako#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/defaultgetdescriptorfromhandle-7ako">defaultGetDescriptorFromHandle</a>&lt;<a href="/stdlib-reference/global-decls/defaultgetdescriptorfromhandle-7ako#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/types/descriptorhandle-0a/index" class="code_type">DescriptorHandle</a>&lt;<a href="/stdlib-reference/global-decls/defaultgetdescriptorfromhandle-7ako#typeparam-T" class="code_type">T</a>&gt; <a href="/stdlib-reference/global-decls/defaultgetdescriptorfromhandle-7ako#decl-handleValue" class="code_param">handleValue</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/defaultgetdescriptorfromhandle-7ako#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/iopaquedescriptor-017/index" class="code_type">IOpaqueDescriptor</a>;

</pre>

## Generic Parameters

#### T: [IOpaqueDescriptor](/stdlib-reference/interfaces/iopaquedescriptor-017/index) {#typeparam-T}

## Parameters

#### handleValue  : [DescriptorHandle](/stdlib-reference/types/descriptorhandle-0a/index)\<[T](/stdlib-reference/types/descriptorhandle-0a/index#typeparam-T)\> {#decl-handleValue}

