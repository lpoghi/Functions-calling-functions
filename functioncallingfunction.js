const over18 = function (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const greet = function (age) {
    if (over18(age)) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
};

console.log(greet(65));
console.log(greet(10));


const calculateVAT = function (basePrice, VATPercentage) {
    return basePrice * (VATPercentage / 100);
};

const calculatePriceIncludingVAT = function (basePrice, VATPercentage) {
    const VAT = calculateVAT(basePrice, VATPercentage);
    return basePrice + VAT;
};

console.log(calculatePriceIncludingVAT(1000, 21));
console.log(calculatePriceIncludingVAT(2, 9));

