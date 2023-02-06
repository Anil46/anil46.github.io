function displayUsers() {
    allUsers.forEach((user,i) => {
        var myTr = document.createElement("tr");
        for (a in user) {
            if (a !== "products"  && a !== "__v") {
                var myTd = document.createElement("td");
                myTd.innerHTML = user[a];
                myTr.appendChild(myTd);
            } else if (a == "0") {
                // var myTd = document.createElement("td");
                // myTd.innerHTML = user[a].productid + " " + user[a].quantity
                // myTr.appendChild(myTd);
            }
        }


        // to edit
        var EditTd = document.createElement("td");
        var editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.setAttribute("onclick", "editUser("+ i +")")
        editBtn.setAttribute("class", "btn btn-warning");
        EditTd.appendChild(editBtn);
        myTr.appendChild(EditTd)

        //to delete
        var DeleteTd = document.createElement("td");
        var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.setAttribute("onclick", "deleteUser()");
        deleteBtn.setAttribute("class", "btn btn-danger");
        DeleteTd.appendChild(deleteBtn);
        myTr.appendChild(DeleteTd)


        document.querySelector("tbody").appendChild(myTr)
    })
}