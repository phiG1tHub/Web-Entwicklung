let uebung3 = (function (){
    function Container(...elements) { // restparameter
        this._data = [...elements];


        Container._INSTANCES.push(this);
        //spread parameter
    }

    Container.prototype.push = function (element) {
        this._data.push(element);
    }

    Container.prototype.getAll = function () {
        return this._data.slice();
    };

    Container._INSTANCES =[];

    Container.getInstances = function () {
        return Container._INSTANCES.slice();
    };

    return { Container }
}
)();