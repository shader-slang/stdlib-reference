---
layout: stdlib-reference
---

# InterlockedCompareStore

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/global-decls/InterlockedCompareStore">InterlockedCompareStore</a>(
<a href="/stdlib-reference/global-decls/InterlockedCompareStore#decl-dest" class="code_param">dest</a>    int64_t ,
<a href="/stdlib-reference/global-decls/InterlockedCompareStore#decl-compare_value" class="code_param">compare_value</a>    int64_t ,
<a href="/stdlib-reference/global-decls/InterlockedCompareStore#decl-value" class="code_param">value</a>    int64_t );

void <a href="/stdlib-reference/global-decls/InterlockedCompareStore">InterlockedCompareStore</a>(
<a href="/stdlib-reference/global-decls/InterlockedCompareStore#decl-dest" class="code_param">dest</a>    uint64_t ,
<a href="/stdlib-reference/global-decls/InterlockedCompareStore#decl-compare_value" class="code_param">compare_value</a>    uint64_t ,
<a href="/stdlib-reference/global-decls/InterlockedCompareStore#decl-value" class="code_param">value</a>    uint64_t );

void <a href="/stdlib-reference/global-decls/InterlockedCompareStore">InterlockedCompareStore</a>(
<a href="/stdlib-reference/global-decls/InterlockedCompareStore#decl-dest" class="code_param">dest</a>    int ,
<a href="/stdlib-reference/global-decls/InterlockedCompareStore#decl-compare_value" class="code_param">compare_value</a>    int ,
<a href="/stdlib-reference/global-decls/InterlockedCompareStore#decl-value" class="code_param">value</a>    int );

void <a href="/stdlib-reference/global-decls/InterlockedCompareStore">InterlockedCompareStore</a>(
<a href="/stdlib-reference/global-decls/InterlockedCompareStore#decl-dest" class="code_param">dest</a>    uint ,
<a href="/stdlib-reference/global-decls/InterlockedCompareStore#decl-compare_value" class="code_param">compare_value</a>    uint ,
<a href="/stdlib-reference/global-decls/InterlockedCompareStore#decl-value" class="code_param">value</a>    uint );

</pre>

## Parameters

#### dest  : int64\_t {#decl-dest}
#### compare\_value  : int64\_t {#decl-compare_value}
#### value  : int64\_t {#decl-value}
#### dest  : uint64\_t {#decl-dest}
#### compare\_value  : uint64\_t {#decl-compare_value}
#### value  : uint64\_t {#decl-value}
#### dest  : int {#decl-dest}
#### compare\_value  : int {#decl-compare_value}
#### value  : int {#decl-value}
#### dest  : uint {#decl-dest}
#### compare\_value  : uint {#decl-compare_value}
#### value  : uint {#decl-value}

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



