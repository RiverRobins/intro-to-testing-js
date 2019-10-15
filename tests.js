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

describe("isFive", function () {
    it('should be a function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should return a boolean', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when given 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when given "five"', function () {
        expect(isFive("5")).toBe(true);
    });
    it('should return false when given 6', function () {
        expect(isFive(6)).toBe(false);
    });
    it('should return false when given null', function () {
        expect(isFive(null)).toBe(false);
    });
    it('should return false when given "string"', function () {
        expect(isFive("string")).toBe(false);
    });
    it('should return false when given [1, 2, 3]', function () {
        expect(isFive([1, 2, 3])).toBe(false);
    });
});

describe("isEven", function () {
    it('should be a function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when given -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when given 5', function () {
        expect(isEven(5)).toBe(false);
    });
    it('should return true when given "banana"', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return false when given 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return false when given Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return true when given "8"', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when given true', function () {
        expect(isEven(true)).toBe(false);
    });
});
describe("isVowel", function () {
    it('should return a boolean', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when given "a"', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when given "A"', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when given "Y"', function () {
        expect(isVowel("Y")).toBe(false);
    });
    it('should return 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when given true', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when given "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when given nothing', function () {
        expect(isVowel()).toBe(false);
    });
});

describe("add", function () {
    it('should return 5 when given 2 and 3', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when given -3 and -9', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when given "5" and 6', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 when given -4 and 10', function () {
        expect(add(-4, 10)).toBe(6);
    });
    it('should return NaN when given "banana" and "split"', function () {
        expect(add("banana", "split")).toBeNaN();
    });
    it('should return NaN when given 2 and "apples"', function () {
        expect(add(2, "apples")).toBeNaN();
    });
    it('should return NaN when given nothing', function () {
        expect(add()).toBeNaN();
    });
});
