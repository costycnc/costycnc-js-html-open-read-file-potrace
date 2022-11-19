# costycnc-js-readfile-potrace
     Costycnc
     Sample to understand javascript load file in html browser and passed bsed64 image to potrace
     Also working with base64 in js html is very easy with this example
     

For principiants open files and read modify data of file and save result perhaps is one of more exciting things in all javascript language programming.

In this example you find how save file as different data you can find more details here https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs  

               	       //data url

	               //data:,Hello%2C%20World%21
	               //data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==
	               //data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E
	               //data:text/html,<script>alert('hi');
                 

 
 and how read file as different type
 
 				FileReader.readAsArrayBuffer()
				FileReader.readAsBinaryString()
				FileReader.readAsDataURL()
				FileReader.readAsText()
				

You can find here how interact with potrace library to transform image raster to gcode (modified original potrace code with my alghoritm)

Original potrace alghoritm transform a raster image (pixel map) in a vector svg code

Original potrace alghorithm you can find here https://www.npmjs.com/package/potrace and here https://potrace.sourceforge.net/

and here javascript online variant https://kilobtye.github.io/potrace/ that i can used in my program
 
 remember that this is first think that help me to create https://www.costycnc.it/cm8 image to gcode converter 
 
 for costycnc foam cutter macchine https://www.costycnc.it
 
 i wait your comments and suggestions !!!
