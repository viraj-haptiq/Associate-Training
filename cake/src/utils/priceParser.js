export const parsePrice = (priceString) => {
  if (typeof priceString !== "string" || !priceString.trim()) {
    return 0;
  }

  const match = priceString.match(/(\d{1,3}(,\d{3})*(\.\d+)?|\d+(\.\d+)?)/);

  return match ? parseFloat(match[0].replace(/,/g, "")) : 0;
};
