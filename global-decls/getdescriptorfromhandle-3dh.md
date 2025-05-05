---
layout: stdlib-reference
---

# getDescriptorFromHandle

## Description

Declaration of the <span class='code'><a href="getdescriptorfromhandle-3dh.html">getDescriptorFromHandle</a></span> that the user code can provide to customize
how a descriptor handle is converted into a actual descriptor.




## Signature 

<pre>
<a href="getdescriptorfromhandle-3dh.html#typeparam-T" class="code_type">T</a> <a href="getdescriptorfromhandle-3dh.html">getDescriptorFromHandle</a>&lt;<a href="getdescriptorfromhandle-3dh.html#typeparam-T" class="code_type">T</a>&gt;(<a href="../types/descriptorhandle-0a/index.html" class="code_type">DescriptorHandle</a>&lt;<a href="getdescriptorfromhandle-3dh.html#typeparam-T" class="code_type">T</a>&gt; <a href="getdescriptorfromhandle-3dh.html#decl-handleValue" class="code_param">handleValue</a>)
    <span class='code_keyword'>where</span> <a href="getdescriptorfromhandle-3dh.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/iopaquedescriptor-017/index.html" class="code_type">IOpaqueDescriptor</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [IOpaqueDescriptor](../interfaces/iopaquedescriptor-017/index)

## Parameters

####  <a id="decl-handleValue"></a>handleValue  : [DescriptorHandle](../types/descriptorhandle-0a/index)\<[T](../types/descriptorhandle-0a/index#typeparam-T)\>

