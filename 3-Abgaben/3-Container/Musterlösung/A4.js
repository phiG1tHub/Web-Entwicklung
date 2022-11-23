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


let c1 = new Container();
console.log(c1.getAll());


let c2 = new Container("A","B",1);
console.log(c2.getAll());

