// let todoActivites = [
//     { activity: 'JOB SUPPORT FOR USA', status: 'completed', activityid: '1' },
   
//     { activity: 'Asingnment', status: 'IN PROGRESS', activityid: '2' },
//     { activity: 'Going out', status: 'IN PROGRESS', activityid: '3' },
//     { activity: 'Part time work', status: 'IN PROGRESS', activityid: '4' }
// ];
var todoActivites = JSON.parse(localStorage.getItem("todoActivites"))
todoActivites.forEach((todo, i) => {
    var myTr = document.createElement("tr");
    for (a in todo) {
        if (a !== "activityid") {
            var myTd = document.createElement("td");
            myTd.innerHTML = todo[a];
            myTr.appendChild(myTd);
        }
    }
    var actiontd = document.createElement("td")
    var detailsBtn = document.createElement("button");
    detailsBtn.innerHTML = 'View Details';
    detailsBtn.setAttribute('onClick', 'viewDetails(' + i + ')')
    actiontd.appendChild(detailsBtn);

    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = 'Delete';
    actiontd.appendChild(deleteBtn);

    myTr.appendChild(actiontd);
    var deleteTd = document.createElement("td");
    document.querySelector("tbody").appendChild(myTr)
});

function markAsDone() {

}

function viewDetails(i) {
    console.log(todoActivites[i]);
    localStorage.setItem("todoActivites", JSON.stringify(todoActivites))
    window.location.href = "details.html?" + todoActivites[i].activityid;
}