import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { PersefoneRouting } from './persefone.routing';
import { HeroComponent } from './hero/hero.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { InformationPersefoneComponent } from './information-persefone/information-persefone.component';
import { ContactComponent } from './contact/contact.component';
import { IndexPersefoneComponent } from './index-persefone/index-persefone.component';



@NgModule({
  declarations: [
    HeroComponent,
    AboutUsComponent,
    ProductsComponent,
    InformationPersefoneComponent,
    ContactComponent,
    IndexPersefoneComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PersefoneRouting)
  ],
  providers: [],
  bootstrap: [IndexPersefoneComponent]
})
export class PersefoneModule { }
