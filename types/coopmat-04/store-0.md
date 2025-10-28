---
layout: stdlib-reference
---

# linalg::CoopMat\<T, MemoryScope S, int M, int N, linalg\.CoopMatMatrixUse R\>\.Store

## Description





## Signature 

<pre>
/// Requires Capability Set 1:
<span class="code_keyword">void</span> linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, MemoryScope <a href="index.html#decl-S" class="code_var">S</a>, <span class="code_keyword">int</span> <a href="index.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;.<a href="store-0.html">Store</a>&lt;linalg.<a href="../coopmatmatrixlayout-047d/index.html" class="code_type">CoopMatMatrixLayout</a>matrixLayout&gt;(
    <a href="../rwbyteaddressbuffer-0126d/index.html" class="code_type">RWByteAddressBuffer</a> <a href="store-0.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-stride" class="code_param">stride</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, MemoryScope <a href="index.html#decl-S" class="code_var">S</a>, <span class="code_keyword">int</span> <a href="index.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;.<a href="store-0.html">Store</a>&lt;linalg.<a href="../coopmatmatrixlayout-047d/index.html" class="code_type">CoopMatMatrixLayout</a>matrixLayout&gt;(
    <a href="../rwstructuredbuffer-012c/index.html" class="code_type">RWStructuredBuffer</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="../defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt; <a href="store-0.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-stride" class="code_param">stride</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, MemoryScope <a href="index.html#decl-S" class="code_var">S</a>, <span class="code_keyword">int</span> <a href="index.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;.<a href="store-0.html">Store</a>&lt;linalg.<a href="../coopmatmatrixlayout-047d/index.html" class="code_type">CoopMatMatrixLayout</a>matrixLayout&gt;(
    <a href="../ptr-0/index.html" class="code_type">Ptr</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, Access.ReadWrite, AddressSpace.Device&gt; <a href="store-0.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-stride" class="code_param">stride</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, MemoryScope <a href="index.html#decl-S" class="code_var">S</a>, <span class="code_keyword">int</span> <a href="index.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;.<a href="store-0.html">Store</a>&lt;linalg.<a href="../coopmatmatrixlayout-047d/index.html" class="code_type">CoopMatMatrixLayout</a>matrixLayout, <span class="code_keyword">int</span> V&gt;(
    <a href="index.html#typeparam-T" class="code_type">T</a>[V] <a href="store-0.html#decl-data" class="code_param">data</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-stride" class="code_param">stride</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, MemoryScope <a href="index.html#decl-S" class="code_var">S</a>, <span class="code_keyword">int</span> <a href="index.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;.<a href="store-0.html">Store</a>&lt;linalg.<a href="../coopmatmatrixlayout-047d/index.html" class="code_type">CoopMatMatrixLayout</a>matrixLayout, U, <span class="code_keyword">int</span> V&gt;(
    <a href="store-0.html#typeparam-U" class="code_type">U</a>[<a href="store-0.html#decl-V" class="code_var">V</a>] <a href="store-0.html#decl-data" class="code_param">data</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-stride" class="code_param">stride</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 1:
