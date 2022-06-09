import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AddActionComponent } from './dashboard/action/add-action/add-action.component';
import { ListActionComponent } from './dashboard/action/list-action/list-action.component';
import { AddActiviteComponent } from './dashboard/activite/add-activite/add-activite.component';
import { ListActiviteComponent } from './dashboard/activite/list-activite/list-activite.component';
import { TodoActiviteComponent } from './dashboard/activite/todo-activite/todo-activite.component';
import { AddBestPracticeComponent } from './dashboard/bestPractice/add-best-practice/add-best-practice.component';
import { ListBestPracticeComponent } from './dashboard/bestPractice/list-best-practice/list-best-practice.component';
import { AddCasesComponent } from './dashboard/cases/add-cases/add-cases.component';
import { ListCasesComponent } from './dashboard/cases/list-cases/list-cases.component';
import { AddEtatComponent } from './dashboard/etat/add-etat/add-etat.component';
import { ListEtatComponent } from './dashboard/etat/list-etat/list-etat.component';
import { AddNodeComponent } from './dashboard/node/add-node/add-node.component';
import { ListNodeComponent } from './dashboard/node/list-node/list-node.component';
import { UpdateNodeComponent } from './dashboard/node/update-node/update-node.component';
import { AddServitiesComponent } from './dashboard/servities/add-servities/add-servities.component';
import { ListServitieComponent } from './dashboard/servities/list-servitie/list-servitie.component';
import { AddStatusComponent } from './dashboard/status/add-status/add-status.component';
import { ListStatusComponent } from './dashboard/status/list-status/list-status.component';

 //import { UserGuard } from './services/user.guard';


const routes: Routes = [
   
 {
   path:'',component:LoginComponent
 },
    
 {
  path:'register',component:RegisterComponent
},

 //nodes routing
 {path: "dashboard/list-node", component: ListNodeComponent},
 {path: "dashboard/ajout-node", component: AddNodeComponent},

  {path: "dashboard/edit-nodes/:id", component: UpdateNodeComponent},

   //etat routing
 {path: "dashboard/list-etat", component: ListEtatComponent},
 {path: "dashboard/ajout-etat", component: AddEtatComponent},


 
   //cases routing
   {path: "dashboard/list-cases", component: ListCasesComponent},
   {path: "dashboard/ajout-cases", component: AddCasesComponent},

      //action routing
      {path: "dashboard/list-action", component: ListActionComponent},
      {path: "dashboard/ajout-action", component: AddActionComponent},

      
      //status routing
      {path: "dashboard/list-status", component:ListStatusComponent },
      {path: "dashboard/ajout-status", component: AddStatusComponent},

            //sevirities routing
            {path: "dashboard/list-sevirities", component:ListServitieComponent },
            {path: "dashboard/ajout-sevirities", component: AddServitiesComponent},

              //best  routing
              {path: "dashboard/list-bestPractice", component:ListBestPracticeComponent },
              {path: "dashboard/ajout-bestPractice", component: AddBestPracticeComponent},
        
       //activite  routing
       {path: "dashboard/list-activite", component:ListActiviteComponent },
       {path: "dashboard/ajout-activite", component: AddActiviteComponent},
       {path: "dashboard/toDo-activite", component: TodoActiviteComponent},
 


      
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
