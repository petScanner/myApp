export class Pet {
  constructor(public name: string,
              public id: string,
              public UserID: string,
              public breed: string,
              public subscription: object,
              public colour: string,
              public colour2: string,
              public status: number,
              public species?: string,
              public gender?: boolean,
              public birthDate?: Date,
              public implantDate?: Date,
              public neutered?: boolean,
              public desc?: string,
              public lostInfo?: any,
              public createdAt?: Date) { }
}
