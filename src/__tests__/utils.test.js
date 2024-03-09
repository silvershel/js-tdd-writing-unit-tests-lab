import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
    it("returns true if the string is a palindrome", () => {
        const word = "raceCar";
        const answer = isPalindrome(word);
        expect(answer).toBe(true);
    });
    it("returns true if the string is a palindrome regardless of lettercase", () => {
        const word = "rAceCar";
        const answer = isPalindrome(word);
        expect(answer).toBe(true);
    });
    it("returns false if the string is not a palindrome", () => {
        const word = "nope";
        const answer = isPalindrome(word);
        expect(answer).toBe(false);
    });
    it("returns false if the string is empty", () => {
        const word = "";
        const answer = isPalindrome(word);
        expect(answer).toBe(false);
    });
});