export const parsePrice = (priceString) => {
  if (typeof priceString !== "string" || !priceString.trim()) {
    return 0;
  }
  // Matches price formats such as:
  // - "1,234.56" (comma as thousand separator, optional decimal)
  // - "1234.56" (no thousand separator, optional decimal)
  // - "₹800" (currency symbol ignored, matches the number)
  // - "1,000" (comma as thousand separator, no decimal)
  // - "1000" (no thousand separator, no decimal)
  // The regex extracts the numeric part, ignoring any currency symbols or text.

  const match = priceString.match(/(\d{1,3}(,\d{3})*(\.\d+)?|\d+(\.\d+)?)/);

  return match ? parseFloat(match[0].replace(/,/g, "")) : 0;
};
