
//===========================================================================//
                        /* ~~~ # 1 ~~~ */ 
//===========================================================================//

// var person = {

//     name: 'chris',
//     age : 29
// };

function getName(obj) {

    return obj.name;
}

// -> Victory


//===========================================================================//
                        /* ~~~ # 2 ~~~ */ 
//===========================================================================//

// var letters = ['what', 'happened', 'to', 'my', 'function'];

function totalLetters(arr) {

    var count = 0;

    for (var i = 0; i < arr.length; i++) {
        
        count += arr[i].length;
    };

    return count;
}

// -> Victory


//===========================================================================//
                        /* ~~~ # 3 ~~~ */ 
//===========================================================================//

function keyValue(key, value) {

    var newObj = {};

    newObj[key] = value;

    return newObj;
}

// -> Victory


//===========================================================================//
                        /* ~~~ # 4 ~~~ */ 
//===========================================================================//

function negativeIndex(array, negIndex) {

    return array[ array.length + negIndex ];
}

negativeIndex(['a', 'b', 'c', 'd', 'e'], -2);
negativeIndex(['jerry', 'sarah', 'sally'], -1);


//===========================================================================//
                        /* ~~~ # 5 ~~~ */ 
//===========================================================================//

//This one can only deal with 1 'm/M' in a row

// function removeM(string) {

//     var arr = string.split('');

//     for (var i = 0; i < arr.length; i++) {
        
//         if ( arr[i] === "m" || arr[i] === "M") {

//             arr.splice(i, 1);
//         }
//     }

//     return arr.join('');
// }

// How about using some freaking built in functions like an actual real, live programmer?

function removeM(string) {

    return string.toLowerCase().split('').filter(function(l) {

        return l !== 'm';

    }).join('');

}

