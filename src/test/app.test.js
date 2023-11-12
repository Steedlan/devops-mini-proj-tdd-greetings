
const greet = require("../app");

test("Should return Hello, Bob.", () => {
    const result = greet("Bob");
    expect(result).toBe("Hello, Bob.");
});

test("Should return Hello, Jean-Kevin.", () => {
    const result = greet("Jean-Kevin");
    expect(result).toBe("Hello, Jean-Kevin.");
});

test("Should return Hello, my friend", () => {
    const result = greet(null);
    expect(result).toBe("Hello, my friend.");
});

test("Should return Hello, my friend", () => {
    const result = greet();
    expect(result).toBe("Hello, my friend.");
});

test("Should return Hello, my friend", () => {
    const result = greet("");
    expect(result).toBe("Hello, my friend.");
});

test("Should return HELLO, JERRY!", () => {
    const result = greet("JERRY");
    expect(result).toBe("HELLO, JERRY!");
});

test("Should return HELLO, KENOBI!", () => {
    const result = greet("KENOBI");
    expect(result).toBe("HELLO, KENOBI!");
});

test("Should return Hello, Jill and Jane.", () => {
    const result = greet(["Jill", "Jane"]);
    expect(result).toBe("Hello, Jill and Jane.");
});

test("Should return Hello, Kratos and Thanathos.", () => {
    const result = greet(["Kratos", "Thanathos"]);
    expect(result).toBe("Hello, Kratos and Thanathos.");
});

test("Should return Hello, Amy, Brian and Charlotte.", () => {
    const result = greet(["Amy", "Brian","Charlotte"]);
    expect(result).toBe("Hello, Amy, Brian and Charlotte.");
});

test("Should return Hello, Kratos, Thanathos and Hypnos.", () => {
    const result = greet(["Kratos", "Thanathos", "Hypnos"]);
    expect(result).toBe("Hello, Kratos, Thanathos and Hypnos.");
});

test("Should return Hello, Amy and Charlotte. AND HELLO BRIAN!", () => {
    const result = greet(["Amy", "BRIAN", "Charlotte"]);
    expect(result).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
});

