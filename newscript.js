console.log("JS is working!");
colbtn = document.getElementById("ColBtn");
colbtn.addEventListener("click", function () {
    console.log("CollapseBtn clicked!");
    if (CollapseBtn.innerHTML == "Collapse") {
        CollapseBtn.innerHTML = "Expand";
        document.getElementById("CollapseDiv").style.display = "none";
    }
    else {
        CollapseBtn.innerHTML = "Collapse";
        document.getElementById("CollapseDiv").style.display = "block";
    }
});