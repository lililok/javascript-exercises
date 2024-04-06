const findTheOldest = function(array) {
    const now = new Date();
    const year = now.getFullYear();
    const age = array.reduce((old, curr) => {
        const oldDeath = old.yearOfDeath !== undefined ? old.yearOfDeath : year;
        const currDeath = curr.yearOfDeath !== undefined ? curr.yearOfDeath : year;

        return oldDeath-old.yearOfBirth < currDeath-curr.yearOfBirth ? curr: old
    })
    return age;
};

// Do not edit below this line
module.exports = findTheOldest;
