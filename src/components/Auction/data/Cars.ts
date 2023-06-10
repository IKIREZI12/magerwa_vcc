import Car1 from '../../../assets/cars/car1.jpg'
import Car2 from '../../../assets/cars/car2.jpg'
import Car3 from '../../../assets/cars/car3.jpg'
// import Car4 from '../../../assets/cars/car4.jpg'
import Car5 from '../../../assets/cars/car5.jpg'

export const auctionCars = [
    {
        picture: Car1,
        condition: 'New',
        title: 'Mercedes-Benz AutoTrade UK',
        price: '50,000,000 Rwf', 
        brand: 'Mercedes-Benz', 
        year: '2021', 
        fuelType: 'Hybrid', 
        hasWifi: true, 
        passengerSize: '5',
    },
    {
        picture: Car2,
        condition: 'Used',
        title: 'Tesla Model S 2023 Top Gear',
        price: '200,000,000 Rwf', 
        brand: 'Tesla', 
        year: '2011', 
        fuelType: 'Electric', 
        hasWifi: true, 
        passengerSize: '4',
    },
    {
        picture: Car3,
        condition: 'New',
        title: 'BMW i8 Roadster Donington Grey',
        price: '600,000,000 Rwf', 
        brand: 'BMW', 
        year: '2000', 
        fuelType: 'Gasoline', 
        hasWifi: false, 
        passengerSize: '3',
    },
    // {
    //     picture: Car4,
    //     condition: 'New',
    //     title: 'Rand Rover 2023 Top Gear',
    //     price: '250,000,000 Rwf', 
    //     brand: 'Rand Rover', 
    //     year: '2015', 
    //     fuelType: 'Hybrid', 
    //     hasWifi: true, 
    //     passengerSize: '5',
    // },
    {
        picture: Car5,
        condition: 'Used',
        title: 'Toyota Auto Evolution',
        price: '30,000,000 Rwf', 
        brand: 'Toyota', 
        year: '1979', 
        fuelType: 'Gasoline', 
        hasWifi: false, 
        passengerSize: '6',
    },
]