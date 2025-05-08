---
layout: stdlib-reference
---

# struct RayDesc

## Description

Describes a ray for traversal through an acceleration structure.


## Fields

####  <a id="decl-Direction"></a>[Direction](direction-0.html) : [vector](../vector/index.html)\<float, 3\>
Normalized direction vector of the ray in world space.

####  <a id="decl-Origin"></a>[Origin](origin-0.html) : [vector](../vector/index.html)\<float, 3\>
Starting point of the ray in world space.

####  <a id="decl-TMax"></a>[TMax](tmax-01.html) : float
Maximum distance along the ray to consider intersections.

####  <a id="decl-TMin"></a>[TMin](tmin-01.html) : float
Minimum distance along the ray to consider intersections.


## Methods

* init


<!-- RTD-TOC-START
```{toctree}
:titlesonly:
:hidden:

Direction <direction-0>
Origin <origin-0>
TMax <tmax-01>
TMin <tmin-01>
```
RTD-TOC-END -->
