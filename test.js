


test("One euro should be 1.206 dollars", ()=>{ 
    const {fromEuroToDollar} = require('./app.js')
    expect(fromEuroToDollar(5)).toBe(6)
})

test("1 dollars should be 106.58 yen", ()=>{
    const {fromDollarToYen} = require('./app.js')
    expect(fromDollarToYen(1)).toBe(106.58)
})

test("1000 yens should be 6.25 pounds", ()=>{
    const {fromYenToPound} = require('./app.js')
    expect(fromYenToPound(1000)).toBe(6.25)
})