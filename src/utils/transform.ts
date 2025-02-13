const camelToSnake = (str: string = '') =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

const toSnake = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(item => toSnake(item));
  } else if (typeof obj === 'object' && obj !== null) {
    const newObj = {} as any;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const snakeCaseKey = camelToSnake(key);
        newObj[snakeCaseKey] = toSnake(obj[key]);
      }
    }
    return newObj;
  }
  return obj;
}
const snakeToCamel = (str: string = '') =>
  str.replace(/(_\w)/g, (match: string) => match[1].toUpperCase());

const toCamel = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(item => toCamel(item));
  } else if (typeof obj === 'object' && obj !== null) {
    const newObj = {} as any;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const camelCaseKey = snakeToCamel(key);
        newObj[camelCaseKey] = toCamel(obj[key]);
      }
    }
    return newObj;
  }
  return obj;
};

export { toCamel, toSnake };
