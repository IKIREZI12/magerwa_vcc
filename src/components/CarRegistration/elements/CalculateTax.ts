
interface CarFormData {
    brand: string;
    year: string;
    fuelType: string;
    mileage: string;
    engineCapacity: string;
    carPrice: string;
  }
  
  export const CalculateTax = (formData: CarFormData): number => {

    let tax = 0;
  
    const carPrice = parseFloat(formData.carPrice);
  
    // Brand percentage
    tax += carPrice * 0.05;
  
    // Year percentage
    const year = parseInt(formData.year);
    if (year >= 2018 && year <= 2023) {
      tax += carPrice * 0.05;
    } else if (year >= 2012 && year <= 2017) {
      tax += carPrice * 0.07;
    } else if (year >= 2006 && year <= 2011) {
      tax += carPrice * 0.09;
    } else if (year >= 2000 && year <= 2006) {
      tax += carPrice * 0.1;
    } else if (year < 2000) {
      tax += carPrice * 0.12;
    }
  
    // Fuel type percentage
    if (formData.fuelType === "Diesel" || formData.fuelType === "Gasoline") {
      tax += carPrice * 0.05;
    }
  
    // Mileage percentage
    const mileage = parseInt(formData.mileage);
    if (mileage >= 0 && mileage <= 9999) {
      tax += carPrice * 0.03;
    } else if (mileage >= 10000 && mileage <= 99999) {
      tax += carPrice * 0.05;
    } else if (mileage >= 100000 && mileage <= 300000) {
      tax += carPrice * 0.07;
    } else if (mileage > 300000) {
      tax += carPrice * 0.09;
    }
  
    // Engine capacity percentage
    const engineCapacity = parseInt(formData.engineCapacity);
    if (engineCapacity < 1000) {
      tax += carPrice * 0.03;
    } else if (engineCapacity >= 1000 && engineCapacity <= 1999) {
      tax += carPrice * 0.03;
    } else if (engineCapacity >= 2000 && engineCapacity <= 2999) {
      tax += carPrice * 0.03;
    } else if (engineCapacity >= 3000 && engineCapacity <= 3999) {
      tax += carPrice * 0.04;
    } else if (engineCapacity >= 4000) {
      tax += carPrice * 0.04;
    }
  
    // Import duty percentage
    tax += carPrice * 0.08;
  
    // VAT percentage
    tax += carPrice * 0.08;
  
    // Add insurance and plate fees
    tax += 200000 + 250000;
  
    return tax;
  };
  