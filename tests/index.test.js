let myLaptop = require("../index")
test('Test that a string version of the object is required', ()=>{
    expect(myLaptop.printableString()).toBeDefined();
})
test('test that that the string version is retured', ()=>{
    expect(myLaptop.adjPrice()).toBeDefined
})