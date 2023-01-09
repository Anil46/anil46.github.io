let API_URL = "localhost:3000/products"

function getAllUsers() {
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function () {
        if (getInfo.readyState == 4 && getInfo.status == 200) {
            allUsers = JSON.parse(getInfo.response)
            console.log(allUsers)
        }
    }
    getInfo.open("GET", API_URL)
    getInfo.send()
}
function getData() {
    getAllUsers()
}