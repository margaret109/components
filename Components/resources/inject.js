import { externalDivContainer, componentFiles } from "./components.js";

// Function to fetch and inject components
function injectComponents(index) {
  if (index < componentFiles.length) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", componentFiles[index], true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Create a new div element for each component
        var componentDiv = document.createElement("div");
        componentDiv.innerHTML = xhr.responseText;

        // Append the div to the container
        externalDivContainer.appendChild(componentDiv);

        // Continue to the next component
        injectComponents(index + 1);
      }
    };
    xhr.send();
  }
}

// Start injecting components
injectComponents(0);
