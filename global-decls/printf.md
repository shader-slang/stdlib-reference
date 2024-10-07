---
layout: stdlib-reference
---

# printf

## Description





## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>(<a href="/stdlib-reference/types/NativeString/index">NativeString</a> <a href="/stdlib-reference/global-decls/printf#decl-format" class="code_param">format</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;<a href="/stdlib-reference/global-decls/printf#typeparam-T0" class="code_type">T0</a>&gt;(
    <a href="/stdlib-reference/types/NativeString/index">NativeString</a> <a href="/stdlib-reference/global-decls/printf#decl-format" class="code_param">format</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T0" class="code_type">T0</a> <a href="/stdlib-reference/global-decls/printf#decl-v0" class="code_param">v0</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;<a href="/stdlib-reference/global-decls/printf#typeparam-T0" class="code_type">T0</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T1" class="code_type">T1</a>&gt;(
    <a href="/stdlib-reference/types/NativeString/index">NativeString</a> <a href="/stdlib-reference/global-decls/printf#decl-format" class="code_param">format</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T0" class="code_type">T0</a> <a href="/stdlib-reference/global-decls/printf#decl-v0" class="code_param">v0</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T1" class="code_type">T1</a> <a href="/stdlib-reference/global-decls/printf#decl-v1" class="code_param">v1</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;<a href="/stdlib-reference/global-decls/printf#typeparam-T0" class="code_type">T0</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T1" class="code_type">T1</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T2" class="code_type">T2</a>&gt;(
    <a href="/stdlib-reference/types/NativeString/index">NativeString</a> <a href="/stdlib-reference/global-decls/printf#decl-format" class="code_param">format</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T0" class="code_type">T0</a> <a href="/stdlib-reference/global-decls/printf#decl-v0" class="code_param">v0</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T1" class="code_type">T1</a> <a href="/stdlib-reference/global-decls/printf#decl-v1" class="code_param">v1</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T2" class="code_type">T2</a> <a href="/stdlib-reference/global-decls/printf#decl-v2" class="code_param">v2</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;<a href="/stdlib-reference/global-decls/printf#typeparam-T0" class="code_type">T0</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T1" class="code_type">T1</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T2" class="code_type">T2</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T3" class="code_type">T3</a>&gt;(
    <a href="/stdlib-reference/types/NativeString/index">NativeString</a> <a href="/stdlib-reference/global-decls/printf#decl-format" class="code_param">format</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T0" class="code_type">T0</a> <a href="/stdlib-reference/global-decls/printf#decl-v0" class="code_param">v0</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T1" class="code_type">T1</a> <a href="/stdlib-reference/global-decls/printf#decl-v1" class="code_param">v1</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T2" class="code_type">T2</a> <a href="/stdlib-reference/global-decls/printf#decl-v2" class="code_param">v2</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T3" class="code_type">T3</a> <a href="/stdlib-reference/global-decls/printf#decl-v3" class="code_param">v3</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;<a href="/stdlib-reference/global-decls/printf#typeparam-T0" class="code_type">T0</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T1" class="code_type">T1</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T2" class="code_type">T2</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T3" class="code_type">T3</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T4" class="code_type">T4</a>&gt;(
    <a href="/stdlib-reference/types/NativeString/index">NativeString</a> <a href="/stdlib-reference/global-decls/printf#decl-format" class="code_param">format</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T0" class="code_type">T0</a> <a href="/stdlib-reference/global-decls/printf#decl-v0" class="code_param">v0</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T1" class="code_type">T1</a> <a href="/stdlib-reference/global-decls/printf#decl-v1" class="code_param">v1</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T2" class="code_type">T2</a> <a href="/stdlib-reference/global-decls/printf#decl-v2" class="code_param">v2</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T3" class="code_type">T3</a> <a href="/stdlib-reference/global-decls/printf#decl-v3" class="code_param">v3</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T4" class="code_type">T4</a> <a href="/stdlib-reference/global-decls/printf#decl-v4" class="code_param">v4</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;<a href="/stdlib-reference/global-decls/printf#typeparam-T0" class="code_type">T0</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T1" class="code_type">T1</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T2" class="code_type">T2</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T3" class="code_type">T3</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T4" class="code_type">T4</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T5" class="code_type">T5</a>&gt;(
    <a href="/stdlib-reference/types/NativeString/index">NativeString</a> <a href="/stdlib-reference/global-decls/printf#decl-format" class="code_param">format</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T0" class="code_type">T0</a> <a href="/stdlib-reference/global-decls/printf#decl-v0" class="code_param">v0</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T1" class="code_type">T1</a> <a href="/stdlib-reference/global-decls/printf#decl-v1" class="code_param">v1</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T2" class="code_type">T2</a> <a href="/stdlib-reference/global-decls/printf#decl-v2" class="code_param">v2</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T3" class="code_type">T3</a> <a href="/stdlib-reference/global-decls/printf#decl-v3" class="code_param">v3</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T4" class="code_type">T4</a> <a href="/stdlib-reference/global-decls/printf#decl-v4" class="code_param">v4</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T5" class="code_type">T5</a> <a href="/stdlib-reference/global-decls/printf#decl-v5" class="code_param">v5</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;<a href="/stdlib-reference/global-decls/printf#typeparam-T0" class="code_type">T0</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T1" class="code_type">T1</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T2" class="code_type">T2</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T3" class="code_type">T3</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T4" class="code_type">T4</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T5" class="code_type">T5</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T6" class="code_type">T6</a>&gt;(
    <a href="/stdlib-reference/types/NativeString/index">NativeString</a> <a href="/stdlib-reference/global-decls/printf#decl-format" class="code_param">format</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T0" class="code_type">T0</a> <a href="/stdlib-reference/global-decls/printf#decl-v0" class="code_param">v0</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T1" class="code_type">T1</a> <a href="/stdlib-reference/global-decls/printf#decl-v1" class="code_param">v1</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T2" class="code_type">T2</a> <a href="/stdlib-reference/global-decls/printf#decl-v2" class="code_param">v2</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T3" class="code_type">T3</a> <a href="/stdlib-reference/global-decls/printf#decl-v3" class="code_param">v3</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T4" class="code_type">T4</a> <a href="/stdlib-reference/global-decls/printf#decl-v4" class="code_param">v4</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T5" class="code_type">T5</a> <a href="/stdlib-reference/global-decls/printf#decl-v5" class="code_param">v5</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T6" class="code_type">T6</a> <a href="/stdlib-reference/global-decls/printf#decl-v6" class="code_param">v6</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;<a href="/stdlib-reference/global-decls/printf#typeparam-T0" class="code_type">T0</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T1" class="code_type">T1</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T2" class="code_type">T2</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T3" class="code_type">T3</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T4" class="code_type">T4</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T5" class="code_type">T5</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T6" class="code_type">T6</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T7" class="code_type">T7</a>&gt;(
    <a href="/stdlib-reference/types/NativeString/index">NativeString</a> <a href="/stdlib-reference/global-decls/printf#decl-format" class="code_param">format</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T0" class="code_type">T0</a> <a href="/stdlib-reference/global-decls/printf#decl-v0" class="code_param">v0</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T1" class="code_type">T1</a> <a href="/stdlib-reference/global-decls/printf#decl-v1" class="code_param">v1</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T2" class="code_type">T2</a> <a href="/stdlib-reference/global-decls/printf#decl-v2" class="code_param">v2</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T3" class="code_type">T3</a> <a href="/stdlib-reference/global-decls/printf#decl-v3" class="code_param">v3</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T4" class="code_type">T4</a> <a href="/stdlib-reference/global-decls/printf#decl-v4" class="code_param">v4</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T5" class="code_type">T5</a> <a href="/stdlib-reference/global-decls/printf#decl-v5" class="code_param">v5</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T6" class="code_type">T6</a> <a href="/stdlib-reference/global-decls/printf#decl-v6" class="code_param">v6</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T7" class="code_type">T7</a> <a href="/stdlib-reference/global-decls/printf#decl-v7" class="code_param">v7</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;<a href="/stdlib-reference/global-decls/printf#typeparam-T0" class="code_type">T0</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T1" class="code_type">T1</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T2" class="code_type">T2</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T3" class="code_type">T3</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T4" class="code_type">T4</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T5" class="code_type">T5</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T6" class="code_type">T6</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T7" class="code_type">T7</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T8" class="code_type">T8</a>&gt;(
    <a href="/stdlib-reference/types/NativeString/index">NativeString</a> <a href="/stdlib-reference/global-decls/printf#decl-format" class="code_param">format</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T0" class="code_type">T0</a> <a href="/stdlib-reference/global-decls/printf#decl-v0" class="code_param">v0</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T1" class="code_type">T1</a> <a href="/stdlib-reference/global-decls/printf#decl-v1" class="code_param">v1</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T2" class="code_type">T2</a> <a href="/stdlib-reference/global-decls/printf#decl-v2" class="code_param">v2</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T3" class="code_type">T3</a> <a href="/stdlib-reference/global-decls/printf#decl-v3" class="code_param">v3</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T4" class="code_type">T4</a> <a href="/stdlib-reference/global-decls/printf#decl-v4" class="code_param">v4</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T5" class="code_type">T5</a> <a href="/stdlib-reference/global-decls/printf#decl-v5" class="code_param">v5</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T6" class="code_type">T6</a> <a href="/stdlib-reference/global-decls/printf#decl-v6" class="code_param">v6</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T7" class="code_type">T7</a> <a href="/stdlib-reference/global-decls/printf#decl-v7" class="code_param">v7</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T8" class="code_type">T8</a> <a href="/stdlib-reference/global-decls/printf#decl-v8" class="code_param">v8</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;<a href="/stdlib-reference/global-decls/printf#typeparam-T0" class="code_type">T0</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T1" class="code_type">T1</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T2" class="code_type">T2</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T3" class="code_type">T3</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T4" class="code_type">T4</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T5" class="code_type">T5</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T6" class="code_type">T6</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T7" class="code_type">T7</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T8" class="code_type">T8</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T9" class="code_type">T9</a>&gt;(
    <a href="/stdlib-reference/types/NativeString/index">NativeString</a> <a href="/stdlib-reference/global-decls/printf#decl-format" class="code_param">format</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T0" class="code_type">T0</a> <a href="/stdlib-reference/global-decls/printf#decl-v0" class="code_param">v0</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T1" class="code_type">T1</a> <a href="/stdlib-reference/global-decls/printf#decl-v1" class="code_param">v1</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T2" class="code_type">T2</a> <a href="/stdlib-reference/global-decls/printf#decl-v2" class="code_param">v2</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T3" class="code_type">T3</a> <a href="/stdlib-reference/global-decls/printf#decl-v3" class="code_param">v3</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T4" class="code_type">T4</a> <a href="/stdlib-reference/global-decls/printf#decl-v4" class="code_param">v4</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T5" class="code_type">T5</a> <a href="/stdlib-reference/global-decls/printf#decl-v5" class="code_param">v5</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T6" class="code_type">T6</a> <a href="/stdlib-reference/global-decls/printf#decl-v6" class="code_param">v6</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T7" class="code_type">T7</a> <a href="/stdlib-reference/global-decls/printf#decl-v7" class="code_param">v7</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T8" class="code_type">T8</a> <a href="/stdlib-reference/global-decls/printf#decl-v8" class="code_param">v8</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T9" class="code_type">T9</a> <a href="/stdlib-reference/global-decls/printf#decl-v9" class="code_param">v9</a>);

