import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { ProductPsComponent } from './views/product-ps/product-ps.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'playstation',
    component: ProductPsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
