
let menuvisible = false
//funcion para mostrar y ocultar el menu
function mostrarOcultarmenu() {
    if (menuvisible) {
        document.getElementById("nav").classList = "";
        menuvisible = false;
    }
    else {
        document.getElementById("nav").classList = "responsive";
        menuvisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList("")
    menuvisible = false
}

//funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skill = document.getElementById("skills")
    var distancia_skill = window.innerHeight - skill.getBoundingClientRect().top
    if (distancia_skill >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript")
        habilidades[1].classList.add("springboot")
        habilidades[2].classList.add("java")
        habilidades[3].classList.add("mysql")
        habilidades[4].classList.add("hibernate")
        habilidades[5].classList.add("htmlcss")
        habilidades[6].classList.add("mockito")
        habilidades[7].classList.add("bootstrap")
        habilidades[8].classList.add("mongodb")
        habilidades[9].classList.add("angular")
        habilidades[10].classList.add("git")


    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.anscroll = function () {
    efectoHablidades();
}

function donwload() {
    const donwloadIntance = document.createElement('a')
    donwloadIntance.href = 'htttp://localhost:4200/assets/CV-CONTRERAS.pdf';
    donwloadIntance.target = '_blank'
    donwloadIntance.download = 'curriculum'



    // agrega al dom un trozo de codigo en este caso en el body , ponemos nuestra instancia de descarga
    document.body.appendChild(donwloadIntance)
    donwloadIntance.click();
    document.body.removeChild(donwloadIntance)

}

 const formulario = document.getElementById('formulario').addEventListener('submit',capturarFormulario)
function capturarFormulario(e){
    let email = document.getElementById('email').value;
    let nombre = document.getElementById('nombre').value;
    let telefono = document.getElementById('telefono').value;
    let asunto = document.getElementById('asunto').value;
    let mensaje = document.getElementById('mensaje').value;
    console.log(nombre)
    console.log(email)
    console.log(asunto)
    console.log(telefono)
    console.log(mensaje)

    
}



