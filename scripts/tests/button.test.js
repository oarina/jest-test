/**
 * @jest-environment jsdom
 */


const buttonClick = require("../button");

beforeEach(() =>{
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8"); // by default tests run from root directory and that's where index file is
    document.open();
    document.write(fileContents);
    document.close();
} );

describe("DOM test", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});

// document.body.innerHTML = "<p id='par'></p>";