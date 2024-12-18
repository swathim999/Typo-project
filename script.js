document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector("#register-form");
    const loginForm = document.querySelector("#login-form");

    const handleResponse = (response, messageDiv) => {
        response.text().then((message) => {
            messageDiv.textContent = message;
            messageDiv.style.color = response.ok ? "green" : "red";
        });
    };

    // Register functionality
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const username = document.querySelector("#register-username").value;
            const email = document.querySelector("#register-email").value;
            const password = document.querySelector("#register-password").value;

            const messageDiv = document.querySelector("#register-message");

            fetch("http://localhost:3000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
            }).then((response) => handleResponse(response, messageDiv));
        });
    }

    // Login functionality
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const username = document.querySelector("#login-username").value;
            const password = document.querySelector("#login-password").value;

            const messageDiv = document.querySelector("#login-message");

            fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            }).then((response) => handleResponse(response, messageDiv));
        });
    }
});

// Function to validate the form inputs before submitting the data
function validateForm() {
    var name = document.getElementById("Username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    if (name === "") {
      alert("Username is required");
      return false;
    }
  
    if (email === "") {
      alert("Email is required");
      return false;
    } else if (!email.includes("@")) {
        alert("Invalid email address");
        return false;
      }
  
    if (password === "") {
      alert("Password is required");
      return false;
    }
    return true;
  }
  
  // Function to display the data in the table
  function showData() {
    var peopleList;
    if (localStorage.getItem("peopleList") === null) {
      peopleList = [];
    } else {
      peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
  
    var html = "";
    peopleList.forEach(function (element, index) {
      html += "<tr>";
      html += "<td>" + element.name + "</td>";
      html += "<td>" + element.email + "</td>";
      html += "<td>" + element.password + "</td>";
      html +=
        '<td><button onclick="deleteData(' +
        index +
        ')" class="btn btn-danger">Delete</button>' +
        '<button onclick="editData(' +
        index +
        ')" class="btn btn-warning m-2">Edit</button></td>';
      html += "</tr>";
    });
  
    document.querySelector("#crudTable tbody").innerHTML = html;
  }
  
  // Load all data when the document or the page reloads
  window.onload = showData;
  
  // Function to add new data to localStorage
  function AddData() {
    if (validateForm() === true) {
      var name = document.getElementById("Username").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
  
      var peopleList;
      if (localStorage.getItem("peopleList") === null) {
        peopleList = [];
      } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
      }
  
      peopleList.push({
        name: name,
        email: email,
        password: password,
      });
  
      localStorage.setItem("peopleList", JSON.stringify(peopleList));
      showData();
  
      // Clear the form
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    }
  }
  
  // Function to delete data from localStorage
  function deleteData(index) {
    var peopleList;
    if (localStorage.getItem("peopleList") === null) {
      peopleList = [];
    } else {
      peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
  
    peopleList.splice(index, 1);
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
  }
  
  // Function to edit data from the table and load it into the form
  let updateIndex = -1; // Global variable to track the row being edited
  function editData(index) {
    var peopleList;
    if (localStorage.getItem("peopleList") === null) {
      peopleList = [];
    } else {
      peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
  
    // Fill the form fields with the selected data
    document.getElementById("name").value = peopleList[index].name;
    document.getElementById("email").value = peopleList[index].email;
    document.getElementById("password").value = peopleList[index].password;
  
    // Save the current index for the update operation
     updateIndex = index;
  
    // Hide the "Add Data" button and show the "Update Data" button
    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "inline-block";
  }
  
  // Function to update data in localStorage
  function updateData() {
    if (validateForm() === true) {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

  
      var peopleList;
      if (localStorage.getItem("peopleList") === null) {
        peopleList = [];
      } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
      }
  
      // Update the specific record
      peopleList[updateIndex] = {
        name: name,
        email: email,
       password: password,
      };
  
      localStorage.setItem("peopleList", JSON.stringify(peopleList));
      showData();
  
      // Clear the form and reset the updateIndex
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      updateIndex = -1;
  
      // Swap back the buttons
      document.getElementById("submit").style.display = "inline-block";
      document.getElementById("update").style.display = "none";
    }
  }
