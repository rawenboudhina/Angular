import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatsComponent } from './plats/plats.component';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { FormsModule } from '@angular/forms';
import { UpdatePlatComponent } from './update-plat/update-plat.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParStyleComponent } from './recherche-par-style/recherche-par-style.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatsComponent,
    AddPlatComponent,
    UpdatePlatComponent,
    RechercheParStyleComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
