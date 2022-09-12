require("./A1 und 2");


/*


/FA0001/ Bei der Erstellung eines Container-Objekts kann der initiale Inhalt optional angegeben werden.
/FA0002/ Ein neues Element kann mit der Methode push(element) hinzugefügt werden.
/FA0003/ Die Methode getAll() liefert den Inhalt des Containers als Array zurück. Achten Sie darauf, keine
         Referenz auf die interne Datenstruktur auszuliefern, sondern eine (flache) Kopie.
/FA0004/ Eine Methode getInstances() liefert ein Array mit allen bisher erstellten Container-Objekten.


*/

describe('Container', function() {
  describe('Constructor', function() {
    it('/FA0001/ should return an empty Container', function() {
      assert.equal();
    });
  });
});


describe('Container', function() {
  describe('Constructor', function() {
    it('/FA0001/ should return an Container with one element', function() {
      var test = new Container;
      assert.equal();
    });
  });
});


describe('Container', function() {
  describe('push()', function() {
    it('/FA0002/ The lenght of a container with one element is one.', function() {  
        var test = new Container();
        test.push("Hello World");
        assert.equal(length(test) === 1);
    });
  });
});


describe('Array', function() {
  describe('getAll()', function() {
    it('/FA0003/ return type should be array', function() {
      assert.equal();
    });
  });
});


describe('Array', function() {
  describe('getInstances()', function() {
    it('/FA0004/ ', function() {
      assert.equal();
    });
  });
});