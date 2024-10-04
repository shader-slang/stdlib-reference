---
layout: stdlib-reference
---

# InterlockedCompareStore

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedCompareStore">InterlockedCompareStore</a>(
    int64_t <span class='code_param'>dest</span>,
    int64_t <span class='code_param'>compare_value</span>,
    int64_t <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedCompareStore">InterlockedCompareStore</a>(
    uint64_t <span class='code_param'>dest</span>,
    uint64_t <span class='code_param'>compare_value</span>,
    uint64_t <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedCompareStore">InterlockedCompareStore</a>(
    <span class="code_keyword">int</span> <span class='code_param'>dest</span>,
    <span class="code_keyword">int</span> <span class='code_param'>compare_value</span>,
    <span class="code_keyword">int</span> <span class='code_param'>value</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/InterlockedCompareStore">InterlockedCompareStore</a>(
    <span class="code_keyword">uint</span> <span class='code_param'>dest</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>compare_value</span>,
    <span class="code_keyword">uint</span> <span class='code_param'>value</span>);

</pre>

## Parameters

#### dest : int64\_t
#### compare\_value : int64\_t
#### value : int64\_t
#### dest : uint64\_t
#### compare\_value : uint64\_t
#### value : uint64\_t
#### dest : int
#### compare\_value : int
#### value : int
#### dest : uint
#### compare\_value : uint
#### value : uint

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



