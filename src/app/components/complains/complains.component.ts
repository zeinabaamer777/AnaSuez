import { Component, OnInit } from '@angular/core';
import { ComplainsModule } from 'src/app/models/complains/complains.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Language } from 'src/app/config/language';
import { ComplainsService } from 'src/app/services/complains.service';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { FileModel } from 'src/app/models/FileModel';
import { UPLOAD_URL } from 'src/app/config/globals';

@Component({
  selector: 'app-complains',
  templateUrl: './complains.component.html',
  styleUrls: ['./complains.component.css']
})
export class ComplainsComponent implements OnInit {
  clicked = false;
  ComplainsModule:ComplainsModule;
  ComplainForm:FormGroup;
  myFile: FileModel;
  img_url: string = UPLOAD_URL;
  constructor(private translate: TranslateService,
              private formbuilder:FormBuilder,
              private lang:Language,
              private _compainService:ComplainsService) { }

  ngOnInit() {
    this.ComplainForm =this.formbuilder.group({
      Id:[''],
      Title:[''],
      Description:[''],
      file: [''],
      Image:[''],
      Type:[1]
    })
  }
  actionMethod(event: any) {
    event.target.disabled = true;
}
  Add()
  {
    debugger
    //(event.target as HTMLButtonElement).disabled = true;

    if(this.ComplainForm.valid){
      this._compainService
          .Add(this.ComplainForm.value,this.ComplainForm.controls["file"].value)
          .subscribe(res=>{
        Swal.fire("", this.translate.instant('message.Done') , 'success')
        .then((value) => {
          this.ComplainForm =this.formbuilder.group({
            Id:[''],
            Title:[''],
            Description:[''],
            Type:[1]
          })
        });
      })
    }
    
  }
  uploadDocs(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.myFile = new FileModel();
      let files = event.target.files;
      let reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        this.myFile.FileContent = reader.result.toString().split(',')[1];
        this.myFile.FileName = event.target.files[0].name;
      }
      this.ComplainForm.patchValue({
        file: this.myFile
      });
    }
  }
}
