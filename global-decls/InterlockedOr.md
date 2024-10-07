---
layout: stdlib-reference
---

# InterlockedOr

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/global-decls/InterlockedOr">InterlockedOr</a>(
    int <a href="/stdlib-reference/global-decls/InterlockedOr#decl-dest" class="code_param">dest</a>,
    int <a href="/stdlib-reference/global-decls/InterlockedOr#decl-value" class="code_param">value</a>);

void <a href="/stdlib-reference/global-decls/InterlockedOr">InterlockedOr</a>(
    int <a href="/stdlib-reference/global-decls/InterlockedOr#decl-dest" class="code_param">dest</a>,
    int <a href="/stdlib-reference/global-decls/InterlockedOr#decl-value" class="code_param">value</a>,
    out int <a href="/stdlib-reference/global-decls/InterlockedOr#decl-original_value" class="code_param">original_value</a>);

void <a href="/stdlib-reference/global-decls/InterlockedOr">InterlockedOr</a>(
    uint <a href="/stdlib-reference/global-decls/InterlockedOr#decl-dest" class="code_param">dest</a>,
    uint <a href="/stdlib-reference/global-decls/InterlockedOr#decl-value" class="code_param">value</a>);

void <a href="/stdlib-reference/global-decls/InterlockedOr">InterlockedOr</a>(
    uint <a href="/stdlib-reference/global-decls/InterlockedOr#decl-dest" class="code_param">dest</a>,
    uint <a href="/stdlib-reference/global-decls/InterlockedOr#decl-value" class="code_param">value</a>,
    out uint <a href="/stdlib-reference/global-decls/InterlockedOr#decl-original_value" class="code_param">original_value</a>);

void <a href="/stdlib-reference/global-decls/InterlockedOr">InterlockedOr</a>(
    uint <a href="/stdlib-reference/global-decls/InterlockedOr#decl-dest" class="code_param">dest</a>,
    int <a href="/stdlib-reference/global-decls/InterlockedOr#decl-value" class="code_param">value</a>);

void <a href="/stdlib-reference/global-decls/InterlockedOr">InterlockedOr</a>(
    int64_t <a href="/stdlib-reference/global-decls/InterlockedOr#decl-dest" class="code_param">dest</a>,
    int64_t <a href="/stdlib-reference/global-decls/InterlockedOr#decl-value" class="code_param">value</a>);

void <a href="/stdlib-reference/global-decls/InterlockedOr">InterlockedOr</a>(
    int64_t <a href="/stdlib-reference/global-decls/InterlockedOr#decl-dest" class="code_param">dest</a>,
    int64_t <a href="/stdlib-reference/global-decls/InterlockedOr#decl-value" class="code_param">value</a>,
    out int64_t <a href="/stdlib-reference/global-decls/InterlockedOr#decl-original_value" class="code_param">original_value</a>);

void <a href="/stdlib-reference/global-decls/InterlockedOr">InterlockedOr</a>(
    uint64_t <a href="/stdlib-reference/global-decls/InterlockedOr#decl-dest" class="code_param">dest</a>,
    uint64_t <a href="/stdlib-reference/global-decls/InterlockedOr#decl-value" class="code_param">value</a>);

void <a href="/stdlib-reference/global-decls/InterlockedOr">InterlockedOr</a>(
    uint64_t <a href="/stdlib-reference/global-decls/InterlockedOr#decl-dest" class="code_param">dest</a>,
    uint64_t <a href="/stdlib-reference/global-decls/InterlockedOr#decl-value" class="code_param">value</a>,
    out uint64_t <a href="/stdlib-reference/global-decls/InterlockedOr#decl-original_value" class="code_param">original_value</a>);

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



