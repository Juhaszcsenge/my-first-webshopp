const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined,
    {currency: "HUF", style: "currency"})

export function formatCurrency(number: number){
    return CURRENCY_FORMATTER.format(number)
}