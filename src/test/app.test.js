
const greet = require("../app");

test("Should return Hello, Bob.", () => {
    const result = greet("Bob");
    expect(result).toBe("Hello, Bob.");
});

test("Should return Hello, my friend", () => {
    const result = greet(null);
    expect(result).toBe("Hello, my friend.");
});
