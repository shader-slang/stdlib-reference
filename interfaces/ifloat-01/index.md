---
layout: stdlib-reference
---

# interface IFloat

*Inherits from:* [IArithmetic](../iarithmetic-01/index.html), [IDifferentiable](../idifferentiable-01/index.html)

## Description

Represents a type that can be used for floating point arithmetic operations.

Implemented by builtin scalar types: <span class='code'><span class="code_keyword">float</span></span>, <span class='code'><span class="code_keyword">half</span></span>, <span class='code'><span class="code_keyword">double</span></span>.

Also implemented by <span class='code'><a href="../../types/vector/index.html" class="code_type">vector</a>&lt;T, N&gt;</span> where <span class='code'>T</span> is one of the above scalar types.


## Methods

* [toFloat](tofloat-2)
* [add](add)
* [sub](sub)
* [mul](mul)
* [div](div)
* [mod](mod)
* [neg](neg)
* [init](init)
* [scale](scale)

## Remarks

This interface can be used to define generic functions that work with floating-point-like types. See example below.

## Example

The following code defines a generic function that computes <span class='code'>a*b+1</span>, where <span class='code'>a</span>, <span class='code'>b</span> can be any floating point scalar or vector types.
```csharp
T compute<T:IFloat>(T a, T b)
{
    return a * b + T(1.0f);
}

RWStructuredBuffer<float> outputBuffer;

[numthreads(1,1,1)]
void test()
{
    float a = 2.0;
    float b = 3.0;
    outputBuffer[0] = compute(a, b); // result = 2.0*3.0 + 1.0 = 7.0

    half2 a2 = half2(2.0h, 3.0h);
    half2 b2 = half2(4.0h, 5.0h);
    // result2 = half2(2*4 + 1, 3*5 + 1) = half2(9, 16)
    half2 result2 = compute(a2, b2);
    outputBuffer[1] = result2.x;
}
```



<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

add <add>
div <div>
init <init>
mod <mod>
mul <mul>
neg <neg>
scale <scale>
sub <sub>
toFloat <tofloat-2>
```
RTD-TOC-END -->
