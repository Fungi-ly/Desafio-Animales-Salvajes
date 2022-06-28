const datos = (() => {
    const getInfo = async () => {
        const respuesta = await fetch('./../../animales.json');
        const data = await respuesta.json();
        return data
    };
    return { getInfo };
})();

export default datos;
