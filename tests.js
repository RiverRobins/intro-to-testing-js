// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane" when passed the string "Jane"', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane");
    });
    it('should return "Hello, Alex" when passed the string "Alex"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex");
    });
    it('should return "Hello, Pat" when passed the string "Pat"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat");
    });
    it('should return "Hello, World!" when given false', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when given null', function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when given [2, 4, 2, 4]', function () {
        expect(sayHello([2, 4, 2, 4])).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when given 93', function () {
        expect(sayHello(93)).toBe("Hello, World!");
    });
});