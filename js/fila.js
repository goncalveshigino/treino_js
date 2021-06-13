

function Queue() {


    var items = [];

    this.enqueue = function (element) {
        //add um novo elemento
        items.push(element);

    }

     this.dequeue = function () {
        //remove um elemento
         return items.shift()
     }
    
     this.front = function () {
        //primeiro item
         return items[0]
     }
    
     this.isEmpty = function () {
        //add um novo elemento
         return items.length === 0;
     }
    
     this.size = function () {
        //tamanho da fila
         return items.length;
     }
      this.print = function () {
        console.log((items.toString()))
      }
    
}

var fila = new Queue();

fila.enqueue('Luis');
fila.enqueue('Higino');
fila.enqueue('Gonza')


fila.print()


fila.dequeue()
fila.print()
  