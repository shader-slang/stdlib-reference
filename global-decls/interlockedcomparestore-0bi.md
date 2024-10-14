---
layout: stdlib-reference
---

# InterlockedCompareStore

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/interlockedcomparestore-0bi">InterlockedCompareStore</a>(
    int64_t <a href="/stdlib-reference/global-decls/interlockedcomparestore-0bi#decl-dest" class="code_param">dest</a>,
    int64_t <a href="/stdlib-reference/global-decls/interlockedcomparestore-0bi#decl-compare_value" class="code_param">compare_value</a>,
    int64_t <a href="/stdlib-reference/global-decls/interlockedcomparestore-0bi#decl-value" class="code_param">value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/interlockedcomparestore-0bi">InterlockedCompareStore</a>(
    uint64_t <a href="/stdlib-reference/global-decls/interlockedcomparestore-0bi#decl-dest" class="code_param">dest</a>,
    uint64_t <a href="/stdlib-reference/global-decls/interlockedcomparestore-0bi#decl-compare_value" class="code_param">compare_value</a>,
    uint64_t <a href="/stdlib-reference/global-decls/interlockedcomparestore-0bi#decl-value" class="code_param">value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/interlockedcomparestore-0bi">InterlockedCompareStore</a>(
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/interlockedcomparestore-0bi#decl-dest" class="code_param">dest</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/interlockedcomparestore-0bi#decl-compare_value" class="code_param">compare_value</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/interlockedcomparestore-0bi#decl-value" class="code_param">value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/interlockedcomparestore-0bi">InterlockedCompareStore</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/interlockedcomparestore-0bi#decl-dest" class="code_param">dest</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/interlockedcomparestore-0bi#decl-compare_value" class="code_param">compare_value</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/interlockedcomparestore-0bi#decl-value" class="code_param">value</a>);

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



