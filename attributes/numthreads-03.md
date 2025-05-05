---
layout: stdlib-reference
---

# attribute [NumThreads]

## Description

Specifies the size of the thread group a compute shader.

## Signature

<pre>
[<a href="numthreads-03.html">NumThreads</a>(<a href="numthreads-03.html#decl-x" class="code_param">x</a> : <span class="code_keyword">int</span>, <a href="numthreads-03.html#decl-y" class="code_param">y</a> : <span class="code_keyword">int</span>, <a href="numthreads-03.html#decl-z" class="code_param">z</a> : <span class="code_keyword">int</span>)]
</pre>

## Parameters

####  <a id="decl-x"></a>x  : int
The number of threads in the x dimension of a thread group.

####  <a id="decl-y"></a>y  : int = 1
The number of threads in the y dimension of a thread group.

####  <a id="decl-z"></a>z  : int = 1
The number of threads in the z dimension of a thread group.


