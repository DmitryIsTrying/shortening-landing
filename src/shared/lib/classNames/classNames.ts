type SecondaryArgs = Record<string, boolean>;

export const classNames = (
  main: string,
  secondary: SecondaryArgs = {},
  additional: string[] = []
): string => {
  const secondaryArr = Object.entries(secondary).reduce((acc, [cls, condition]) => {
    if (Boolean(condition)) {
      acc.push(cls);
    }
    return acc;
  }, [] as string[]);
  return [main, ...secondaryArr, ...additional].join(" ");
};
