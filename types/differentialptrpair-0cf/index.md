---
layout: stdlib-reference
---

# struct DifferentialPtrPair\<T\>

*Conforms to:* [IDifferentiablePtrType](../../interfaces/idifferentiableptrtype-01fi/index)

> #### Experimental Feature
> The feature described in this page is marked as experimental, and may be subject to change in future releases.
> Users are advised that any code that depend on this feature may not be compilable by future versions of the compiler.

## Description

<span class='code'><a href="index.html" class="code_type">DifferentialPtrPair</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;</span> is a built-in type that carries both the original and differential of a
pointer-like object.
<span class='code'><a href="index.html#typeparam-T" class="code_type">T</a></span> must conform to <span class='code'><a href="../../interfaces/idifferentiableptrtype-01fi/index.html" class="code_type">IDifferentiablePtrType</a></span>

It is defined as follows:
```csharp
struct DifferentialPtrPair<T : IDifferentiablePtrType> : IDifferentiablePtrType
{
    typealias Differential = DifferentialPtrPair<T.Differential>;
    property T p {get;}
    property T.Differential d {get;}
}
```

## Generic Parameters

####  <a id="typeparam-T"></a>T: [IDifferentiablePtrType](../../interfaces/idifferentiableptrtype-01fi/index)

## m_currentPage->path

####  <a id="decl-d"></a>[d](d)
####  <a id="decl-p"></a>[p](p)
####  <a id="decl-v"></a>[v](v)

## Methods

* [init](init)

## Remarks


Differential ptr pairs can be created via constructor.
```csharp
struct DPtrFloat : IDifferentialPtrType 
{ 
    typealias Differential = DPtrFloat;
    float* ptr;
};

DifferentialPtrPair<DPtrFloat> dpa = 
           DifferentialPtrPair<float>({&outputBuffer[0]}, {&outputBuffer[1]});
```
Note that derivative ptr pairs are used to pass derivatives into and out of auto-diff functions.
See documentation on <span class='code'>fwd_diff</span> and <span class='code'>bwd_diff</span> operators for more information.




<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

Differential <differential-0>
DifferentialElementType <differentialelementtype-0cj>
d <d>
init <init>
p <p>
v <v>
```
RTD-TOC-END -->
