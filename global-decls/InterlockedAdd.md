---
layout: stdlib-reference
---

# InterlockedAdd

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
void <a href="/stdlib-reference/global-decls/InterlockedAdd">InterlockedAdd</a>(
<a href="/stdlib-reference/global-decls/InterlockedAdd#decl-dest" class="code_param">dest</a>    int ,
<a href="/stdlib-reference/global-decls/InterlockedAdd#decl-value" class="code_param">value</a>    int );

/// Requires Capability Set 1:
void <a href="/stdlib-reference/global-decls/InterlockedAdd">InterlockedAdd</a>(
<a href="/stdlib-reference/global-decls/InterlockedAdd#decl-dest" class="code_param">dest</a>    int ,
<a href="/stdlib-reference/global-decls/InterlockedAdd#decl-value" class="code_param">value</a>    int ,
original_value    out int );

/// Requires Capability Set 1:
void <a href="/stdlib-reference/global-decls/InterlockedAdd">InterlockedAdd</a>(
<a href="/stdlib-reference/global-decls/InterlockedAdd#decl-dest" class="code_param">dest</a>    uint ,
<a href="/stdlib-reference/global-decls/InterlockedAdd#decl-value" class="code_param">value</a>    uint );

/// Requires Capability Set 1:
void <a href="/stdlib-reference/global-decls/InterlockedAdd">InterlockedAdd</a>(
<a href="/stdlib-reference/global-decls/InterlockedAdd#decl-dest" class="code_param">dest</a>    uint ,
<a href="/stdlib-reference/global-decls/InterlockedAdd#decl-value" class="code_param">value</a>    uint ,
original_value    out uint );

void <a href="/stdlib-reference/global-decls/InterlockedAdd">InterlockedAdd</a>(
<a href="/stdlib-reference/global-decls/InterlockedAdd#decl-dest" class="code_param">dest</a>    uint ,
<a href="/stdlib-reference/global-decls/InterlockedAdd#decl-value" class="code_param">value</a>    int );

/// Requires Capability Set 2:
void <a href="/stdlib-reference/global-decls/InterlockedAdd">InterlockedAdd</a>(
<a href="/stdlib-reference/global-decls/InterlockedAdd#decl-dest" class="code_param">dest</a>    int64_t ,
<a href="/stdlib-reference/global-decls/InterlockedAdd#decl-value" class="code_param">value</a>    int64_t );

void <a href="/stdlib-reference/global-decls/InterlockedAdd">InterlockedAdd</a>(
<a href="/stdlib-reference/global-decls/InterlockedAdd#decl-dest" class="code_param">dest</a>    int64_t ,
<a href="/stdlib-reference/global-decls/InterlockedAdd#decl-value" class="code_param">value</a>    int64_t ,
original_value    out int64_t );

/// Requires Capability Set 2:
void <a href="/stdlib-reference/global-decls/InterlockedAdd">InterlockedAdd</a>(
<a href="/stdlib-reference/global-decls/InterlockedAdd#decl-dest" class="code_param">dest</a>    uint64_t ,
<a href="/stdlib-reference/global-decls/InterlockedAdd#decl-value" class="code_param">value</a>    uint64_t );

void <a href="/stdlib-reference/global-decls/InterlockedAdd">InterlockedAdd</a>(
<a href="/stdlib-reference/global-decls/InterlockedAdd#decl-dest" class="code_param">dest</a>    uint64_t ,
<a href="/stdlib-reference/global-decls/InterlockedAdd#decl-value" class="code_param">value</a>    uint64_t ,
original_value    out uint64_t );

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

### Capability Set 1

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


### Capability Set 2

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.



