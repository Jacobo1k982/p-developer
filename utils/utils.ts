export const getObjectKeys = <T extends object>(obj: T): Array<keyof T> => {
  const keys = Object.keys(obj) as Array<keyof T>;
  return keys;
};