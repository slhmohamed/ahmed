import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
   import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
  import { HeaderNavComponent } from './dashboard/header-nav/header-nav.component';
   import { AddNodeComponent } from './dashboard/node/add-node/add-node.component';
import { ListNodeComponent } from './dashboard/node/list-node/list-node.component';
import { UpdateNodeComponent } from './dashboard/node/update-node/update-node.component';
import { AddEtatComponent } from './dashboard/etat/add-etat/add-etat.component';
import { ListEtatComponent } from './dashboard/etat/list-etat/list-etat.component';
import { RegisterComponent } from './component/register/register.component';
import { AddActionComponent } from './dashboard/action/add-action/add-action.component';
import { ListActionComponent } from './dashboard/action/list-action/list-action.component';
import { AddCasesComponent } from './dashboard/cases/add-cases/add-cases.component';
import { ListCasesComponent } from './dashboard/cases/list-cases/list-cases.component';
import { AddStatusComponent } from './dashboard/status/add-status/add-status.component';
import { ListStatusComponent } from './dashboard/status/list-status/list-status.component';
import { AddServitiesComponent } from './dashboard/servities/add-servities/add-servities.component';
 import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { ListServitieComponent } from './dashboard/servities/list-servitie/list-servitie.component';
import { AddBestPracticeComponent } from './dashboard/bestPractice/add-best-practice/add-best-practice.component';
import { ListBestPracticeComponent } from './dashboard/bestPractice/list-best-practice/list-best-practice.component';
import { UpdateBestPracticeComponent } from './dashboard/bestPractice/update-best-practice/update-best-practice.component';
import { AddActiviteComponent } from './dashboard/activite/add-activite/add-activite.component';
import { UpdateActiviteComponent } from './dashboard/activite/update-activite/update-activite.component';
import { ListActiviteComponent } from './dashboard/activite/list-activite/list-activite.component';
 @NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderNavComponent,
   
        
       AddNodeComponent,
      ListNodeComponent,
      UpdateNodeComponent,
      AddEtatComponent,
      ListEtatComponent,
      RegisterComponent,
      AddActionComponent,
      ListActionComponent,
      AddCasesComponent,
      ListCasesComponent,
      AddStatusComponent,
      ListStatusComponent,
      AddServitiesComponent,
      ListServitieComponent,
      AddBestPracticeComponent,
      ListBestPracticeComponent,
      UpdateBestPracticeComponent,
      AddActiviteComponent,
      UpdateActiviteComponent,
      ListActiviteComponent
    

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(), // ToastrModule added
     NgxPaginationModule,


  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports:[NavbarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
