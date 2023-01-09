let API_URL = " http://localhost:3000/comments"

function getAllUsers(){
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange=function(){
        if(getInfo.readyState == 4 && getInfo.status == 200){
            allUsers=JSON.parse(getInfo.response)
            console.log(allUsers);
            displayUsers();
        }
    }
    getInfo.open("GET",API_URL)
    getInfo.send()
}
function getData(){
    getAllUsers()
}