let data = JSON.parse(localStorage.getItem('use

function getData() {
  if (!data) {
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function () {
      if (getInfo.status == 200 && getInfo.readyState == 4) {
        console.log(getInfo.response);
        data = JSON.parse(getInfo.response);
        localStorage.setItem('users', JSON.stringify(data));
        displayUsers(data);
      }
    };
    getInfo.open('GET', 'https://fakestoreapi.com/users');
    getInfo.send();
  } else {
    displayUsers(data);
  }
}

function deletePerson(i) {
  data.splice(i, 1);
  localStorage.setItem('users', JSON.stringify(data));
  displayUsers(data);
}
