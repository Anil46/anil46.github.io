let API_URL = "http://localhost:3000/cart"

function getAllUsers(){
    return new promise ((sucess)=>{
        var getInfo = new XMLHttpRequest();
        getInfo.onreadystatechange=function(){
        }
        getInfo.open("GET",API_URL)
        getInfo.send()
    })
}
function getData(){
    getAllUsers().then(()=>{
    })
}