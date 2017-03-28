import { Component, OnInit } from '@angular/core';
import { SharedService } from "../_services/shared.service";
 
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styles: [] 
})
export class CurrencyComponent implements OnInit {
  
  id_currency: string = "";
  my_result: any;
  base_currency: string = "USD";
  currency_codes: Array<string>;
  constructor(public _sharedService: SharedService) {
  }
 
  ngOnInit() {
     this._sharedService.getCurrencyCodes()
     .subscribe(
         lstresult => {
             this.currency_codes = Object.keys(lstresult[Object.keys(lstresult)[2]]);
         },
         error => {
             console.log(error);
         }
     )
  }
 
  callCurrencyService() {  
    this._sharedService.getCurrencyExchRate(this.base_currency,this.id_currency.toUpperCase())
      .subscribe(
      lstresult => { 
                this.my_result = JSON.stringify(lstresult); 
      },
      error => {
        console.log("Error. The callCurrencyService result JSON value is as follows:");
        console.log(error);
      }
      ); 
  }
}