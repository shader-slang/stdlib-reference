---
layout: stdlib-reference
---

# CoopVec\<T, N:int\>\.lessThan

## Description

Compares two cooperative vectors lexicographically.



## Signature 

<pre>
<span class="code_keyword">bool</span> <a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>:<span class="code_keyword">int</span>&gt;.<a href="lessthan-4.html">lessThan</a>(<a href="index.html" class="code_type">CoopVec</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="index.html#decl-N" class="code_var">N</a>&gt; <a href="lessthan-4.html#decl-other" class="code_param">other</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Parameters

####  <a id="decl-other"></a>other  : [CoopVec](index.html)\<[T](index.html#typeparam-T), [N](index.html#decl-N)\>
The cooperative vector to compare against.


## Return value
True if this vector is lexicographically less than the other vector.

## Remarks
This function exists only to conform to IComparable. For cooperative vectors,
lexicographical comparison has limited practical use since the vectors are meant for
parallel computation rather than ordering.


