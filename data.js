import { urlImage } from "./src/api/constant";

import toyota from './src/assets/images/toyota.avif'
import nissan from './src/assets/images/nissan.avif'
import chevrolit from './src/assets/images/chevrolit.webp'
import bmw from './src/assets/images/bmw.avif'
import ford from './src/assets/images/ford.jpg'
import honda from './src/assets/images/honda.jpg'

export const brands = [
  { name: 'Toyota', logo: `${urlImage}/logo/384x384_full_color/cf0bb1b2deca5e84/Toyota.png` },
  { name: 'BMW', logo: `${urlImage}/logo/384x384_full_color/614861eca7caf1b4/BMW.png` },
  { name: 'Chevrolet', logo: `${urlImage}/logo_text/743x384_full_color/5391e0d2230f029e/Chevrolet.png` },
  { name: 'Honda', logo: `${urlImage}/logo/605x384_full_color/00fea4dbe4426fc2/Honda.png` },
  { name: 'Ford', logo: `${urlImage}/logo/1067x384_full_color/aa5732acfd1e5b4d/Ford.png` },
  { name: 'Audi', logo: `${urlImage}/logo/1088x384_full_color/0598fce6d069a5a0/Audi.png` },
  { name: 'Hyundai', logo: `${urlImage}/logo_text/384x384_full_color/d88259cdbac929b7/Hyundai.png` },
  { name: 'Mercedes-Benz', logo: `${urlImage}/logo/384x384_full_color/959be7e00726a9e0/Mercedes-Benz.png` },
  { name: 'Kia', logo: `${urlImage}/logo/1629x384_full_color/638bbde84c5f569e/Kia.png` },
  { name: 'Nissan', logo: `${urlImage}/logo/450x384_full_color/688cbf406361c9c1/Nissan.png` },
  { name: 'Volkswagen', logo: `${urlImage}/logo/384x384_full_color/2e91116c833bfded/Volkswagen.png` },
  { name: 'Subaru', logo: `${urlImage}/logo/689x384_full_color/43b494c614cd8ca3/Subaru.png` },
];

export const reviews = [
  {
    id: 1,
    title: '2025 Nissan Armada',
    image: 'https://static.tcimg.net/vehicles/oem/bdb53d9f3b0acfc1/2025-Nissan-Armada.jpg',
    author: 'Perry Stern',
    authorImage: 'https://static.tcimg.net/authors/5001ec2b4def491a/perry-stern.jpg',
    link: '/overview/nissan/armada/',
  },
  {
    id: 2,
    title: '2025 Nissan Murano',
    image: 'https://static.tcimg.net/vehicles/oem/778a41b7580482ba/2025-Nissan-Murano.jpg',
    author: 'Perry Stern',
    authorImage: 'https://static.tcimg.net/authors/5001ec2b4def491a/perry-stern.jpg',
    link: '/overview/nissan/murano/',
  },
  {
    id: 3,
    title: '2025 Lexus RZ',
    image: 'https://static.tcimg.net/vehicles/oem/2da83738f7bdc17f/2025-Lexus-RZ.jpg',
    author: 'Dan Frio',
    authorImage: 'https://static.tcimg.net/authors/981d196b9f0e10c2/dan-frio.jpg',
    link: '/overview/lexus/rz/',
  },
  {
    id: 4,
    title: '2025 Lexus TX',
    image: 'https://static.tcimg.net/vehicles/oem/6d0e4dec48c42499/2025-Lexus-TX.jpg',
    author: 'Dan Frio',
    authorImage: 'https://static.tcimg.net/authors/981d196b9f0e10c2/dan-frio.jpg',
    link: '/overview/lexus/tx/',
  },
  {
    id: 5,
    title: '2025 Lexus RX',
    image: 'https://static.tcimg.net/vehicles/oem/9015a74576488a2e/2023-Lexus-RX.jpg',
    author: 'Dan Frio',
    authorImage: 'https://static.tcimg.net/authors/981d196b9f0e10c2/dan-frio.jpg',
    link: '/overview/lexus/rx/',
  },
];

export const carImageUrls = [
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg",
  "https://million-wallpapers.ru/wallpapers/0/80/small/456905915249442.jpg",
  "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600"
];

