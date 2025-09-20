# costycnc-js-html-open-read-file-potrace

![Potrace Logo](https://potrace.sourceforge.net/images/potrace-logo.png)

**JavaScript & HTML Example: Open, Read, and Process Bitmap Files with Potrace**

This project demonstrates how to use JavaScript and HTML to:

- Open and read bitmap files (e.g., BMP, PNG) in the browser
- Convert the images to base64 format
- Trace the bitmap to vector paths using the Potrace algorithm

It's an excellent starting point for developers interested in client-side image processing and vectorization.

---

## 🔧 Features

- **Open Files**: Select and read bitmap files directly in the browser using the HTML File API
- **Base64 Encoding**: Convert image files to base64 strings for easy embedding and processing
- **Potrace Integration**: Utilize the Potrace JavaScript library to trace bitmap images into smooth, scalable vector paths
- **SVG Output**: Generate SVG paths that can be rendered or saved for further use

---

## 🛠️ Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/costycnc/costycnc-js-html-open-read-file-potrace.git
   ```

Open the index.html file in your web browser

Use the file input to select a bitmap image

The image will be processed, and the resulting SVG path data will be displayed

📂 Project Structure

index.html: Main HTML file containing the user interface and script references

potrace.js: JavaScript file implementing the Potrace algorithm for tracing bitmaps

extract.js: Utility script for extracting and processing image data

loadfile.js: Script for handling file loading and base64 encoding

style.css: Basic styling for the user interface

📄 License

This project is licensed under the MIT License

📚 References

Potrace: https://potrace.sourceforge.net/

Potrace JavaScript Library: https://github.com/casperlamboo/potrace-js




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
