/* eslint linebreak-style: ["error", "windows"] */
const users = [
  {
    id: '1',
    names: 'test name',
    location: 'Kigali, kg avenue 25 est',
    email: 'test@gmail.com',
    password: 'password',
    parcels: [
      {
        id: 1,
        pickupLocation: 'Kigali, KG Avenue 25 est',
        destinationLocation: 'Nyanza, Nyanza Rd',
        weight: '15 g',
        quantity: '5',
        status: 'pending',
        comment: 'Laptop cables',
      },
      {
        id: 2,
        pickupLocation: 'Nyagatare',
        destinationLocation: 'Huye, National Museum',
        weight: '800 g',
        quantity: '2',
        status: 'pending',
        comment: 'Statues',
      },
    ],
  },
  {
    id: '2',
    names: 'user2 name',
    location: 'Nyanza, avenue 58 street',
    email: 'user2@gmail.com',
    password: 'passcode',
    parcels: [
      {
        id: 1,
        pickupLocation: 'Kacyiru Library',
        destinationLocation: 'Muhanga district Library',
        weight: '2 kg',
        quantity: '20',
        status: 'pending',
        comment: 'Books',
      },
    ],
  },
];
export default users;
