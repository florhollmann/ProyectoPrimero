

/* -------------------FUNCION SLIDES CAROUSEL ======-----*/

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}

/*Funcion --------------------BUSCAR POR TECLADO ------------------------------*/
function buscar() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

/*-----------------POP UP*-------=----------------------*/

$(window).load(function () {
    $(".trigger_popup_fricc").click(function () {
        $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function () {
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function () {
        $('.hover_bkgr_fricc').hide();
    });
});

function clickDelA(e) {
    e.preventDefault()

    let div = document.createElement("div")
    let p = document.createElement("p")
    let aceptar = document.createElement("button")
    let cancelar = document.createElement("button")

    //div.className = "popup"
    div.classList.add("popup")
    //Nodo.classList.add()
    //Nodo.classList.remove()
    //Nodo.classList.toggle()


    p.innerText = "Esta seguro que quiere salir de esta pagina?"
    aceptar.innerText = "Aceptar"
    aceptar.addEventListener("click", redirigir)
    //aceptar.id = "aceptar"
    cancelar.innerText = "Cancelar"
    cancelar.addEventListener("click", borrarElemento)
    //cancelar.id = "cancelar"

    div.appendChild(p)
    div.appendChild(aceptar)
    div.appendChild(cancelar)

    document.body.appendChild(div)
    //Event.preventDefault() : Detiene el comportamiento por default de cualquier nodo
    console.log("click del a!")
}