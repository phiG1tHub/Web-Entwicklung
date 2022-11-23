import Container from "./A3";

export default class TypedContainer extends Container {
    #type;

    constructor(type, ...elements) {
        super(...elements);
        this.#type = type;

    }

    push(element) {
        if(!element instanceof  this.#type)
            throw new TypeError("Type missmatch");

        super.push(element);
    }
}