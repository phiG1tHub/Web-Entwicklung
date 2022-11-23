/*
*
* Erstellen Sie eine Konstruktorfunktion Container und implementieren Sie den dazugehörigen Prototypen. Ein
* Container-Objekt aggregiert verschiedene andere Objekte und verwaltet diese intern in einem Array.
* Anforderungen an Ihre Lösung sind:
* Bei der Erstellung eines Container-Objekts kann der initiale Inhalt optional angegeben werden.
* Ein neues Element kann mit der Methode push(element) hinzugefügt werden.
* Die Methode getAll() liefert den Inhalt des Containers als Array zurück. Achten Sie darauf, keine
* Referenz auf die interne Datenstruktur auszuliefern, sondern eine (flache) Kopie.
* Eine Methode getInstances() liefert ein Array mit allen bisher erstellten Container-Objekten.
* Stellen Sie durch entsprechende Testanweisungen fest, ob sich Ihre Implementierung an diese Spezifikation
* hält.
*/


function Container(inhalt){
    if( typeof inhalt === 'undefined' || typeof inhalt === null) {
        this.Objekts = [];
        Container.objects.push(this);
    } 
    else {
        this.Objekts = [];
        this.Objekts.push(inhalt);
        Container.objects.push(this);   
    }
}

Container.objects = [];

Container.prototype.push = function (element) {
    this.Objekts.push(element);
};

Container.prototype.getAll = function () {
    let ArrayCopy;
    return ArrayCopy = [...this.Objekts];
}; 

Container.prototype.getInstances = function () {
    return Container.objects;
};

var test = new Container();
test.push("Hello World");

console.log(test.getAll())


var ModuleContainer = ModuleContainer || ( function () {

function Container(inhalt){
    if( typeof inhalt === 'undefined' ) {
        this.Objekts = new Array();
        Container.objects.push(this);
    } 
    else {
        this.Objekts = new Array();
        this.Objekts.push(inhalt);
        Container.objects.push(this);   
    }
}

Container.objects = [];

Container.prototype.push = function (element) {
    this.Objekts.push(element);
};

Container.prototype.getAll = function () {
    var ArrayCopy= [...this.Objekts]
    return ArrayCopy;
}; 

Container.prototype.getInstances = function () {
    return Container.objects;
};

}())

