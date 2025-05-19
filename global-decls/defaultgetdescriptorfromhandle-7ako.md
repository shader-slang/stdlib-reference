---
layout: stdlib-reference
---

# defaultGetDescriptorFromHandle

## Description

The default implementation of <span class='code'><a href="getdescriptorfromhandle-3dh.html">getDescriptorFromHandle</a></span>, which converts from a descriptor handle
to a descriptor object.




## Signature 

<pre>
<a href="defaultgetdescriptorfromhandle-7ako.html#typeparam-T" class="code_type">T</a> <a href="defaultgetdescriptorfromhandle-7ako.html">defaultGetDescriptorFromHandle</a>&lt;<a href="defaultgetdescriptorfromhandle-7ako.html#typeparam-T" class="code_type">T</a>&gt;(<a href="../types/descriptorhandle-0a/index.html" class="code_type">DescriptorHandle</a>&lt;<a href="defaultgetdescriptorfromhandle-7ako.html#typeparam-T" class="code_type">T</a>&gt; <a href="defaultgetdescriptorfromhandle-7ako.html#decl-handleValue" class="code_param">handleValue</a>)
    <span class='code_keyword'>where</span> <a href="defaultgetdescriptorfromhandle-7ako.html#typeparam-T" class="code_type">T</a> : <a href="../interfaces/iopaquedescriptor-017/index.html" class="code_type">IOpaqueDescriptor</a>;

</pre>

## Generic Parameters

####  <a id="typeparam-T"></a>T: [IOpaqueDescriptor](../interfaces/iopaquedescriptor-017/index.html)

## Parameters

####  <a id="decl-handleValue"></a>handleValue  : [DescriptorHandle](../types/descriptorhandle-0a/index.html)\<[T](../types/descriptorhandle-0a/index.html#typeparam-T)\>

