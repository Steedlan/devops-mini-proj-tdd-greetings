function greet(name) {
    if(isUndefinedOrNull(name) || isEmptyString(name)) return "Hello, my friend.";
    if(name=== name.toUpperCase()) return "HELLO, "+name+"!";
    return "Hello, " + name + ".";
}

function isUndefinedOrNull(name) {
    return name === undefined || name === null;
}

function isEmptyString(name) {
    return name === "";
}


module.exports = greet;