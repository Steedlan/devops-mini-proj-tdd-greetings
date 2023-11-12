function greet(name) {
    if(isUndefinedOrNull(name) || isEmptyString(name)) return "Hello, my friend.";
    
    if(isAnArray(name)){
        if(name.length === 2) return `Hello, ${name[0]} and ${name[1]}.`;
        return arrayGreeting(name);
    }
    if(isUpperCase(name)) return `HELLO, ${name}!`;

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

function isAnArray(name) {
    return typeof name !== "string";
}

function arrayGreeting(name) {
    let upperCase;
    let message = "Hello";
    for(i = 0; i < name.length ; i += 1) {
        if(isUpperCase(name[i])) {
            upperCase = name[i];
            continue;
        }


        if(i === name.length-1) message += ` and ${name[i]}.`;
        else message += `, ${name[i]}`;
    }
    if(upperCase!==undefined) message+= ` AND HELLO ${upperCase}!`;
    return message;
}



module.exports = greet;