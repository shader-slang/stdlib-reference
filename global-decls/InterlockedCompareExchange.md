---
layout: stdlib-reference
---

# InterlockedCompareExchange

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/global-decls/InterlockedCompareExchange">InterlockedCompareExchange</a>(
<a href="/stdlib-reference/global-decls/InterlockedCompareExchange#decl-dest" class="code_param">dest</a>    int64_t ,
<a href="/stdlib-reference/global-decls/InterlockedCompareExchange#decl-compare_value" class="code_param">compare_value</a>    int64_t ,
<a href="/stdlib-reference/global-decls/InterlockedCompareExchange#decl-value" class="code_param">value</a>    int64_t );

void <a href="/stdlib-reference/global-decls/InterlockedCompareExchange">InterlockedCompareExchange</a>(
<a href="/stdlib-reference/global-decls/InterlockedCompareExchange#decl-dest" class="code_param">dest</a>    int64_t ,
<a href="/stdlib-reference/global-decls/InterlockedCompareExchange#decl-compare_value" class="code_param">compare_value</a>    int64_t ,
<a href="/stdlib-reference/global-decls/InterlockedCompareExchange#decl-value" class="code_param">value</a>    int64_t ,
original_value    out int64_t );

void <a href="/stdlib-reference/global-decls/InterlockedCompareExchange">InterlockedCompareExchange</a>(
<a href="/stdlib-reference/global-decls/InterlockedCompareExchange#decl-dest" class="code_param">dest</a>    uint64_t ,
<a href="/stdlib-reference/global-decls/InterlockedCompareExchange#decl-compare_value" class="code_param">compare_value</a>    uint64_t ,
<a href="/stdlib-reference/global-decls/InterlockedCompareExchange#decl-value" class="code_param">value</a>    uint64_t );

void <a href="/stdlib-reference/global-decls/InterlockedCompareExchange">InterlockedCompareExchange</a>(
<a href="/stdlib-reference/global-decls/InterlockedCompareExchange#decl-dest" class="code_param">dest</a>    uint64_t ,
<a href="/stdlib-reference/global-decls/InterlockedCompareExchange#decl-compare_value" class="code_param">compare_value</a>    uint64_t ,
<a href="/stdlib-reference/global-decls/InterlockedCompareExchange#decl-value" class="code_param">value</a>    uint64_t ,
original_value    out uint64_t );

void <a href="/stdlib-reference/global-decls/InterlockedCompareExchange">InterlockedCompareExchange</a>(
<a href="/stdlib-reference/global-decls/InterlockedCompareExchange#decl-dest" class="code_param">dest</a>    int ,
<a href="/stdlib-reference/global-decls/InterlockedCompareExchange#decl-compare_value" class="code_param">compare_value</a>    int ,
<a href="/stdlib-reference/global-decls/InterlockedCompareExchange#decl-value" class="code_param">value</a>    int ,
original_value    out int );

void <a href="/stdlib-reference/global-decls/InterlockedCompareExchange">InterlockedCompareExchange</a>(
<a href="/stdlib-reference/global-decls/InterlockedCompareExchange#decl-dest" class="code_param">dest</a>    uint ,
<a href="/stdlib-reference/global-decls/InterlockedCompareExchange#decl-compare_value" class="code_param">compare_value</a>    uint ,
<a href="/stdlib-reference/global-decls/InterlockedCompareExchange#decl-value" class="code_param">value</a>    uint ,
original_value    out uint );

</pre>

## Parameters

#### dest  : int64\_t {#decl-dest}
#### compare\_value  : int64\_t {#decl-compare_value}
#### value  : int64\_t {#decl-value}
#### original\_value  : int64\_t {#decl-original_value}
#### dest  : uint64\_t {#decl-dest}
#### compare\_value  : uint64\_t {#decl-compare_value}
#### value  : uint64\_t {#decl-value}
#### original\_value  : uint64\_t {#decl-original_value}
#### dest  : int {#decl-dest}
#### compare\_value  : int {#decl-compare_value}
#### value  : int {#decl-value}
#### original\_value  : int {#decl-original_value}
#### dest  : uint {#decl-dest}
#### compare\_value  : uint {#decl-compare_value}
#### value  : uint {#decl-value}
#### original\_value  : uint {#decl-original_value}

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### metal
Available in all stages.

#### spirv
Available in all stages.



