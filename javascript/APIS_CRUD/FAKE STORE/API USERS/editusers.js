function editUser(i){
    index=i
    for(a in allUsers[i]){
        if(a !=="address" && a !=="name" && a !=="__v"){
            document.getElementById(a).value=allUsers[i][a]
        }
    }
    console.log(allUsers[i])
}