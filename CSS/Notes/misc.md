* Opacity:
    * This CSS property is used to make an element transparent. 
    
    * Values for this property will range from 0 to 1 (0, 0.1, 0.2, ....., 1).
    
    * where 0 is completely transparent.
    
    * Where 1 is completely opaque.

    Note: When we apply opacity on any element, even the content inside it will become transparent. To avoid this use background-color: rgba(0,0,0,0.5) - we get a black box with (0.5) 50% transparency.

* filter
    * We can apply this filter property to images or any other element.

    * filters will change the color of the element.

    * This is similar to filters we see in mobiles while clicking pictures.

    * some possible values for filters are:
        1. grayscale()
        2. brigtness(<value>). Value: 0% -100%
        3. contrast(<value>). Value: 0% -100%
        4. sepia(<value>). Value: 0% -100%

* Text-decoration
    * This property is used to change the text decoration like adding underline, overline, strike and so on.

    * When we set text-decoration as 'none' to remove all the above decorations.

    Note: we can use this to remove underline for <a>

* text-transform
    * We use this property to change the alphabet casing of the text inside the element.

    * Different values are:
        1. capitalize (first letter of every word will be capital)
        2. uppercase (All letter will be capital)
        3. lowercase (All letter will be small)

* text-align
    * We can align the text inside element, horizantally at left, right and center using this property.

    Note: Width of the content should be less than container size.

* Cursor:
    * we can use this property to change the cursor.

    * Different values are: pointer, cross-hair, not-allowed and so on.

* z-index
    * When we have positioned elements or when we tranform the elements, we might come across situations where elements can be stacked or overlapped.

    * In such cases, we we want a specific element to come above the other, we need to use z-index property

    * By default all elements will have 0 z-index, but we can reduce or increase the value

    * More the z-index, more it will come up (more visible).

    Note: We can apply z-index only when the element is positioned.

* float:
    * We can use float property to align the element in a different place.

    * It can generally have 2 values, left or right.


Note: when we set margin as below: element will be aligned horizantally center. Vertical margin can be anything, horizantal margin should be auto

maring: 0px auto;