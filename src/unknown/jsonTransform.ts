export const safeJSONParse = <T extends object>(json: string | null | undefined): T | Record<string, never> => {
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
