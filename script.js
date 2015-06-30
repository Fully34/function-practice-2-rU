
//===========================================================================//
                        /* ~~~ # 1 ~~~ */ 
//===========================================================================//

// var person = {

//     name: 'chris',
//     age : 29
// };

function getName(obj) {

    // super simple object value retrieval
    return obj.name;
}

// -> Victory


//===========================================================================//
                        /* ~~~ # 2 ~~~ */ 
//===========================================================================//

// var letters = ['what', 'happened', 'to', 'my', 'function'];

function totalLetters(arr) {

    // Set count variable to keep track of how many characters we come across
    var count = 0;

    // Loop thru array
    for (var i = 0; i < arr.length; i++) {
        
        // add the character count of each element to "count" variable
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

    // checking the array element that is negIndex from the end of the array
    return array[ array.length + negIndex ];
}

negativeIndex(['a', 'b', 'c', 'd', 'e'], -2);
negativeIndex(['jerry', 'sarah', 'sally'], -1);

// -> Victory

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

    // make string all lowercase letters -> split into array -> filter that array by asking if each element is not equal to 'm' -> .filter(); returns an array containing all elements who were not equal to 'm'
    return string.toLowerCase().split('').filter(function(l) {

        return l !== 'm';

    }).join(''); // -> Join the array back into a string

}

// -> Victory

//===========================================================================//
                        /* ~~~ # 6 ~~~ */ 
//===========================================================================//

// var myObject = { a: 10, b: 20, c: 30 };
// var mySecondObject = { firstName: 'pork', lastName: 'chops' };


function printObject(obj) {

    // Simple shit
    for (key in obj) {

        console.log(key + " : " + obj[key])
    }
}

// -> Victory

//===========================================================================//
                        /* ~~~ # 7 ~~~ */ 
//===========================================================================//

function vowels(string) {

    //create vowels array
    var vowels = 'aeiouy'.split('');

    // Filtering an inline array and checking if each element is in the vowels array 
    return string.toLowerCase().split('').filter(function(a){

        return ( vowels.indexOf(a) > - 1 ); // -> if this eval's to true, it means that the element is in the vowels array and will be returned by the .filter(); method
    })
}

// -> Victory

//===========================================================================//
                        /* ~~~ # 8 ~~~ */ 
//===========================================================================//


// twins(['a', 'a', 'b', 'b', 'c', 'c'])
// twins(['a', 'a', 'b', 'c', 'd', 'd'])
// twins(['a', 'a', 'b', 'z'])
// twins(['a', 'a', undefined])

function twins(arr) {

    // return false immediately if the array has an odd length
    if (arr.length % 2 !== 0) {

        return false;
    }

    // Loop thru array starting at 0th element 
    for (var i = 0; i < arr.length; i += 2) {

        if ( arr[i] !== arr[i + 1] ) {

            // if the element is not equal to subsequent element, we stop looping
            return false;
        }

        //If the element is equal to the subsequent element, we increment the index by 2 to skip over the subsequent element
    }

    // If we don't get proven false anywyere else, we can assum that we have an array of twins
    return true;
}

// -> Victory

//===========================================================================//
                        /* ~~~ # 9 ~~~ */ 
//===========================================================================//

// or([false, false, true, false])
// or([false, false, false])
// or([])


function or(arr) {

    // return false immediately if array doesn't have any contents
    if ( arr.length === 0) {

        return false;
    }

    // loop thru array
    for (var i = 0; i < arr.length; i++) {

        if ( arr[i] ) {

            return true;
        }
    }

    return false;
}

// -> Victory

//===========================================================================//
                        /* ~~~ # 10 ~~~ */ 
//===========================================================================//


// unique(['a', 'b', 'a', 'c', 'd', 'd'])
// unique(['todd', 'avery', 'maria', 'avery'])

function unique(arr) {

    var uniqueObj = {};

    var uniqueArr = [];

    // Loop thru array, add each value as a key in unique object
    for (var i = 0; i < arr.length; i++) {
        
        uniqueObj[ arr[i] ] = null;
    }

    // Loop thru object -> push each key to uniqueArr
    for (key in uniqueObj) {

        uniqueArr.push(key);
    }

    return uniqueArr;
}

// -> Victory
