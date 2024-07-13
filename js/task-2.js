function getShippingMessag(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice}`; 
}

console.log(getShippingMessag("Australia", 120, 50));
console.log(getShippingMessag("Germany", 80, 20)); 
console.log(getShippingMessag("Sweden", 100, 20));