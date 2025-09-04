// Start sidebar MenuLinks
let sidebarMenuLinks = document.querySelectorAll("#sidebarMenuLinks li")

if (localStorage.getItem("sidebarMenuLinks")) {
    sidebarMenuLinks.forEach((li) => {
        li.classList.remove("active");
    })
    document.querySelector(`[data-asidebar='${localStorage.getItem("sidebarMenuLinks")}']`).classList.add("active");
}
sidebarMenuLinks.forEach((li) => {
    li.addEventListener("click", (e) => {
        sidebarMenuLinks.forEach((li) => {
            li.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
        localStorage.setItem("sidebarMenuLinks", e.currentTarget.dataset.asidebar);
    })
})

// End sidebar MenuLinks
// Start nav menu icon
let navMenuIcon = document.querySelector(".bx-menu");
navMenuIcon.onclick = function () {
    document.querySelector("#sidebar").classList.toggle("active");
}
// End nav menu icon
// Start Dark Mode
let inputCheckbox = document.querySelector("[type='checkbox']");
if (localStorage.getItem("dark") === "done") {
    document.documentElement.classList.add("dark");
    inputCheckbox.setAttribute("checked", true);
}
inputCheckbox.onclick = function() {
    document.documentElement.classList.toggle("dark");
    const isConatins = document.documentElement.classList.contains("dark");
    localStorage.setItem("dark", isConatins ? "done": "notDone");
}
// End Dark Mode
// Start notificationIcon 
let notificationIcon = document.querySelector("#notificationIcon");
let profileIcon = document.querySelector("#profileIcon");
notificationIcon.onclick = function () {
    document.querySelector("#notificationMenu").classList.toggle("active");
    document.querySelectorAll("#notificationMenu li").forEach((li) => {
        li.addEventListener("click", () => {
            document.querySelector("#notificationMenu").classList.remove("active");
        })
    })
}
profileIcon.onclick = function () {
    document.querySelector("#profileMenu").classList.toggle("active");
    document.querySelectorAll("#profileMenuUl li").forEach((li) => {
        li.addEventListener("click", () => {
            document.querySelector("#profileMenu").classList.remove("active");
        })
    })
}
// End notificationIcon 
// Start display-none-search 
let display_none_search = document.querySelector(".display-none-search");
display_none_search.onclick = function () {
    document.querySelector("#navSearch").classList.toggle("active"); 
    display_none_search.classList.toggle("active");
}
// End display-none-search 
// Start window on open => reload
window.onload = function () {
    if (!sessionStorage.getItem("reloaded")) {
        sessionStorage.setItem("reloaded", "true");
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }
}
// End window on open => reload
