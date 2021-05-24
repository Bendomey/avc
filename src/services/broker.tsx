export const getYears = (startYear: number, endYear: number): number[] => {
  let years: number[] = [];
  for (let i: number = startYear; i <= endYear; i++) {
    years.push(i);
  }
  return years.reverse();
};

export const convertToDollars = (amount: number) => amount / 100;

export const convertToCents = (amount: number) => amount * 100;
