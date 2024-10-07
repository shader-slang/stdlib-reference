---
layout: stdlib-reference
---

# InterlockedCompareStore

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/global-decls/InterlockedCompareStore">InterlockedCompareStore</a>(
    int64_t <span class='code_param'>dest</span>,
    int64_t <span class='code_param'>compare_value</span>,
    int64_t <span class='code_param'>value</span>);

void <a href="/stdlib-reference/global-decls/InterlockedCompareStore">InterlockedCompareStore</a>(
    uint64_t <span class='code_param'>dest</span>,
    uint64_t <span class='code_param'>compare_value</span>,
    uint64_t <span class='code_param'>value</span>);

void <a href="/stdlib-reference/global-decls/InterlockedCompareStore">InterlockedCompareStore</a>(
    int <span class='code_param'>dest</span>,
    int <span class='code_param'>compare_value</span>,
    int <span class='code_param'>value</span>);

void <a href="/stdlib-reference/global-decls/InterlockedCompareStore">InterlockedCompareStore</a>(
    uint <span class='code_param'>dest</span>,
    uint <span class='code_param'>compare_value</span>,
    uint <span class='code_param'>value</span>);

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



