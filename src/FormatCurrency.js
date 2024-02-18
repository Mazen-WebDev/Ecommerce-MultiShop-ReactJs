const currencyFormat = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency"
});

const FormatCurrency = (number) => {
    return currencyFormat.format(number);
}

export default FormatCurrency;