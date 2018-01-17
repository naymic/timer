Plain Javascript Timer with countdown clock

Usage:

1.
Create a new Timer object by passing the timeout time in seconds 
and a callback function to execute when timer finished.
   
var test = new Timer(<seconds>, <callback_function>);

2.
Run timer and pass a html element to show the coundown clock somewhere

test.run(<HTML_element>);