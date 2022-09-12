//A4 

function TypedContainer(type, data) {
    container.call(this, []);

    if(!type) {
        throw new Error('No prototyped');
    }

    this.type = type;

    if (data) {
        for (var i =0, n= data.length; i<n;i++){
            this.push(data[i]);
        }
    }
}

Typed Container.prototype= Object.create(Container.prototype);
TypedContainer.prototype.constructor = TypedContainer;

TypedContainer.push.prototype.push = function (element) {
    console.log("called push of TypedContainer");
    if(!)

}






module.exports = {
    Container:Container,
    TypedContainer: TypedContainer;
}