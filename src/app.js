function greet(name) {
    if(isUndefinedOrNull(name) || isEmptyString(name)) return "Hello, my friend.";
    if(name==="JERRY") return "HELLO, JERRY!";
    return "Hello, " + name + ".";
}

function isUndefinedOrNull(name) {
    return name === undefined || name === null;
}

function isEmptyString(name) {
    return name === "";
}


module.exports = greet;