---
layout: stdlib-reference
---

# interface IArray\<T\>

## Description

Represents types that provide a subscript operator so that they can be used like an immutable array.

## Generic Parameters

####  <a id="typeparam-T"></a>T
The element type returned by the subscript operator.


## Methods

* [getCount](getcount-3)
* [subscript](subscript)

## Remarks

This interface is implemented by <span class='code'><a href="../../types/array-0/index.html" class="code_type">Array</a></span>, <span class='code'><a href="../../types/vector/index.html" class="code_type">vector</a></span>, <span class='code'><a href="../../types/matrix/index.html" class="code_type">matrix</a></span>, <span class='code'><a href="../../types/structuredbuffer-0a/index.html" class="code_type">StructuredBuffer</a></span> and <span class='code'><a href="../../types/rwstructuredbuffer-012c/index.html" class="code_type">RWStructuredBuffer</a></span> types.

## Example

The follow example shows how to define a generic function that computes the sum of all elements in an array-like type.
```csharp
T sum<T:IFloat, U:IArray<T>>(U array)
{
    T result = T(0);
    for (int i = 0; i < array.getCount(); i++)
    {
        result = result + array[i];
    }
    return result;
}

RWStructuredBuffer<float> outputBuffer;

[numthreads(1, 1, 1)]
void computeMain(int3 dispatchThreadID : SV_DispatchThreadID)
{
    float arr[3] = { 1.0, 2.0, 3.0 };
    float4 v = float4(1.0, 2.0, 3.0, 4.0);
    float2x2 m = float2x2(1.0, 2.0, 3.0, 4.0);

    outputBuffer[0] = sum(arr);  // 6.0

    // treat `v` as array of `float`.
    outputBuffer[1] = sum(v);    // 10.0

    // treat `m` as array of `float2`.
    float2 innerSum = sum(m);
    outputBuffer[2] = sum(innerSum); // 10.0
}
```



<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

getCount <getcount-3>
subscript <subscript>
```
RTD-TOC-END -->
