export class User {
  public firstName: string;
  public lastName: string;
  public address: any;
  public phone: number;
  public email: string;
  public password: string;
  public _id: string;
  constructor( FirstName: string,
               LastName: string,
               HouseNumber: string,
               Street: string,
               PostalCode: string,
               City: string,
               Country: string,
               PhoneNumber: number,
               Email: string,
               Password?: string,
               _id?: string
  ) {
    this.firstName = FirstName;
    this.lastName = LastName;
    this.address = {houseNumber: HouseNumber, street: Street, postalCode: PostalCode, city: City, country: Country};
    this.phone = PhoneNumber;
    this.email = Email;
    this.password = Password;
    this._id = _id;
  }

}
