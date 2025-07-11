---
layout: stdlib-reference
---

# interface IDifferentiable

## Description

Represents a 'value' type that is differentiable for the purposes of automatic differentiation.

See the auto-diff user guide section for an introduction to
differentiable value types (https://shader-slang.org/slang/user-guide/autodiff.html#differentiable-value-types)

#### Builtin Differentiable Value Types
The following built-in types are differentiable:
- Scalars: <span class='code'><span class="code_keyword">float</span></span>, <span class='code'><span class="code_keyword">double</span></span> and <span class='code'><span class="code_keyword">half</span></span>.
- Vector/Matrix: <span class='code'><a href="../../types/vector/index.html" class="code_type">vector</a></span> and <span class='code'><a href="../../types/matrix/index.html" class="code_type">matrix</a></span> of <span class='code'><span class="code_keyword">float</span></span>, <span class='code'><span class="code_keyword">double</span></span> and <span class='code'><span class="code_keyword">half</span></span> types.
- Arrays: <span class='code'>T[n]</span> is differentiable if <span class='code'>T</span> is differentiable.
- Tuples: <span class='code'><a href="../../types/tuple-0/index.html" class="code_type">Tuple</a>&lt;<span class="code_keyword">each</span> T&gt;</span> is differentiable if <span class='code'>T</span> is differentiable.

The <span class='code'><a href="index.html" class="code_type">IDifferentiable</a></span> interface requires the following definitions (which can be auto-generated by the compiler for most scenarios)
```csharp
interface IDifferentiable
{
    associatedtype Differential : IDifferentiable
        where Differential.Differential == Differential;

    static Differential dzero();

    static Differential dadd(Differential, Differential);
}
```

As defined by the <span class='code'><a href="index.html" class="code_type">IDifferentiable</a></span> interface, a differentiable type must have a
<span class='code'>Differential</span> associated type that stores the derivative of the value.
A further requirement is that the type of the second-order derivative must be the same
<span class='code'>Differential</span> type. In another words, given a type <span class='code'>T</span>, <span class='code'>T.Differential</span> can be different
from <span class='code'>T</span>, but <span class='code'>T.Differential.Differential</span> must equal to <span class='code'>T.Differential</span>.

In addition, a differentiable type must define the <span class='code'>zero</span> value of its derivative,
and how to add two derivative values together. These function are used during reverse-mode
auto-diff, to initialize and accumulate derivatives of the given type.

#### Automatic Fulfillment of <span class='code'><a href="index.html" class="code_type">IDifferentiable</a></span> Requirements
Assume the user has defined the following type:

```csharp
struct MyRay
{
    float3 origin;
    float3 dir;
    int nonDifferentiablePayload;
}
```

The type can be made differentiable by adding <span class='code'><a href="index.html" class="code_type">IDifferentiable</a></span> conformance:
```csharp
struct MyRay : IDifferentiable
{
    float3 origin;
    float3 dir;
    int nonDifferentiablePayload;
}
```

Note that this code does not provide any explicit implementation of the <span class='code'><a href="index.html" class="code_type">IDifferentiable</a></span> requirements. In this case the compiler will automatically synthesize all the requirements. This should provide the desired behavior most of the time. The procedure for synthesizing the interface implementation is as follows:
1. A new type is generated that stores the <span class='code'>Differential</span> of all differentiable fields. This new type itself will conform to the <span class='code'><a href="index.html" class="code_type">IDifferentiable</a></span> interface, and it will be used to satisfy the <span class='code'>Differential</span> associated type requirement.
2. Each differential field will be associated to its corresponding field in the newly synthesized <span class='code'>Differential</span> type.
3. The <span class='code'>zero</span> value of the differential type is made from the <span class='code'>zero</span> value of each field in the differential type.
4. The <span class='code'><a href="dadd.html">dadd</a></span> method invokes the <span class='code'><a href="dadd.html">dadd</a></span> operations for each field whose type conforms to <span class='code'><a href="index.html" class="code_type">IDifferentiable</a></span>.
5. If the synthesized <span class='code'>Differential</span> type contains exactly the same fields as the original type, and the type of each field is the same as the original field type, then the original type itself will be used as the <span class='code'>Differential</span> type instead of creating a new type to satisfy the <span class='code'>Differential</span> associated type requirement. This means that all the synthesized <span class='code'>Differential</span> type use itself to meet its own <span class='code'><a href="index.html" class="code_type">IDifferentiable</a></span> requirements.

#### Manual fulfilment of <span class='code'><a href="index.html" class="code_type">IDifferentiable</a></span> requirements
In rare cases where more control is desired, the user can manually provide the implementation.
To do so, we will first define the <span class='code'>Differential</span> type for <span class='code'>MyRay</span>, and use it to fulfill
the <span class='code'>Differential</span> requirement in <span class='code'>MyRay</span>:
```csharp
struct MyRayDifferential
{
    float3 d_origin;
    float3 d_dir;
}

struct MyRay : IDifferentiable
{
    // Specify that `MyRay.Differential` is `MyRayDifferential`.
    typealias Differential = MyRayDifferential;

    // Specify that the derivative for `origin` will be stored in `MayRayDifferential.d_origin`.
    [DerivativeMember(MayRayDifferential.d_origin)]
    float3 origin;

    // Specify that the derivative for `dir` will be stored in `MayRayDifferential.d_dir`.
    [DerivativeMember(MayRayDifferential.d_dir)]
    float3 dir;

    // This is a non-differentiable field so we don't put any attributes on it.
    int nonDifferentiablePayload;

    // Define zero derivative.
    static MyRayDifferential dzero()
    {
        return {float3(0.0), float3(0.0)};
    }

    // Define the add operation of two derivatives.
    static MyRayDifferential dadd(MyRayDifferential v1, MyRayDifferential v2)
    {
        MyRayDifferential result;
        result.d_origin = v1.d_origin + v2.d_origin;
        result.d_dir = v1.d_dir + v2.d_dir;
        return result;
    }
}
```

Note that for each struct field that is differentiable, we need to use the <span class='code'>[DerivativeMember]</span> attribute to associate it with the
corresponding field in the <span class='code'>Differential</span> type, so the compiler knows how to access the derivative for the field.

However, there is still a missing piece in the above code: we also need to make <span class='code'>MyRayDifferential</span> conform to <span class='code'><a href="index.html" class="code_type">IDifferentiable</a></span> because it is required that the <span class='code'>Differential</span> of a type must itself be <span class='code'>Differential</span>. Again we can use automatic fulfillment by simply adding <span class='code'><a href="index.html" class="code_type">IDifferentiable</a></span> conformance to <span class='code'>MyRayDifferential</span>:
```csharp
struct MyRayDifferential : IDifferentiable
{
    float3 d_origin;
    float3 d_dir;
}
```
In this case, since all fields in <span class='code'>MyRayDifferential</span> are differentiable, and the <span class='code'>Differential</span> of each field is the same as the original type of each field (i.e. <span class='code'>float3.Differential==float3</span> as defined in the core module), the compiler will automatically use the type itself as its own <span class='code'>Differential</span>, making <span class='code'>MyRayDifferential</span> suitable for use as <span class='code'>Differential</span> of <span class='code'>MyRay</span>.

We can also choose to manually implement <span class='code'><a href="index.html" class="code_type">IDifferentiable</a></span> interface for <span class='code'>MyRayDifferential</span> as in the following code:

```csharp
struct MyRayDifferential : IDifferentiable
{
    typealias Differential = MyRayDifferential;

   [DerivativeMember(MyRayDifferential.d_origin)]
   float3 d_origin;

   [DerivativeMember(MyRayDifferential.d_dir)]
   float3 d_dir;

   static MyRayDifferential dzero()
   {
       return {float3(0.0), float3(0.0)};
   }

   static MyRayDifferential dadd(MyRayDifferential v1, MyRayDifferential v2)
   {
       MyRayDifferential result;
       result.d_origin = v1.d_origin + v2.d_origin;
        result.d_dir = v1.d_dir + v2.d_dir;
        return result;
    }
}
```
In this specific case, the automatically generated <span class='code'><a href="index.html" class="code_type">IDifferentiable</a></span>
implementation will be exactly the same as the manually written code listed above.



## Associated types

#### _Differential



Constraints:

  - Differential : IDifferentiable


## Methods

* [dzero](dzero)
* [dadd](dadd)
* [dmul](dmul)


<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

dadd <dadd>
dmul <dmul>
dzero <dzero>
```
RTD-TOC-END -->
