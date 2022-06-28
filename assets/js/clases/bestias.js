import Animal from "./animal.js";

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    };

    Rugir() {
        this.getSonido();
    };
};

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    };

    Aullar() {
        this.getSonido();
    };
};

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    };

    Gruñir() {
        this.getSonido();
    };
};

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    };

    Sisear() {
        this.getSonido();
    };
};

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    };

    Chillar() {
        this.getSonido();
    };
};

export { Leon, Lobo, Oso, Serpiente, Aguila }