export const generateBatchLot = () => {
  const timestampInSeconds = Math.floor(Date.now() / 1000);
  return `BL${timestampInSeconds}`;
};
