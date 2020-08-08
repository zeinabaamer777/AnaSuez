import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/ProductModel';
import { Language } from 'src/app/config/language';
import { Router, ActivatedRoute } from '@angular/router';
import { CityService } from 'src/app/services/city.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ProductTypeService } from 'src/app/services/product-type.service';
import { ProductTypeModel } from 'src/app/models/ProductTypeModel';
import { PlantService } from 'src/app/services/plant.service';
import { PLantModel } from 'src/app/models/PlantModel';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { FileModel } from 'src/app/models/FileModel';
import { UPLOAD_URL } from 'src/app/config/globals';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  // product: ProductModel;
  html: string = "";
  productForm: FormGroup;
  ptypes: ProductTypeModel[];
  plants: PLantModel[];
  myFile: FileModel;
  img_url: string = UPLOAD_URL;
  constructor(private translate: TranslateService, private _plantService: PlantService, private _ptypeService: ProductTypeService, private _productService: ProductService, private route: ActivatedRoute, private lang: Language, private router: Router, private _cityService: CityService, private formBuilder: FormBuilder) { }

  saveProduct() {
    if (this.productForm.valid) {
      this._productService.saveProduct(this.productForm.value, 
        this.productForm.controls["file"].value).subscribe((res) => {
        
        //this.translate.instant('messages.updateproduct')
        Swal.fire({
          title: '',
          text: res.Message,
          icon: 'success',
          showCancelButton: false,
          confirmButtonText: this.translate.instant('general.ok')
        }).then((result) => {
          this.router.navigateByUrl("/products");
        });

      });
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
      this.productForm.patchValue({
        file: this.myFile
      });
    }
  }

  ngOnInit() {
    this._ptypeService.loadProductTypes().subscribe((res) => {
      this.ptypes = res.ProductTypes as ProductTypeModel[];
    });

    this._plantService.loadPlants().subscribe((res) => {
      this.plants = res.Plants as PLantModel[];
    });

    this.route.params.subscribe(params => {
      if (params["id"]) {
        this._productService.productDetails(params["id"]).subscribe((res) => {
          this.productForm.patchValue(res.Product as ProductModel);
        });
      }

    });

    this.productForm = this.formBuilder.group({
      Id: [''],
      ProductName: [''],
      ProductNameAR: [''],
      ProductLabel: [''],
      ProductLabelAR: [''],
      ProductFooter: [''],
      ProductFooterAR: [''],
      ShortDescription: [''],
      ShortDescriptionAR: [''],
      LongDescription: [''],
      LongDescriptionAR: [''],
      Price: [''],
      FK_ProductType: [''],
      FK_PlantId: [''],
      IsActive: [''],
      file: [''],
      Image:['']


    });
  }

}
