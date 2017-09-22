import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {User} from '../user.model';
import {Router} from '@angular/router';
import {RegistrationService} from '../registration.service';

@Component({
  selector: 'app-registration-email',
  templateUrl: './registration-email.component.html',
  styleUrls: ['./registration-email.component.css']
})
export class RegistrationEmailComponent implements OnInit {

   firstPart = true;
   user: User;
   firstPartValues;
   firstAlertEnable = false;
   firstName;
   lastName;
   houseNumber;
   street;
   postalCode;
   country;
   city;
   phone;
   email;
   password;
   passwordValue;
   passwordVerify;
   EULA;


  constructor( private router: Router, private regService: RegistrationService) {}

  checkFirstName(name) {
    this.firstName = (name.length > 0);
  }
  checkLastName(name) {
    this.lastName = (name.length > 0);
  }
  checkHouseNumber(number) {
    this.houseNumber = (number.length > 0);
  }
  checkStreet(street) {
    this.street = (street.length > 0);
  }
  checkPostalCode(postalCode) {
    this.postalCode = (postalCode.length > 0);
  }
  checkCountry(country) {
    this.country = (country.length > 0);
  }
  checkCity(city) {
    this.city = (city.length > 0);
  }

  checkPhone(phone) {
    this.phone = (phone.length > 0);
  }
  checkEmail(email) {
    this.email = (this.validateEmail(email));
  }
  checkPassword(password) {
    if (password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)) {
      this.password = true;
      this.passwordValue = password;
    }else {
      this.password = false;
    }
  }
  checkPasswordVerify(passwordVerify) {
    console.log(passwordVerify);
    console.log(this.passwordValue);
    this.passwordVerify = (passwordVerify === this.passwordValue);
  }
  checkEULA(EULA) {
    this.EULA = (EULA.length > 0);
  }

  clickContinue(firstName, lastName, houseNumber, street, postalCode, city, country) {

    if (this.firstName && this.lastName && this.houseNumber && this.street && this.postalCode && this.country && this.city){
      this.firstAlertEnable = false;
      this.firstPartValues = {firstName: firstName, lastName: lastName, houseNumber: houseNumber, street: street,
        postalCode: postalCode, city: city, country: country};
      this.firstPart = false;
    }else {
      this.firstAlertEnable = true;
    }

  }

  clickRegister(email, phone, password) {
    if (this.password && this.passwordVerify && this.email && this.phone) {
      this.router.navigate(['registration-complete']);
      const user = new User(this.firstPartValues.firstName, this.firstPartValues.lastName, this.firstPartValues.houseNumber,
        this.firstPartValues.street, this.firstPartValues.postalCode, this.firstPartValues.city, this.firstPartValues.country,
        phone, email, password);
      this.regService.createUser(user).subscribe(response => console.log(response));
    }else {
    }
  }

  ngOnInit() {
  }

  validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
