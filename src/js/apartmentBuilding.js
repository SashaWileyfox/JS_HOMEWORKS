class ApartmentBuilding {
  amountOfFlats = 0;

  arrayOfFlats = [];

  constructor(amountOfFlats) {
    this.amountOfFlats = amountOfFlats;
    this.flatNumber = 1;
  }

  addFlatsInBuilding(flat) {
    if (this.arrayOfFlats.length < this.amountOfFlats) {
      this.arrayOfFlats.push(flat);
      console.log(`Flat №${this.flatNumber} was successfully added`);
    } else {
      console.log(`we cannot add a flat №${this.flatNumber} as building already full`);
    }
    this.flatNumber++;
  }
}

export default ApartmentBuilding;
