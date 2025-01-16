export const shortString = (str: string, long: number): string => {
  return str.length > long ? `${str.slice(0, long)}...` : str;
};
