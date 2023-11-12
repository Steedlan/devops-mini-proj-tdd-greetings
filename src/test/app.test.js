
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