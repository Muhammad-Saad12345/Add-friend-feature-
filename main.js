var isstatus = document.querySelector("h3")
var btn = document.querySelector("#add")
var check = 0

btn.addEventListener("click", function () {
    if (check == 0) {
        isstatus.innerHTML = "Friends"
        isstatus.style.color = "Green"
        btn.innerHTML = "Remove Friend"
        check = 1
    }
    else {
        isstatus.innerHTML = "Stranger"
        isstatus.style.color = "Red"
        btn.innerHTML = "Add Friend"
        check = 0
    }
})
