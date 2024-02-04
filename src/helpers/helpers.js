export function getCityAndCountry(address) {
    const addressParts = address.split(", ");
    const city = addressParts[addressParts.length - 2];
    const country = addressParts[addressParts.length - 1];
    return { city, country }
}

export function getArrayOfPrices() {
    const prices = []
    for (let i = 3; i <= 50; i++) {
        prices.push({ value: i * 10, label: i * 10 })
    }

    return prices
} 