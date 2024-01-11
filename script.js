var text = document.querySelector("h3");
var add = document.querySelector("#add");

let check = 0;
let canClick = true

add.addEventListener("click", function () {
    if (!canClick) {
        return; // If the button is not clickable, exit the function
    }

    canClick = false; // Set the button to not clickable
    setTimeout(function () {
        canClick = true; // Set the button to clickable after 1 second
    }, 1500);

    if (check == 0) {
        text.innerHTML = "Hello I am Your Friend";
        add.innerHTML = "Remove"
        add.style.backgroundColor = "green"
        check = 1
    } else {
        text.innerHTML = "Lets be friends";
        add.innerHTML = "Add Friend"
        add.style.backgroundColor = "red"
        check = 0
    }


    text.style.animation = "fadeOutIn 0.8s ease-in-out"; // Apply the fadeOutIn animation
    setTimeout(function () {
        text.style.animation = "none"; // Reset the animation after it completes
    }, 800);

});
