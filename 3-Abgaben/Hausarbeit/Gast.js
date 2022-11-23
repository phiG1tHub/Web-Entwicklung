export default class Guest{

    #name;
    #child;
    #status;

    constructor(name, child, status) {
        this.#name = name;
        this.#child = child;
        this.#status = status;
    };

    getName(){
        return this.#name;
    };
    hasChild(){
        return this.#child
    }
    getStatus(){
        return this.#status;
    }


}