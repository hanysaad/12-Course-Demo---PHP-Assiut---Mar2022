import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/Admin/add-product/add-product.component';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderMasterComponent } from './Components/order-master/order-master.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';

const routes: Routes = [ // First-match wins
  {path:'', component: MainLayoutComponent, children:[
    {path:'', redirectTo:'/Home', pathMatch:'full'}, // Default path
    {path:'Home', component:HomeComponent},
    {path: 'Products', component:ProductsComponent},
    {path: 'Products/:pid', component: ProductDetailsComponent},
    {path: 'Order', component:OrderMasterComponent},
    {path:'NewProduct', component: AddProductComponent},
    {path:'EditProduct/:pid', component: AddProductComponent}
  ]},
  {path:'register', component:UserRegisterComponent},
  {path:'**', component: NotFoundComponent} // Wildcard path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
