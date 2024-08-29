function getDaysInMonth(month, year) {
    switch (month) {
      case 0: // January
      case 2: // March
      case 4: // May
      case 6: // July
      case 7: // August
      case 9: // October
      case 11: // December
        return 31;
      case 3: // April
      case 5: // June
      case 8: // September
      case 10: // November
        return 30;
      case 1: // February
        // Check for leap year
       return 28;
      default:
        throw new Error('Invalid month'); // Handle invalid month input
    }
  }
  
  // Example usage:
  const month = 1; // February (0-indexed)
  const year = 2024;
  console.log(`Number of days in month ${month + 1} of year ${year}: ${getDaysInMonth(month, year)}`);
  