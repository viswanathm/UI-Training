# Display

* Every element that we write in HTML, when rendered by the broswer will have a specific display type. Some elements are 'Block' elements and some are 'inline' elements.

* But in most of the real time scenarios these 2 types are not sufficient, as we run into some problems like: setting width to inline elements and having 2 block level elements side by side.

* Using CSS we can control display type of any element.

* CSS not only provides 'block' and 'inline', but also provides other types like: 
    1. inline-block
    2. none
    3. flex
    and so on

* Examples of block level elements are div, p, tr and so on

* Examples of inline elements are span, td, img and so on

* Now using CSS we can change a div from block to inline as below:
    div {
        display: inline;
    }

Note: After this, div will not have width or height, and it will allow other inline elements to come beside it.

* We can similarly convert span to a block level element and inherit block level element properties to a span.

* Display property of CSS solves other problems like having an element which has both of the properties of inline and block level elements, like: an element with specific height, width and should allow other elements to be beside this element.

* display with value 'inline-block' will make an element have above properties.

* display with value 'none' will hide the element from the viewport.

Note: When we use display: none, element is not only hidden but also place occupied by the element is given to its neighbouring element

Note: An alternative for display none is, 'visibilty: hidden;'. This property also hides the element, but unlike display none it will reserve the place of the element.

* display with value 'table-cell' will make an element behave like a <td>. So that u can make 2 block level elements come side by side.

* Till now we applied display properties for children. If there are more children that needs to have some change in dispplay propety, it is painful job to change each child.

* Instead, we can use display 'FLEX' to the parent, which will by deafult align all the children under it, to come side-by-side.

* Ofcourse we can change rendering of children horizantally or vertically using 'flex-direction', which will start rendering children in different direction.

* values of flex-direction are:
    1. row (default)
    2. row-reverse
    3. column
    4. column-reverse

Note: when we change the flext direction not only alignment is changed, but many other things like order of children and alignment propeties will change.

* If we dont want to change order, but only align children horizantally in a different way, we can use 'justify-content'. Whose values are:

    1. flex-start
    2. flex-end
    3. center
    4. space-between
    5. space-around

* If we dont want to change order, but only  align children vertically in a different way, we can use 'align-items'. Whose values are:    

    1. flex-start
    2. flex-end
    3. center