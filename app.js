let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(euro){
    const dollarResult = parseFloat((euro * 1.2).toFixed(2))
    return dollarResult
}

function fromDollarToYen(dollar){
    const euroResult = (dollar / 1.2)
    let yen = parseFloat((euroResult * 127.9).toFixed(2))
    return yen
}

function fromYenToPound(yen){
    const euroResult = (yen / 127.9)
    const pound = parseFloat((euroResult * 0.8).toFixed(2))
    return pound
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}

console.log(fromEuroToDollar(51))