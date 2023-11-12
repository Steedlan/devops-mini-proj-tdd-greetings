
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