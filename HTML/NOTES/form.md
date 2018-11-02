# Form and Form elements

* To give an option for the webpage user to input some values, like login crendentials or registration information. We need to use form elements

* We have various types of form elements, where user can input text, numbers, type paragraphs, choose from multiple options,
dropdowns.

* All the above form elements should be wrapped by <form> tag

* Form element is used to send the user entered data to server page.

* Without form element we need to use JS, to collect all the data from form elements and send to server using AJAX.

* We can send data to server in many ways, like GET, POST, PUT, DELETE. This can be mentioned on the <form> tag using METHOD attribute

* Destination page or application for our form data to be sent can be configured using ACTION attribute on <form> tag

* One of the most common and robust form element is <input> element

* As the name suggests, input element takes input from the user

* TYPE attribute on <input> tag is used to configure type of the input.


* Some of the input types are:
    1. text
    2. password
    3. number
    4. email
    5. checkbox
    6. radio
    7. date
    8. range
    9. date
    10. datetime-local
    11. week
    12. month
    13. time
    14. file
    15. color
    16. url

* To enter more than one lines, we should use <textarea> element instead of <input> element

* Latest version of html supports form validations. like: if input type is email, and user doesnt enter a valid email address. Form will not be submitted and also it will show the error in a popup

* 'required' attribute is most commonly used form validator. We can use this attribute on any input element, and during form submit, browser will through a notification if that particular field is not filled by user

<input type="text" required/>

Note: required attribute doesnt need any value

* <input> tag can be given an attribute called 'readonly', which ensures that user will not be able to type anything

* We also have an attribute called 'disabled' which is similar to 'readonly', but styles will like a disabled input field, with greyed out background.

* 'maxlength', we use maxlength on input type="text", to restrict number of characters user can enter

* min and max are the attributes we can use for input type number or date, to restrict user inputs

* size attribute on input tag will define the width of the input element

Note: Every input element should have a name.

Note: Some input types like email, url, will not have any visual differences when compared to input type text. You will notice difference on form submit. Email and url types will be validated on form submit.

* When we are using input types like radio or checkbox, each input/radio/checkbox should be grouped using 'name' attribute.

Example: If Gender entry of the form have 2 radio buttons, both of them should have same name, like 'gender'.

* Although we use more than one input elements for enrties like gender. They reoresent single value.

* Each seperate entry of input type radio or checkbox should have a seperate 'value'


## Select

* If we have more than 4 options to select, we should preferably use select element / dropdown

* we use <select> tag for rendering dropdown

* <select> tag can have one or more <option> tags. Each option represents an entry of dropdown

* <select> tag should have  2 things:
    1. value
    2. display value (b/w start and end of <option> tag)

example:

<select name="qualification">
    <option value="1">B.tech</option>
    <option value="2">M.tech</option>
</select>

* By default first option will will be selected in the dorpdown. But we can control it using 'selected' attribute on <option> (have selected attribute on option so that it will be selected by default)

example:

<select name="qualification">
    <option value="1">B.tech</option>
    <option value="2" selected>M.tech</option>
</select> 

* By default only one option is show in the <select>, but we can control it using 'size', whose value should be some number
example:

<select name="qualification" size="2">
    <option value="1">B.tech</option>
    <option value="2" selected>M.tech</option>
</select> 

* By default we can only select one option from the select dropdown. But when we use 'multiple' attibute on <select>, we can select more than one values. (using CONTROL key of keyboard)

## fielset and legend

* We can use <fieldset> to wrap entire form or a portion of form in a section

* <legend> tag works like a heading for the section

## label

* We should wrap text that comes before any form element in a <label> tag

* We should set 'for' attribute on <label> as id and name attribute of form element as below:

<form> 
<label for="favorite-animal">Favorite Animal</label>
<input name="favorite-animal" id="favorite-animal">
</form>

* This will enable us to make that particular form element active, by clicking on the label.