<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;<a href="/stdlib-reference/global-decls/printf#typeparam-T0" class="code_type">T0</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T1" class="code_type">T1</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T2" class="code_type">T2</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T3" class="code_type">T3</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T4" class="code_type">T4</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T5" class="code_type">T5</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T6" class="code_type">T6</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T7" class="code_type">T7</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T8" class="code_type">T8</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T9" class="code_type">T9</a>, <a href="/stdlib-reference/global-decls/printf#typeparam-T10" class="code_type">T10</a>&gt;(
    <a href="/stdlib-reference/types/NativeString/index">NativeString</a> <a href="/stdlib-reference/global-decls/printf#decl-format" class="code_param">format</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T0" class="code_type">T0</a> <a href="/stdlib-reference/global-decls/printf#decl-v0" class="code_param">v0</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T1" class="code_type">T1</a> <a href="/stdlib-reference/global-decls/printf#decl-v1" class="code_param">v1</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T2" class="code_type">T2</a> <a href="/stdlib-reference/global-decls/printf#decl-v2" class="code_param">v2</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T3" class="code_type">T3</a> <a href="/stdlib-reference/global-decls/printf#decl-v3" class="code_param">v3</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T4" class="code_type">T4</a> <a href="/stdlib-reference/global-decls/printf#decl-v4" class="code_param">v4</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T5" class="code_type">T5</a> <a href="/stdlib-reference/global-decls/printf#decl-v5" class="code_param">v5</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T6" class="code_type">T6</a> <a href="/stdlib-reference/global-decls/printf#decl-v6" class="code_param">v6</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T7" class="code_type">T7</a> <a href="/stdlib-reference/global-decls/printf#decl-v7" class="code_param">v7</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T8" class="code_type">T8</a> <a href="/stdlib-reference/global-decls/printf#decl-v8" class="code_param">v8</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T9" class="code_type">T9</a> <a href="/stdlib-reference/global-decls/printf#decl-v9" class="code_param">v9</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T10" class="code_type">T10</a> <a href="/stdlib-reference/global-decls/printf#decl-v10" class="code_param">v10</a>);

