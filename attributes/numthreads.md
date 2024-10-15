---
layout: stdlib-reference
---

# attribute [numthreads]

## Description

Specifies the size of the thread group a compute shader.

## Signature

<pre>
[<a href="/stdlib-reference/attributes/numthreads">numthreads</a>(<a href="/stdlib-reference/attributes/numthreads#decl-x" class="code_param">x</a> : <span class="code_keyword">int</span>, <a href="/stdlib-reference/attributes/numthreads#decl-y" class="code_param">y</a> : <span class="code_keyword">int</span>, <a href="/stdlib-reference/attributes/numthreads#decl-z" class="code_param">z</a> : <span class="code_keyword">int</span>)]
</pre>

## Parameters

#### x  : int {#decl-x}
The number of threads in the x dimension of a thread group.

#### y  : int = 1 {#decl-y}
The number of threads in the y dimension of a thread group.

#### z  : int = 1 {#decl-z}
The number of threads in the z dimension of a thread group.


