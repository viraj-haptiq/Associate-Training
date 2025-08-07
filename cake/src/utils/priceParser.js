export const parsePrice = (priceString) => {
  if (typeof priceString !== "string") {
    return 0;
  }

  let numericString = priceString.replace(/[^0-9.]/g, "");

  const parts = numericString.split(".");
  if (parts.length > 1) {
    numericString = parts[0] + "." + parts.slice(1).join("");
  }

  return parseFloat(numericString) || 0;
};
