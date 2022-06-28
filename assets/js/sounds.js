import datos from './datos.js';

const getSound = async (animal) => {
    const { animales } = await datos.getInfo();
    const { sonido } = await animales.find(e => e.name === animal)
    return sonido;
}

export default getSound