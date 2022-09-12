// A1
function Container(data) {
this.data = Array.isArray(data) ? data : [];

if(!Container.INSTANCES){
    Container.INSTANCES = [this];
} else {
    Container.INSTANCES.push(this);
}
}

Container.prototype.getAll = ( function ) {
    return this.data.slice(0);
};

Container.prototype.push = function (element) {
    this.data.push(element);
}

Container.getInstances = function () {
    return Container.INSTANCES || [];
}


console.dir(Container.getInstances());

var c1 = new Container();


