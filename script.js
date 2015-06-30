
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


//===========================================================================//
                        /* ~~~ # 6 ~~~ */ 
//===========================================================================//

var myObject = { a: 10, b: 20, c: 30 };
var mySecondObject = { firstName: 'pork', lastName: 'chops' };

function printObject(obj) {

    for (key in obj) {

        console.log(key + " : " + obj[key])
    }
}


//===========================================================================//
                        /* ~~~ # 7 ~~~ */ 
//===========================================================================//

function vowels(string) {

    var vowels = 'aeiouy'.split('');

    var container = [];

    return string.toLowerCase().split('').filter(function(a){

        return ( vowels.indexOf(a) > - 1 );
    })
}



//===========================================================================//
                        /* ~~~ # 8 ~~~ */ 
//===========================================================================//


// twins(['a', 'a', 'b', 'b', 'c', 'c'])
// twins(['a', 'a', 'b', 'c', 'd', 'd'])
// twins(['a', 'a', 'b', 'z'])
// twins(['a', 'a', undefined])

function twins(arr) {


    if (arr.length % 2 !== 0) {

        return false;
    }

    for (var i = 0; i < arr.length; i += 2) {

        if ( arr[i] !== arr[i + 1] ) {

            return false;
        }
    }

    return true;
}


//===========================================================================//
                        /* ~~~ # 9 ~~~ */ 
//===========================================================================//

// or([false, false, true, false])
// or([false, false, false])
// or([])


function or(arr) {

    if ( arr.length === 0) {

        return false;
    }

    for (var i = 0; i < arr.length; i++) {

        if ( arr[i] ) {

            return true;
        }
    }

    return false;
}


//===========================================================================//
                        /* ~~~ # 10 ~~~ */ 
//===========================================================================//


// unique(['a', 'b', 'a', 'c', 'd', 'd'])
// unique(['todd', 'avery', 'maria', 'avery'])

function unique(arr) {

    var uniqueObj = {};

    var uniqueArr = [];

    // Loop thru array
    for (var i = 0; i < arr.length; i++) {
        
        uniqueObj[ arr[i] ] = null;
    }

    for (key in uniqueObj) {

        uniqueArr.push(key);
    }

    return uniqueArr;
}

