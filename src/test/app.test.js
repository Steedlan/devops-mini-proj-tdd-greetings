
const greet = require("../app");
test("Should return Hello, Bob.", () => {
    const result = greet("Bob");
    expect(result).toBe("Hello, Bob.");

});
