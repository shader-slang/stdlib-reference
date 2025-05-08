---
layout: stdlib-reference
---

# interface \_\_BuiltinArithmeticType

*Inherits from:* \_\_BuiltinType, [IArithmetic](../iarithmetic-01/index.html)

## Description

A type that can be used for arithmetic operations. For defining generic functions that work with builtin scalar arithmetic types only.
Builtin types implementing this interface: <span class='code'><span class="code_keyword">int</span></span>, <span class='code'><span class="code_keyword">uint</span></span>, <span class='code'>int64_t</span>, <span class='code'>uint64_t</span>, <span class='code'>int8_t</span>, <span class='code'>uint8_t</span>, <span class='code'>int16_t</span>, <span class='code'>uint16_t</span>, <span class='code'><span class="code_keyword">float</span></span>, <span class='code'><span class="code_keyword">half</span></span>, <span class='code'><span class="code_keyword">double</span></span>.
To define generic functions that work with both scalar and vector types, use <span class='code'><a href="../iinteger-01/index.html" class="code_type">IInteger</a></span> or <span class='code'><a href="../ifloat-01/index.html" class="code_type">IFloat</a></span> instead.


