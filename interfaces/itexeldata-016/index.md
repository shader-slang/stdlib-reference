---
layout: stdlib-reference
---

# interface ITexelData

## Description

Represents scalar or vector data types that can carry texel values.

Texture operations use this payload contract to obtain the scalar element
type and element count of the values they read and write. Texture types retain
their <span class='code'><a href="../itexelelement-016/index.html" class="code_type">ITexelElement</a></span> argument, so format descriptors such as <span class='code'><a href="../../types/rgba16f-01236/index.html" class="code_type">RGBA16F</a></span> can map
to a payload <span class='code'>DataType</span> while carrying a non-zero storage <span class='code'>format</span>.


## Associated types

#### _Element

The unqualified scalar component type used to construct texture operation results. 

## Fields

####  <a id="decl-elementCount"></a>[elementCount](elementcount-7.html) : int

## Methods

* [init](init)


<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

elementCount <elementcount-7>
init <init>
```
RTD-TOC-END -->
