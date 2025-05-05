---
layout: stdlib-reference
---

# attribute [nonmutating]

## Description

Marks a function or a property and subscript accessor as non-mutating. A non-mutating function receives the implicit <span class='code'>this</span> parameter
as an <span class='code'><span class="code_keyword">in</span></span> parameter, so mutations to members accessed from <span class='code'>this</span> argument will be prohibited by the compiler.

## Signature

<pre>
[<a href="nonmutating.html">nonmutating</a>]
</pre>

## Remarks


Member functions of a type are non-mutating by default, so this attribute is not necessary in most cases.
However, the <span class='code'><span class="code_keyword">set</span></span> accessor of a property or subscript is mutating by default, and you can use <span class='code'>[<a href="nonmutating.html">nonmutating</a>]</span> to mark it as non-mutating.
For example:
```csharp
struct S
{
   int* ptr_x;
   property x : int
   {
     get { return *ptr_x; }

     [nonmutating]
     set { *ptr_x = value; }
   }
}
uniform S s; // `s` is not mutable.
void test() { s.x = 1; } // OK, because the `set` accessor is non-mutating.
```
In the above example, the property <span class='code'>x</span> reads and writes to a memory location pointed to by <span class='code'>ptr_x</span>. Therefore, the <span class='code'><span class="code_keyword">set</span></span> accessor is not actually
modifying any field of <span class='code'>S</span>, and does not need to take <span class='code'>this</span> as an <span class='code'><span class="code_keyword">inout</span></span> parameter. Using <span class='code'>[<a href="nonmutating.html">nonmutating</a>]</span> here on the set accessor will allow
it to be called with a non-mutating value of <span class='code'>S</span>.

## See also

<span class='code'>[<a href="mutating.html">mutating</a>]</span>.


