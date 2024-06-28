import Resident from './Resident.js';
import Flat from './Flat.js';
import ApartmentBuilding from './apartmentBuilding.js';

const building1 = new ApartmentBuilding(3);

const flat1 = new Flat();
const resident1 = new Resident('Oleg', 'male');
const resident2 = new Resident('Taras', 'male');
building1.addFlatsInBuilding(flat1);
flat1.addResident(resident1);
flat1.addResident(resident2);

const flat2 = new Flat();
const resident3 = new Resident('Helen', 'female');
const resident4 = new Resident('Nil', 'male');
const resident5 = new Resident('Dawn', 'female');
building1.addFlatsInBuilding(flat2);
flat2.addResident(resident3);
flat2.addResident(resident4);
flat2.addResident(resident5);

const flat3 = new Flat();
const resident6 = new Resident('Mark', 'male');
const resident7 = new Resident('Mary', 'female');
building1.addFlatsInBuilding(flat3);
flat3.addResident(resident6);
flat3.addResident(resident7);

const flat4 = new Flat();
building1.addFlatsInBuilding(flat4);

console.log(building1.arrayOfFlats);