</pre>

## Generic Parameters

#### T0 {#typeparam-T0}
#### T1 {#typeparam-T1}
#### T2 {#typeparam-T2}
#### T3 {#typeparam-T3}
#### T4 {#typeparam-T4}
#### T5 {#typeparam-T5}
#### T6 {#typeparam-T6}
#### T7 {#typeparam-T7}
#### T8 {#typeparam-T8}
#### T9 {#typeparam-T9}
#### T10 {#typeparam-T10}

## Parameters

#### format  : [NativeString](/stdlib-reference/types/NativeString/index) {#decl-format}
#### v0  : [T0](/stdlib-reference/global-decls/printf#typeparam-T0) {#decl-v0}
#### v1  : [T1](/stdlib-reference/global-decls/printf#typeparam-T1) {#decl-v1}
#### v2  : [T2](/stdlib-reference/global-decls/printf#typeparam-T2) {#decl-v2}
#### v3  : [T3](/stdlib-reference/global-decls/printf#typeparam-T3) {#decl-v3}
#### v4  : [T4](/stdlib-reference/global-decls/printf#typeparam-T4) {#decl-v4}
#### v5  : [T5](/stdlib-reference/global-decls/printf#typeparam-T5) {#decl-v5}
#### v6  : [T6](/stdlib-reference/global-decls/printf#typeparam-T6) {#decl-v6}
#### v7  : [T7](/stdlib-reference/global-decls/printf#typeparam-T7) {#decl-v7}
#### v8  : [T8](/stdlib-reference/global-decls/printf#typeparam-T8) {#decl-v8}
#### v9  : [T9](/stdlib-reference/global-decls/printf#typeparam-T9) {#decl-v9}
#### v10  : [T10](/stdlib-reference/global-decls/printf#typeparam-T10) {#decl-v10}

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


