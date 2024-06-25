import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';

import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule),
  },
  {
    path:'dashboard',
    loadChildren: ()=>import('./pages/pages.module').then(m=>m.PagesModule),
    pathMatch:'full'
  },
  {
    path:'',
    redirectTo:'/auth',
    pathMatch:'full'
  },
  {path:'**', component:NopagefoundComponent},
];

@NgModule({
  //forRoot es para rutas principales
  imports: [RouterModule.forRoot(routes),
            PagesRoutingModule,
            AuthRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
