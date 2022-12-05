let currentplace = document.querySelector(".currentPlace");
let allPath = document.querySelectorAll("path");

allPath.forEach(currentPath => {
    currentPath.addEventListener("mouseover", _ => {
       allPath.forEach(c => c.classList.remove("active"));
       currentPath.classList.add("active");
       currentplace.innerText = currentPath.getAttribute("name");
    });
})

document.querySelector("[name='Yangon']").classList.add("active");
currentplace.innerText = "Yangon";
