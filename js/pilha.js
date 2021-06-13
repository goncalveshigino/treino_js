// function Stack() {

//     var items = [];


//     this.push = function ( element) {
        
//         //Add new element
//         items.push(element)
//     }


//     this.pop = function () {
        
//         //Remover no topo da pilha
//         return items.pop();
//     }

//     this.peek = function () {
        
//         //Devolve o elemento que esta no topo da pilha 
//         return items[items.length - 1];
//     }

//     this.isEmpty = function () {
        
//         //Verificar se esta vazia ou nao
//         return items.length === 0;
//     }


//     this.clear = function () {
        
//         //Limpar
//         items = [];
//     }


//     this.size = function () {
        
//         //Informar tamanho da pilha
//         return items.length;
//     }


//     this.print = function () {
        
//         // Imprime a pilha no console
//         console.log(items.toString());
//     }

// }

//     var pilha = new Stack();


// console.log(pilha.isEmpty())

// pilha.push(5)
// pilha.push(8)
// pilha.push(11)
// pilha.push(15)

// pilha.pop()
// pilha.print()
// pilha.pop()
// pilha.print()
// pilha.pop()
// pilha.print()
// pilha.pop()
// pilha.print()

// pilha.print()

// console.log(pilha.isEmpty())




// function decBin(decNumber) {
    
//     var restStack = [];
//     var rest;
//     var binaryString = '';

//     while (decNumber > 0) {//1
//         rest = Math.floor(decNumber % 2)//1
//         restStack.push(rest)//[1,1,1,0,1]
//         decNumber = Math.floor(decNumber / 2)//0
//     }
    
//     while (restStack.length > 0) {
//         binaryString +=  restStack.pop().toString()//10111
//     }

//     return binaryString;
// }

// console.log(decBin(30))

function baseConverter(decNumber, base) {
    var restStack = [];
    var rest;
    var baseString = '';
    var digits = '0123456789ABCDEF';
    
    while (decNumber > 0) {//7
        rest = Math.floor(decNumber % base);// 7
        restStack.push(rest)//[11, 7]
        decNumber = Math.floor(decNumber / base)//0
    }

    while (restStack.length > 0) {//2
        baseString += digits[restStack.pop()]
    }

    return baseString;
}

console.log(baseConverter(123,16))
 