/**
 * @jest-environment jsdom
 */


const buttonClick = require("../button");

beforeAll(() =>{
    document.body.innerHTML = "<p id='par'></p>";
} );

describe("DOM test", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
})

