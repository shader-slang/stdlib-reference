---
layout: stdlib-reference
---

# typealias CANDIDATE\_TYPE

## Description

Type of candidate hit that a <span class='code'><a href="/stdlib-reference/types/RayQuery/index" class="code_type">RayQuery</a></span> is pausing at.
A <span class='code'><a href="/stdlib-reference/types/RayQuery/index" class="code_type">RayQuery</a></span> can automatically commit hits with opaque triangles,
but yields to user code for other hits to allow them to be
dismissed or committed.


## Signature

<pre>
<span class='code_keyword'>typealias</span> <a href="/stdlib-reference/types/CANDIDATE_TYPE" class="code_type">CANDIDATE_TYPE</a> = <span class="code_keyword">uint</span>;
</pre>