<span class="code_keyword">void</span> linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, MemoryScope <a href="index.html#decl-S" class="code_var">S</a>, <span class="code_keyword">int</span> <a href="index.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;.<a href="store-0.html">Store</a>&lt;linalg.<a href="../coopmatmatrixlayout-047d/index.html" class="code_type">CoopMatMatrixLayout</a>matrixLayout, U, <span class="code_keyword">int</span> V, <span class="code_keyword">int</span> L&gt;(
    <a href="../vector/index.html" class="code_type">vector</a>&lt;<a href="store-0.html#typeparam-U" class="code_type">U</a>, <a href="store-0.html#decl-L" class="code_var">L</a>&gt;[V] <a href="store-0.html#decl-data" class="code_param">data</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-element" class="code_param">element</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-stride" class="code_param">stride</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<span class="code_keyword">void</span> linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, MemoryScope <a href="index.html#decl-S" class="code_var">S</a>, <span class="code_keyword">int</span> <a href="index.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;.<a href="store-0.html">Store</a>&lt;<span class="code_keyword">uint</span> <a href="store-0.html#decl-Dim" class="code_var">Dim</a>, linalg.<a href="../coopmatclampmode-047c/index.html" class="code_type">CoopMatClampMode</a>ClampMode&gt;(
    <a href="../rwbyteaddressbuffer-0126d/index.html" class="code_type">RWByteAddressBuffer</a> <a href="store-0.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-element" class="code_param">element</a>,
    linalg.<a href="../tensorlayout-06/index.html" class="code_type">TensorLayout</a>&lt;<a href="store-0.html#decl-Dim" class="code_var">Dim</a>, <a href="store-0.html#decl-ClampMode" class="code_var">ClampMode</a>&gt; <a href="store-0.html#decl-tensorLayout" class="code_param">tensorLayout</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<span class="code_keyword">void</span> linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, MemoryScope <a href="index.html#decl-S" class="code_var">S</a>, <span class="code_keyword">int</span> <a href="index.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;.<a href="store-0.html">Store</a>&lt;<span class="code_keyword">uint</span> <a href="store-0.html#decl-Dim" class="code_var">Dim</a>, linalg.<a href="../coopmatclampmode-047c/index.html" class="code_type">CoopMatClampMode</a>ClampMode&gt;(
    <a href="../rwstructuredbuffer-012c/index.html" class="code_type">RWStructuredBuffer</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="../defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt; <a href="store-0.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-element" class="code_param">element</a>,
    linalg.<a href="../tensorlayout-06/index.html" class="code_type">TensorLayout</a>&lt;<a href="store-0.html#decl-Dim" class="code_var">Dim</a>, <a href="store-0.html#decl-ClampMode" class="code_var">ClampMode</a>&gt; <a href="store-0.html#decl-tensorLayout" class="code_param">tensorLayout</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<span class="code_keyword">void</span> linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, MemoryScope <a href="index.html#decl-S" class="code_var">S</a>, <span class="code_keyword">int</span> <a href="index.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;.<a href="store-0.html">Store</a>&lt;<span class="code_keyword">uint</span> <a href="store-0.html#decl-Dim" class="code_var">Dim</a>, linalg.<a href="../coopmatclampmode-047c/index.html" class="code_type">CoopMatClampMode</a>ClampMode, <span class="code_keyword">uint</span> DimView, <span class="code_keyword">bool</span> HasDimensions, <span class="code_keyword">uint</span> p0, <span class="code_keyword">uint</span> p1, <span class="code_keyword">uint</span> p2, <span class="code_keyword">uint</span> p3, <span class="code_keyword">uint</span> p4&gt;(
    <a href="../rwbyteaddressbuffer-0126d/index.html" class="code_type">RWByteAddressBuffer</a> <a href="store-0.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-element" class="code_param">element</a>,
    linalg.<a href="../tensorlayout-06/index.html" class="code_type">TensorLayout</a>&lt;<a href="store-0.html#decl-Dim" class="code_var">Dim</a>, <a href="store-0.html#decl-ClampMode" class="code_var">ClampMode</a>&gt; <a href="store-0.html#decl-tensorLayout" class="code_param">tensorLayout</a>,
    linalg.<a href="../tensorview-06/index.html" class="code_type">TensorView</a>&lt;<a href="store-0.html#decl-DimView" class="code_var">DimView</a>, <a href="store-0.html#decl-HasDimensions" class="code_var">HasDimensions</a>, <a href="store-0.html#decl-p0" class="code_var">p0</a>, <a href="store-0.html#decl-p1" class="code_var">p1</a>, <a href="store-0.html#decl-p2" class="code_var">p2</a>, <a href="store-0.html#decl-p3" class="code_var">p3</a>, <a href="store-0.html#decl-p4" class="code_var">p4</a>&gt; <a href="store-0.html#decl-tensorView" class="code_param">tensorView</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

