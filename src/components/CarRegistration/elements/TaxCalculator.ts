import { useMemo } from 'react';
import { useFetcher } from '../../../redux/api';
import toast from 'react-hot-toast';

interface CarFormData {
  brand: string;
  year: string;
  fuelType: string;
  mileage: string;
  engineCapacity: string;
  carPrice: string;
  condition: string;
}

const TaxCalculator: React.FC<CarFormData> = (formData: CarFormData) : number => {
  const { data, isError, isLoading } = useFetcher(`/taxes?carCondition=${formData.condition}`);
  const databaseValues = useMemo(() => {
    if (data?.data) {
      return data?.data[0];
    }
    return {};
  }, [data?.data]);

  if (isLoading) {
    return 0;
  }

  if (isError) {
    toast.error('Failed to fetch taxes from the database');
    return 0;
  }

  const calculateTax = (): number => {
    let tax = 0;

    const carPrice = parseFloat(formData.carPrice);

    // Brand percentage
    tax += carPrice * (databaseValues.brandPercentage / 100);

    // Year percentage
    const year = parseInt(formData.year);
    if (year >= 2018 && year <= 2023) {
      tax += carPrice * (databaseValues.yearPercentage.year2018to2023 / 100);
    } else if (year >= 2012 && year <= 2017) {
      tax += carPrice * (databaseValues.yearPercentage.year2012to2017 / 100);
    } else if (year >= 2006 && year <= 2011) {
      tax += carPrice * (databaseValues.yearPercentage.year2006to2011 / 100);
    } else if (year >= 2000 && year <= 2006) {
      tax += carPrice * (databaseValues.yearPercentage.year2000to2006 / 100);
    } else if (year < 2000) {
      tax += carPrice * (databaseValues.yearPercentage.yearBefore2000 / 100);
    }

    // Fuel type percentage
    if (formData.fuelType === 'Diesel' || formData.fuelType === 'Gasoline') {
      tax += carPrice * (databaseValues.fuelTypePercentage / 100);
    }

    // Mileage percentage
    const mileage = parseInt(formData.mileage);
    if (mileage >= 0 && mileage <= 9999) {
      tax += carPrice * (databaseValues.mileagePercentage.mileage0to9999 / 100);
    } else if (mileage >= 10000 && mileage <= 99999) {
      tax += carPrice * (databaseValues.mileagePercentage.mileage10000to99999 / 100);
    } else if (mileage >= 100000 && mileage <= 300000) {
      tax += carPrice * (databaseValues.mileagePercentage.mileage100000to300000 / 100);
    } else if (mileage > 300000) {
      tax += carPrice * (databaseValues.mileagePercentage.mileageAbove300000 / 100);
    }

    // Engine capacity percentage
    const engineCapacity = parseInt(formData.engineCapacity);
    if (engineCapacity < 1000) {
      tax += carPrice * (databaseValues.engineCapacityPercentage.engineCapacityBelow1000 / 100);
    } else if (engineCapacity >= 1000 && engineCapacity <= 1999) {
      tax += carPrice * (databaseValues.engineCapacityPercentage.engineCapacity1000to1999 / 100);
    } else if (engineCapacity >= 2000 && engineCapacity <= 2999) {
      tax += carPrice * (databaseValues.engineCapacityPercentage.engineCapacity2000to2999 / 100);
    } else if (engineCapacity >= 3000 && engineCapacity <= 3999) {
      tax += carPrice * (databaseValues.engineCapacityPercentage.engineCapacity3000to3999 / 100);
    } else if (engineCapacity >= 4000) {
      tax += carPrice * (databaseValues.engineCapacityPercentage.engineCapacityAbove4000 / 100);
    }

    // Import duty percentage
    tax += carPrice * (databaseValues.importDutyPercentage / 100);

    // VAT percentage
    tax += carPrice * (databaseValues.vatPercentage / 100);

    // Add insurance and plate fees
    tax += 200000 + 250000;

    return tax;
  };

  const tax = calculateTax();

  return tax
};

export default TaxCalculator;
