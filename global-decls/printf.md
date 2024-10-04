---
layout: stdlib-reference
---

# printf

## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>(<a href="/stdlib-reference/types/NativeString/index" class="code_type">NativeString</a> <span class='code_param'>format</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;T0&gt;(
    <a href="/stdlib-reference/types/NativeString/index" class="code_type">NativeString</a> <span class='code_param'>format</span>,
    T0 <span class='code_param'>v0</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;T0, T1&gt;(
    <a href="/stdlib-reference/types/NativeString/index" class="code_type">NativeString</a> <span class='code_param'>format</span>,
    T0 <span class='code_param'>v0</span>,
    T1 <span class='code_param'>v1</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;T0, T1, T2&gt;(
    <a href="/stdlib-reference/types/NativeString/index" class="code_type">NativeString</a> <span class='code_param'>format</span>,
    T0 <span class='code_param'>v0</span>,
    T1 <span class='code_param'>v1</span>,
    T2 <span class='code_param'>v2</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;T0, T1, T2, T3&gt;(
    <a href="/stdlib-reference/types/NativeString/index" class="code_type">NativeString</a> <span class='code_param'>format</span>,
    T0 <span class='code_param'>v0</span>,
    T1 <span class='code_param'>v1</span>,
    T2 <span class='code_param'>v2</span>,
    T3 <span class='code_param'>v3</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;T0, T1, T2, T3, T4&gt;(
    <a href="/stdlib-reference/types/NativeString/index" class="code_type">NativeString</a> <span class='code_param'>format</span>,
    T0 <span class='code_param'>v0</span>,
    T1 <span class='code_param'>v1</span>,
    T2 <span class='code_param'>v2</span>,
    T3 <span class='code_param'>v3</span>,
    T4 <span class='code_param'>v4</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;T0, T1, T2, T3, T4, T5&gt;(
    <a href="/stdlib-reference/types/NativeString/index" class="code_type">NativeString</a> <span class='code_param'>format</span>,
    T0 <span class='code_param'>v0</span>,
    T1 <span class='code_param'>v1</span>,
    T2 <span class='code_param'>v2</span>,
    T3 <span class='code_param'>v3</span>,
    T4 <span class='code_param'>v4</span>,
    T5 <span class='code_param'>v5</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;T0, T1, T2, T3, T4, T5, T6&gt;(
    <a href="/stdlib-reference/types/NativeString/index" class="code_type">NativeString</a> <span class='code_param'>format</span>,
    T0 <span class='code_param'>v0</span>,
    T1 <span class='code_param'>v1</span>,
    T2 <span class='code_param'>v2</span>,
    T3 <span class='code_param'>v3</span>,
    T4 <span class='code_param'>v4</span>,
    T5 <span class='code_param'>v5</span>,
    T6 <span class='code_param'>v6</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;T0, T1, T2, T3, T4, T5, T6, T7&gt;(
    <a href="/stdlib-reference/types/NativeString/index" class="code_type">NativeString</a> <span class='code_param'>format</span>,
    T0 <span class='code_param'>v0</span>,
    T1 <span class='code_param'>v1</span>,
    T2 <span class='code_param'>v2</span>,
    T3 <span class='code_param'>v3</span>,
    T4 <span class='code_param'>v4</span>,
    T5 <span class='code_param'>v5</span>,
    T6 <span class='code_param'>v6</span>,
    T7 <span class='code_param'>v7</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;T0, T1, T2, T3, T4, T5, T6, T7, T8&gt;(
    <a href="/stdlib-reference/types/NativeString/index" class="code_type">NativeString</a> <span class='code_param'>format</span>,
    T0 <span class='code_param'>v0</span>,
    T1 <span class='code_param'>v1</span>,
    T2 <span class='code_param'>v2</span>,
    T3 <span class='code_param'>v3</span>,
    T4 <span class='code_param'>v4</span>,
    T5 <span class='code_param'>v5</span>,
    T6 <span class='code_param'>v6</span>,
    T7 <span class='code_param'>v7</span>,
    T8 <span class='code_param'>v8</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;T0, T1, T2, T3, T4, T5, T6, T7, T8, T9&gt;(
    <a href="/stdlib-reference/types/NativeString/index" class="code_type">NativeString</a> <span class='code_param'>format</span>,
    T0 <span class='code_param'>v0</span>,
    T1 <span class='code_param'>v1</span>,
    T2 <span class='code_param'>v2</span>,
    T3 <span class='code_param'>v3</span>,
    T4 <span class='code_param'>v4</span>,
    T5 <span class='code_param'>v5</span>,
    T6 <span class='code_param'>v6</span>,
    T7 <span class='code_param'>v7</span>,
    T8 <span class='code_param'>v8</span>,
    T9 <span class='code_param'>v9</span>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10&gt;(
    <a href="/stdlib-reference/types/NativeString/index" class="code_type">NativeString</a> <span class='code_param'>format</span>,
    T0 <span class='code_param'>v0</span>,
    T1 <span class='code_param'>v1</span>,
    T2 <span class='code_param'>v2</span>,
    T3 <span class='code_param'>v3</span>,
    T4 <span class='code_param'>v4</span>,
    T5 <span class='code_param'>v5</span>,
    T6 <span class='code_param'>v6</span>,
    T7 <span class='code_param'>v7</span>,
    T8 <span class='code_param'>v8</span>,
    T9 <span class='code_param'>v9</span>,
    T10 <span class='code_param'>v10</span>);

</pre>

## Parameters

* `T0`
* `T1`
* `T2`
* `T3`
* `T4`
* `T5`
* `T6`
* `T7`
* `T8`
* `T9`
* `T10`
* `format`
* `v0`
* `v1`
* `v2`
* `v3`
* `v4`
* `v5`
* `v6`
* `v7`
* `v8`
* `v9`
* `v10`

## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `SPV_KHR_non_semantic_info`.


