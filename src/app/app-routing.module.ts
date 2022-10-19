import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { ProductPsComponent } from './views/product-ps/product-ps.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'playstation',
    component: ProductPsComponent
  },
  {
    path: 'contato',
    component:ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
