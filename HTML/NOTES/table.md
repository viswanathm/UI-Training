# Table

* We use table tag for representing table structures in HTML pages

* Like real time tables, even HTML tables will have rows and columns

* Each row is represented by <tr> tag

* Each column is  represented by <td> tag

* By default table will not have any border

* To get border use html attribute called border, whose value is a number starting from 0.

example: <table border="1"></table>

* We can set height & width on the <table>, to restrict its dimensions

* By default width of table = sum of widths of all columns

* By default height of table = sum of heights of all rows

* to set height or width on <table>, we can use html attribute like below:

<table width="100%" height="500px"></table>

Note: we can have height & width as % or px

* We can modify space between cells using cellspacing html attribute. Values of this attribute should be number

    <table cellspacing="5"></table>

* We can modify space within the cell using cellpadding html attribute. Values of this attribute should be number

    <table cellpadding="5"></table>

* Table can consist of <caption> tag, to describe about the table in breif. Irrespective of where we write caption tag, it will always show above the 1st row

* To have bold content for header cells, we can use <th> instead of <td>

* <table> tag will have <thead> and <tfoot>, as wrappers for <tr>, so that tr's in <thead> will always come on the top of the table and tr's in <tfoot> will always come on the bottom of the table

* <table> tag will have bordercolor, bgcolor and background as html atributes.

* bordercolor and bgcolor should have values as colors like red, blue, #000, #fff

* background should have value as file location

* We can merge multiple cells using rowspan or colspan. Whose values will be number of cells.

Note: rowspan/colspan is attribute of <td>

* If we use colspan, neighbouring cells in direction of columns will be merged

* If we use rowspan, neighbouring cells in direction of rows will be merged