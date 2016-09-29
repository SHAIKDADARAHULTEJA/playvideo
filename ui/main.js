//counter code 
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function()
{
//Create a request to the counter endpoint
 var  request = new XMLHttpRequest();
//Capture the response and store it in a variable
request.onreadystatechange = function()
{
 if(request.readyState == XMLHttpRequest.DONE)
 {
 	if(request.status == 200)
 	{
 		var counter = request.responseText;
 		var span = document.getElementById('count');
    	span.innerHTML = counter.toString();
 	}
 }
};
request.open('GET','http://shaikdadarahulteja.imad.hasura-app.io/counter',true);
request.send(null);
};


var submit = document.getElementById('submit-btn');
submit.onclick = function()
{
    
     var  request = new XMLHttpRequest();
//Capture the response and store it in a variable
request.onreadystatechange = function()
{
 if(request.readyState == XMLHttpRequest.DONE)
 {
 	if(request.status == 200)
 	{
 
      var names = request.responseText;
      names = JSON.parse(names);
      var list = '';
       for(var i=0;i<names.length;i++)
      {
      list += '<li>'+names[i]+'</li>';
      }
     var ul = document.getElementById('nameslist');
     ul.innerHTML = list;
 	}
 }
};
	var Inputvalue = document.getElementById('name');
    var name = Inputvalue.value;
    request.open('GET','http://shaikdadarahulteja.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);

};