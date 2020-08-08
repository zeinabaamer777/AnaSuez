import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/config/language';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/UserModel';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-sap-customer',
  templateUrl: './update-sap-customer.component.html',
  styleUrls: ['./update-sap-customer.component.css']
})
export class UpdateSapCustomerComponent implements OnInit {
   debugger 
    Mobile:string ;
    Email  :string;
    usermodel:UserModel;
    UpdateForm: FormGroup;

  constructor(private translate: TranslateService,public lang:Language,
    private router: Router, private _authService: AuthService, 
    private formBuilder: FormBuilder ) { }

  ngOnInit() {
    debugger 
    this.Mobile=localStorage.getItem("Mobile");
    this.Email =localStorage.getItem("Email");
    // Email  : localStorage.getItem("Email");
    this.UpdateForm = this.formBuilder.group({
      Id: [''],
      Username: [''],
      FirstName: [''],
      LastName: [''],
      Birthdate: [''],
      Email: [this.Email],
      Password: [''],
      DestinationId: [null],
      PasswordConf: [''],
      Gender: [1],
      Phone: [this.Mobile],
      Address: [''],
      PostalCode: [''],
      StreetName: [''],
      StreetNumber: [''],
      Region: [''],
      DateOfBirth: []
    });
  }
  Update()
  {
    debugger 
     
      this._authService.UpdateUser(this.UpdateForm.value).subscribe((res) => {
        Swal.fire("", this.translate.instant('message.Done') , 'success')
        .then((value) => {
          localStorage.setItem("Email",this.UpdateForm.value.Email)
          localStorage.setItem("Mobile",this.UpdateForm.value.Phone)

          //this.router.navigateByUrl('/login');
        });
      });
    
  }

}
