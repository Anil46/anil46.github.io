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
	<html>
    <head>
        <title>anil html</title>
        <h2>HI </h2>
        <style>
            .box {
                width: 500px;
                height: 100px;
                border: 1px solid blue;
                margin: 10px;
                float: left;
            }
            }
            h1{
                color: black;
            }
            body {
                background-color:gray;
                border: 1px solid black;
                border: 1px solid black;
            }
            p{
                color: brown;
            }
h1{
    color: blue;
}
table{
    color: blueviolet;
}
            
        </style>
    </head>
    <body>
       <div class="box">
                <h1>mahesh</h1>
            </div>
            <div class="box">
                <h1>anil</h1>
            </div>
        <img src="./images/Saaho_poster.jpg" alt="">
        <h1>HI THIS IS MY HTML PRACTISING</h1>
        <img src="./images/Saaho_poster.jpg" alt="Saaho_poster">
        <a href="https://www.primevideo.com/detail/0L49BLL3L0VXO0MIC1EIK44ZOP/ref=dvm_src_ret_in_xx_s" target="_blank">
            <br>
             watch on prime</a>
             <hr>
        <p>
            Saaho (transl. Let victory be yours) is a 2019 Indian action thriller film[3] written and directed by Sujeeth, and produced by UV Creations.[6][7][8] Filmed simultaneously in Hindi, Tamil and Telugu languages, it stars Prabhas and Shraddha Kapoor, marking the former's Hindi debut and the latter's debut in South Indian cinema.[9][10][11][12] The film also has Jackie Shroff, Arun Vijay and Neil Nitin Mukesh in other prominent roles. The film follows an undercover agent and his partner as they go after a thief who has stolen ₹2,000 crore (US$260 million). Soon, they realise that the case is linked to the death of a crime lord and an emerging gang war.
        </p>
    </body>
    <table border="1">
        <thead>
            <tr>
                <th>s.no</th>
                <th>casting</th>
                <th>crew</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1.</td>
                <td>prabhas</td>
                <td>sahoo</td>
            </tr>

        </tbody>
    </table>
   

   

</html>
		</html>
      
