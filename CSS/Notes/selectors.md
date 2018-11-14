# selectors

* When we write CSS internally or externally, we need to use selectors to group the styles, that needs to be applied on specific element(s).

* We have various kinds of selectors, of which 3 of them are basic:

 1. tag selector (tag name)
 2. class selector (class name preceeded by .)
 3. id selector  (id preceeded by #)

 * Any selector is followed by a block of CSS definitions, as below:

    selector {
        /* CSS properties go here */   
    }

* Example of tag, class and id slectors

// tag selector, all the divs in the page will have red font.

div {
    color: red;
}

// class selector, all the elements in the page with class 'student' will have red font.

.student {
    color: red;
}

Note: We can combine tag and class selector, tag and id selector

// class selector, all the divs in the page with class 'student' will have red font.
div.student {
    color: red;
}

// ID selector, element in the page with id as 'topper' will have red font.

#topper {
    color: red;
}

// ID selector, div in the page with id as 'topper' will have red font.

div#topper {
    color: red;
}

* Attribute selectors: We can select elements based on a specific attribute and value. Selector for this will be with square brackets [], inside the brackets we need to write a condition (equal, contains, starts with, ends with and so on).

Example: 

a[target="_blank"]{
    color: red;
}

// Above selector will select all the anchor elements with target attribute as "_blank" and applies font color as red.

* Other conditions can be as following:

a[target] - with attr
a[target="_blank"] - attr = value
[attribute~="value"] - attr contains (space seperated)
[attribute*="value"] - attr contans
[attribute|="value"] - attr starts with (whole word or -)
[attribute^="value"] - attr starts with
[attribute$="value"] - ends with

* Hierarical selector: We should use hierarical selectors to select an element which is descendent of another element.

* these selector will be of 2 types:

    1. immediate child (parent_selector>child_selector)
    2. any descendent (parent_selector child_selector)

example:

.abc>.def{
    color: red;
}
// Above selector applies color red for all the elements which have class as 'def' AND it should be immediate child of element with class 'abc'.

.abc .def{
    color: red;
}
// Above selector applies color red for all the elements which have class as 'def' AND it should be descendent of element with class 'abc'. 

* Pseudo selectors: These are selectors which are not directly visible in our HTML page/code, but can be different state of a existing element.

* example: <a> which is visited can be selected using following selector:

a:visited {
    color: red;
}

* example: <div>, when we mouse over on the element, we can apply different styles using following selector:

div:hover {
    color: red;
}

* Below selector will apply red color font to all the elements which have class 'child'
AND they should be descencdent of element with class 'parent' AND mouse should be on top of the parent element.

.parent:hover .child{
    color: red;
}

* There are other kind of pseudo elements apart from :, these are preceeded by ::

* Like ::after, ::before and so on.

* for pesudo elements like ::after and ::before, we need to use 'content'in the following block {}

* Below selector, will create a pseudo element in the browser after every div, and this pseudo element will have content as text, with value 'abc' AND color of text will be red.

div::after {
    content: 'abc';
    color: red;
}

* Below selector, will create a pseudo element in the browser before every div, and this pseudo element will have content as text, with value 'abc' AND color of text will be red.

div::before {
    content: 'abc';
    color: red;
}