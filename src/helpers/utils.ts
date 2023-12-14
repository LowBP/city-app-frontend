import countryList from 'country-list';

export const getCountryCode = (countryName: string): string | null => {
  switch (countryName) {
    case 'USA':
      return 'US'
  }
  const country = countryList.getNames().find((name: string) => name === countryName) as string;
  return country ? countryList?.getCode(country) as string : 'DE'
};


export const formatNumberToK = (number: string) => {
  const count = parseInt(number, 10)
  const absCount = Math.abs(count);
  if (absCount >= 1e9) {
    return (count / 1e9).toFixed(2) + 'B'; // Billions
  } else if (absCount >= 1e6) {
    return (count / 1e6).toFixed(2) + 'M'; // Millions
  } else if (absCount >= 1e3) {
    return (count / 1e3).toFixed(2) + 'K'; // Thousands
  }
  return count.toLocaleString(); // Less than 1,000
}