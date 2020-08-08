import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { CityModel } from 'src/app/models/CityModel';
import { CityService } from 'src/app/services/city.service';
import Swal from 'sweetalert2'
import { languageHelper } from 'src/app/Helpers/languageHelper';
import { Subject } from 'rxjs';
import { Language } from 'src/app/config/language';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  cities: CityModel[];
  parentSubject:Subject<any>;
  startDate;
  constructor(private translate: TranslateService,public lang:Language,
    private router: Router, private _authService: AuthService, 
    private _cityService: CityService, private formBuilder: FormBuilder) { }

  saveUser(form) {
    debugger
    if (this.registerForm.valid) {

      this._authService.Register(this.registerForm.value).subscribe((res) => {
        Swal.fire("", this.translate.instant('message.userCreated') , 'success')
        .then((value) => {
          this.router.navigateByUrl('/login');
        });
      });
    }
    
  }
  ngOnInit() {
  // this.startDate =today()// new Date().toISOString().slice(0, 16);

  this.startDate = new Date().toISOString().substring(0, 10);

    this._cityService.loadCities().subscribe((res) => {
      this.cities = res.cities;
      debugger;
    });
    this.registerForm = this.formBuilder.group({
      Id: [''],
      Username: [''],
      FirstName: [''],
      LastName: [''],
      Birthdate: [''],
      Email: [''],
      Password: [''],
      DestinationId: [null],
      PasswordConf: [''],
      Gender: [1],
      Phone: [''],
      Address: [''],
      PostalCode: [''],
      StreetName: [''],
      StreetNumber: [''],
      Region: [''],
      DateOfBirth: []
    });
  
  }

}
