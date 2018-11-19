# Where

* External JS
    * When we write JS in a seperate .js file it is called external JS

    * We can connect HTML and external JS file using <script></script> tag with src attribute

    example:
    <script src="test.js"></script>

* Internal JS 
    * when we write JS in HTML page between <script> </script> tags is called Internal JS

* Inline JS (when we write JS on the HTML tag, probably in a event handler like onload, onlclick.... is called inline JS)

NOTE: If we are writing internal or external JS, always have the <script></script> tag at the end of the html file, before close </body> tag

# Data Types

## Primitive (which cannot be futher subdivided):

* number: -infinity to infinity (1, 2, 3, -1, -2, -3, 0.1, 34.8)

* string: '' or "" ==> "1", 'a', "anything that u can type", 'anything that u can type'

* boolean: 
    * true or false
    * falsy values (0, "", '',null, undefined)
    * truthy values (anything other than falsy)

* null (We have to manually assign null to a variable to make it null)

* undefined (default value, variable that is declared, but not assigned any value)

## Complex (generally collections):

* Array
* Object


Note: Dynamically types language

------------------

# Variables

* To hold data
* Every variable will have a name
* var (keyword)

* Variable declaration, assignment and initialization

Declaration: (naming a variable)
    var <varName>;
    
    var bottle;

Assignment: (assigning value to variable)
    <varName> = <value>;

    bottle = "milk";

Initialization: (declaration + assignment)

    var <varName> = <value>;

    var bottle = "milk";


example:

var i;
i = 10;

Note: when ever u encounter ; or a meaningful end, its end of statement.

## Operations

### Comparitive Operators

* <, >, =, !=

#### Conditional Statements

if(a > b){
   alert(a);
}


