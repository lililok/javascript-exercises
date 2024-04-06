const fibonacci = function(n) {
    let num = parseInt(n);
    if (num==1 || num==0) {
        return num;
    } else if (num<0) {
        return "OOPS";
    }
    return num = fibonacci(num- 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
