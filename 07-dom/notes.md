# Document Object Model

> The Document Object Model (DOM) is a standard for how to get, change, add, or delete HTML elements from a webpage.
- definition from [w3 schools](http://www.w3schools.com/js/js_htmldom.asp)

## Review of HTML

Here is the source code for a very basic website

    <html>
    <head>
    <title>My Title</title>
    <body>
    <a href="http://google.com">My link</a>
    <h1>My Heading</h1>
    <p>My paragraph</p>
    </body>
    </html>

You can think of the website code as a tree:

![Document Object Model](./images/pic_htmltree.gif)
_Image from from [w3 schools](http://www.w3schools.com/js/js_htmldom.asp)_

The DOM helps us access these HTML **objects** and their **properties**.

### Example:

    <a href="http://www.google.com">My Link</a>

This is an HTML Anchor (or link) **object**.  It has the **property** "href" with the **value** "http://www.google.com".  It includes the **text node**, "My Link".

### Example:

You can include javascript in a webpage, easily, by putting it inside a script object:

    <html>
    <head>
    <title>My Title</title>
    <body>
    <a href="http://google.com">My link</a>
    <h1>My Heading</h1>
    <p>My paragraph</p>
    <script>
    console.log("Hello! This is javascript inside a web page");
    </script>
    </body>
    </html>

### Example:

You can use CSS to style your web page

    <html>
    <head>
    <title>My Title</title>
    <body>
    <a href="http://google.com">My link</a>
    <h1>My Heading</h1>
    <p style="color:red">My paragraph</p>
    <script>
    console.log("Hello! This is javascript inside a web page");
    </script>
    </body>
    </html>


### Example:

You can wrap HTML code inside "div" objects, which allows you to handle all the enclosed code as a unit:

    <html>
    <head>
    <title>My Title</title>
    <body>
    <a href="http://google.com">My link</a>
    <div style="color:red">
    <h1>My Heading</h1>
    <p>My paragraph</p>
    </div>
    <script>
    console.log("Hello! This is javascript inside a web page");
    </script>
    </body>
    </html>

### Example:

You can name your objects using the "id" parameter:

    <html>
    <head>
    <title>My Title</title>
    <body>
    <a href="http://google.com">My link</a>
    <div id="content">
    <h1 id="heading">My Heading</h1>
    <p>My paragraph</p>
    </div>
    <script>
    console.log("Hello! This is javascript inside a web page");
    </script>
    </body>
    </html>


## HTML DOM Methods

Using the JavaScript in your webpage, you can get, change, add, and remove HTML objects in a document. You can also deal with events (ex. mouse clicks or window resizing).

### DOM Document

The document is the top "parent" of the objects in your web page. The Document object has methods to get access to its children.

### Example (getting elements by ids and tags)

    <html>
    <head>
    <title>My Title</title>
    <body>
    <a href="http://google.com">My link</a>
    <div id="content">
    <h1 id="heading">My Heading</h1>
    <h2 id="subheading">My subheading</h2>
    <p>My paragraph</p>
    <p>My second paragraph</p>
    </div>
    <p>My third paragraph</p>
    <script>
    var heading = document.getElementById("heading");
    console.log(heading); //this will print a representation of the object, but not its text node.
    var nonexistentfooter = document.getElementById("footer");
    console.log(nonexistentfooter); // prints null
    
    var d = document.getElementById("content");
    var p = d.getElementsByTagName("p");

    console.log(p);
    </script>
    </body>
    </html>

### Example (changing HTML Content by writing to document)

    <html>
    <head>
    <title>My Title</title>
    <body>
    <a href="http://google.com">My link</a>
    <div id="content">
    <h1 id="heading">My Heading</h1>
    <h2 id="subheading">My subheading</h2>
    <p>My paragraph</p>
    <p>My second paragraph</p>
    </div>
    <p>My third paragraph</p>
    <script>
    document.write("hello again!");
    document.write("<h1>hello</h1>");
    document.write("<p>" + Date() + "</p>");
    </script>
    </body>
    </html>

### Example (changing HTML content by accessing objects' inner html)

    <html>
    <head>
    <title>My Title</title>
    <body>
    <a href="http://google.com">My link</a>
    <div id="content">
    <h1 id="heading">My Heading</h1>
    <h2 id="subheading">My subheading</h2>
    <p id="paragraph">My paragraph</p>
    <p>My second paragraph</p>
    </div>
    <p>My third paragraph</p>
    <script>
    var heading = document.getElementById("heading");
    console.log(heading); //this will print a representation of the object, but not its text node.
    console.log(heading.innerHTML);
    heading.innerHTML = "My revised heading";
    console.log(heading.innerHTML);

    document.getElementById("paragraph").innerHTML = "<a href='http://www.bing.com'>new link!</a>";


    </script>
    </body>
    </html>

### Example (changing elements using a loop)

    <html>
    <head>
    <title>My Title</title>
    <body>
    <a href="http://google.com">My link</a>
    <div id="content">
    <h1 id="heading">My Heading</h1>
    <h2 id="subheading">My subheading</h2>
    <p id="paragraph">My paragraph</p>
    <p>My second paragraph</p>
    </div>
    <p>My third paragraph</p>
    <script>
    var paragraphList = document.getElementsByTagName("p");
    document.write("This document has " + paragraphList.length + " paragraph objects.");
    for (i = 0; i < paragraphList.length; i++) {
        paragraphList[i].innerHTML = "New Text";
    }
    </script>
    </body>
    </html>

### Example (changing parameters)

    <html>
    <head>
    <title>My Title</title>
    <body>
    <a id = "link" href="http://google.com">My link</a>
    <div id="content">
    <h1 id="heading">My Heading</h1>
    <h2 id="subheading">My subheading</h2>
    <p id="paragraph">My paragraph</p>
    <p>My second paragraph</p>
    </div>
    <p>My third paragraph</p>
    <script>
    var link = document.getElementById("link");
    link.href = "http://bing.com";
    </script>
    </body>
    </html>


### Example (changing styles)

    <html>
    <head>
    <title>My Title</title>
    <body>
    <a href="http://google.com">My link</a>
    <div id="content">
    <h1 id="heading">My Heading</h1>
    <h2 id="subheading">My subheading</h2>
    <p id="paragraph">My paragraph</p>
    <p>My second paragraph</p>
    </div>
    <p>My third paragraph</p>
    <script>
        var heading = document.getElementById("heading");
        heading.style.color = "blue";
        var subheading = document.getElementById("subheading");
        subheading.style.backgroundColor = "yellow";
    </script>
    </body>
    </html>

## Event handling

The DOM gives you access to events that fire off when "something happens" in the window.  This can include user input, for example.

### Example (events in objects Button)

    <html>
    <head>
    <title>My Title</title>
    <body>
    <a href="http://google.com">My link</a>
    <div id="content">
    <h1 id="heading">My Heading</h1>
    <h2 id="subheading">My subheading</h2>
    <p id="paragraph">My paragraph</p>
    <p onclick="document.getElementById('heading').style.color = 'red'">My second paragraph</p>
    </div>
    <p onclick="document.getElementById('heading').style.visibility = 'hidden'">My third paragraph</p>
    <script>

    </script>
    </body>
    </html>

### Example (using 'this')

    <html>
    <head>
    <title>My Title</title>
    <body>
    <a href="http://google.com">My link</a>
    <div id="content">
    <h1 id="heading">My Heading</h1>
    <h2 id="subheading">My subheading</h2>
    <p id="paragraph">My paragraph</p>
    <p onclick="this.style.color = 'red'">My second paragraph</p>
    </div>
    <p onclick="this.style.visibility = 'hidden'">My third paragraph</p>
    <script>

    </script>
    </body>
    </html>

### Example (using functions)

    <html>
    <head>
    <title>My Title</title>
    <body>
    <a href="http://google.com">My link</a>
    <div id="content">
    <h1 id="heading">My Heading</h1>
    <h2 id="subheading">My subheading</h2>
    <p id="paragraph">My paragraph</p>
    <p onclick="changeColor(this)">My second paragraph</p>
    </div>
    <p onclick="changeColor(this)">My third paragraph</p>
    <script>
        function changeColor(id) {
            id.style.color = 'red';
        }
    </script>
    </body>
    </html>

### Example (using DOM to attach events to HTML objects)

    <html>
    <head>
    <title>My Title</title>
    <body>
    <a href="http://google.com">My link</a>
    <div id="content">
    <h1 id="heading">My Heading</h1>
    <h2 id="subheading">My subheading</h2>
    <p id="paragraph">My paragraph</p>
    <p onclick="changeColor(this)">My second paragraph</p>
    </div>
    <p onclick="changeColor(this)">My third paragraph</p>
    <script>
        var heading = document.getElementById("heading");
        heading.onclick = testFunction;

        function testFunction() {
            console.log("here is a message");
        }
    </script>
    </body>
    </html>

### Example (other mouse events) 

    <html>
    <head>
    <title>My Title</title>
    <body>
    <a href="http://google.com">My link</a>
    <div id="content">
    <h1 id="heading">My Heading</h1>
    <h2 id="subheading">My subheading</h2>
    <p id="paragraph">My paragraph</p>
    <p onmouseover="handleMouseOver(this)" onmouseout="handleMouseOut(this)">My second paragraph</p>
    </div>
    <p onmousedown="changeBackgroundColor(this,'red')" onmouseup="changeBackgroundColor(this, 'white')">My third paragraph</p>
    <script>
        function handleMouseOver(id) {
            id.style.backgroundColor="blue";
        }
        function handleMouseOut(id) {
            id.style.backgroundColor="white";
        }
        function changeBackgroundColor(id, color){
            id.style.backgroundColor = color;
        }

    </script>
    </body>
    </html>

### Example (event listeners)

    <html>
    <head>
    <title>My Title</title>
    <body>
    <a href="http://google.com">My link</a>
    <div id="content">
    <h1 id="heading">My Heading</h1>
    <h2 id="subheading">My subheading</h2>
    <p id="paragraph">My paragraph</p>
    <p>My second paragraph</p>
    </div>
    <p>My third paragraph</p>
    <script>
        document.getElementById("heading").addEventListener("click", changeBackgroundColorToYellow);
        document.getElementById("subheading").addEventListener("click", changeBackgroundColorToYellow);
        document.getElementById("subheading").addEventListener("click", changeColorToBlue);
        document.getElementById("paragraph").addEventListener("mouseover", changeBackgroundColorToYellow);
        document.getElementById("paragraph").addEventListener("mouseout", changeBackgroundColorToWhite);


        function changeColorToBlue(){
            this.style.color = "blue";
        }

        function changeBackgroundColorToYellow(){
            this.style.backgroundColor = "red";
        }
        function changeBackgroundColorToWhite(){
            this.style.backgroundColor = "white";
        }
    </script>
    </body>
    </html>

### Example (passing parameters in events)

    <html>
    <head>
    <title>My Title</title>
    <body>
    <a href="http://google.com">My link</a>
    <div id="content">
    <h1 id="heading">My Heading</h1>
    <h2 id="subheading">My subheading</h2>
    <p id="paragraph">My paragraph</p>
    <p>My second paragraph</p>
    </div>
    <p>My third paragraph</p>
    <script>
        document.getElementById("heading").addEventListener("click", function (){ changeBackgroundColor(this,"yellow");});
        document.getElementById("subheading").addEventListener("click", function (){ changeBackgroundColor(this,"yellow");});
        document.getElementById("subheading").addEventListener("click", function (){ changeColor(this,"blue");});
        document.getElementById("paragraph").addEventListener("mouseover", function (){ changeBackgroundColor(this,"yellow");});
        document.getElementById("paragraph").addEventListener("mouseout", function (){ changeBackgroundColor(this,"white");});

        // Note that you have to pass in the id, explicitly, because this is being called from an anonymous function
        function changeColor(id, color){
            id.style.color = color;
        }

        function changeBackgroundColor(id, color){
            id.style.backgroundColor = color;
        }
    </script>
    </body>
    </html>



## DOM Nodes

(see [w3schools](http://www.w3schools.com/js/js_htmldom_navigation.asp))

Recall the tree representation:

![Document Object Model](./images/pic_htmltree.gif)

- the entire document is a **document node**
- each HTML element is an **element node**
- text _inside_ HTML elements are **text nodes**
- every attribute is an **attribute node**
- every node has one and only one **parent**
- ...except the document node, which is parentless
- every node can have any number of children
- a node's siblings are other nodes that have the same parent

Each element has a series of properties that let you find its relationships:

- parentNode
- childNodes[index]
- firstChild
- lastChild
- nextSibling
- previousSibling

### Example (node navigation)

    <html>
    <body>

    <h1 id="intro">My First Page</h1>

    <p id="demo">Hello!</p>

    <script>
    // below we could use "firstChild" instead of "childNodes[0]"
    var myText = document.getElementById("intro").childNodes[0].nodeValue;
    document.getElementById("demo").innerHTML = myText;

    </script>

    </body>
    </html>

- topics for later: nodeName, nodeValue and nodeType

## Creating new HTML nodes

### Example (adding nodes)

    <div id="div1">
    <p id="p1">This is a paragraph.</p>
    <p id="p2">This is another paragraph.</p>
    </div>

    <script>
    var para = document.createElement("p");
    var node = document.createTextNode("This is new.");
    para.appendChild(node);

    var element = document.getElementById("div1");
    element.appendChild(para);
    </script>

### Example (adding nodes using insertBefore())

    <div id="div1">
    <p id="p1">This is a paragraph.</p>
    <p id="p2">This is another paragraph.</p>
    </div>

    <script>
    var para = document.createElement("p");
    var node = document.createTextNode("This is new.");
    para.appendChild(node);

    var element = document.getElementById("div1");
    var child = document.getElementById("p1");
    element.insertBefore(para,child);
    </script>

### Example (removing nodes) 

You must know an element's parent to remove the element

    <div id="div1">
    <p id="p1">This is a paragraph.</p>
    <p id="p2">This is another paragraph.</p>
    </div>

    <script>
    var parent = document.getElementById("div1");
    var child = document.getElementById("p1");
    parent.removeChild(child);
    </script>


## Browser Object Model

    <!DOCTYPE html>
    <html>
    <body>

    <p id="demo"></p>

    <script>
    var w = window.innerWidth;

    var h = window.innerHeight;

    var x = document.getElementById("demo");
    x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";
    </script>

    </body>
    </html>

We also have a few other methods:

- window.open()
- window.close()
- window.moveTo()
- window.resizeTo()
- window.screen.width() (or screen.width())
- window.screen.height() (or screen.height())
- window.location.href returns the href (URL) of the current page
- window.location.hostname returns the domain name of the web host
- window.location.pathname returns the path and filename of the current page
- window.location.protocol returns the web protocol used (http:// or https://)
- window.location.assign loads a new document

## Timers

### Example (setTimeout)

    <button onclick="setTimeout(myFunction, 3000)">Try it</button>

    <script>
    function myFunction() {
        alert('Hello');
    }

### Example (interval)

    <html>
    <body>

    <p>A script on this page starts this clock:</p>

    <p id="demo"></p>

    <script>
    var myVar = setInterval(myTimer, 1000);

    function myTimer() {
        var d = new Date();
        document.getElementById("demo").innerHTML = d.toLocaleTimeString();
    }
    </script>

    </body>
    </html>


    </script>


### Additional topics for later
    - ADDING EVENTS TO WINDOW
    - FORMS
    - CASCADING EVENTS
