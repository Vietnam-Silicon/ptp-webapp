export const safeJSONParse = (json: string) => {
  try {
    return JSON.parse(json);
  } catch (error) {
    console.warn('JSON Parse Error:', error);
    return {};
  }
};
