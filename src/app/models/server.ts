export interface Contact {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  street: string;
  suite: string;
  city: string;
  zipcode: string;

//   constructor(name: string,
//               email: string,
//               username: string,
//               street: string,
//               suite: string,
//               city: string,
//               zipcode: string,
//               phone: string,
//               website: string) {
//     this.name = name;
//     this.email = email;
//     this.username = username,
//     this.street = street;
//     this.suite = suite;
//     this.city = city;
//     this.zipcode = zipcode,
//     this.phone = phone,
//     this.website = website
//   }
// }
}
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lon: string;
}
