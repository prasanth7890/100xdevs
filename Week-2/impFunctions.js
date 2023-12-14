const input = [1, 2, 3, 4, 5];

function transform(i) {
    return i * 2;
}

// #### MAP ####

// Calls a defined callback function on each element of an array,
// and returns an array that contains the results.
const ans = input.map(transform);
console.log(ans);

// we can write map like this too.
const ans1 = input.map(function(i) {
    return i * 2;
});

console.log(ans1);


// ####### filtering #########

//The filter method calls the predicate function one time for each element in the array.
// Returns the elements of an array that meet the condition specified in a callback function.

function callback(n) {
    if(n%2 == 0) {
        return true;
    }
    else return false;
}

const result = input.filter(callback);
console.log(result); // returns filtered array (elements satisfied the condition of callback);


// as seen previously, we can write teh function inside filter method like below;
const res = input.filter((ele) => {
    if(ele%2===0) return true;
});

console.log(res)
