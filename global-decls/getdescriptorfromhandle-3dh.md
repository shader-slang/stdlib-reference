---
layout: stdlib-reference
---

# getDescriptorFromHandle

## Description

Declaration of the <span class='code'><a href="/stdlib-reference/global-decls/getdescriptorfromhandle-3dh">getDescriptorFromHandle</a></span> that the user code can provide to customize
how a descriptor handle is converted into a actual descriptor.




## Signature 

<pre>
<a href="/stdlib-reference/global-decls/getdescriptorfromhandle-3dh#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/getdescriptorfromhandle-3dh">getDescriptorFromHandle</a>&lt;<a href="/stdlib-reference/global-decls/getdescriptorfromhandle-3dh#typeparam-T" class="code_type">T</a>&gt;(<a href="/stdlib-reference/types/descriptorhandle-0a/index" class="code_type">DescriptorHandle</a>&lt;<a href="/stdlib-reference/global-decls/getdescriptorfromhandle-3dh#typeparam-T" class="code_type">T</a>&gt; <a href="/stdlib-reference/global-decls/getdescriptorfromhandle-3dh#decl-handleValue" class="code_param">handleValue</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/global-decls/getdescriptorfromhandle-3dh#typeparam-T" class="code_type">T</a> : <a href="/stdlib-reference/interfaces/iopaquedescriptor-017/index" class="code_type">IOpaqueDescriptor</a>;

</pre>

## Generic Parameters

#### T: [IOpaqueDescriptor](/stdlib-reference/interfaces/iopaquedescriptor-017/index) {#typeparam-T}

## Parameters

#### handleValue  : [DescriptorHandle](/stdlib-reference/types/descriptorhandle-0a/index)\<[T](/stdlib-reference/types/descriptorhandle-0a/index#typeparam-T)\> {#decl-handleValue}

