import { Currency } from "../types";

export function formatMoney(amount: number, currency: Currency){
    const locale = currency === "CRC" ? "es-CR" : "en-US";
    const opts: Intl.NumberFormatOptions = 
      currency === "CRC"
        ? { style: "currency", currency: "CRC", maximumFractionDigits: 0 }
        : { style: "currency", currency: "USD" };
    return new Intl.NumberFormat(locale, opts).format(amount)
  }