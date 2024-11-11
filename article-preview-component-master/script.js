// const btnShare = document.querySelector(".btnShare");
// const perfil = document.querySelector(".perfil");
// const share = document.querySelector(".share");

// document.querySelector(".btnShare").addEventListener("click", function () {
//     const perfil = document.querySelector(".perfil");
//     const shareButtons = document.querySelector(".share-buttons");

//     // Alternar la visibilidad de los elementos
//     perfil.style.display = perfil.style.display === "none" ? "flex" : "none";
//     shareButtons.style.display = shareButtons.style.display === "flex" ? "none" : "flex";
// });




// // Evento para alternar entre .perfil y .share
// btnShare.addEventListener("click", function () {
//     // Si el botón está en el contenedor perfil, muévelo a share
//     if (perfil.contains(btnShare)) {
//         perfil.style.display = "none";
//         share.style.display = "flex";
//         share.appendChild(btnShare);
//     } else {
//         // Si el botón está en el contenedor share, muévelo a perfil
//         share.style.display = "none";
//         perfil.style.display = "flex";
//         perfil.appendChild(btnShare);
//     }
// });


const btnShare = document.querySelector(".btnShare");
const perfil = document.querySelector(".perfil");
const share = document.querySelector(".share");
const shareButtons = document.querySelector(".share-buttons");

// Evento para alternar entre .perfil y .share según el tamaño de la pantalla
btnShare.addEventListener("click", function () {
    if (window.innerWidth <= 500) {
        // En móvil: muestra .share y oculta solo .perfil, manteniendo visible .btnShare
        perfil.style.display = perfil.style.display === "none" ? "flex" : "none";
        shareButtons.style.display = shareButtons.style.display === "flex" ? "none" : "flex";
        if (perfil.contains(btnShare)) {
            perfil.style.display = "none";
            share.style.display = "flex";
            share.appendChild(btnShare);
        } else {
            // Si el botón está en el contenedor share, muévelo a perfil
            share.style.display = "none";
            perfil.style.display = "flex";
            perfil.appendChild(btnShare);
        }
    } else {
        // En escritorio: despliega .share sin ocultar el botón
        share.classList.toggle("show-share");
    }
});

// Asegura que el estado de .perfil y .share se restablezcan correctamente al redimensionar la ventana
window.addEventListener("resize", () => {
    if (window.innerWidth > 501) {
        perfil.style.display = "flex";
        share.classList.remove("show-share-mobile");
        shareButtons.style.display = "none"; // Oculta las opciones de compartir en escritorio hasta que se haga clic
    } else {
        share.classList.remove("show-share");
        shareButtons.style.display = "none"; // En móvil, inicia oculto
    }
});

