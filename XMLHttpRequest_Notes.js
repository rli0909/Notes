//initialize XMLHttpRequest
var xhttp = new XMLHttpRequest();
/* Before call open method 
xhttp
XMLHttpRequest {onreadystatechange: null, readyState: 0, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
	onabort:null
	onerror:null
	onload:null
	onloadend:null
	onloadstart:null
	onprogress:null
	onreadystatechange:null
	ontimeout:null
	readyState:0
	response:""
	responseText:""
	responseType:""
	responseURL:""
	responseXML:null
	status:0
	statusText:""
	timeout:0
*/



/* XMLHttpRequest.open(*method, *url, async, user, password)  '*' means required parameter
 *method options:
	GET:The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
 
	HEAD:The HEAD method asks for a response identical to that of a GET request, but without the response body.
 
	POST:
	PUT:
	DELETE:
	CONNECT:
	OPTIONS:
	TRACE:
	PATCH:
*/


xhttp.open("GET", "url (child url of current inspecting url)", true);
/* After call open method
	...
	readyState: 1
	...
 */
 
 xhttp.send();
 
/* After call send method
readyState:4
response:"
↵<html><head><title>Lucy's PHP script</title></head>
↵<body>
↵<h1>
↵░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░<br>░░░░░░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░░░░░░░░░░░░░░<br>░░░░░░░░░░░░░░░░░░░█░░░░█░░█░▄▀▀▀░█░░█░░▀░░▄▀▀▀░░░░░░░░░░░░░░░░░░░░░░<br>░░░░░░░░░░░░░░░░░░░█░░░░█░░█░█░░░░█░░█░░░░░░▀▀▄░░░░░░░░░░░░░░░░░░░░░░<br>░░░░░░░░░░░░░░░░░░░▀▀▀▀░░▀▀░░░▀▀▀░░▀▀█░░░░░▀▀▀░░░░░░░░░░░░░░░░░░░░░░░<br>░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▀▀▀░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░<br>░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░<br>░█▀▀▀░▀░░░░░░░░░░░░█░░░░░█▀▀▄░█░░█░█▀▀▄░░░░▄▀▀▄░░░░░░░░░░░▀░░░░░░░█░░<br>░█▄▄▄░█░▄▀▀▄░▄▀▀▀░▀█▀░░░░█▄▄▀░█▄▄█░█▄▄▀░░░░▀▄▄░░▄▀▀▀░▄▀▀▄░█░█▀▀▄░▀█▀░<br>░█░░░░█░█░░░░░▀▀▄░░█░░░░░█░░░░█░░█░█░░░░░░░▄░░█░█░░░░█░░░░█░█░░█░░█░░<br>░▀░░░░▀░▀░░░░▀▀▀░░░▀░░░░░▀░░░░▀░░▀░▀░░░░░░░░▀▀░░░▀▀▀░▀░░░░▀░█▀▀░░░▀░░<br>░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▀░░░░░░░░<br></h1>
↵</body></html>"

responseText:"
↵<html><head><title>Lucy's PHP script</title></head>
↵<body>
↵<h1>
↵░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░<br>░░░░░░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░░░░░░░░░░░░░░<br>░░░░░░░░░░░░░░░░░░░█░░░░█░░█░▄▀▀▀░█░░█░░▀░░▄▀▀▀░░░░░░░░░░░░░░░░░░░░░░<br>░░░░░░░░░░░░░░░░░░░█░░░░█░░█░█░░░░█░░█░░░░░░▀▀▄░░░░░░░░░░░░░░░░░░░░░░<br>░░░░░░░░░░░░░░░░░░░▀▀▀▀░░▀▀░░░▀▀▀░░▀▀█░░░░░▀▀▀░░░░░░░░░░░░░░░░░░░░░░░<br>░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▀▀▀░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░<br>░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░<br>░█▀▀▀░▀░░░░░░░░░░░░█░░░░░█▀▀▄░█░░█░█▀▀▄░░░░▄▀▀▄░░░░░░░░░░░▀░░░░░░░█░░<br>░█▄▄▄░█░▄▀▀▄░▄▀▀▀░▀█▀░░░░█▄▄▀░█▄▄█░█▄▄▀░░░░▀▄▄░░▄▀▀▀░▄▀▀▄░█░█▀▀▄░▀█▀░<br>░█░░░░█░█░░░░░▀▀▄░░█░░░░░█░░░░█░░█░█░░░░░░░▄░░█░█░░░░█░░░░█░█░░█░░█░░<br>░▀░░░░▀░▀░░░░▀▀▀░░░▀░░░░░▀░░░░▀░░▀░▀░░░░░░░░▀▀░░░▀▀▀░▀░░░░▀░█▀▀░░░▀░░<br>░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▀░░░░░░░░<br></h1>
↵</body></html>"

responseType:""
responseURL:"http://www.wou.edu/~rli12/My_Files/test.php"
responseXML:null
status:200
statusText:"OK"
timeout:0
*/
