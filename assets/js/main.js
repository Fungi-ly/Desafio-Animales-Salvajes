import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/bestias.js";
import img from "./img.js";
import getSound from "./sounds.js"

const animales = [];


const name = document.getElementById('animal');
const edad = document.getElementById('edad');
const comentarios = document.getElementById('comentarios');
const registrar = document.getElementById('btnRegistrar');
const tabla = document.getElementById('Animales')





registrar.addEventListener('click', async (event) => {
    event.preventDefault();
    const imgBg = document.getElementById('preview').style.backgroundImage;
    const urlImg = imgBg.slice(5, imgBg.length - 2);
    if (funcion(name, edad, comentarios, urlImg)) {

        const playSonido = `./assets/sounds/${await getSound(name.value)}`
        let animal;

        window.playerSound = sound => {
            const sonido = new Audio(sound);
            sonido.play();
        };


        switch (name.value) {
            case 'Leon':
                animal = new Leon(name.value, edad.value, urlImg, comentarios.value, playSonido)
                break;
            case 'Lobo':
                animal = new Lobo(name.value, edad.value, urlImg, comentarios.value, playSonido)
                break
            case 'Oso':
                animal = new Oso(name.value, edad.value, urlImg, comentarios.value, playSonido)
                break;
            case 'Serpiente':
                animal = new Serpiente(name.value, edad.value, urlImg, comentarios.value, playSonido)
                break;
            case 'Aguila':
                animal = new Aguila(name.value, edad.value, urlImg, comentarios.value, playSonido)
                break;
        };
        console.log(animal);
        animales.push(animal);
        tarjetas(animales);
        clearForm(name, edad, comentarios, imgBg);


    } else {
        alert('Debe completar todos los datos para registrar.')
    }
})

const funcion = (nombre, edad, comentarios, urlImg) => {
    if ((nombre.value !== "" && nombre.value !== 'Seleccione un animal') && (edad.value !== "" && edad.value !== 'Seleccione un rango de años') && comentarios.value !== "" && urlImg !== "") {
        return true;
    } else {
        return false;
    }
}

const clearForm = (nombre, edad, comentarios, imgBg) => {
    nombre.value = 'Seleccione un animal'
    edad.value = 'Seleccione un rango de edad'
    comentarios.value = ''
    const defaultImgBg = document.getElementById('preview')
    defaultImgBg.style.backgroundImage = 'url("./assets/imgs/lion.svg")'
}


const tarjetas = arrayAnimales => {
    tabla.innerHTML = ''
    console.log(arrayAnimales);

    arrayAnimales.forEach((animal, iterado) => {
        tabla.innerHTML += `
            <div class="card text-white bg-secondary m-3 center">
            <img type ="button "style="width: 250px;" src="${animal._img}" class="${iterado} card-img-top" data-bs-toggle="modal" data-bs-target="#${animal._nombre}-${iterado}">
            <div class="card-body py-1" onclick="playerSound('${animal._sonido}')">
            <a href="#"><img class="py-1" height="40px" src="./assets/imgs/audio.svg"/></a>
            </div>
            </div>
        `
    });
    document.querySelectorAll('.card img.card-img-top').forEach(
        (element) => {
            element.addEventListener('click', modal);
        }
    );
}

const modal = e => {
    console.log('este es el elemento HTML', e.target);
    const indice = e.target.classList[0];
    let animal = animales[indice]
    console.log('animal:', animal);
    const modalBody = document.getElementsByClassName("modal-body")[0];
    modalBody.innerHTML =
        // uso getElement() y _NombreElemento  para rescatar datos 
        `
    <img src="${animal.getImg()}" style="width: 400px" class="img-fluid" />
    <p class="text-white text-center pt-1" style="font-size: 12px"> ${animal.getNombre()}</p>
    <p class="text-white text-center" style="font-size: 12px">${animal.getEdad()}</p>
    <hr>
    <p class="text-white text-center" style="font-size: 12px">${animal.getComentarios()}</p>
    `;
    $('#exampleModal').modal('toggle');
}


