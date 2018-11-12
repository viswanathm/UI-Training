# CSS

* CSS fullform is Cascading Style Sheets

* We use CSS to override default styles given by browser to HTML

* We have 3 places where we can write CSS, they are:

    1. Inline
    2. Internal
    3. External

## Inline

* Styles that are written on the HTML element using 'STYLE' attribute are called inline CSS

example: 
<div style="color: red; background: yellow"></div>

* Disadvantage of inline CSS is, if more than one element have same styles, we have to repeat same set of style attibute and value, for all the elements.

* to overcome this problem we should use either internal CSS or external CSS. This will not only solve above problem, but also helps in easy maintainance or changes in future.

* Which means using Internal or External CSS, changes are made in only one or few places, where as in inline CSS we need to make changes on every element.

## Internal CSS

* CSS that is written in <style></style> under <head></head> is generally referred as internal CSS

* Syntax of CSS properties and values will be same as inline css.

* Onlything that changes is, instead of wrapping all CSS properties with "" like we do in STYLE="" attribute, here in internal CSS we wrap them with {}

* Because we write internal css at top of the page and not on individual elements, we need to tell the browser to which elements the styles should apply.

* We use CSS selectors to specify to which set of elements(s) styles should apply.

* Some of the most commonly used CSS selectors are:

    1. Tag selector --> tagename {}
    2. Class selector --> .classname {}
    3. ID selector --> #id {}

Note: Preferably always write <style></style> in the <head></head>

* We can write more than one set of selectors in internal CSS. And each selector can have more than one css properties defined.

## External CSS

* If we are building a website with more than one pages, we should maintain same styles across all the pages, which means we need to write same CSS in all the individual pages

* To simply above process of writing same styles in multiple pages (Redundant code), we can use external css

* Syntax of external and internal css is one and the same.

* We just have to copy the styles between <style></style> tags and place them in a seperate CSS file, with extension as .css and that becomes external CSS

* To link HTML and external CSS file, we need to use <link/> tag in <head></head> tag.

example: if css file name is style.css:
<link rel="stylesheet" href="style.css"/>

* There is no limitation on number of CSS files linked to a given HTML page.

### Note:

* If we have more than one definitions of same CSS property inside selector, last definition will be applied.

div {
    color: red;
    color: blue;
}

--> Color blue will be applied

* If we have same CSS property with different values in inline, internal and external. Inline will always take precendence.

* Its always a good practice to write styles in external CSS. And its worst practice to write inline CSS.

* Never write inline CSS (as much as possible)