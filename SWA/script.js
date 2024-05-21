document.getElementById("editBtn").addEventListener("click", function() {
    var newName = prompt("Enter your name:");
    var newAge = prompt("Enter your age:");
    var newLocation = prompt("Enter your location:");
    var newBio = prompt("Enter a short bio about yourself:");

    document.getElementById("name").innerText = newName;
    document.getElementById("age").innerText = newAge;
    document.getElementById("location").innerText = newLocation;
    document.getElementById("bio").innerText = newBio;
});