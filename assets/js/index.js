// Sur les boutons, ajouter un effet “hover” lorsque la souris survole l’élément : inversion
// des couleurs du bouton (fond + texte), effet de surbrillance autour du bouton et texte
// avec des traits plus épais.


let btna = document.getElementsByClassName("btna");

console.log(btna);

for (let i = 0; i < btna.length; i++) {
    btna[i].addEventListener("mouseover", () => {
        btna[i].style.backgroundColor = "var(--trans-ad-color)";
        btna[i].style.color = "var(--white-ad-color";
        btna[i].style.fontWeight = "bold";
        btna[i].style.boxShadow = "5px 5px 30px white";
        btna[i].style.borderColor = "var(--white-ad-color";
    })
    btna[i].addEventListener("mouseout", () => {
        btna[i].style.backgroundColor = "var(--white-ad-color";
        btna[i].style.color = "var(--primary-ad-color)";
        btna[i].style.fontWeight = "normal";
        btna[i].style.boxShadow = "none";
    })
}


let btno = document.getElementsByClassName("btno");

console.log(btno);

for (let i = 0; i < btno.length; i++) {
    btno[i].addEventListener("mouseover", () => {
        btno[i].style.backgroundColor = "var(--white-ad-color)";
        btno[i].style.color = "var(--primary-ad-color";
        btno[i].style.fontWeight = "bold";
        btno[i].style.boxShadow = "5px 5px 30px white";
        btno[i].style.borderColor = "var(--white-ad-color";
    })
    btno[i].addEventListener("mouseout", () => {
        btno[i].style.backgroundColor = "var(--trans-ad-color)";
        btno[i].style.color = "var(--white-ad-color)";
        btno[i].style.fontWeight = "normal";
        btno[i].style.boxShadow = "none";
    })
}


let btnn = document.getElementsByClassName("btnn");

console.log(btnn);

for (let i = 0; i < btnn.length; i++) {
    btnn[i].addEventListener("mouseover", () => {
        btnn[i].style.backgroundColor = "var(--white-ad-color";
        btnn[i].style.color = "var(--blue-color";
        btnn[i].style.fontWeight = "bold";
        btnn[i].style.boxShadow = "5px 5px 30px white";
        btnn[i].style.borderColor = "var(--white-ad-color";
    })
    btnn[i].addEventListener("mouseout", () => {
        btnn[i].style.backgroundColor = "var(--trans-ad-color)";
        btnn[i].style.color = "var(--white-ad-color)";
        btnn[i].style.fontWeight = "normal";
        btnn[i].style.boxShadow = "none";
    })
}


let btn3 = document.getElementsByClassName("btn3");

console.log(btn3);

for (let i = 0; i < btn3.length; i++) {
    btn3[i].addEventListener("mouseover", () => {
        btn3[i].style.backgroundColor = "var(--black-ad-color)";
        btn3[i].style.color = "var(--white-ad-color";
        btn3[i].style.fontWeight = "bold";
        btn3[i].style.boxShadow = "5px 5px 30px white";
        btn3[i].style.borderColor = "var(--white-ad-color";
    })
    btn3[i].addEventListener("mouseout", () => {
        btn3[i].style.backgroundColor = "var(--white-ad-color";
        btn3[i].style.color = "var(--black-ad-color)";
        btn3[i].style.fontWeight = "normal";
        btn3[i].style.boxShadow = "none";
    })
}


let btn4 = document.getElementsByClassName("btn4");

console.log(btn4);

for (let i = 0; i < btn4.length; i++) {
    btn4[i].addEventListener("mouseover", () => {
        btn4[i].style.backgroundColor = "var(--white-ad-color)";
        btn4[i].style.color = "var(--primary-ad-color";
        btn4[i].style.fontWeight = "bold";
        btn4[i].style.boxShadow = "5px 5px 30px white";
        btn4[i].style.borderColor = "var(--white-ad-color";
    })
    btn4[i].addEventListener("mouseout", () => {
        btn4[i].style.backgroundColor = "var(--primary-ad-color";
        btn4[i].style.color = "var(--white-ad-color)";
        btn4[i].style.fontWeight = "normal";
        btn4[i].style.boxShadow = "none";
    })
}


// Dans le header les rubriques du menu doivent être surligné lorsque la souris survole
// l’élément.

let menu = document.querySelectorAll("li");

menu.forEach(function(li) {
    li.addEventListener("mouseover", () => {
        li.style.textDecoration = "line-through";
    })
    li.addEventListener("mouseout", () => {
        li.style.textDecoration = "none";
    })
})

// Tous les titres du site (avec la police Far From Home) doivent 
// de la gauche vers leur place (à droite), durée du mouvement: 6 secondes. 

$(document).ready(function() {
    $(".box").animate({ left: "+=60%" }, 6000);
    // 1s après, Les sous-titres doivent apparaître progressivement
    // l'opacité varie de 0% à 100% durant 20s
    setTimeout($(".description").fadeIn(20000, "swing"), 1000);
})

$(document).ready(function() {
    $(".boxa").animate({ left: "+=60%" }, 6000);
})

// Animation du texte MARVEL

$(document).ready(function() {
    $("#marveltext").animate({ left: "+=95%" }, 6000);
})

// Animation de l'image MARVEL et de l'image SPIDERMAN

$(document).ready(function() {
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        $("#marvelimage").css("top", scroll + "px");
        console.log(scroll);
    })

})