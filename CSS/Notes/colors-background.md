# color

* By default browser renders HTML elements with black font

* in CSS when we set 'color' property, it will change the font color to user given color.

* Values for 'color' property can be color name or Hex code of color (#000000) or RGB

Example: Following CSS selector with color property will set red font color to all paragraph elements

p {
    color: red;
}


# Background

* In HTML by default white color background is rendered by the browser

* Using 'background' css property we can change the background color or set a background image and adjust its size, position, repeat and so on.

* We can directly mention color or image to 'background' css property, like below:

    background: red;
         --> This will set background color to red

    background: url('https://abc/512/1-512.png');
        --> This will set a background image to the element

* Instead we can also set both of the on same element when we use seperate CSS props for color and image

## background-color
* for color use background use 'background-color'
* values can be color name or color code

## background-image

* for setting a background image use 'background-image'
* value should be: url('<location of the file>')
* When size of the element and background image are same, then we get background image as expected. But, if both of them have different sizes, either bacgkround image will repeat till it fills the entire element if element is bigger than image (or) you will see a portion of image if image is bigger than element.
* we can control repeatitions, size and position using following CSS properties.

## background-repeat

* We can control repeatitions of backgorund image with peoperty called 'background-repeat'
* Some of most commonly used values of this property can be:
    1. repeat
    2. no-repeat
    3. repeat-x
    4. repeat-y

## background-size

* If we image size is smaller or bigger than the element, then we need to set background size using 'background-size' CSS property

* Some most commonly used values for this property are:
    1. cover
    2. contain
    3. auto

## background-position

* When there are no repetitions of background image, we can set background postion in 2 directions, horizantal and vertical

* use 'background-position-x' to set horizantal position
with values: 
    1. left
    2. center
    3. right

* use 'background-position-y' to set vertical position
with values: 
    1. top
    2. center
    3. bottom
