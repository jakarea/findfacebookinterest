export const numberToIntl = (value: number): string => {
  return Intl.NumberFormat("en", { notation: "compact" }).format(value);
};
