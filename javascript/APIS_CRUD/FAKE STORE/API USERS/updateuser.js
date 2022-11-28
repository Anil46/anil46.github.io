function updateUser() {
    let user = { ...allUsers[index] }
    for (a in user) {
        if (a !== "address" && a !== "name" && a !== "__v") {
            user[a] = document.getElementById(a).value
        }
    }
    let UPDATE_URL = API_URL + user.id
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function () {
        if (getInfo.readyState == 4 && getInfo.status == 200) {
            allUsers = JSON.parse(getInfo.response);
            console.log(allUsers);
            displayUsers();
        }
    };
    getInfo.open("PUT", UPDATE_URL);
    getInfo.setRequestHeader("Content-type", "application/json")
    getInfo.send(JSON.stringify(user));

}