# Margin & Padding

* In general when we have more than one elements on the page, they will be rendered without any space between them (excluding elements like <p>, <h1> which have spacing by default)

* Also, if any element has text/content inside it, it will be touching the border (which means no space between border and content)

* We can control above 2 situations using Margin and Padding

* Margin is used to have space between 2 elements or space around the element.

* use 'margin' property to set margins, with values as px or % or auto

example: margin: 10px; (this will add 10px space around the element, so any neighbouring element will be 10px away from the current element)

* We can also set margin in specific direction, instead of all 4 directions using:
    1. margin-top
    2. margin-right
    3. margin-bottom
    4. margin-left

* There is also short hand notation for combining all above 4, like below:
    margin: <top> <right> <bottom> <left>;
    margin: 10px 20px 10px 20px;

* We have another shorcut if we have top, bottom as same and left, right as same, as below:
    margin: <top-bottom> <left-right>;
    margin: 10px 20px;

## Padding

* Padding is used to have space between border and content of the element.

* use 'padding' property to set paddings, with values as px or % or auto

example: padding: 10px; (this will add 10px space within the element, so content will not touch the boder in all directions)

* We can also set padding in specific direction, instead of all 4 directions using:
    1. padding-top
    2. padding-right
    3. padding-bottom
    4. padding-left

* There is also short hand notation for combining all above 4, like below:
    padding: <top> <right> <bottom> <left>;
    padding: 10px 20px 10px 20px;

* We have another shorcut if we have top, bottom as same and left, right as same, as below:
    padding: <top-bottom> <left-right>;
    padding: 10px 20px;

Note: Every element in HTML will generally represent a box, which comprises of elements height-width, padding, border and margin.

Note: Elements border, padding will increase the size of the element while rendering. Where as margin will not do that.