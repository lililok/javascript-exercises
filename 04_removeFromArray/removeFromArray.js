const removeFromArray = function(array, ...nums) {
    for (let i = 0; i < array.length; i++) {
        if (nums.includes(array[i])) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
