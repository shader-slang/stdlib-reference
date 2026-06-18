---
layout: stdlib-reference
---

# attribute [NoDiscard]

## Description

Marks a function whose return value should not be discarded. When a call to a
function marked with <span class='code'>[<a href="nodiscard-02.html">NoDiscard</a>]</span> is made in a context where its result is
discarded 429496726642949671684294967188 an expression statement, or a <span class='code'>for</span> loop's side-effect expression,
including through transparent wrappers (parentheses) and pass-through operands
(comma, ternary arms, the right-hand side of <span class='code'>&amp;&amp;</span>/<span class='code'>||</span>) 429496726642949671684294967188 the compiler emits an
error. Applying <span class='code'>[<a href="nodiscard-02.html">NoDiscard</a>]</span> to a function that returns <span class='code'><span class="code_keyword">void</span></span> is itself an
error, reported at the declaration, since such a function has no result to discard.

## Signature

<pre>
[<a href="nodiscard-02.html">NoDiscard</a>]
</pre>

## Remarks


This is useful for functions that look like they mutate the object they are called
on, but instead return a result. For example, a member function <span class='code'>load</span> that returns
the loaded value rather than mutating <span class='code'>this</span>:
```
struct MyType
{
   [NoDiscard]
   MyType load() { ... }
}
MyType t;
t.load(); // error: result of '[NoDiscard]' function is discarded.
let loaded = t.load(); // OK
```