export const apiCars = [
  {
    "id": 1,
    "make": "Toyota",
    "model": "Corolla",
    "year": 2022,
    "color": "Silver",
    "mileage": 20000,
    "price": 25000,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "engine": "2.0L 4-cylinder",
    "horsepower": 169,
    "features": [
      "Bluetooth",
      "Backup Camera",
      "Keyless Entry"
    ],
    "owners": 1,
    "image": `${toyota}`
  },
  {
    "id": 2,
    "make": "Honda",
    "model": "Civic",
    "year": 2021,
    "color": "White",
    "mileage": 18000,
    "price": 22000,
    "fuelType": "Gasoline",
    "transmission": "CVT",
    "engine": "1.5L 4-cylinder",
    "horsepower": 158,
    "features": [
      "Apple CarPlay",
      "Android Auto",
      "Lane Departure Warning"
    ],
    "owners": 2,
    "image": `${honda}`
  },
  {
    "id": 3,
    "make": "Ford",
    "model": "Mustang",
    "year": 2020,
    "color": "Red",
    "mileage": 15000,
    "price": 35000,
    "fuelType": "Gasoline",
    "transmission": "Manual",
    "engine": "5.0L V8",
    "horsepower": 450,
    "features": [
      "Leather Seats",
      "Navigation System",
      "Heated Seats"
    ],
    "owners": 1,
    "image": `${ford}`
  },
  {
    "id": 4,
    "make": "Chevrolet",
    "model": "Equinox",
    "year": 2019,
    "color": "Blue",
    "mileage": 30000,
    "price": 20000,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "engine": "1.5L 4-cylinder",
    "horsepower": 170,
    "features": [
      "Rearview Camera",
      "Blind-Spot Monitoring",
      "Wi-Fi Hotspot"
    ],
    "owners": 2,
    "image": `${chevrolit}`
  },
  {
    "id": 5,
    "make": "Nissan",
    "model": "Altima",
    "year": 2020,
    "color": "Black",
    "mileage": 22000,
    "price": 21000,
    "fuelType": "Gasoline",
    "transmission": "CVT",
    "engine": "2.5L 4-cylinder",
    "horsepower": 188,
    "features": [
      "Remote Start",
      "Automatic Emergency Braking",
      "Lane Keeping Assist"
    ],
    "owners": 1,
    "image": `${nissan}`
  },
  {
    "id": 6,
    "make": "BMW",
    "model": "3 Series",
    "year": 2021,
    "color": "White",
    "mileage": 12000,
    "price": 40000,
    "fuelType": "Diesel",
    "transmission": "Automatic",
    "engine": "2.0L 4-cylinder",
    "horsepower": 255,
    "features": [
      "Sunroof",
      "Adaptive Cruise Control",
      "Parking Assistance"
    ],
    "owners": 1,
    "image": `${bmw}`
  },
  {
    "id": 7,
    "make": "Tesla",
    "model": "Model 3",
    "year": 2022,
    "color": "Red",
    "mileage": 8000,
    "price": 45000,
    "fuelType": "Electric",
    "transmission": "Automatic",
    "engine": "Electric Motor",
    "horsepower": 322,
    "features": [
      "Autopilot",
      "Full Self-Driving Capability",
      "Premium Audio System"
    ],
    "owners": 1,
    "image": "https://fakeimg.pl/500x500/ff0000"
  },
  {
    "id": 8,
    "make": "Audi",
    "model": "Q5",
    "year": 2021,
    "color": "Gray",
    "mileage": 15000,
    "price": 38000,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "engine": "2.0L 4-cylinder",
    "horsepower": 248,
    "features": [
      "Virtual Cockpit",
      "Panoramic Sunroof",
      "Apple CarPlay"
    ],
    "owners": 1,
    "image": "https://fakeimg.pl/500x500/808080"
  },
  {
    "id": 9,
    "make": "Mercedes-Benz",
    "model": "E-Class",
    "year": 2020,
    "color": "Silver",
    "mileage": 18000,
    "price": 42000,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "engine": "2.0L 4-cylinder",
    "horsepower": 255,
    "features": [
      "MBUX Infotainment",
      "Heated Steering Wheel",
      "Air Suspension"
    ],
    "owners": 2,
    "image": "https://fakeimg.pl/500x500/cccccc"
  },
  {
    "id": 10,
    "make": "Chevrolet",
    "model": "Tahoe",
    "year": 2020,
    "color": "Black",
    "mileage": 25000,
    "price": 45000,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "engine": "5.3L V8",
    "horsepower": 355,
    "features": [
      "Leather Seats",
      "Third-Row Seating",
      "Power Liftgate"
    ],
    "owners": 2,
    "image": "https://fakeimg.pl/500x500/000000"
  },
  {
    "id": 11,
    "make": "Subaru",
    "model": "Outback",
    "year": 2021,
    "color": "Green",
    "mileage": 12000,
    "price": 32000,
    "fuelType": "Gasoline",
    "transmission": "CVT",
    "engine": "2.5L 4-cylinder",
    "horsepower": 182,
    "features": [
      "All-Wheel Drive",
      "Roof Rails",
      "Adaptive Cruise Control"
    ],
    "owners": 1,
    "image": "https://fakeimg.pl/500x500/008000"
  },
  {
    "id": 12,
    "make": "Lexus",
    "model": "RX 350",
    "year": 2022,
    "color": "White",
    "mileage": 8000,
    "price": 48000,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "engine": "3.5L V6",
    "horsepower": 295,
    "features": [
      "Premium Leather Seats",
      "Panoramic Sunroof",
      "Mark Levinson Audio"
    ],
    "owners": 1,
    "image": "https://fakeimg.pl/500x500/ffffff"
  },
  {
    "id": 13,
    "make": "Ford",
    "model": "F-150",
    "year": 2020,
    "color": "Blue",
    "mileage": 18000,
    "price": 38000,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "engine": "3.5L V6",
    "horsepower": 375,
    "features": [
      "Towing Package",
      "Off-Road Package",
      "Sync 3 Infotainment"
    ],
    "owners": 1,
    "image": "https://fakeimg.pl/500x500/0000ff"
  },
  {
    "id": 14,
    "make": "BMW",
    "model": "X5",
    "year": 2021,
    "color": "Black",
    "mileage": 14000,
    "price": 55000,
    "fuelType": "Diesel",
    "transmission": "Automatic",
    "engine": "3.0L 6-cylinder",
    "horsepower": 335,
    "features": [
      "Heated Seats",
      "Wireless Charging",
      "Gesture Control"
    ],
    "owners": 1,
    "image": "https://fakeimg.pl/500x500/000000"
  },
  {
    "id": 15,
    "make": "Honda",
    "model": "CR-V",
    "year": 2019,
    "color": "Silver",
    "mileage": 25000,
    "price": 26000,
    "fuelType": "Gasoline",
    "transmission": "CVT",
    "engine": "1.5L 4-cylinder",
    "horsepower": 190,
    "features": [
      "Adaptive Cruise Control",
      "Lane Keeping Assist",
      "Apple CarPlay"
    ],
    "owners": 2,
    "image": "https://fakeimg.pl/500x500/cccccc"
  },
  {
    "id": 16,
    "make": "Toyota",
    "model": "RAV4",
    "year": 2020,
    "color": "White",
    "mileage": 18000,
    "price": 29000,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "engine": "2.5L 4-cylinder",
    "horsepower": 203,
    "features": [
      "Blind-Spot Monitoring",
      "Rear Cross-Traffic Alert",
      "Apple CarPlay"
    ],
    "owners": 1,
    "image": "https://fakeimg.pl/500x500/ffffff"
  },
  {
    "id": 17,
    "make": "Tesla",
    "model": "Model Y",
    "year": 2022,
    "color": "Red",
    "mileage": 8000,
    "price": 52000,
    "fuelType": "Electric",
    "transmission": "Automatic",
    "engine": "Dual Electric Motors",
    "horsepower": 384,
    "features": [
      "Autopilot",
      "Premium Interior",
      "Panoramic Roof"
    ],
    "owners": 1,
    "image": "https://fakeimg.pl/500x500/ff0000"
  },
  {
    "id": 18,
    "make": "Chevrolet",
    "model": "Silverado",
    "year": 2019,
    "color": "Black",
    "mileage": 25000,
    "price": 35000,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "engine": "5.3L V8",
    "horsepower": 355,
    "features": [
      "Towing Package",
      "Trailer Brake Controller",
      "Apple CarPlay"
    ],
    "owners": 2,
    "image": "https://fakeimg.pl/500x500/000000"
  },
  {
    "id": 19,
    "make": "Ford",
    "model": "Escape",
    "year": 2021,
    "color": "Gray",
    "mileage": 12000,
    "price": 28000,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "engine": "1.5L 4-cylinder",
    "horsepower": 181,
    "features": [
      "Apple CarPlay",
      "Android Auto",
      "Blind-Spot Monitoring"
    ],
    "owners": 1,
    "image": "https://fakeimg.pl/500x500/808080"
  },
  {
    "id": 20,
    "make": "Mercedes-Benz",
    "model": "GLE 350",
    "year": 2020,
    "color": "Silver",
    "mileage": 18000,
    "price": 46000,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "engine": "2.0L 4-cylinder",
    "horsepower": 255,
    "features": [
      "MBUX Infotainment",
      "Panoramic Sunroof",
      "Adaptive Cruise Control"
    ],
    "owners": 2,
    "image": "https://fakeimg.pl/500x500/cccccc"
  },
  {
    "id": 21,
    "make": "BMW",
    "model": "4 Series",
    "year": 2021,
    "color": "Blue",
    "mileage": 10000,
    "price": 48000,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "engine": "2.0L 4-cylinder",
    "horsepower": 255,
    "features": [
      "Head-Up Display",
      "Wireless Charging",
      "Parking Assistance"
    ],
    "owners": 1,
    "image": "https://fakeimg.pl/500x500/0000ff"
  },
  {
    "id": 22,
    "make": "Honda",
    "model": "Accord",
    "year": 2022,
    "color": "Black",
    "mileage": 8000,
    "price": 31000,
    "fuelType": "Gasoline",
    "transmission": "CVT",
    "engine": "1.5L 4-cylinder",
    "horsepower": 192,
    "features": [
      "Honda Sensing Suite",
      "Remote Engine Start",
      "Wireless Phone Charger"
    ],
    "owners": 1,
    "image": "https://fakeimg.pl/500x500/000000"
  },
  {
    "id": 23,
    "make": "Jeep",
    "model": "Grand Cherokee",
    "year": 2021,
    "color": "White",
    "mileage": 10000,
    "price": 38000,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "engine": "3.6L V6",
    "horsepower": 295,
    "features": [
      "4WD",
      "Uconnect Infotainment",
      "Heated Seats"
    ],
    "owners": 1,
    "image": "https://fakeimg.pl/500x500/ffffff"
  },
  {
    "id": 24,
    "make": "Toyota",
    "model": "Highlander",
    "year": 2020,
    "color": "Silver",
    "mileage": 20000,
    "price": 36000,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "engine": "3.5L V6",
    "horsepower": 295,
    "features": [
      "Lane Departure Alert",
      "Third-Row Seating",
      "Smart Key System"
    ],
    "owners": 2,
    "image": "https://fakeimg.pl/500x500/cccccc"
  },
  {
    "id": 25,
    "make": "Ford",
    "model": "Explorer",
    "year": 2022,
    "color": "Blue",
    "mileage": 6000,
    "price": 42000,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "engine": "2.3L 4-cylinder",
    "horsepower": 300,
    "features": [
      "SYNC 4 Infotainment",
      "Tri-Zone Climate Control",
      "Power Liftgate"
    ],
    "owners": 1,
    "image": "https://fakeimg.pl/500x500/0000ff"
  },
  {
    "id": 26,
    "make": "Chevrolet",
    "model": "Camaro",
    "year": 2021,
    "color": "Red",
    "mileage": 8000,
    "price": 40000,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "engine": "6.2L V8",
    "horsepower": 455,
    "features": [
      "RS Package",
      "Wireless Apple CarPlay",
      "Bose Premium Audio"
    ],
    "owners": 1,
    "image": "https://fakeimg.pl/500x500/ff0000"
  },
  {
    "id": 27,
    "make": "Audi",
    "model": "A4",
    "year": 2020,
    "color": "White",
    "mileage": 15000,
    "price": 36000,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "engine": "2.0L 4-cylinder",
    "horsepower": 201,
    "features": [
      "Virtual Cockpit",
      "Panoramic Sunroof",
      "Audi Pre Sense City"
    ],
    "owners": 2,
    "image": "https://fakeimg.pl/500x500/ffffff"
  },
  {
    "id": 28,
    "make": "Subaru",
    "model": "Forester",
    "year": 2022,
    "color": "Green",
    "mileage": 5000,
    "price": 32000,
    "fuelType": "Gasoline",
    "transmission": "CVT",
    "engine": "2.5L 4-cylinder",
    "horsepower": 182,
    "features": [
      "Subaru EyeSight",
      "X-Mode Terrain Selection",
      "Starlink Infotainment"
    ],
    "owners": 1,
    "image": "https://fakeimg.pl/500x500/008000"
  },
  {
    "id": 29,
    "make": "Ford",
    "model": "Fusion",
    "year": 2022,
    "color": "Silver",
    "mileage": 8000,
    "price": 30000,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "engine": "2.0L 4-cylinder",
    "horsepower": 245,
    "features": [
      "Ford Co-Pilot360",
      "Adaptive Cruise Control",
      "Wireless Charging"
    ],
    "owners": 1,
    "image": "https://fakeimg.pl/500x500/cccccc"
  },
  {
    "id": 30,
    "make": "Kia",
    "model": "Telluride",
    "year": 2021,
    "color": "White",
    "mileage": 10000,
    "price": 38000,
    "fuelType": "Gasoline",
    "transmission": "Automatic",
    "engine": "3.8L V6",
    "horsepower": 291,
    "features": [
      "Kia Drive Wise",
      "UVO Link Infotainment",
      "Apple CarPlay"
    ],
    "owners": 1,
    "image": "https://fakeimg.pl/500x500/ffffff"
  }
]