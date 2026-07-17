---
layout: stdlib-reference
---

# struct String

## Description

Represents a string.
This type is backed by the Slang core runtime (<span class='code'>Slang::<a href="index.html" class="code_type">String</a></span>), which is
available on host CPU targets (e.g. <span class='code'>-target host-cpp</span>) and the LLVM-backed
CPU path (<span class='code'>-emit-cpu-via-llvm</span>). It is explicitly rejected when generating
kernel C++/CUDA output (<span class='code'>-target cpp</span>, <span class='code'>-target cuda</span>, <span class='code'>-target ptx</span>); use
<span class='code'><a href="../nativestring-06/index.html" class="code_type">NativeString</a></span> (a null-terminated <span class='code'><span class="code_keyword">const</span> char*</span>) there instead. On other
GPU/shader targets <span class='code'><a href="index.html" class="code_type">String</a></span> is not a supported value type.


## Properties

####  <a id="decl-length"></a>[length](length.html)
Returns the length of the string.


## Methods

* [init](init)
* [getLength](getlength-3)


<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

getLength <getlength-3>
init <init>
length <length>
```
RTD-TOC-END -->
