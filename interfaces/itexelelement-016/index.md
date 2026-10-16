---
layout: stdlib-reference
---

# interface ITexelElement

## Description

Represents types that can be used as public texture type arguments.

A texel element can be a concrete data type such as <span class='code'>float4</span>, or a storage
format descriptor such as <span class='code'><a href="../../types/rgba16f-01236/index.html" class="code_type">RGBA16F</a></span>. <span class='code'>DataType</span> names the value type that
texture operations read or write, while <span class='code'><a href="format.html" class="code_var">format</a></span> names the storage format.

<span class='code'><a href="index.html" class="code_type">ITexelElement</a></span> intentionally does not inherit from <span class='code'><a href="../itexeldata-016/index.html" class="code_type">ITexelData</a></span>: the public
type argument and the value payload are separate concepts. Plain data types
implement both interfaces, while named storage formats implement this
interface and point <span class='code'>DataType</span> at their payload type.


## Associated types

#### _DataType

The complete payload type, including any resource format modifiers. 

## Fields

####  <a id="decl-format"></a>[format](format.html) : int

## Methods

* [init](init)


<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

format <format>
init <init>
```
RTD-TOC-END -->
