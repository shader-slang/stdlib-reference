---
layout: stdlib-reference
---

# InterlockedXor

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/global-decls/InterlockedXor">InterlockedXor</a>(
    int <span class='code_param'>dest</span>,
    int <span class='code_param'>value</span>);

void <a href="/stdlib-reference/global-decls/InterlockedXor">InterlockedXor</a>(
    int <span class='code_param'>dest</span>,
    int <span class='code_param'>value</span>,
    out int <span class='code_param'>original_value</span>);

void <a href="/stdlib-reference/global-decls/InterlockedXor">InterlockedXor</a>(
    uint <span class='code_param'>dest</span>,
    uint <span class='code_param'>value</span>);

void <a href="/stdlib-reference/global-decls/InterlockedXor">InterlockedXor</a>(
    uint <span class='code_param'>dest</span>,
    uint <span class='code_param'>value</span>,
    out uint <span class='code_param'>original_value</span>);

void <a href="/stdlib-reference/global-decls/InterlockedXor">InterlockedXor</a>(
    uint <span class='code_param'>dest</span>,
    int <span class='code_param'>value</span>);

void <a href="/stdlib-reference/global-decls/InterlockedXor">InterlockedXor</a>(
    int64_t <span class='code_param'>dest</span>,
    int64_t <span class='code_param'>value</span>);

void <a href="/stdlib-reference/global-decls/InterlockedXor">InterlockedXor</a>(
    int64_t <span class='code_param'>dest</span>,
    int64_t <span class='code_param'>value</span>,
    out int64_t <span class='code_param'>original_value</span>);

void <a href="/stdlib-reference/global-decls/InterlockedXor">InterlockedXor</a>(
    uint64_t <span class='code_param'>dest</span>,
    uint64_t <span class='code_param'>value</span>);

void <a href="/stdlib-reference/global-decls/InterlockedXor">InterlockedXor</a>(
    uint64_t <span class='code_param'>dest</span>,
    uint64_t <span class='code_param'>value</span>,
    out uint64_t <span class='code_param'>original_value</span>);

</pre>

## Parameters

#### dest  : int {#decl-dest}
#### value  : int {#decl-value}
#### original\_value  : int {#decl-original_value}
#### dest  : uint {#decl-dest}
#### value  : uint {#decl-value}
#### original\_value  : uint {#decl-original_value}
#### dest  : int64\_t {#decl-dest}
#### value  : int64\_t {#decl-value}
#### original\_value  : int64\_t {#decl-original_value}
#### dest  : uint64\_t {#decl-dest}
#### value  : uint64\_t {#decl-value}
#### original\_value  : uint64\_t {#decl-original_value}

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



