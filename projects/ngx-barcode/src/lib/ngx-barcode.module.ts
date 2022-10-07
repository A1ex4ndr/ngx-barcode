import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxBarcodeComponent } from './ngx-barcode.component';

@NgModule({
  imports: [],
  declarations: [
    NgxBarcodeComponent,

  ],
  exports: [
    NgxBarcodeComponent,
  ]
})
export class NgxBarcodeModule {
  static forRoot() {
    return {
      ngModule: NgxBarcodeModule,
      providers: []
    };
  }
}
