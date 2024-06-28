var externalDivContainer = document.getElementById("expose");
//Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

//Define the external HTML file you want to load
xhr.open("GET", "./headers/header.html", true);

//Define the callback function

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    //inject the content from external HTML file
    externalDivContainer.innerHTML = xhr.responseText;
  }
};

//send the request
xhr.send();
