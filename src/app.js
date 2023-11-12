function greet(name) {
    if(isUndefinedOrNull(name) || isEmptyString(name)) return "Hello, my friend.";
    
    if( typeof name !== "string"){
        if(name.length === 2) return `Hello, ${name[0]} and ${name[1]}.`;
        message = "Hello";
        for(i = 0; i < name.length ; i += 1) {
            if(i === name.length-1) message += ` and ${name[i]}.`
            else message += `, ${name[i]}`;
        }
        return message;
    }
    if(isUpperCase(name)) return "HELLO, "+name+"!";

    return "Hello, " + name + ".";
}

function isUndefinedOrNull(name) {
    return name === undefined || name === null;
}

function isEmptyString(name) {
    return name === "";
}
function isUpperCase(name){
    return name === name.toUpperCase();
}


module.exports = greet;