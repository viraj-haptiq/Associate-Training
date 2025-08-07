export const parsePrice = (priceString) => {
  if (typeof priceString !== "string") {
    return 0;
  }
  const numericString = priceString.replace(/[^0-9.]/g, "");
  return parseFloat(numericString) || 0;
};
