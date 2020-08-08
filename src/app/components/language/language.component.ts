import { Component, OnInit, Inject } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { NotificationServiceService } from 'src/app/services/notification-service.service';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Language } from 'src/app/config/language';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  current_culture:string='';
  title = 'AnaSuezFE';
  cssUrl: string;
 
  constructor(private _cartService:CartService,
    private _notificatoinService: NotificationServiceService,
    @Inject(DOCUMENT) private document: Document,
    private lang:Language,public sanitizer: DomSanitizer, 
    private translate: TranslateService) {
    debugger;
    translate.setDefaultLang('en-US');
    let l_cul=localStorage.getItem('culture');
    if(l_cul)
    {
      translate.use(l_cul);
      this.useLanguage(l_cul);
      this.loadStyle(l_cul);
    }
    else
    {
      translate.use('en-US');
      this.useLanguage('en-US');
      this.loadStyle('en-US');
    }
    //translate.use('en-US');
   
    
    //
  }
  useLanguage(language: string, ) {
    this.lang.currentLanguage=language;
    this.translate.use(language);
  }

  loadStyle(styleName: string) {
    debugger;
    this.useLanguage(styleName);
    localStorage.setItem('culture',styleName);
    this.current_culture=styleName;
   
   // this.cssUrl =  'assets/css/'+styleName+'/bootstrap.css';
   this.document.getElementById('rtlstyle').setAttribute('href',
    'assets/css/'+styleName+'/bootstrap.css');
    // 'Portal/assets/css/'+styleName+'/bootstrap.css');
   
    if(styleName=='ar-EG')
    {
      this.document.dir='rtl';
    }
    else
    {
      this.document.dir='';
    }
    // const head = this.document.getElementsByTagName('head')[0];

    // let themeLink = this.document.getElementById(
    //   'client-theme'
    // ) as HTMLLinkElement;
    // if (themeLink) {
    //   themeLink.href = styleName;
    // } else {
    //   const style = this.document.createElement('link');
    //   style.id = 'client-theme';
    //   style.rel = 'stylesheet';
    //   style.href = `${styleName}`;

    //   head.appendChild(style);
    // }
    
    
  }


  ngOnInit() {
  }

}
