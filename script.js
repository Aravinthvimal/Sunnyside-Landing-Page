const header_buttons = document.querySelectorAll(".header-link");
const mobile_header_buttons = document.querySelectorAll(".mobile-header-link");

function selected(n) {
    const selected_button = document.querySelector(".header button:nth-child(" + n + ")");
    
    header_buttons.forEach(button => {
        button.classList.remove("active")
        button.style.textTransform = "capitalize";
    });

    selected_button.classList.add("active");
}

function toggle_down() {
    var popup = document.getElementById("popup");
    
    if(popup.style.visibility == "hidden") {
        popup.style.visibility = "visible";
    }

    else {
        popup.style.visibility = "hidden";
    }
}

function mobile_selected(n) {
    const selected_button = document.querySelector(".popup a:nth-child(" + n + ")");
    
    mobile_header_buttons.forEach(button => {
        button.classList.remove("mobile-active")
        button.style.textTransform = "capitalize";
    });

    selected_button.classList.add("mobile-active");
}