/// Requires Capability Set 2:
<span class="code_keyword">void</span> linalg::<a href="index.html" class="code_type">CoopMat</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, MemoryScope <a href="index.html#decl-S" class="code_var">S</a>, <span class="code_keyword">int</span> <a href="index.html#decl-M" class="code_var">M</a>, <span class="code_keyword">int</span> <a href="index.html#decl-N" class="code_var">N</a>, linalg.<a href="../coopmatmatrixuse-047d/index.html" class="code_type">CoopMatMatrixUse</a>R&gt;.<a href="store-0.html">Store</a>&lt;<span class="code_keyword">uint</span> <a href="store-0.html#decl-Dim" class="code_var">Dim</a>, linalg.<a href="../coopmatclampmode-047c/index.html" class="code_type">CoopMatClampMode</a>ClampMode, <span class="code_keyword">uint</span> DimView, <span class="code_keyword">bool</span> HasDimensions, <span class="code_keyword">uint</span> p0, <span class="code_keyword">uint</span> p1, <span class="code_keyword">uint</span> p2, <span class="code_keyword">uint</span> p3, <span class="code_keyword">uint</span> p4&gt;(
    <a href="../rwstructuredbuffer-012c/index.html" class="code_type">RWStructuredBuffer</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>, <a href="../defaultdatalayout-07b/index.html" class="code_type">DefaultDataLayout</a>&gt; <a href="store-0.html#decl-buffer" class="code_param">buffer</a>,
    <span class="code_keyword">uint</span> <a href="store-0.html#decl-element" class="code_param">element</a>,
    linalg.<a href="../tensorlayout-06/index.html" class="code_type">TensorLayout</a>&lt;<a href="store-0.html#decl-Dim" class="code_var">Dim</a>, <a href="store-0.html#decl-ClampMode" class="code_var">ClampMode</a>&gt; <a href="store-0.html#decl-tensorLayout" class="code_param">tensorLayout</a>,
    linalg.<a href="../tensorview-06/index.html" class="code_type">TensorView</a>&lt;<a href="store-0.html#decl-DimView" class="code_var">DimView</a>, <a href="store-0.html#decl-HasDimensions" class="code_var">HasDimensions</a>, <a href="store-0.html#decl-p0" class="code_var">p0</a>, <a href="store-0.html#decl-p1" class="code_var">p1</a>, <a href="store-0.html#decl-p2" class="code_var">p2</a>, <a href="store-0.html#decl-p3" class="code_var">p3</a>, <a href="store-0.html#decl-p4" class="code_var">p4</a>&gt; <a href="store-0.html#decl-tensorView" class="code_param">tensorView</a>)
    <span class='code_keyword'>where</span> <a href="index.html#typeparam-T" class="code_type">T</a> : <a href="../../interfaces/0_builtinarithmetictype-029j/index.html" class="code_type">__BuiltinArithmeticType</a>;

</pre>

## Generic Parameters

####  <a id="decl-matrixLayout"></a>matrixLayout  : linalg\.[CoopMatMatrixLayout](../coopmatmatrixlayout-047d/index.html)
####  <a id="decl-V"></a>V  : int
####  <a id="typeparam-U"></a>U
####  <a id="decl-L"></a>L  : int
####  <a id="decl-Dim"></a>Dim  : uint
####  <a id="decl-ClampMode"></a>ClampMode  : linalg\.[CoopMatClampMode](../coopmatclampmode-047c/index.html)
####  <a id="decl-DimView"></a>DimView  : uint
####  <a id="decl-HasDimensions"></a>HasDimensions  : bool
####  <a id="decl-p0"></a>p0  : uint = 5
####  <a id="decl-p1"></a>p1  : uint = 5
####  <a id="decl-p2"></a>p2  : uint = 5
####  <a id="decl-p3"></a>p3  : uint = 5
####  <a id="decl-p4"></a>p4  : uint = 5

## Parameters

####  <a id="decl-buffer"></a>buffer  : [RWByteAddressBuffer](../rwbyteaddressbuffer-0126d/index.html)
####  <a id="decl-element"></a>element  : uint
####  <a id="decl-stride"></a>stride  : uint
####  <a id="decl-buffer"></a>buffer  : [RWStructuredBuffer](../rwstructuredbuffer-012c/index.html)\<[T](../rwstructuredbuffer-012c/index.html#typeparam-T), [DefaultDataLayout](../defaultdatalayout-07b/index.html)\>
####  <a id="decl-buffer"></a>buffer  : [Ptr](../ptr-0/index.html)\<[T](../ptr-0/index.html#typeparam-T), Access\.ReadWrite, AddressSpace\.Device\>
####  <a id="decl-data"></a>data  : [T](index.html#typeparam-T) \[ V \]
####  <a id="decl-data"></a>data  : [U](store-0.html#typeparam-U) \[ [V](store-0.html#decl-V) \]
####  <a id="decl-data"></a>data  : [vector](../vector/index.html)\<U, L\> \[ V \]
####  <a id="decl-tensorLayout"></a>tensorLayout  : linalg\.[TensorLayout](../tensorlayout-06/index.html)\<[Dim](../tensorlayout-06/index.html#decl-Dim), [ClampMode](../tensorlayout-06/index.html#decl-ClampMode)\>
####  <a id="decl-tensorView"></a>tensorView  : linalg\.[TensorView](../tensorview-06/index.html)\<DimView, [HasDimensions](../tensorview-06/index.html#decl-HasDimensions), [p0](../tensorview-06/index.html#decl-p0), [p1](../tensorview-06/index.html#decl-p1), [p2](../tensorview-06/index.html#decl-p2), [p3](../tensorview-06/index.html#decl-p3), [p4](../tensorview-06/index.html#decl-p4)\>

## Availability and Requirements

### Capability Set 1

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixKHR`.

### Capability Set 2

Defined for the following targets:

#### spirv
Available in all stages.

Requires capability: `spvCooperativeMatrixTensorAddressingNV`.


