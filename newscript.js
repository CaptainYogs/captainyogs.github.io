console.log("JS is working!");
const colbtn = document.getElementById("ColBtn");
let collapse = false;
colbtn.addEventListener("click", function () {
    const navname = document.querySelectorAll(".navname");
    if (!collapse) {
        collapse = true;
        for (let i = 0; i < navname.length; i++) {
            navname[i].style.display = "none";
        }
    } else {
        collapse = false;
        for (let i = 0; i < navname.length; i++) {
            navname[i].style.display = "inline-block";
        }
    }
});
