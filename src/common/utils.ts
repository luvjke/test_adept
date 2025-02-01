export const companies = Array.from({ length: 10000 }, (_, i) => ({
  id: i + 1,
  name: `Company ${i + 1}`,
  address: `Address ${i + 1}`,
  isSelected: false,
}));
