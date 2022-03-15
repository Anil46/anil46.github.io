<!DOCTYPE HTML>
<html>
     <head>
          <title>anil46.github.io</title>
		  <title>Rgistration Form</title>
		  <script>
		  function validateForm()
		  {
		  var fn=document.forms["regform"]["fullname"].value;
		  var gn=document.forms["regform"]["gender"];
		  
		  else if(fn==null||fn=="")
		  {
		  alert("Full name cannot be blank");
		  return false;
		  }
		  else if((gn[0].checked==false)&&(gn[1].checked==false))
		  {
		  alert("please select your gender");
		  return false;
		  }
		  }
		  </script>
    </head>
    <body> 
	    <h1>hi this is my first web application by using git hub</h1>
		<form name="regform" method="post" onsubmit="validateForm()">
	    <label>Full Name : </label>
	           <input type="text" name  name="fname" id="name" placeholder="Enter your first name">
	    <br><br>
	    <label>Secret pin : </label>
	    <input type="number" name="spin" id="4digitpin" placeholder="Enter your secret pin">
	    <br><br>
	    <label>Gender : </label>
	    &nbsp;&nbsp;&nbsp;
	    <input type="radio" name="gender" id="male">
	    &nbsp;
	    <span id="male">Male</span>
	     &nbsp;&nbsp;&nbsp;
	    <input type="radio" name="gender" id="female">
	    &nbsp;
	    <span id="Female">Female</span>
	    <br><br>
		    <label>I am expert in : </label>
		     &nbsp;&nbsp;&nbsp;
		    <input type="checkbox" name="lang" id="HTML">
	    <span id="HTML">HTML</SPAN>
	     &nbsp;
	     <input type="checkbox" name="lang" id="CSS">
	    <span id="CSS">CSS</Span>
	    <br><br>
	    <label>My field of study is : </label>
	    <select class="branch">
		    <option>select your branch</option>
		    <option>java</option>
		    <option>python</option>
		    <option>html</option>
	    </select>
	    <br><br>
            <label>Tell me about yourself : </label>
	    <input type="text" name="description" id="description" placeholder="enter your description">
	    <br><br>
		
	    <input type="submit" value="submit">
		</form>
		</body>
		</html>
      
