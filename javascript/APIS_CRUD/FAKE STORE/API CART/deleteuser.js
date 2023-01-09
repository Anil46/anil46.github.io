function deleteUser(i) {
    console.log(allUsers[i]);
    var DEL_URL = API_URL + allUsers[i].id
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function () {
        if (getInfo.readyState == 4 && getInfo.status == 200){
            allUsers = JSON.parse(getInfo.response);
            console.log(allUsers);
            displayUsers();
        }
    }
    getInfo.open("DELETE", DEL_URL);
    getInfo.send();

}