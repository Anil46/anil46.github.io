function editUser(i) {
    index = i
    for (a in allUsers[i]) {
        if (a !== "products" && a !== "__v") {
            document.getElementById(a).value = allUsers[i][a]
        }
    }
    console.log(allUsers[i])
}