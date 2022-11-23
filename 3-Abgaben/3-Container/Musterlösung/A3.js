export default class Container {
    #data = [];
    constructor(...elements) {
        this.#data = [...elements];

        Container.#INSTANCES.push(this);
    }

    push (element) {
        this.#data.push(element);
    }

    getAll () {
        return this.#data.slice();
    }

    static  #INSTANCES

    static getInstances() {
        return Container.#INSTANCES.slice
    }
}