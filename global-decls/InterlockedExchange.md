---
layout: stdlib-reference
---

# InterlockedExchange

## Description





## Signature 

<pre>
void <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
<a href="/stdlib-reference/global-decls/InterlockedExchange#decl-dest" class="code_param">dest</a>    int ,
<a href="/stdlib-reference/global-decls/InterlockedExchange#decl-value" class="code_param">value</a>    int );

void <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
<a href="/stdlib-reference/global-decls/InterlockedExchange#decl-dest" class="code_param">dest</a>    int ,
<a href="/stdlib-reference/global-decls/InterlockedExchange#decl-value" class="code_param">value</a>    int ,
original_value    out int );

void <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
<a href="/stdlib-reference/global-decls/InterlockedExchange#decl-dest" class="code_param">dest</a>    uint ,
<a href="/stdlib-reference/global-decls/InterlockedExchange#decl-value" class="code_param">value</a>    uint );

void <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
<a href="/stdlib-reference/global-decls/InterlockedExchange#decl-dest" class="code_param">dest</a>    uint ,
<a href="/stdlib-reference/global-decls/InterlockedExchange#decl-value" class="code_param">value</a>    uint ,
original_value    out uint );

void <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
<a href="/stdlib-reference/global-decls/InterlockedExchange#decl-dest" class="code_param">dest</a>    uint ,
<a href="/stdlib-reference/global-decls/InterlockedExchange#decl-value" class="code_param">value</a>    int );

void <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
<a href="/stdlib-reference/global-decls/InterlockedExchange#decl-dest" class="code_param">dest</a>    int64_t ,
<a href="/stdlib-reference/global-decls/InterlockedExchange#decl-value" class="code_param">value</a>    int64_t );

void <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
<a href="/stdlib-reference/global-decls/InterlockedExchange#decl-dest" class="code_param">dest</a>    int64_t ,
<a href="/stdlib-reference/global-decls/InterlockedExchange#decl-value" class="code_param">value</a>    int64_t ,
original_value    out int64_t );

void <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
<a href="/stdlib-reference/global-decls/InterlockedExchange#decl-dest" class="code_param">dest</a>    uint64_t ,
<a href="/stdlib-reference/global-decls/InterlockedExchange#decl-value" class="code_param">value</a>    uint64_t );

void <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
<a href="/stdlib-reference/global-decls/InterlockedExchange#decl-dest" class="code_param">dest</a>    uint64_t ,
<a href="/stdlib-reference/global-decls/InterlockedExchange#decl-value" class="code_param">value</a>    uint64_t ,
original_value    out uint64_t );

void <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
<a href="/stdlib-reference/global-decls/InterlockedExchange#decl-dest" class="code_param">dest</a>    float ,
<a href="/stdlib-reference/global-decls/InterlockedExchange#decl-value" class="code_param">value</a>    float );

void <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
<a href="/stdlib-reference/global-decls/InterlockedExchange#decl-dest" class="code_param">dest</a>    float ,
<a href="/stdlib-reference/global-decls/InterlockedExchange#decl-value" class="code_param">value</a>    float ,
original_value    out float );

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
#### dest  : float {#decl-dest}
#### value  : float {#decl-value}
#### original\_value  : float {#decl-original_value}

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



