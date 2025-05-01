export const timeFormater = (time: string): string => {
  const date = new Date(time);
  // Aprel day, year
  return date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
