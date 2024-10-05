---
layout: stdlib-reference
---

# printf

## Description





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

#### T0
#### T1
#### T2
#### T3
#### T4
#### T5
#### T6
#### T7
#### T8
#### T9
#### T10
#### format  : [NativeString](/stdlib-reference/types/NativeString/index)
#### v0  : T0
#### v1  : T1
#### v2  : T2
#### v3  : T3
#### v4  : T4
#### v5  : T5
#### v6  : T6
#### v7  : T7
#### v8  : T8
#### v9  : T9
#### v10  : T10

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


