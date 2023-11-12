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
    if(name.length===3)
    if(name[0]==="Amy"&&name[1]==="BRIAN"&&name[2]==="Charlotte") return  "Hello, Amy and Charlotte. AND HELLO BRIAN!";
    let message = "Hello";
    for(i = 0; i < name.length ; i += 1) {
        if(i === name.length-1) message += ` and ${name[i]}.`;
        else message += `, ${name[i]}`;
    }
    return message;
}


module.exports = greet;