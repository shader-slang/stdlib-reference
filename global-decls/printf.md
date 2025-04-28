---
layout: stdlib-reference
---

# printf

## Description

Print a message to the debug output.



## Signature 

<pre>
<span class="code_keyword">void</span> <a href="/stdlib-reference/global-decls/printf">printf</a>&lt;<span class="code_keyword">each</span> <a href="/stdlib-reference/global-decls/printf#typeparam-T" class="code_type">T</a>&gt;(
    <a href="/stdlib-reference/types/nativestring-06/index" class="code_type">NativeString</a> <a href="/stdlib-reference/global-decls/printf#decl-format" class="code_param">format</a>,
    <a href="/stdlib-reference/global-decls/printf#typeparam-T" class="code_type">T</a> <a href="/stdlib-reference/global-decls/printf#decl-args" class="code_param">args</a>);

</pre>

## Generic Parameters

#### T {#typeparam-T}
The variadic type pack parameter for the arguments to be printed.


## Parameters

#### format  : [NativeString](/stdlib-reference/types/nativestring-06/index) {#decl-format}
The format string.

#### args  : [T](/stdlib-reference/global-decls/printf#typeparam-T) {#decl-args}
(optional) The arguments to be printed.


## Remarks
The function maps to <span class='code'><a href="/stdlib-reference/global-decls/printf">printf</a></span> for HLSL, CPU and CUDA targets, and maps to <span class='code'>OpDebugPrintf</span> for SPIR-V target,
and maps to <span class='code'>debugPrintfEXT</span> for GLSL target. Depending on the target and execution environment, the function may have
no effect.

## Example

```cpp
void test(int x, float y)
{
    printf("hello world!\n");
    printf(R"(x = "%d", y = "%f")", x, y);
}
```


## Availability and Requirements

Defined for the following targets:

#### hlsl
Available in all stages.

#### glsl
Available in all stages.

#### cpp
Available in all stages.

#### cuda
Available in all stages.

#### spirv
Available in all stages.

Requires capability: `SPV_KHR_non_semantic_info`.
#### slangvm
Available in all stages.



