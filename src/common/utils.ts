export const companies = Array.from({ length: 1000 }, (_, i) => ({
  id: `${i + 1}`,
  name: `Company ${i + 1}`,
  address: `Address ${i + 1}`,
}));
