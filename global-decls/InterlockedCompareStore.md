---
layout: stdlib-reference
---

# InterlockedCompareStore

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

* `dest`
* `compare_value`
* `value`

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



