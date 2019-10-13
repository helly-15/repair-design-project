import "main.css";

const yellowButton = document.getElementById("yellowArrow");
yellowButton.addEventListener("click", ()=>{
    const image = document.getElementById("first-position")
    image.className="second-position"
    const image2 = document.getElementById("second-position")
    image2.className = "second-position"
})