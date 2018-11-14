# Transform

* We can transform (change) any element's position, angle, size, skew and so on.

* Translate:

We can use tarnsform-translate to chnage the position of the element relative to its actual position.

example: Below css code will move all the divs in the page horizantally 20px and vertically 30px relative to its actual position.

.div {
    transform: translate(20px, 30px);
}

Note: We can use only one directional translation as below:

transform: translateX(20px); // horizantally
transform: translateY(20px); // Vertically

* Rotate: We can rotate an element in any direction using transform property.

.div {
    transform: rotate(30deg);
}

Above selector will rotate all the divs by 30 deg.

Note: for rotate we need always append 'deg' after the number.

* Rotation can happen on any axis (X, Y, Z), like: 

    rotateX(30deg) - for x-axis
    rotateY(30deg) - for y-axis
    rotateZ(30deg) - for z-axis

* Skew: We can rotate opposite sides of any element to a particular degree using SKEW.

* Skew can happen in x, y direction.

* Values of skew should also follow by 'deg'

Example:

div {
    tranform: skew(30deg);
}

Above selector, will rotate all the div's parallel sides to 30 deg.

SkewX(30deg)  - X-axis sides will be rotated
SkewY(30deg)  - Y-axis sides will be rotated

* Scale: This transformation will scale the element to number of times.

* Value of scale is just a number.

div {
    transform: scale(2);
}

Above selector will double size of all the divs in the page

* We can also scale only on particular direction:

scaleX(2) - will scale the element into double the size on x-axis direction.

scaleY(2) - will scale the element into double the size on y-axis direction.
