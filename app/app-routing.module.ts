import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { PlatGuard } from './plat.guard';
import { PlatsComponent } from './plats/plats.component';
import { RechercheParStyleComponent } from './recherche-par-style/recherche-par-style.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdatePlatComponent } from './update-plat/update-plat.component';



const routes: Routes = [
  {path: "plats", component : PlatsComponent},
  {path: "add-plat", component : AddPlatComponent, canActivate:[PlatGuard]},
  {path: "updatePlat/:id", component: UpdatePlatComponent},
  {path: "rechercheParStyle", component : RechercheParStyleComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "", redirectTo: "plats", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
