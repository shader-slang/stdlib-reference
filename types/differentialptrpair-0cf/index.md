---
layout: stdlib-reference
---

# struct DifferentialPtrPair\<T\>

*Conforms to:* [IDifferentiablePtrType](/stdlib-reference/interfaces/idifferentiableptrtype-01fi/index)

> #### Experimental Feature
> The feature described in this page is marked as experimental, and may be subject to change in future releases.
> Users are advised that any code that depend on this feature may not be compilable by future versions of the compiler.

## Description

<span class='code'><a href="/stdlib-reference/types/differentialptrpair-0cf/index" class="code_type">DifferentialPtrPair</a>&lt;<a href="/stdlib-reference/types/differentialptrpair-0cf/index#typeparam-T" class="code_type">T</a>&gt;</span> is a built-in type that carries both the original and differential of a
pointer-like object.
<span class='code'><a href="/stdlib-reference/types/differentialptrpair-0cf/index#typeparam-T" class="code_type">T</a></span> must conform to <span class='code'><a href="/stdlib-reference/interfaces/idifferentiableptrtype-01fi/index" class="code_type">IDifferentiablePtrType</a></span>

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

#### T: [IDifferentiablePtrType](/stdlib-reference/interfaces/idifferentiableptrtype-01fi/index) {#typeparam-T}

## Properties

#### [d](/stdlib-reference/types/differentialptrpair-0cf/d) {#decl-d}
#### [p](/stdlib-reference/types/differentialptrpair-0cf/p) {#decl-p}
#### [v](/stdlib-reference/types/differentialptrpair-0cf/v) {#decl-v}

## Methods

* [init](/stdlib-reference/types/differentialptrpair-0cf/init)

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



