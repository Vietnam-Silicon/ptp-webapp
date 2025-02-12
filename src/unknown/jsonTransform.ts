export const safeJSONParse = <T extends object>(json: string | null | undefined): any => {
  if (!json) {
    return {};
  }

  try {
    return JSON.parse(json) as T;
  } catch (error) {
    console.warn('JSON Parse Error:', error);
    return {};
  }
};
