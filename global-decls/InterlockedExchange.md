---
layout: stdlib-reference
---

# InterlockedExchange

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-dest" class="code_param">dest</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-value" class="code_param">value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-dest" class="code_param">dest</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-original_value" class="code_param">original_value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-dest" class="code_param">dest</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-value" class="code_param">value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-dest" class="code_param">dest</a>,
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-original_value" class="code_param">original_value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
    <span class="code_keyword">uint</span> <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-dest" class="code_param">dest</a>,
    <span class="code_keyword">int</span> <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-value" class="code_param">value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
    int64_t <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-dest" class="code_param">dest</a>,
    int64_t <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-value" class="code_param">value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
    int64_t <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-dest" class="code_param">dest</a>,
    int64_t <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> int64_t <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-original_value" class="code_param">original_value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
    uint64_t <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-dest" class="code_param">dest</a>,
    uint64_t <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-value" class="code_param">value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
    uint64_t <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-dest" class="code_param">dest</a>,
    uint64_t <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> uint64_t <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-original_value" class="code_param">original_value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
    <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-dest" class="code_param">dest</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-value" class="code_param">value</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedExchange">InterlockedExchange</a>(
    <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-dest" class="code_param">dest</a>,
    <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-value" class="code_param">value</a>,
    <span class="code_keyword">out</span> <span class="code_keyword">float</span> <a href="/stdlib-reference/global-decls/InterlockedExchange#decl-original_value" class="code_param">original_value</a>);

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



