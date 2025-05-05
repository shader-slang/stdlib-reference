---
layout: stdlib-reference
---

# RWStructuredBuffer\<T, L\>\.init

## Description





## Signature 

<pre>
<a href="/stdlib-reference/types/rwstructuredbuffer-012c/index" class="code_type">RWStructuredBuffer</a>&lt;<a href="/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-L" class="code_type">L</a>&gt;.<a href="/stdlib-reference/types/rwstructuredbuffer-012c/init">init</a>(__DynamicResource&lt;__DynamicResourceKind.General&gt; <a href="/stdlib-reference/types/rwstructuredbuffer-012c/init#decl-res" class="code_param">res</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-L" class="code_type">L</a> : <a href="/stdlib-reference/interfaces/ibufferdatalayout-017b/index" class="code_type">IBufferDataLayout</a>;

<a href="/stdlib-reference/types/rwstructuredbuffer-012c/index" class="code_type">RWStructuredBuffer</a>&lt;<a href="/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-L" class="code_type">L</a>&gt;.<a href="/stdlib-reference/types/rwstructuredbuffer-012c/init">init</a>(<a href="/stdlib-reference/types/descriptorhandle-0a/index" class="code_type">DescriptorHandle</a>&lt;<a href="/stdlib-reference/types/rwstructuredbuffer-012c/index" class="code_type">RWStructuredBuffer</a>&lt;<a href="/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-T" class="code_type">T</a>, <a href="/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-L" class="code_type">L</a>&gt;&gt; <a href="/stdlib-reference/types/rwstructuredbuffer-012c/init#decl-bindless" class="code_param">bindless</a>)
    <span class='code_keyword'>where</span> <a href="/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-L" class="code_type">L</a> : <a href="/stdlib-reference/interfaces/ibufferdatalayout-017b/index" class="code_type">IBufferDataLayout</a>;

</pre>

## Parameters

#### res  : \_\_DynamicResource\<\_\_DynamicResourceKind\.General\> {#decl-res}
#### bindless  : [DescriptorHandle](/stdlib-reference/types/descriptorhandle-0a/index)\<[RWStructuredBuffer](/stdlib-reference/types/rwstructuredbuffer-012c/index)\<[T](/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-T), [L](/stdlib-reference/types/rwstructuredbuffer-012c/index#typeparam-L) \>\> {#decl-bindless}

