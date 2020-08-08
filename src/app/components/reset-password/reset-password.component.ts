import { Component, OnInit } from '@angular/core';
import { StaticListsService } from 'src/app/services/static-lists.service';
import { ResetModes } from 'src/app/models/ResetModes';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  modes: ResetModes[];
  selectedMode: number = 0;
  userInfo: string = "";
  constructor(private _listService: StaticListsService, private _authService: AuthService, private router: Router) { }

  reset() {
    this._authService.resetPassword(this.userInfo, this.selectedMode).subscribe((res) => {
      //redirect to change password
      this.router.navigateByUrl('/change-password');
    });
  }
  ngOnInit() {
    this._listService.loadReserModes().subscribe((res) => {
      this.modes = res.list as ResetModes[]; 
      debugger;
    });
  }

}
