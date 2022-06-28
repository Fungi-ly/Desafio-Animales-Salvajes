import datos from './datos.js';

const animal = document.getElementById('animal');
const preview = document.getElementById('preview');

animal.addEventListener('change', async () => {
    const { animales } = await datos.getInfo();
    const animalName = animal.value;
    const animalSelect = animales.find(animal => animal.name === animalName)
    const animalImg = animalSelect.imagen;
    const imgTraer = `./assets/imgs/${animalImg}`
    previewImg(imgTraer);
})

const previewImg = url => {
    preview.innerHTML = '';
    preview.style.backgroundImage = `url(${url})`
}

export default {}