#Anchor

* Anchor tag is used for to link 2 documents
* to link with another html page, image or any other document
* If the file type is supported bny the browser, it will be rendered, else it will be downloaded
* Anchor tag will have 3 states, which are: unvisited, visited, active
* Univisted state will have blue text
* visited state will have purple text
* Active state will have red text

* If we dont mention href attribute, <a> tag will not be in any of the above states

* href attribute tells location of the linking file

* use # as the value of href, if you dont want to redirect to another page

* use "#<name>" of anchor element in the same page, so that page gets scrolled when we click the <a> tag


<a href="#down">Test</a>
<a name="down"></a>

* use href as "mailto:<email>", to send an email on click of the <a> tag

* we can add cc, bcc, subject, body as query parameters for mailto

  <a href="mailto:test@gmail.com?cc=test1@gmail.com&bcc=test2@gmail.com
        &subject=Summer%20Party&body=You%20are%20invited%20to%20a%20big%20summer%20party!">Send mail!</a>

* Target attribute on anchor tag will suggest the browser, where to open the linking file

* by default target attribute value is _self

* other possible values for targt attribute are:  _blank , _self , _parent , _top ,framename

* if target value is _blank linking file will open is new tab

* if target value is _self, current tab will be redirected to linking file

* if we have iframes, we can either use _parent or framename

* we can also execute javascript on click of <a> tag, by writing href as "javascript:<js code>"

example: 

<a href="javascript:alert('hi')">Javascript</a>

