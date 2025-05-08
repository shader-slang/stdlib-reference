---
layout: stdlib-reference
---

# interface IInteger

*Inherits from:* [IArithmetic](../iarithmetic-01/index.html), [ILogical](../ilogical-01/index.html)

## Description

Represents a type that can be used for integer arithmetic operations.

Implemented by builtin scalar types: <span class='code'><span class="code_keyword">int</span></span>, <span class='code'><span class="code_keyword">uint</span></span>, <span class='code'>int64_t</span>, <span class='code'>uint64_t</span>, <span class='code'>int8_t</span>, <span class='code'>uint8_t</span>, <span class='code'>int16_t</span>, <span class='code'>uint16_t</span>.

Also implemented by <span class='code'><a href="../../types/vector/index.html" class="code_type">vector</a>&lt;T, N&gt;</span> where <span class='code'>T</span> is one of the above scalar types.


## Methods

* [toInt](toint-2)
* [toInt64](toint64-2)
* [toUInt](touint-23)
* [toUInt64](touint64-23)
* [init](init)

## Remarks

This interface can be used to define generic functions that work with integer-like types. See example below.

## Example

The following code defines a generic function that computes <span class='code'>a*b+1</span>, where <span class='code'>a</span>, <span class='code'>b</span> can be any integer scalar or vector types.
```csharp
T compute<T:IInteger>(T a, T b)
{
    return a * b + T(1);
}

RWStructuredBuffer<int> outputBuffer;

[numthreads(1,1,1)]
void test()
{
    int a = 2;
    int b = 3;
    outputBuffer[0] = compute(a, b); // result = 2*3 + 1 = 7

    int16_t2 a2 = int16_t2(2, 3);
    int16_t2 b2 = int16_t2(4, 5);
    // result2 = int16_t2(2*4 + 1, 3*5 + 1) = int16_t2(9, 16)
    int16_t2 result2 = compute<int16_t2>(a2, b2);
    outputBuffer[1] = result2.x;
}
```



<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

init <init>
toInt <toint-2>
toInt64 <toint64-2>
toUInt <touint-23>
toUInt64 <touint64-23>
```
RTD-TOC-END -->
