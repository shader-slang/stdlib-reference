---
layout: stdlib-reference
---

# attribute [outputcontrolpoints]

## Description

Used on an hull shader entrypoint to declare the number of control points the hull shader will produce per thread.

## Signature

<pre>
[<a href="outputcontrolpoints.html">outputcontrolpoints</a>(<a href="outputcontrolpoints.html#decl-count" class="code_param">count</a> : <span class="code_keyword">int</span>)]
</pre>

## Parameters

####  <a id="decl-count"></a>count  : int
The number of control points the hull shader will produce per thread.


## Remarks

The attribute indicates be the number of times the hull shader function will be executed.


