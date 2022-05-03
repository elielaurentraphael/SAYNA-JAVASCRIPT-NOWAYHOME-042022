let btn5 = document.getElementsByClassName("btn5");

console.log(btn5);

for (let i = 0; i < btn5.length; i++) {
    btn5[i].addEventListener("mouseover", () => {
        btn5[i].style.backgroundColor = "var(--white-ad-color)";
        btn5[i].style.color = "var(--primary-ad-color";
        btn5[i].style.fontWeight = "bold";
        btn5[i].style.boxShadow = "5px 5px 30px white";
        btn5[i].style.borderColor = "var(--white-ad-color";
    })
    btn5[i].addEventListener("mouseout", () => {
        btn5[i].style.backgroundColor = "var(--primary-ad-color";
        btn5[i].style.color = "var(--white-ad-color)";
        btn5[i].style.fontWeight = "normal";
        btn5[i].style.boxShadow = "none";
    })
}