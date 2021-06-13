
// var avgTemp = [];

// avgTemp[0] = 31.9;
// avgTemp[1] = 35.9;
// avgTemp[2] = 42;
// avgTemp[3] = 38;
// avgTemp[4] = 31.9;

// console.log(avgTemp[4]);

// var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// for (var i = 0; i < daysOfWeek.length; i++){
//     console.log(daysOfWeek[i]);
// }
 

// var fibonacci = [];

// fibonacci[0] = 0;
// fibonacci[1] = 1;
// fibonacci[2] = 1;


// for (var i = 3; i < 20; i++){
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
// }

// console.log(fibonacci)



/***************************************************** */

// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10]

//Inserir novos elementos
// numbers.push(10)
// numbers.push(11)

//Inserir antes
    // numbers.unshift(-1)
    // numbers.unshift(-2)


//Removendo elementos no array com pop e shift
    // numbers.pop() 
    // numbers.shift()

//Remover elementos de maneira esp
    // numbers.splice(3, 2)
    // console.log(numbers)

//Inserir elelmentos em posicao esp
    // numbers.splice(3,0, 3,4)
    // console.log(numbers)




/********************************************************* */

/**************Array Bidmensionais************************ */

// var avgTempWeek = [];

// var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
// var avgTempWeek2 = [44, 23.2, 23, 27, 2.4, 49.6, 27];

// avgTempWeek[0] = avgTempWeek1;
// avgTempWeek[1] = avgTempWeek2;

// for (var i = 0; i < avgTempWeek.length; i++){
//     for (var j = 0; j < avgTempWeek[i].length; j++){
//         console.log(avgTempWeek[i][j])
//     }
// }

// console.log(avgTempWeek[0][2])
// console.log(avgTempWeek[1][2])

/************************fim******************************* */


/***************Array tridi*********************** */

var month = [];

var firstWeeks = []
var lastWeeks = []

var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
var avgTempWeek2 = [44, 23.2, 23, 27, 2.4, 49.6, 27];

var avgTempWeek3 = [65, 5.2, 76, 89, 90.4, 78.6, 98];
var avgTempWeek4 = [34, 45.2, 11, 232, 23.4, 45.6, 89];

firstWeeks = [avgTempWeek1, avgTempWeek2];
lastWeeks = [avgTempWeek3, avgTempWeek4];

month = [firstWeeks, lastWeeks];

for (var x = 0; x < month.length; x++){
    for (var y = 0; y < month[x].length; y++){
        for (var z = 0; z < month[x][y].length; z++){
            console.log(month[x][y][z])
        }
    }
}
