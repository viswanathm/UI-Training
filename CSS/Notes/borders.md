# Borders

* We can set borders for any element using 'border' CSS property

* Its value can be px or %

* border will have many sub properties with which we can control border size, color, style, direction of border and so on

* 'border-style' property is compulsory for rendering a border on any element. And its values can be:
    1. solid
    2. dashed
    3. dotted
    4. double

* 'border-width' property will get a default value of 1px. But we can change to any other value:
    border-width: 2px;

* 'border-color' property will get a default value of black. We can change to any other value:
    border-color: red;

* There is a short hand notation of above 3 properties, we can set all of them in single CSS property called 'border'

    border: 1px solid red;

* When we set 'border', we get border in all 4 sides. But we control or set them only in required sides.

* For setting border on a specific side, add a suffix to the border as following:
    1. top border --> border-top
    2. right border --> border-right
    3. bottom border --> border-bottom
    4. left border --> border-left

* we can suffix other properties like style, size, color to above directional properties like:
    border-top-color,
    border-right-style,
    border-right-width and so on...

* We can also set border-radius on an element, which will set rounded corners for the element. values of this property can be px or %.
    border-radius: 10px;
    border-radius: 50%; (Note: this will make the element from box to circle)