---
layout: stdlib-reference
---

# struct Optional\<T\>

## Description

<span class='code'><a href="index.html" class="code_type">Optional</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;</span> is a type with one extra value than <span class='code'><a href="index.html#typeparam-T" class="code_type">T</a></span>, this extra value is
used to represent a "missing" or "invalid" <span class='code'><a href="index.html#typeparam-T" class="code_type">T</a></span>. This extra value is called
<span class='code'>none</span>.

<span class='code'>none</span> can be compared against with the operators <span class='code'>==</span> or <span class='code'>!=</span>.

An <span class='code'><a href="index.html" class="code_type">Optional</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;</span> value can also be implicitly or explicitly constructed from
a value of type <span class='code'><a href="index.html#typeparam-T" class="code_type">T</a></span>

<span class='code'><a href="index.html" class="code_type">Optional</a>&lt;<a href="index.html#typeparam-T" class="code_type">T</a>&gt;</span> values can be deconstructed with <span class='code'>if(let myT=myOptionalT)...</span>
where this branch will only be taken if <span class='code'>myOptionalT</span> contains a value
of type <span class='code'><a href="index.html#typeparam-T" class="code_type">T</a></span> (to be put into scope as <span class='code'>myT</span>).


## Generic Parameters

####  <a id="typeparam-T"></a>T

## Properties

####  <a id="decl-hasValue"></a>[hasValue](hasvalue-3.html)
Return <span class='code'>true</span> iff this <span class='code'><a href="index.html" class="code_type">Optional</a></span> contains a value of type <span class='code'><a href="index.html#typeparam-T" class="code_type">T</a></span>

####  <a id="decl-value"></a>[value](value.html)
If this <span class='code'><a href="index.html" class="code_type">Optional</a></span> contains a value of type <span class='code'><a href="index.html#typeparam-T" class="code_type">T</a></span> return that.


## Methods

* [init](init)


<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

hasValue <hasvalue-3>
init <init>
value <value>
```
RTD-TOC-END -->
