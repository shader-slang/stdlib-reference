---
layout: stdlib-reference
---

# struct RayDesc

## Description

Describes a ray for traversal through an acceleration structure.


## Fields

#### [Direction](/stdlib-reference/types/raydesc-03/direction-0) : [vector](/stdlib-reference/types/vector/index)\<float, 3\> {#decl-Direction}
Normalized direction vector of the ray in world space.

#### [Origin](/stdlib-reference/types/raydesc-03/origin-0) : [vector](/stdlib-reference/types/vector/index)\<float, 3\> {#decl-Origin}
Starting point of the ray in world space.

#### [TMax](/stdlib-reference/types/raydesc-03/tmax-01) : float {#decl-TMax}
Maximum distance along the ray to consider intersections.

#### [TMin](/stdlib-reference/types/raydesc-03/tmin-01) : float {#decl-TMin}
Minimum distance along the ray to consider intersections.


